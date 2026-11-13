import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Schema2 = {
  UrnIetfParamsScimApiMessages20SearchRequest: "urn:ietf:params:scim:api:messages:2.0:SearchRequest",
} as const;
export type Schema2 = (typeof Schema2)[keyof typeof Schema2] | (string & {});

export const schema2Schema: EnumSchema<Schema2> = s.enumOf<Schema2>(Schema2);
