import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qtceobzprrdqafdfpmso.supabase.co";
const supabaseKey = "sb_publishable_LfSLGJwoFlRNsFRZm311jg_Ouxe0NxZ";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);