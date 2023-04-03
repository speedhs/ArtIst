import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';

import {preview} from '../assets';
import {getRandomPrompt} from '../utils';
import {FormField, Loader} from '../components'

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {}
  const handleChange = (e) => {}
  const handleSurpriseMe = () => {}
  
  
  return (
    <section className='max-w-7x1 mx-auto'>
      <div>
        <h1 className='font-extrabolda text-[32px]'>
          Create
        </h1>
        <p className='mt-2 tetx-[#666e75] text-[16px] max-w-[500px]'>
          Dall-E go brrr
        </p>
      </div>
      <form className='mt-16 max-w-3x1' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField
            LabelName = "Your name"
            type = "text"
            name = "name"
            placeholder = "John Doe"
            value = {form.name}
            handleChange = {handleChange}          
          />

          <FormField
            LabelName = "Prompt"
            type = "text"
            name = "prompt"
            placeholder = "a painting of a fox in the style of Starry Night"
            value = {form.prompt}
            handleChange = {handleChange}
            isSurpriseMe
            handleSurpriseMe= {handleSurpriseMe}          
          />

        </div>
      </form>
    </section>
 
    );
};

export default CreatePost;