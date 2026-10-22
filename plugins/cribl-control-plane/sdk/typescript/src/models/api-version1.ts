import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** API version */
export const ApiVersion1 = {
  V1: "v1",
  V2: "v2",
} as const;
export type ApiVersion1 = (typeof ApiVersion1)[keyof typeof ApiVersion1] | (string & {});

export const apiVersion1Schema: EnumSchema<ApiVersion1> = s.enumOf<ApiVersion1>(ApiVersion1);
