<template>
	<section class="component-two">
		<div class="component__container">
			<div class="row no-gutters">
				<div class="component-two__header">
					<p class="header__title">Add Tags</p>
				</div>
				<div class="col-4">
					<div class="tags-counter">test tags ({{userTags.length}})</div>
				</div>
				<div class="col-4 dropdown__wrapper">
					<div class="dropdown-checkbox__container">
						<div class="dropdown">
							<p class="checkbox__opener" v-on:click="toggle()">+ Add more</p>
							<div ref="Dropdown" class="dropdown-content">
								<span class="button-close" v-on:click="toggle()">x</span>
								<input type="text" ref="input" id="input" v-on:keyup="filter()">
								<div class="list">
									<p class="input-select" v-on:click="checkAll()">
										Add all
										<label class="checkbox">
											<input type="checkbox" v-on:click="checkAll()">
											<span class="checkmark"></span>
										</label>
									</p>
									<p class="input-select" v-for="(tag,index) in userTags" :key="index">
										{{tag.title}}
										<label class="checkbox">
											<input type="checkbox" v-model="tags" :value="tag.title">
											<span class="checkmark"></span>
										</label>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-4"></div>
			</div>
		</div>
		<button class="submit-button btn btn-lrg" v-on:click="onClick()">Save</button>
	</section>
</template>

<script>
	export default {
		name: 'component-two',
		data() {
			return {
				isChecked: false,
				tags: [],
			}
		},
		props: {
			userTags: {
				type: Array,
				required: false
			},
			newUser: {
				type: Object,
				required: true
			}
		},
		methods: {
			onClick () {
				console.log(this.tags)
				this.$store.commit('addTags',this.tags)
				console.log(this.$store.state.newUser)
				this.$emit('prevSlide')
			},
			toggle() {
				this.$refs.Dropdown.classList.toggle("show")
				this.$el.querySelector('.checkbox__opener').classList.toggle("hide")
			},
			filter() {
				let input = this.$refs.input
				let filter = input.value.toUpperCase()
				let div = this.$refs.Dropdown
				let selections = div.getElementsByTagName("p")
				for (var i = 0; i < selections.length; i++) {
					let txtValue = selections[i].textContent || selections[i].innerText
					if (txtValue.toUpperCase().indexOf(filter) > -1) {
						selections[i].style.display = ""
					} else {
						selections[i].style.display = "none"
					}
				}
			},
			checkAll() {
				let checkboxes = this.$el.getElementsByTagName('input')
				this.isChecked = !this.isChecked
				for (var i = 0; i < checkboxes.length; i++) {
					checkboxes[i].checked = this.isChecked
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.component-two {
	background: white;
	padding: 3rem 18rem 6rem 18rem;
	position: relative;
	height: 100%;
	width: 100%;
	max-height: 100%;

	.component__container {
		position: relative;
		overflow: hidden;
		height: 100%;
		width: 100%;
		border: 1px solid #c2c2a3;
		border-bottom-right-radius: 6px;
		border-bottom-left-radius: 6px;
		border-top-right-radius: 6px;
		border-top-left-radius: 6px;

		.component-two__header {
			display: flex;
			align-items: center;
			justify-content: center;
			background: #f5f5f0;
			height: 50px;
			width: 100%;
			border-bottom: 1px solid #c2c2a3;

			.header__title {
				font-weight: bold;
				margin: 0;
			}	
		}

		.tags-counter {
			display: inline-block;
			background: #40bf80;
			padding: 0 15px 0 15px;
			border-radius: 5px;
		}

		.col-4 {
			width: 100%;
			height: 100%;
			padding: 1rem;
			padding-top: 2rem;
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

.dropdown-checkbox__container {
	width: 100%;
	height: 100%;
	position: relative;

	.dropdown {
		position: absolute;
		display: inline-block;


		.checkbox__opener {
			font-size: 16px;
			font-weight: bold;
			border: none;
			cursor: pointer;
		}

		.dropdown-content {
			display: none;
			position: absolute;
			background-color: white;
			min-width: 230px;
			z-index: 1;
			top: 0;
			left: 0;
			border-radius: 5px;

			.button-close {
				position: absolute;
				right: 5px;
				top: 0;
				cursor: pointer;
				display: block;
			}

			.list {
				height: 16rem;
				overflow-y: scroll;
				border-radius: 5px;
				background-color: #f6f6f6;
				border: 1px solid #ddd;

				.input-select {
					margin: 0;
					padding: 8px;
					cursor: pointer;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					position: relative;
				}

				.input-select:nth-child(1) {
					border-bottom: 1px solid #ddd;
				}

				.checkbox {
					display: block;
					position: absolute;
					padding-left: 20px;
					cursor: pointer;
					font-size: 22px;
					user-select: none;
					pointer-events: none;
					top: 20%;
					right: 5px;

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

			#input {
				border-box: box-sizing;
				font-size: 16px;
				padding: 0;
				width: 100%;
				border: none;
				border: 1px solid #ddd;
				border-radius: 5px;
			}
		}

		.show {
			display:block
		}	

		.hide {
			display: none;
		}
	}
}
</style>