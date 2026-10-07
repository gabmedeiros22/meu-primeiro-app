// supabase-config.js
// A biblioteca do Supabase será importada no HTML. Aqui nós apenas a inicializamos.
const supabaseUrl = 'https://zgkixaelttyxpthwxixc.supabase.co';
const supabaseKey = 'sb_publishable_QfJqFVcLHstzj8cHne7GFw_51LmLtlF';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);
