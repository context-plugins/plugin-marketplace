import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication method for Discover and Collect REST calls */
export const Authentication9 = {
  None: "none",
  Basic: "basic",
  BasicSecret: "basicSecret",
  Token: "token",
  TokenSecret: "tokenSecret",
} as const;
export type Authentication9 = (typeof Authentication9)[keyof typeof Authentication9] | (string & {});

export const authentication9Schema: EnumSchema<Authentication9> = s.enumOf<Authentication9>(Authentication9);
