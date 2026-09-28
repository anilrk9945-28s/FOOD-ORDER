import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nzxzumxleurxbmjfjmbx.supabase.co";
const supabaseKey = "sb_publishable_7EuDk2XGEhfgHJQfSBcgmw_djgR-C2-";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);