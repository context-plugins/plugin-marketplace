import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. Error in the dependency. */
export const Error1 = {
  ErrorUnspecified: "ERROR_UNSPECIFIED",
  SupplierNotFound: "SUPPLIER_NOT_FOUND",
  SupplierRecreated: "SUPPLIER_RECREATED",
} as const;
export type Error1 = (typeof Error1)[keyof typeof Error1] | (string & {});

export const error1Schema: EnumSchema<Error1> = s.enumOf<Error1>(Error1);
