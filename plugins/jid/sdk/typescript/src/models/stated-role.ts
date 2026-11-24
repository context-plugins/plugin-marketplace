import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatedRole = {
  Buyer: "buyer",
  Seller: "seller",
  Supplier: "supplier",
  Investor: "investor",
  Operator: "operator",
} as const;
export type StatedRole = (typeof StatedRole)[keyof typeof StatedRole] | (string & {});

export const statedRoleSchema: EnumSchema<StatedRole> = s.enumOf<StatedRole>(StatedRole);
