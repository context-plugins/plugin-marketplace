import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Configured receiver-authentication mode. */
export const Authentication = {
  None: "none",
  Bearer: "bearer",
  XApiKey: "x-api-key",
} as const;
export type Authentication = (typeof Authentication)[keyof typeof Authentication] | (string & {});

export const authenticationSchema: EnumSchema<Authentication> = s.enumOf<Authentication>(Authentication);
