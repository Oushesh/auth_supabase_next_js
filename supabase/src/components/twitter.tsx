import {createClient} from '@supabase/supabase-js'
import { Session } from 'inspector';

//This goes into .env and is going to be read in here.
//NEXT_PUBLIC_SUPABASE_URL=https://djukyneaqsmfumhqqwrf.supabase.co
//NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqdWt5bmVhcXNtZnVtaHFxd3JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ3MjIzODMsImV4cCI6MTk5MDI5ODM4M30._7qcQrZliadVUklP1iae9pyVRBeq5zcgSIEpdzAyudw

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqdWt5bmVhcXNtZnVtaHFxd3JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ3MjIzODMsImV4cCI6MTk5MDI5ODM4M30._7qcQrZliadVUklP1iae9pyVRBeq5zcgSIEpdzAyudw"
const SUPABASE_URL = "https://djukyneaqsmfumhqqwrf.supabase.co"

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const  loginwithTwitter = async () =>
{
    const {user, session, error } = await supabase.auth.signIn
    (
        {
        //proider can be 'github', 'google', 'twitter', 'apple', 'facebook', 'twitch', 'spotify'
        provider: 'twitter' 
        }
    )
}
export default loginwithTwitter;

/*
function logoutwithTwitter()
{
    const {error} = await supabase.auth.signOut()
}
export default logoutwithTwitter;
//Connect all those components to a button or so then call this function.
//
*/