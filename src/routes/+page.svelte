<script>
    import {base} from "$app/paths";

    import Image from '$lib/components/Image.svelte';

    const logoSource = `${base}/WD_Logo.png`;

</script>

<div class="holding_page_content">
    <Image
            src={logoSource}
            alt="Wallace Development Logo"
            className="center_image mx-auto w-auto"
    />
</div>

