import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PostExpandField = {
  Stats: "stats",
  FreeWebContent: "free_web_content",
  FreeEmailContent: "free_email_content",
  FreeRssContent: "free_rss_content",
  PremiumWebContent: "premium_web_content",
  PremiumEmailContent: "premium_email_content",
  Recipients: "recipients",
} as const;
export type PostExpandField = (typeof PostExpandField)[keyof typeof PostExpandField] | (string & {});

export const postExpandFieldSchema: EnumSchema<PostExpandField> = s.enumOf<PostExpandField>(PostExpandField);
