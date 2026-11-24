import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PrivacyStatus = {
  Public: "public",
  Unlisted: "unlisted",
  Private: "private",
} as const;
export type PrivacyStatus = (typeof PrivacyStatus)[keyof typeof PrivacyStatus] | (string & {});

export const privacyStatusSchema: EnumSchema<PrivacyStatus> = s.enumOf<PrivacyStatus>(PrivacyStatus);
