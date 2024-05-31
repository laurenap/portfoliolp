import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        lauren pearson
      </h1>
      <p className="mb-4">
        {`Hey, I'm Lauren! 
        I'm a student at @UofT, currently interested in the technological acceleration of human potential. I'm also an avid public speaker 🗣️ and have spoken at numerous events, about my experience as a neurodivergent tech innovator. My research interests lie in exploring computational 💻applications within biotech 🧬 (especially within neurobiology 🔬, medical imaging & more). I'm also super passionate about artificial intelligence🤖 in medicine (esp. in 🎗️ oncology).
In the past, I explored using brain-computer 🖥️ interface technology to create strength-based autism ♾️ diagnostics, built machine learning  🧠 tumor classification models and consulted for companies like Walmart 🇨🇦 and the Mastercard Foundation. `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
