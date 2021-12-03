
const histories = localStorage.getItem('histories') ? JSON.parse(localStorage.getItem('histories')) : [];
localStorage.setItem('histories', JSON.stringify(histories))

const getCrypto = async (currency) => {
	const API_URL = `https://api.nomics.com/v1/currencies/ticker?key=539714791b99c02fc38f6a214d90ffb66f70bc00&interval=1d&per-page=200&page=1'}`;
	const response = await fetch(API_URL);
	if (!response.ok) {
		throw new Error (`An error occurred: ${response.status}`);
	}
	return response.json();
};

const makeSelectOptions = (cryptocurrencies) => {
	const options = cryptocurrencies.map(( cryptocurrency, index) => {
		return `<option value="${index}">${cryptocurrency.name}</option>`;
	});

	const selectCrypto = document.querySelector('#select-crypto');
	const optionsWithTitle = `<option selected>Choose Crypto currency</option>${options.join('')}`;
	selectCrypto.innerHTML = optionsWithTitle;
}

const calculateReturns = (currentPrice, cost, quantity) => {
	const returns = ((currentPrice * quantity) - (cost * quantity)).toFixed(2);
	const totalCost = cost * quantity;
	const total = (Number(totalCost) + Number(returns)).toFixed(2); 
	return {
		returns,
		totalCost,
		total
	}
}

const check = (cryptocurrencies, history = {}) => {

	const check = document.querySelector('.check');
	check.addEventListener('click', (event) => {
		event.preventDefault();
		display(cryptocurrencies, history)
	})
}

const display = (cryptocurrencies, history) => {
	const data = resolveData(cryptocurrencies, history);
	const view = makeView(data);

	const row = document.createElement('li')
	const list = document.querySelector('.list')
	row.innerHTML = view;
	insertAfter(row, list.childNodes[0].nextSibling)
}

const resolveData = (cryptocurrencies, history = {}) => {
	const selectedCryptoEl = document.querySelector('#select-crypto');
	const index = history.index ?? selectedCryptoEl.value;
	const cryptocurrency = cryptocurrencies[index]
    
	const price = cryptocurrency.price;

	const costInput = document.querySelector('.price');
	const cost = history.cost ?? costInput.value;

	const quantityInput = document.querySelector('.quantity');
	const quantity = history.quantity ?? quantityInput.value;
	const estimate = calculateReturns(price, cost, quantity);

	if(Object.entries(history).length === 0){
		store({index, quantity, cost})
	}
	
	costInput.value = "";
	quantityInput.value = "";

	return {
		cryptocurrency,
		estimate,
		index
	}
}

const makeView = (data) => `
		<li class="list__item">
			<div class="list__grid">
				<div class="media">
					<img class="avatar media__img" src="${data.cryptocurrency.logo_url}" />
					<div class="media__content">
						<div class="media__title">${data.cryptocurrency.currency}</div>
						<h5>${data.cryptocurrency.name}</h5>
					</div>
				</div>
				<div class="text--right">
					<div class="mt--8">
						<span class="text--dark">invested :</span>  <strong class="text--primary">$${data.estimate.totalCost}</strong>
					</div>
					<div class="mt--8 ${isGain(data.estimate.returns) ? 'text--success' : 'text--orange'}">
					${isGain(data.estimate.returns) ? 'gain' : 'loss'} :  <strong>$${Math.abs(data.estimate.returns)}</strong>
					</div>
					<div class="mt--8 text--dark">
					  Total: <strong>$${Math.abs(data.estimate.total)}</strong>
					</div>
				</div>
			</div>
		</li>
		`;

const insertAfter = (newNode, existingNode) => existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);

const store = (history) => {
	histories.push(history);
	localStorage.setItem('histories', JSON.stringify(histories));
}

const isGain = (returns) => {
	return Math.sign(returns) == 1 ? true : false; 
}

const init = async () => {
	const cryptocurrencies = await getCrypto();
	makeSelectOptions(cryptocurrencies);

	histories.forEach( history => display(cryptocurrencies, history));
	check(cryptocurrencies);
}

init();
