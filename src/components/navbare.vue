<template>
    <nav>
        <span>
            <router-link to="/">ايحي بست</router-link>
        </span>
        <span>
            <router-link to="/booking">الدفع</router-link>
        </span>
    </nav>
</template>

<style scoped lang="scss">
nav
{
    width:100%;
    padding:25px ;
    display:flex;
    align-items:center;
    justify-content: center;
    background:#7E0E68;
    span {
        a {
            text-transform: capitalize;
            text-decoration:none;
            color:white;
            font-size:20px;
            padding:0 15px;
            font-family: "Lato";
        }
        &:nth-child(1) a {
            border-left:1px solid white;
        }
    }
}
</style>