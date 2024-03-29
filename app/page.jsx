import Feed from '@components/Feed';

const home = () => {
  return (
    <section className= "w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share 
        <br className="max-md : hidden" />
        <span className="orange_gradient text-center"> AI - Powered Prompts</span>
      </h1>
      <p className="desc text-center">Here is the best AI Prompts generating and sharing app where you can share and find the best prompts for the further work. Specially designed for the chat-GPT , Devin , Mid Journey</p>
      <Feed />
    </section>
  )
}

export default home