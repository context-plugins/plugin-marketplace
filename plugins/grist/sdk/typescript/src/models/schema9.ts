import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Schema9 = {
  UrnIetfParamsScimApiMessages20PatchOp: "urn:ietf:params:scim:api:messages:2.0:PatchOp",
} as const;
export type Schema9 = (typeof Schema9)[keyof typeof Schema9] | (string & {});

export const schema9Schema: EnumSchema<Schema9> = s.enumOf<Schema9>(Schema9);
