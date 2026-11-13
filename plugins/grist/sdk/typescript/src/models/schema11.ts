import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Schema11 = {
  UrnIetfParamsScimApiMessages20BulkRequest: "urn:ietf:params:scim:api:messages:2.0:BulkRequest",
} as const;
export type Schema11 = (typeof Schema11)[keyof typeof Schema11] | (string & {});

export const schema11Schema: EnumSchema<Schema11> = s.enumOf<Schema11>(Schema11);
