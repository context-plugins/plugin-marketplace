import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Hdyhau = {
  Friend: "friend",
  SocialMedia: "social_media",
  AiChatbot: "ai_chatbot",
  SearchEngine: "search_engine",
  AppStore: "app_store",
  Other: "other",
} as const;
export type Hdyhau = (typeof Hdyhau)[keyof typeof Hdyhau] | (string & {});

export const hdyhauSchema: EnumSchema<Hdyhau> = s.enumOf<Hdyhau>(Hdyhau);
