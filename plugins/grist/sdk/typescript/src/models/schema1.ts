import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Schema1 = {
  UrnIetfParamsScimApiMessages20ListResponse: "urn:ietf:params:scim:api:messages:2.0:ListResponse",
} as const;
export type Schema1 = (typeof Schema1)[keyof typeof Schema1] | (string & {});

export const schema1Schema: EnumSchema<Schema1> = s.enumOf<Schema1>(Schema1);
