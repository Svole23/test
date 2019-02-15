<template>
	<section class="component-one">
		<div class="component-one__pagination">
			<div class="pagination">
				<div class="pagination__circle-one">
					<span class="pagination__circle-number">1</span>
				</div>
				<p class="pagination-text">Basic User Settings</p>
			</div>
			<div class="pagination">
				<div class="pagination__circle-two">
					<span class="pagination__circle-number">2</span>
				</div>
				<p class="pagination-text">Tags</p>
			</div>
		</div>
		<form class="component-one__form">
			<div class="component-one__interface row">
				<div class="col-4">
					<div class="interface__settings">
						<div class="settings__text-container">
							<span class="text-big">Main User Settings</span>
							<span class="text-small">Set the main user settings</span>
						</div>
						<div class="interface__inputs-form">
							<div class="input">
								<p class="name__title">First Name:</p>
								<input 
								v-model="newUser.first_name"
								type="text" 
								class="form-control"
								name="firstname"
								v-validate="{required: true}" >
								<span class="error-span">{{ errors.first('firstname') }}</span>
							</div>
							<div class="input">
								<p class="name__title">Last Name:</p>
								<input 
								v-model="newUser.last_name"
								type="text" 
								class="form-control" 
								name="lastname"
								v-validate="{required: true}" >
								<span class="error-span">{{ errors.first('lastname') }}</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-4">
					<div class="interface__settings">
						<div class="settings__text-container">
							<span class="text-big">Main User Settings</span>
							<span class="text-small">Set the user email</span>
						</div>
						<div class="interface__inputs-form">
							<div class="input">
								<p class="name__title">Email:</p>
								<input 
								v-model="newUser.email"
								type="text" 
								class="form-control" 
								name="email"
								v-validate="{required: true, email: true}">
								<span class="error-span">{{ errors.first('email') }}</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-4">
					<div class="interface__settings">
						<div class="settings__text-container">
							<span class="text-big">Main User Settings</span>
							<span class="text-small">User login settings</span>
						</div>
						<div class="interface__inputs-form">
							<div class="input">
								<p class="name__title">Username:</p>
								<input 
								v-model="newUser.username"
								type="text" 
								class="form-control" 
								name="username"
								v-validate="{required: true}"
								>
								<span class="error-span">{{ errors.first('username') }}</span>
							</div>
							<div class="input">
								<p class="name__title">Password:</p>
								<input 
								v-model="newUser.password"
								type="password" 
								class="form-control" 
								name="password"
								v-validate="{ required: true, min: 6 }">
								<span class="error-span">{{ errors.first('password') }}</span>
								<div class="checkbox-container">
									<label class="checkbox" @click="random()">
										<input type="checkbox">
										<span class="checkmark"></span>
										<p class="checkbox-text">Add random password to user and send it on email,including a little welcome message</p>
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
		<button class="submit-button btn btn-lrg"
		@click.prevent="onClick()"
		>Next</button>
	</section>
</template>

<script>

	export default {
		name: 'component-one',
		data () {
			return {
				randomPassword: null,
				newUser: {
					first_name: '',
					last_name: '',
					email: '',
					username: '',
					password: '',
				},

			}
		},
		inject: {
			$validator: '$validator'
		},
		methods: {
			onClick () {
				this.$validator.validateAll().then((result) => {
					if(!result){
						console.log('error')
						return
					}
					this.$emit('nextSlide')
					this.$store.commit('setNewUser',this.newUser)
					console.log(this.newUser)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.component-one {
	background: white;
	padding: 1rem 2rem 2rem 4rem;
	position: relative;
	height: 100%;
	max-height: 100%;

	.component-one__pagination {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 2rem 25% 0 25%;

		&:after {
			content: '';
			height: 2px;
			background: gray;
			width: 45%;
			top: 45%;
			left: 30%;
			position: absolute;

		}

		.pagination {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.pagination-text {
				font-size: 12px;
				padding-top: 10px;
			}

			.pagination__circle-one, .pagination__circle-two {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				border: 2px solid #6600ff;
				display: flex;
				background: white;
				justify-content: center;
				align-items: center;
				position: relative;
				z-index: 2;

				.pagination__circle-number {
					font-weight: bold;
					font-size: 18px;
				}
			}

			.pagination__circle-one {
				box-shadow: - 2px 5px 6px #e0e0d1;
			}

			.pagination__circle-two {
				border: 2px solid black;
			}
		}

		.pagination:nth-child(1) {
			
			.pagination-text {
				font-weight: bold;
			}
		}
	}
	.component-one__form {
		padding-top: 1rem;

		.component-one__interface {
		}
	}

	.submit-button {
		position: absolute;
		right: 2rem;
		bottom: 2rem;
		color: white;
		background: #6600ff;

	}
}

.interface__settings {
	display: flex;
	flex-direction: column;

	.settings__text-container {

		.text-big {
			font-weight: bold;
			display: block;
		}

		.text-small {
			font-size: 14px;
			color: gray;
			position: relative;
			opacity: 0.7;

			&:after {
				content: '';
				height: 1px;
				width: 170px;
				background: gray;
				position: absolute;
				left: 0;
				bottom: - 3px;
			}
		}
	}

	.interface__inputs-form {
		padding-top: 1.5rem;

		.input {
			margin-bottom: 1rem;

			.error-span {
				font-size: 12px;
				color: red;
			}

			.name__title {
				margin: 0;
				font-weight: bold;
			}

			.password {
				background: #e0e0d1;
			}

			.checkbox-container {
				display: flex;
				flex-direction: row;
				padding-top: 1rem;

				.checkbox {
					display: block;
					position: relative;
					padding-left: 20px;
					margin-bottom: 12px;
					cursor: pointer;
					font-size: 22px;
					user-select: none;
					pointer-events: none;

					input {
						position: absolute;
						opacity: 0;
						cursor: pointer;
						height: 0;
						width: 0;

						&:checked ~ .checkmark:after {
							display: block;
						}

						&:checked ~ .checkmark {
							background-color: #6600ff;
						}
					}

					.checkmark {
						position: absolute;
						top: 05px;
						left: 0;
						height: 17px;
						width: 17px;
						background-color: #eee;
						pointer-events: all;

						&:after {
							left: 5px;
							top: 0;
							width: 8px;
							height: 12px;
							border: solid white;
							border-width: 0 3px 3px 0;
							transform: rotate(40deg);
						}
					}

					:after {
						content: "";
						position: absolute;
						display: none;
					}

					.checkbox-text {
						font-size: 14px;
						color: gray;
						padding-left: 5px;
						padding-right: 1rem;
						width: 65%;
					}
				}				
			}
		}
	}
}
</style>