import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Configured receiver-authentication mode. The credential is never returned. */
export const Authentication1 = {
  None: "none",
  Bearer: "bearer",
  XApiKey: "x-api-key",
} as const;
export type Authentication1 = (typeof Authentication1)[keyof typeof Authentication1] | (string & {});

export const authentication1Schema: EnumSchema<Authentication1> = s.enumOf<Authentication1>(Authentication1);
