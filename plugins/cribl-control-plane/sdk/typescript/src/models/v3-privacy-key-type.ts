import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select Manual to enter the key directly, or Secret to use a stored text secret */
export const V3PrivacyKeyType = {
  Manual: "manual",
  Secret: "secret",
} as const;
export type V3PrivacyKeyType = (typeof V3PrivacyKeyType)[keyof typeof V3PrivacyKeyType] | (string & {});

export const v3PrivacyKeyTypeSchema: EnumSchema<V3PrivacyKeyType> =
  s.enumOf<V3PrivacyKeyType>(V3PrivacyKeyType);
