import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Schema3 = {
  UrnIetfParamsScimSchemasCore20Group: "urn:ietf:params:scim:schemas:core:2.0:Group",
} as const;
export type Schema3 = (typeof Schema3)[keyof typeof Schema3] | (string & {});

export const schema3Schema: EnumSchema<Schema3> = s.enumOf<Schema3>(Schema3);
