import React, { useEffect } from 'react'
import { useState } from 'react'
import { Label, Textarea, Button } from 'flowbite-react'
import axios from 'axios'

export default function Home() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [typingIndex, setTypingIndex] = useState(0)
  const [fullAnswer, setFullAnswer] = useState('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    axios
    .post('http://localhost:4111/api/agents/recipeAgent/generate', {
      messages: [question]
    })
    .then(response => {
      console.log('回答:', response.data)
      const text = response.data.text
      setAnswer('')
      setFullAnswer(text)
      setTypingIndex(0)
    })
    .catch(error => {
      console.error('エラー:', error)
    })
  }

  useEffect(() => {
    if (typingIndex < fullAnswer.length) {
      const timeout = setTimeout(() => {
        setAnswer(prev => prev + fullAnswer.charAt(typingIndex))
        setTypingIndex(prev => prev + 1)
      }, 30) // 文字ごとの間隔（ミリ秒）

      return () => clearTimeout(timeout)
    }
  }, [typingIndex, fullAnswer])

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