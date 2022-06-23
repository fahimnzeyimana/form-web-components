const template = document.createElement('template');
template.innerHTML = `
    <style>
    *{
        font-family: sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-weight: 300;
        font-family: serif;
    }
    html, body{
        width: 100%;
        height: 100%;
    }
    a{
        color: #09757a;
    }
    .container{
        margin: 40px auto 0;
        width: 100%;
        max-width: 444px;
        padding: 40px;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 4px;
        display: flex;
        gap: 22px;
        flex-direction: column;
    }
    .signup-message{
        font-size: 1rem;
        line-height: 1.5rem;
        margin-bottom: 16px;
        flex-direction: row;
        
    }
    
    .container header{
        font-size: 2.5rem;
        line-height: 2.75rem;
        font-family: serif;
    }
    .container h1 svg{
        width: 120px;
    }
    .input-field, form .button{
        margin: 25px 0;
        position: relative;
        height: 50px;
        width: 100%;
    }
    .form-element{
        position: relative;
        height: 51px;
        width: 100%;
    }
    .input-field input{
        position: absolute;
        bottom: 0;
        height: 100%;
        width: 100%;
        padding-left: 10px;
        border: none;
        background-color: transparent;
        padding-top: 12px;
        outline-width: 0;
        outline-color: transparent;
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 4px;
    }
    input:focus{
        border: 1px solid #1da1f2;
    }
    .input-field label{
        position: absolute;
        opacity: 0.8;
        top: 50%;
        z-index: 1;
        left: 15px;
        transform: translate(10px, -50%);
        pointer-events: none;
        color: rgb(0, 0, 0);
        font-size: 16px;
        transition:  opacity .1s cubic-bezier(0, 0, 0, 0.3 ), transform .1s cubic-bezier(0, 0, 0, 0.3 );
    }
    input:focus ~ label,
    input:valid ~ label   {
        transform: translateY(-20px);
        background: white; 
        font-size:  13px;
        color: grey;
    }
   
    
    form .signin_button{
        margin-top: 30px;
        height: 40px;
        width: 100%;
        min-height: 40px;
        margin-bottom: 12px;
        background-color: rgba(0, 0, 0, 0.884);
        border-width: 0;
        color: #fff;
        font-size: 1rem;
        
    
    }
    .signin_button:hover{
        background-color: #5a5b5c;
    }
    form .without_button{
        height: 40px;
        width: 100%;
        min-height: 40px;
        color: rgb(0, 0, 0);
        font-size: 1rem;
        border: 2px solid black;
        background-color: white;
        
    }
    .without_button:hover{
        color: #09757a;
    }
    .form-footer--description{
        width: fit-content;
        margin: 8px auto;
    }
    .social-network{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
     }
     .social-network--item{
        width: 100%;
        max-width: calc(50% - 8px);
        padding-left: 5px;
        padding-right: 5px;
        height: 40px;
        background-color: transparent;
        border: 2px solid black;
        margin: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        
    }
    .social-network--item:hover svg, .social-network--item:hover span {
        fill: #09757a;
        color: #09757a;
    }
    
    .social-network--item span{
        font-size: 0.9rem;
        padding-left: 8px;
        font-weight: 600;
    }
    @media (max-width: 600px) { 
        .sign{
            border-width: 0;
            padding: 16px;
        } 
     }
    </style>
    <div class="input-tag">
    <div class="container">
        <h1 class="fahim"><svg viewBox="0 0 166 34" xmlns="http://www.w3.org/2000/svg"><path d="M32.937 1.554c-3.968-2.48-9.193-1.889-13.852 1.039C14.44-.335 9.213-.925 5.25 1.553c-6.27 3.919-7.032 14.01-1.701 22.54 3.93 6.289 10.074 9.974 15.544 9.906 5.47.068 11.615-3.617 15.545-9.906 5.324-8.53 4.568-18.621-1.701-22.54zM6.43 22.292a20.434 20.434 0 01-2.46-5.632 16.104 16.104 0 01-.534-5.31c.238-3.153 1.521-5.608 3.612-6.914s4.855-1.385 7.8-.217c.441.177.878.38 1.312.606a24.09 24.09 0 00-4.228 5.081C8.697 15.086 7.71 20.848 8.84 25.443a20.911 20.911 0 01-2.408-3.151zm27.786-5.634a20.482 20.482 0 01-2.46 5.632 21.1 21.1 0 01-2.408 3.158c1.01-4.12.324-9.165-2.153-13.897a.625.625 0 00-.895-.243l-7.72 4.823a.631.631 0 00-.2.87l1.133 1.811a.63.63 0 00.869.2l5.004-3.126c.162.486.324.971.445 1.457a16.1 16.1 0 01.536 5.303c-.238 3.151-1.521 5.606-3.612 6.914a7.06 7.06 0 01-3.579 1.036h-.16a7.051 7.051 0 01-3.578-1.036c-2.093-1.308-3.376-3.763-3.614-6.914a16.143 16.143 0 01.534-5.31 21.015 21.015 0 016.444-10.314 16.137 16.137 0 014.532-2.806c2.936-1.168 5.705-1.09 7.797.217 2.093 1.308 3.375 3.761 3.613 6.914a16.145 16.145 0 01-.528 5.311zm39.848-3.766c-4.06 0-7.34 3.169-7.34 7.2 0 4.004 3.28 7.121 7.34 7.121 4.086 0 7.366-3.112 7.366-7.12 0-4.03-3.275-7.2-7.366-7.2zm0 10.557c-1.871 0-3.295-1.513-3.295-3.384s1.424-3.407 3.295-3.407c1.898 0 3.322 1.54 3.322 3.412 0 1.87-1.424 3.385-3.322 3.385zM90.583 7.362h-7.468a.6.6 0 00-.61.612v18.208a.605.605 0 00.61.648h7.468c5.977 0 10.13-3.975 10.13-9.758 0-5.818-4.153-9.71-10.13-9.71zm.177 15.622h-4.087V11.198h4.087c3.308 0 5.588 2.474 5.588 5.866 0 3.336-2.28 5.92-5.588 5.92zm24.82-9.7h-2.809a.633.633 0 00-.582.612v.833c-.64-1.057-2.085-1.835-3.884-1.835-3.503 0-6.783 2.751-6.783 7.145 0 4.37 3.251 7.171 6.755 7.171 1.806 0 3.28-.777 3.92-1.834v.861a.587.587 0 00.582.585h2.808a.571.571 0 00.584-.585V13.896a.594.594 0 00-.592-.612zm-6.533 10.196c-1.86 0-3.256-1.43-3.256-3.412s1.397-3.41 3.256-3.41c1.86 0 3.257 1.426 3.257 3.408s-1.395 3.412-3.257 3.412zm22.294-16.118h-2.808a.592.592 0 00-.61.584v6.728c-.648-1.002-2.114-1.78-3.948-1.78-3.476 0-6.7 2.751-6.7 7.145 0 4.37 3.252 7.171 6.755 7.171 1.806 0 3.17-.777 3.92-1.834v.861c0 .322.261.583.583.585h2.808a.57.57 0 00.584-.585V7.95a.57.57 0 00-.584-.588zm-6.532 16.152c-1.852 0-3.237-1.444-3.237-3.448s1.39-3.447 3.237-3.447c1.846 0 3.237 1.444 3.237 3.447s-1.384 3.448-3.237 3.448zm22.29-16.152h-2.803a.594.594 0 00-.612.584v6.728c-.64-1.002-2.114-1.78-3.947-1.78-3.477 0-6.7 2.751-6.7 7.145 0 4.37 3.253 7.171 6.755 7.171 1.807 0 3.168-.777 3.92-1.834v.861a.587.587 0 00.584.585h2.803a.568.568 0 00.582-.585V7.95a.568.568 0 00-.582-.588zm-6.532 16.152c-1.853 0-3.237-1.444-3.237-3.448s1.39-3.447 3.237-3.447c1.846 0 3.237 1.444 3.237 3.447s-1.38 3.448-3.232 3.448zm21.906-9.283l-4.19 14.37c-.809 2.556-2.613 4.086-5.421 4.086-1.277 0-2.44-.261-3.35-.782-.531-.303-.971-.58-.971-1.023 0-.275.089-.417.25-.675l.832-1.246c.235-.348.408-.461.66-.461a.96.96 0 01.554.192c.523.339 1.008.63 1.748.63.864 0 1.524-.277 1.88-1.306l.36-1.193h-1.696c-.418 0-.648-.249-.751-.584l-3.75-12.008c-.14-.473-.011-.946.683-.946h2.954c.36 0 .613.123.771.64l2.77 9.67 2.589-9.67c.082-.334.306-.64.75-.64h2.802c.552-.001.719.387.526.946zm-96.806 4.274v7.676a.625.625 0 01-.635.634h-2.317a.623.623 0 01-.634-.634v-2.015c-1.472 1.858-4.03 3.028-6.924 3.028-5.434 0-9.681-4.088-9.681-9.908 0-6.048 4.585-10.217 10.377-10.217 4.276 0 7.694 1.839 9.212 5.537a.843.843 0 01.07.309c0 .175-.116.307-.486.435l-2.706 1.042a.694.694 0 01-.511.009.783.783 0 01-.324-.371c-.971-1.847-2.7-3.1-5.36-3.1-3.45 0-5.922 2.694-5.922 6.188 0 3.387 2.104 6.172 6.02 6.172 2.06 0 3.703-.97 4.469-2.037H57.87a.625.625 0 01-.634-.635v-2.086a.625.625 0 01.634-.634h7.161a.604.604 0 01.635.607zm96.882-8.063v-.186c0-.013.005-.026.013-.036a.052.052 0 01.034-.013h1.183c.013 0 .025.005.034.013.009.01.013.023.013.036v.186a.052.052 0 01-.013.034.047.047 0 01-.034.013h-.432v1.167a.05.05 0 01-.048.048h-.224a.044.044 0 01-.032-.014.047.047 0 01-.015-.034v-1.167h-.432a.044.044 0 01-.047-.047zm2.069-.193l.323.75.324-.75a.066.066 0 01.026-.032.087.087 0 01.044-.01h.375a.044.044 0 01.047.046v1.404a.044.044 0 01-.045.047h-.21a.047.047 0 01-.035-.013.042.042 0 01-.013-.034v-1.06l-.348.77a.084.084 0 01-.026.038.08.08 0 01-.043.01h-.172a.078.078 0 01-.042-.01.073.073 0 01-.026-.037l-.346-.77v1.06a.052.052 0 01-.013.033.052.052 0 01-.032.013h-.216a.042.042 0 01-.03-.013.042.042 0 01-.013-.034v-1.404a.044.044 0 01.047-.046h.364c.014 0 .029.003.042.01.009.009.015.02.018.032z"></path></svg></h1>
        <div class="all">
            <header><slot/></header>
            <p class="signup-message"></p>New to GoDaddy? <a href="">Create an Account</a></p>
        </div>
        <form >
            <div class="input-field">
                <input type="text" required>
                <label ><slot name="Email"/></label>
            </div>
            <div class="input-field">
                <input type="password" required>
                <label ><slot name="Password"/></label>
            </div>
            <div class="keep_signed_in">
                <input type="checkbox" >
                <span>Keep signed in on this device</span>
            </div>
            <div class="signin_btn" type="submit">
                <button id="toggle" class="signin_button" type="submit">Sign In</button>
                <button  class="signin_button" type="submit">Sign In</button>
                <button  class="without_button" type="submit">Login withount password</button>
            </div>
            
        </form>
        <div class="form-footer">
            <p class="form-footer--description">or sign in with</p>
            <div class="social-network">
                <button class="social-network--item">
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"/></svg>
                   <span>Facebook</span>
                </button>
                <button class="social-network--item">
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"/></svg>
                    <span>Google</span>
                </button>
                <!-- <button class="social-network--item">google</button> -->
            </div>
            <p class="form-footer--description">Need to find <a href="">your username</a> or <a href=""> your password</a>?</p>
        </div>
    </div> 
    </div>
 `;
class inputtag extends HTMLElement{
    constructor(){
        super();
        this.showInfo =true;
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.
            cloneNode(true));
        
        
        
    }
    toggleInfo(){
        this.showInfo= !this.showInfo;
        const info =this.shadowRoot.querySelector('.fahim');
        const togglebtn=this.shadowRoot.querySelector('#toggle');

        if(this.showInfo){
            info.style.display='block';
            togglebtn.innerText='Hide Logo';
        }else{
            info.style.display='none'
            togglebtn.innerText='Show Logo'
        }
    }
    connectedCallback(){
        this.shadowRoot.querySelector('#toggle').
        addEventListener('click',()=> this.toggleInfo());
    }
    disconnectedCallback(){
        this.shadowRoot.querySelector('#toggle').
        removeEventListener();
    }
    
}
customElements.define("input-tag",inputtag);