import { Button, Text, TextInput } from '@mantine/core'
import React from 'react'

const ShortenForm = ({ originalUrl, setOriginalUrl, customUrl, setCustomUrl, title, setTitle, date, setDate, generateShortUrl }) => {
  return (
    <>
      <Text size='50px' mb={'lg'}>Shorten Your URL Here</Text>
        <TextInput 
            label="Original URL" 
            placeholder='Paste Your Original URL'
            onChange={(e) => setOriginalUrl(e.target.value)}
            value={originalUrl}
        />
        <TextInput 
            label="Customize Your Link (Optional)" 
            placeholder='Customize your link'
            onChange={(e) => setCustomUrl(e.target.value)}
            value={customUrl}
        />
        <TextInput 
            label="Title (Optional)" 
            placeholder='Enter your title'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />
        <TextInput 
            label="Date of Expiry (Optional)" 
            type='date'
            onChange={(e) => setDate(e.target.value)}
            value={date}
            />
        <Button
        onClick={() => generateShortUrl()}
            >
            Generate URL
            </Button>
    </>
  )
}

export default ShortenForm