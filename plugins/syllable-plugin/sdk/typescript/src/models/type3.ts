import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * JMESPath expression language selector. Use with object form
 * {"type":"jp"|"jmespath","expression":"..."}.
 */
export const Type3 = {
  Jp: "jp",
  Jmespath: "jmespath",
} as const;
export type Type3 = (typeof Type3)[keyof typeof Type3] | (string & {});

export const type3Schema: EnumSchema<Type3> = s.enumOf<Type3>(Type3);
