<script context="module">
	export const prerender = true;

</script>

<script>
	import { onMount } from 'svelte';
	import AudioPlayer from '$lib/AudioPlayer.svelte';
	// import { base, assets } from '$app/paths';

	let audioTracks = [
		'white-noise-10min-v1.mp3'
	];

	onMount(async () => {
		// console.log(3);
		// console.log(audioTracks);
		// console.log(base + assets);
	});
</script>

<svelte:head>
	<title>DDFocus</title>
	<meta name="description" content="Concentration, meditation and breathing" />
</svelte:head>

<section>
	<h1>DDFocus</h1>

	<strong>
		<span>Concentration, meditation and breathing</span>
	</strong>
</section>

<section>

{#each audioTracks as src}
	<AudioPlayer {src} />
  {/each}

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
