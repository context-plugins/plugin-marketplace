import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** API scheme derived from the node API TLS configuration. */
export const ApiScheme2 = {
  Http: "http",
  Https: "https",
} as const;
export type ApiScheme2 = (typeof ApiScheme2)[keyof typeof ApiScheme2] | (string & {});

export const apiScheme2Schema: EnumSchema<ApiScheme2> = s.enumOf<ApiScheme2>(ApiScheme2);
