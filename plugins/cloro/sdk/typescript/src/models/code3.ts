import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Code3 = {
  MissingApiKey: "MISSING_API_KEY",
  InvalidApiKeyFormat: "INVALID_API_KEY_FORMAT",
  InvalidOrExpiredApiKey: "INVALID_OR_EXPIRED_API_KEY",
} as const;
export type Code3 = (typeof Code3)[keyof typeof Code3] | (string & {});

export const code3Schema: EnumSchema<Code3> = s.enumOf<Code3>(Code3);
