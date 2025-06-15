import { useState } from 'react'
import { Label, Textarea, Button } from 'flowbite-react'

export default function Home() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('質問:', question)
  }

  return (
    <>
      <div className='grid grid-cols-12 p-4 gap-4'>
        <div className='col-span-6 '>
          <h1 className='text-4xl font-bold mb-4'></h1>
          <div className='mb-2 block'>
            <Label htmlFor='comment' className='text-lg font-bold'>
              AIチャットボットに質問できます
            </Label>
          </div>
          <Textarea
            id='comment'
            placeholder='トマトソースを使ったレシピを教えてください。'
            required
            rows={20}
            value={question}
            onChange={e => setQuestion(e.target.value)}
          />
          <div className='mt-2 flex justify-center'>
            <Button onClick={onSubmit} disabled={!question.trim()} className='mt-2'>
              質問する
            </Button>
          </div>
        </div>
        <div className='col-span-6'>
          <div className='mb-2 block'>
            <div className='text-lg font-bold'>回答</div>
            <div>{answer}</div>
          </div>
        </div>
      </div>
    </>
  )
}