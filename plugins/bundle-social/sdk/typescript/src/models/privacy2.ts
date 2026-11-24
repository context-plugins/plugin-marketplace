import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Privacy2 = {
  Private: "PRIVATE",
  Public: "PUBLIC",
  Unlisted: "UNLISTED",
} as const;
export type Privacy2 = (typeof Privacy2)[keyof typeof Privacy2] | (string & {});

export const privacy2Schema: EnumSchema<Privacy2> = s.enumOf<Privacy2>(Privacy2);
