import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://uhcvtjeoxpjzngfffyte.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoY3Z0amVveHBqem5nZmZmeXRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1ODI2NDksImV4cCI6MjAyMjE1ODY0OX0.WWG2uSrDBPOTysCICfou7-alR3EksPFMTs7cDdkXlXw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
