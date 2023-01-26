import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'
import {loginwithTwitter,logoutwithTwitter} from '/components/twitter';

import { Auth, Typography, Button } from '@supabase/ui'
import { createClient } from '@supabase/supabase-js'

/*
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
*/

const NEXT_PUBLIC_SUPABASE_URL = "https://djukyneaqsmfumhqqwrf.supabase.co"
const NEXT_PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqdWt5bmVhcXNtZnVtaHFxd3JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ3MjIzODMsImV4cCI6MTk5MDI5ODM4M30._7qcQrZliadVUklP1iae9pyVRBeq5zcgSIEpdzAyudw"

const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, 'PROJECT_ANON_KEY')

const Container = (props) => {
  const { user } = Auth.useUser()
  if (user)
    return (
      <>
        <Typography.Text>Signed in: {user.email}</Typography.Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    )
  return props.children
}

export default function AuthBasic() {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Container supabaseClient={supabase}>
        <Auth 
        supabaseClient={supabase} 
        providers={['google', 'facebook', 'github']} />
      </Container>
    </Auth.UserContextProvider>
  )
}