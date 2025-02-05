<script>
    import {base} from "$app/paths";

    import Image from '$lib/components/Image.svelte';

    const logoSource = `WD_Logo.png`;

</script>

<div class="holding_page_content">
    <Image
            src={logoSource}
            alt="Wallace Development Logo"
            className="site-logo-center"
    />
</div>

