import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LdApiVersion = {
  Beta: "beta",
} as const;
export type LdApiVersion = (typeof LdApiVersion)[keyof typeof LdApiVersion] | (string & {});

export const ldApiVersionSchema: EnumSchema<LdApiVersion> = s.enumOf<LdApiVersion>(LdApiVersion);
