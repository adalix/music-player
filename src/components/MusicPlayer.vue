<template>
	<div class="w-[320px] h-[500px] relative">
		<div
			class="w-full h-full bg-gradient-to-t from-darkBlue via-lightBlue to-blueish absolute top-0 left-0 rounded-2xl shadow-xl"
		>
			<div class="text-white ml-[20px] mt-[290px]">
				<h2 class="mb-[10px] font-bold text-xl">beduk</h2>
				<h4 class="	">Koyver Kendini</h4>
			</div>
			<div class="flex items-center justify-center text-textColor mt-10 mb-4 ">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-6 h-6"
				>
					<path
						d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z"
					/>
				</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-6 h-6 mx-8"
					>
						<path
							fill-rule="evenodd"
							d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
							clip-rule="evenodd"
						/>
					</svg>
					<!-- <svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-6 h-6 mx-8"
					>
						<path
							fill-rule="evenodd"
							d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
							clip-rule="evenodd"
						/>
					</svg> -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-6 h-6"
				>
					<path
						d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z"
					/>
				</svg>
			</div>
			<div class="flex items-center mb-[10px]">
				<span class="text-textColor font-medium m-[10px]">0:00</span>
				<!-- <audio src=""></audio> -->
				<input
					type="range"
					value="0"
					class="w-full h-[6px] bg-barColor rounded-md cursor-pointer appearance-none"
				/>
				<span class="text-textColor font-medium m-[10px]">4:00</span>
			</div>
		</div>
		<img
			src="/src/assets/hayko cepkin-paranoya.jpeg"
			class="w-[320px] h-[320px] object-cover block rounded-t-2xl"
		/>
	</div>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>
