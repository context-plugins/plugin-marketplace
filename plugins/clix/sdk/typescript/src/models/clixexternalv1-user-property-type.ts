import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Clixexternalv1UserPropertyType = {
  UserPropertyTypeString: "USER_PROPERTY_TYPE_STRING",
  UserPropertyTypeNumber: "USER_PROPERTY_TYPE_NUMBER",
  UserPropertyTypeBoolean: "USER_PROPERTY_TYPE_BOOLEAN",
} as const;
export type Clixexternalv1UserPropertyType =
  | (typeof Clixexternalv1UserPropertyType)[keyof typeof Clixexternalv1UserPropertyType]
  | (string & {});

export const clixexternalv1UserPropertyTypeSchema: EnumSchema<Clixexternalv1UserPropertyType> =
  s.enumOf<Clixexternalv1UserPropertyType>(Clixexternalv1UserPropertyType);
