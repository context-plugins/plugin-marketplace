import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stable machine code; branch on this, never on `message`. */
export const Code4 = {
  MissingApiKey: "missing_api_key",
  InvalidApiKey: "invalid_api_key",
  RevokedApiKey: "revoked_api_key",
  ExpiredApiKey: "expired_api_key",
  PausedApiKey: "paused_api_key",
} as const;
export type Code4 = (typeof Code4)[keyof typeof Code4] | (string & {});

export const code4Schema: EnumSchema<Code4> = s.enumOf<Code4>(Code4);
