<script>
    import axios from 'axios'
    let quotes = []

    const fetchData = () => {
        axios.get('/api')
        .then(res => {
            console.log(res.data); // Check the structure of the response data
            console.log(Array.isArray(res.data)); // Check if it's an array

            quotes = Array.isArray(res.data) ? res.data : [res.data];
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    };
</script>

<title>Anime Quotes</title>

<h1>Random Anime Quote</h1>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="quote-container">
    {#each quotes as quote}
        <div class="quote-box">
            <div class="title"><h2>{quote.anime}</h2></div>
            <div class="quote"><span>{quote.name}</span>: {quote.quote}</div> 
        </div>
    {/each}
</div>
<div class="button-container">
    <button class="button" on:click={fetchData}>New Quote!</button>
</div>
<style>

    h1{
        text-align: center;
        font-size: 3rem;
        font-weight: 600;
        color: #eee;
    }

    .quote-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .quote-box {
        border-radius: 5px;
        padding: 4px;
        background-color: #241e20;
        margin: 10px 10px 10px 10px;
        color: #eee;
        width: 75%;
    }

    .quote-box span {
        font-size: 1.1em;
        font-weight: bold;
        font-style: italic;
        font-weight: 600;
    }

    .title h2{
        background-color: #856f77;
        border-radius: 5px;
        text-align: center;
        margin: 0;
        font-weight: 600;
    }

    .quote{
        margin-top: 5px;
        font-weight: 300;
    }
    
    .button-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;    
    }

    .button{
        margin-top:25px;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
        color: #eee;
        background-color: #856f77;
        border-radius: 2rem;
        border: 0;
        padding: 5px;
        cursor: pointer;
    }
</style>