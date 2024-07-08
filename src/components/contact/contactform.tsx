import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

interface FormData {
  email: string;
  message: string;
}

const FormContact: React.FC = () => {
  const [state, handleSubmit] = useForm("mqazkjpl");

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label htmlFor="email" className="text-accent-foreground "> Adresse Email</label>
      <input id="email" type="email" name="email" className='inputColor' />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message" className="text-accent-foreground ">Message</label>
      <textarea id="message" name="message" className='inputColor'/>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button className='bg-[#d5d5d5] hover:bg-[#FF6F00] text-primary-foreground ' type="submit" disabled={state.submitting}>
        Envoyer
      </button>

      {state.succeeded && <p className="text-[#388e3c]">Merci!</p>}
    </form>
  );
};

export default FormContact;