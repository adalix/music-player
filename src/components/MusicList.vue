<template>
	<div class="relative">
		<table
			class="w-[1264px] text-sm text-left border border-gray-200 text-gray-500 mx-auto mt-12"
		>
			<thead class="text-xs text-gray-700 uppercase bg-gray-200">
				<tr class="border-y-2">
					<th class="px-4 py-3">Id</th>
					<th class="px-4 py-3">Sarkici</th>
					<th class="px-4 py-3">Sarki</th>
					<th class="px-4 py-3">Sure</th>
					<th class="px-4 py-3">Favori</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="song in songs" :key="song.id">
					<td class="px-4 py-3 font-medium text-gray-900">{{ song.id }}</td>
					<td class="px-4 py-3 font-medium text-gray-900">{{ song.artist }}</td>
					<td class="px-4 py-3">{{ song.song }}</td>
					<td class="px-4 py-3">{{ song.time }}</td>
					<td class="px-4 py-3">{{ song.isFav }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	setup() {
		const songs = [
			{
				id: 1,
				src: "/src/assets/Daft Punk - tecnology.mp3",
				artist: "Daft Funk",
				song: "Technology",
				time: 4.44,
				isFav: true,
			},
			{
				id: 2,
				src: "/src/assets/Hayko Cepkin - Gelin Olmus.mp3",
				artist: "Hayko Cepkin",
				song: "Gelin Olmus",
				time: 4.44,
				isFav: true,
			},
			{
				id: 3,
				src: "/src/assets/iio - is it love.mp3",
				artist: "Iio",
				song: "Is it love",
				time: 4.44,
				isFav: false,
			},
		];

		return { songs };
	},
};
</script>
