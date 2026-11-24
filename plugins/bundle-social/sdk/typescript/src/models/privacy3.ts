import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Privacy3 = {
  Public: "PUBLIC",
  Unlisted: "UNLISTED",
  Private: "PRIVATE",
  Direct: "DIRECT",
} as const;
export type Privacy3 = (typeof Privacy3)[keyof typeof Privacy3] | (string & {});

export const privacy3Schema: EnumSchema<Privacy3> = s.enumOf<Privacy3>(Privacy3);
