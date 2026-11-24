import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** describes how to access the document via public url (if published) */
export const Privacy = {
  Private: "private",
  SharedWithTeam: "shared with team",
  PublicViaLink: "public-via-link",
  Public: "public",
} as const;
export type Privacy = (typeof Privacy)[keyof typeof Privacy] | (string & {});

export const privacySchema: EnumSchema<Privacy> = s.enumOf<Privacy>(Privacy);
