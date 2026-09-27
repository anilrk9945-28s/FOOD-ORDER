import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tupfpeaqwouuqeaepnxd.supabase.co";
const supabaseKey = "sb_publishable_dDqwnifb3BkWQkp7TPL8Bg_eHbOzXy0";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);