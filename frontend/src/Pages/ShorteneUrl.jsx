import { Button, Center, CopyButton, Stack, Text, TextInput } from '@mantine/core'
import React, { useRef, useState } from 'react'
import Service from '../utils/http';
import { showNotification } from '@mantine/notifications';
import ShortenForm from '../Components/ShortenForm';
import { IconCopy } from '@tabler/icons-react';
import {QRCodeCanvas} from 'qrcode.react';

const ShorteneUrl = () => {

  const service = new Service();
  const [originalUrl, setOriginalUrl] = useState('');
  const [title, setTitle] = useState('');
  const [customUrl, setCustomUrl] = useState('');
  const [date, setDate] = useState('');
  const [urlData, setUrlData] = useState(null);
  const baseUrl = service.getBaseURL();
  const ref = useRef(null);


  const generateShortUrl = async () => {
      try {

        if(!originalUrl) {
          showNotification({
            title: "ERROR",
            message: "Please enter the original url",
            color: 'red'
          })
        }
        const response = await service.post('s', { originalUrl , customUrl });
        setUrlData(response);

      } catch (error) {
        console.error("Error ", error);
        
      }
  }

  return (
    <Center style={{ height: '80vh', }}>
        <Stack>
          {
            !urlData ? 
            <ShortenForm title={title} date={date} originalUrl={originalUrl} customUrl={customUrl} setCustomUrl={setCustomUrl} setDate={setDate} setOriginalUrl={setOriginalUrl} setTitle={setTitle} generateShortUrl={generateShortUrl}/> 
            : <>

              <TextInput ref={ref} value={`${baseUrl}/api/s/${urlData?.shortCode}`} 
              
                rightSection={
                  <CopyButton value={ref?.current?.value ?? ""}>
                  {({ copied, copy }) => (
                    <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
                      {copied ? 'Copied url' : 'Copy url'}
                                  </Button>
                    )}
                  </CopyButton>
                  }/>
                  <QRCodeCanvas value={`${baseUrl}/api/s/${urlData?.shortCode}`} />
            </>
            }

        </Stack>
    </Center>
  )
}

export default ShorteneUrl
