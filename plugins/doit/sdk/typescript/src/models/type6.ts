import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Connected cloud account type. */
export const Type6 = {
  Aws: "AWS",
  Gcp: "GCP",
  Azure: "AZURE",
} as const;
export type Type6 = (typeof Type6)[keyof typeof Type6] | (string & {});

export const type6Schema: EnumSchema<Type6> = s.enumOf<Type6>(Type6);
