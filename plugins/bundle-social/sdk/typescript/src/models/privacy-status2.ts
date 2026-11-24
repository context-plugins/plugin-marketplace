import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The updated privacy status */
export const PrivacyStatus2 = {
  Public: "public",
  Unlisted: "unlisted",
  Private: "private",
} as const;
export type PrivacyStatus2 = (typeof PrivacyStatus2)[keyof typeof PrivacyStatus2] | (string & {});

export const privacyStatus2Schema: EnumSchema<PrivacyStatus2> = s.enumOf<PrivacyStatus2>(PrivacyStatus2);
