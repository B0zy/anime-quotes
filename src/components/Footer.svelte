<script>
    const githubLogoPath = '/github-logo.svg'
</script>

<!-- Footer.svelte -->
<footer class="footer">
    <!-- svelte-ignore a11y-missing-attribute -->
    <p>  <a href="https://github.com/B0zy"><i class="fab fa-github" style='font-size:21px'></i></a>
        © Boz 2023</p> 
  </footer>
  
<style>
    .footer {
      position: absolute;
      bottom: 0;
      left: 0; /* Ensure the footer is aligned to the left edge */
      right: 0; /* Ensure the footer is aligned to the right edge */
      background-color: #856f77;
      padding: 1px;
      text-align: center;
      margin: 0; /* Reset margin */
      color: #eee;
    }

    *{
        margin: 0;
        padding: 0;
    }

    i {
        padding-right: 5px;
        color: white;
    }

    i:hover {
    color: #AEC6CF;
    transition: 0.4s;
    cursor: pointer;
    }
 
    /* Reset default margin and padding for the body element */

  </style>
  