import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Role assigned to the API Credential on the product. */
export const ProductRole = {
  Admin: "admin",
  Editor: "editor",
  Reader: "reader",
  User: "user",
  Noaccess: "noaccess",
} as const;
export type ProductRole = (typeof ProductRole)[keyof typeof ProductRole] | (string & {});

export const productRoleSchema: EnumSchema<ProductRole> = s.enumOf<ProductRole>(ProductRole);
