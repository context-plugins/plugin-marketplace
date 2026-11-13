import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Schema6 = {
  UrnIetfParamsScimSchemasGrist10Role: "urn:ietf:params:scim:schemas:Grist:1.0:Role",
} as const;
export type Schema6 = (typeof Schema6)[keyof typeof Schema6] | (string & {});

export const schema6Schema: EnumSchema<Schema6> = s.enumOf<Schema6>(Schema6);
