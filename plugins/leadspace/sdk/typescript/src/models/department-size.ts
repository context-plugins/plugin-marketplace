import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DepartmentSize = {
  hr?: number;
  sales?: number;
  mgmt?: number;
  productMgmt?: number;
  it?: number;
  administration?: number;
  marketing?: number;
  operations?: number;
  rnd?: number;
  businessDev?: number;
  finance?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const departmentSizeSchema: Schema<DepartmentSize> = s.object<DepartmentSize>(
  {
    hr: s.optional(s.float64()),
    sales: s.optional(s.float64()),
    mgmt: s.optional(s.float64()),
    productMgmt: s.optional(s.float64()),
    it: s.optional(s.float64()),
    administration: s.optional(s.float64()),
    marketing: s.optional(s.float64()),
    operations: s.optional(s.float64()),
    rnd: s.optional(s.float64()),
    businessDev: s.optional(s.float64()),
    finance: s.optional(s.float64()),
    _keysMap: {
      productMgmt: "product_mgmt",
      businessDev: "business_dev",
    },
  },
  { additionalProperties: s.json() },
);
