import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import {loginwithTwitter,logoutwithTwitter} from '/components/twitter';

const Home = () => 
{
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth
        //providers={['google', 'github', 'twitter','apple','facebook','twitch','spotify']}
        providers={['twitter']}  
        supabaseClient={supabase} 
        appearance={{ theme: ThemeSupa }} 
        theme="dark" 
        />
      ) : ( 
        <Account session={session} />
      )}
    </div>
  )
}

export default Home
