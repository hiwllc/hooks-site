const hooks = [
  'use-disclosure',
  'use-media-query',
  'use-copy-to-clipboard'
]

function App() {
  return (
    <main className="w-full h-dvh grid place-items-center bg-orange-50">
      <div className="flex gap-4 flex-col items-center text-center">
        <h2 className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">@uselessdev/hooks</h2>
        <pre className="text-sm bg-orange-100 py-1 px-2 rounded-md w-fit">
          npx @uselessdev/hooks add {hooks[Math.floor(Math.random() * hooks.length)]}
        </pre>
        <a href="https://github.com/uselessdev/hooks" className="text-sm font-medium text-orange-600 hover:text-orange-400">github.com/uselessdev/hooks</a>
      </div>
    </main>
  )
}

export default App
