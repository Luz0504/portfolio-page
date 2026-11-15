import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY;

console.log("Supabase env check:", {
  hasUrl: Boolean(supabaseUrl),
  hasKey: Boolean(supabaseKey),
  urlPrefix: supabaseUrl?.slice(0, 15),
});

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Faltan las variables de entorno de Supabase");
}

export const supabase = createClient(supabaseUrl, supabaseKey);