


		html {
			--black: #000;
			--white: #fff;
			--darkest: #101010;
			--darker: #16282A;
			--dark: #A4AFBF;
			--medium: #DFE7EF;
			--light: #DAD4F1;
			--lighter: #F5F8FC;
			--lightest: var(--white);
			
			--primary: #7B16FF;
			--primary-light: #DDD9FF;
			--primary-trans: rgba(123,22,255,0.4);
			
			--yellow: #FDCB6E;
			--orange: #E17055;
			--teal: #00CEC9;
			--green: #14c04d;
			
			--bg: var(--white);
			--color: var(--lightest);
			--surface: var(--darker);
		}
		
		*,*:before,*:after {
			padding: 0;
			margin: 0;
			box-sizing: border-box;
		}
		
		$states: (
			dark: var(--darkest),
			light: var(--lightest),
			// light-gradient: linear-gradient(to top, var(--light), var(--lightest)),
			medium: var(--medium),
			orange: var(--orange),
			primary: var(--primary),
			success: var(--green),
			teal: var(--teal),
			transparent: transparent,
			yellow: var(--yellow),
		);
		
		$spacing-unit: 0.8rem;
		
		$spacers: (
			2: $spacing-unit/4,
			4: $spacing-unit/2,
			8: $spacing-unit,
			16: $spacing-unit*2,
			24: $spacing-unit*3,
			32: $spacing-unit*4
		);
		
		html {
			font-size: 62.5%;
		}
		
		html,body {
			width: 100%;
			height: 100%;
		}
		
		body {
			background: var(--bg);
			color: var(--color);
			font-size: 1.6rem;
			font-family: 'Overpass Mono', system-ui;
		}
		
		h1,h2,h3,h4,h5,h6 {
			font-weight: 400;
			text-transform: uppercase;
			letter-spacing: 0.05em;
			margin-top: $spacing-unit;
			margin-bottom: $spacing-unit;
			font-family: 'Oswald', system-ui;
		}
		
		a {
			color: var(--primary);
			text-decoration: none;
			transition: all 110ms ease-out 0s;
			display: inline-block;
			border-radius: $spacing-unit/2;
			&:hover {
				background: var(--primary-trans);
				color: var(--primary-light);
				box-shadow: 0px 0px 0px $spacing-unit/2 var(--primary-trans);
			}
		}
		
		button, textarea, input, select {
			font-family: inherit;
			color: inherit;
			&:active, &:focus {
				outline: 0;
			}
		}
		
		button,select {
			cursor: pointer;
		}
		
		.container {
			width: 100%;
			max-width: 960px;
			margin: auto;
			padding: $spacing-unit*2 $spacing-unit*2 $spacing-unit*4;
		}
		
		.row {
			display: grid;
			grid-template-columns: 3fr;
			grid-column-gap: $spacing-unit*2;
			grid-row-gap: $spacing-unit*2;
			position: relative;
			@media screen and(max-width: 700px) {
				grid-template-columns: 1fr;
			}
		}
		
		.header {
			padding: $spacing-unit*2 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 2.2rem;
			position: relative;
			&:before {
				content: '';
				position: absolute;
				bottom: 0;
				right: 0;
				left: 0;
				height: $spacing-unit/4;
				background: var(--primary-trans);
			}
		}
		
		.card {
			border-radius: $spacing-unit;
			background: var(--white);
			width: 100%;
			margin-bottom: $spacing-unit*2;
			box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
			&__body, &__header {
				padding: $spacing-unit*3;
				@media screen and(max-width: 700px) {
					padding: $spacing-unit*1.5;
				}
			}
			&__header {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-bottom: 0;
				@media screen and(max-width: 700px) {
					flex-direction: column;
				}
			}
		}
		
		.logo {
			display: inline-block;
			width: 100%;
			max-width: $spacing-unit*16;
			user-select: none;
		}
		
		.list {
			margin: 0;
			padding: 0;
			list-style-type: none;
			&__item {
				padding: $spacing-unit*3;
				box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
			}
			&__grid {
				display: grid;
				grid-template-columns: $spacing-unit*8 3fr;
				grid-column-gap: $spacing-unit*3;
				@media screen and (max-width: 700px) {
					grid-template-columns: $spacing-unit*4 3fr;
					grid-column-gap: $spacing-unit;
				}
			}
		}
		
		.media {
				display: inline-flex;
			align-items: center;
			&__content {
				padding-left: $spacing-unit;
				color: var(--dark);
			}
			&__title {
				margin-bottom: $spacing-unit/2;
				@media screen and(max-width: 700px) {
					font-size: 1.4rem;
				}
			}
		}
		.avatar {
			$size: $spacing-unit*6;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: $size;
			height: $size;
			box-shadow: inset 0px 0px 0px 1px currentColor;
			border-radius: 50%;
			background: var(--lightest);
			color: var(--dark);
			@media screen and (max-width: 700px) {
				$size: $spacing-unit*4;
				width: $size;
				height: $size;
			}
			&--lg {
				$size: $spacing-unit*12;
				width: $size;
				height: $size;
			}
		}
		
		.button {
			display: inline-block;
			background: var(--dark);
			border: 0;
			border-radius: $spacing-unit/2;
			padding: $spacing-unit*1.5 $spacing-unit*2.5;
			transition: all 100ms ease-out 0s;
			&--block {
				display: block;
				width: 100%;
			}
			&:hover, &:focus {
				filter: brightness(0.9);
			}
			&:focus {
				box-shadow: 0px 0px 0px $spacing-unit/2 var(--primary-trans);
			}
			&:active {
				box-shadow: 0px 0px 0px $spacing-unit/2 var(--primary-trans), inset 0px 0px $spacing-unit rgba(black, 0.2);
				filter: brightness(0.8);
			}
		}
		
		.select, .investment, .quantity {
			background: transparent;
			padding: $spacing-unit*1.5;
			appearance: none;
			font-size: 1.4rem;
			border-color: rgba(white, 0.2);
			transition: all 120ms ease-out 0s;
			&:hover {
				background: var(--darkest);
			}
		}
		
		.investment, .quantity, .input-box .select {
			background: var(--white);
			border: 1px solid #f1d3f1;
			color: #444;
		}
		
		@each $key,$val in $states {
			.button--#{$key} {
				background: $val;
			}
		}
		
		.text--title {
			font-family: 'Oswald', system-ui;
		}
		
		.text {
			&--left {
				text-align: left;
			}
			&--center {
				text-align: center;
			}
			&--right {
				text-align: right;
			}
		}
		
		@each $key,$val in $states {
			.bg--#{$key} {
				background: $val !important;
			}
			.text--#{$key} {
				color: $val !important;
			}
		}
		
		.display--flex {
			display: flex;
		}
		
		$flex-directions: (center,flex-end,flex-start,space-between);
		
		@each $direction in $flex-directions {
			.align--#{$direction} {
				align-items: $direction;
			}
			.justify--#{$direction} {
				justify-content: $direction;
			}
		}
		
		.text--small {
			font-size: 1.4rem;
		}
		
		$directions: (
			l: left,
			r: right,
			b: bottom,
			t: top
		);
		
		@each $key,$val in $spacers {
			@each $abbr,$direction in $directions {
				.p#{$abbr}--#{$key} {
					padding-#{$direction}: $val;
				}
				.m#{$abbr}--#{$key} {
					margin-#{$direction}: $val;
				}
			}
		}