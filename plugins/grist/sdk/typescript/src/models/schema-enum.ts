import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SchemaEnum = {
  UrnIetfParamsScimSchemasCore20User: "urn:ietf:params:scim:schemas:core:2.0:User",
} as const;
export type SchemaEnum = (typeof SchemaEnum)[keyof typeof SchemaEnum] | (string & {});

export const schemaEnumSchema: EnumSchema<SchemaEnum> = s.enumOf<SchemaEnum>(SchemaEnum);
