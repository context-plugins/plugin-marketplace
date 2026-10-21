import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The feature category to which the feedback applies. These should be broad product areas such as
 * Announcements, Answers, Search, etc. rather than specific components or UI treatments within
 * those areas.
 */
export const Category = {
  Announcement: "ANNOUNCEMENT",
  Answers: "ANSWERS",
  Artifacts: "ARTIFACTS",
  Autocomplete: "AUTOCOMPLETE",
  Collections: "COLLECTIONS",
  Feed: "FEED",
  Search: "SEARCH",
  Chat: "CHAT",
  Ntp: "NTP",
  Workflows: "WORKFLOWS",
  Summary: "SUMMARY",
  General: "GENERAL",
  Prism: "PRISM",
  Prompts: "PROMPTS",
} as const;
export type Category = (typeof Category)[keyof typeof Category] | (string & {});

export const categorySchema: EnumSchema<Category> = s.enumOf<Category>(Category);
