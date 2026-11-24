import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IsExpired = {
  On: "on",
  Off: "off",
  Both: "both",
} as const;
export type IsExpired = (typeof IsExpired)[keyof typeof IsExpired] | (string & {});

export const isExpiredSchema: EnumSchema<IsExpired> = s.enumOf<IsExpired>(IsExpired);
