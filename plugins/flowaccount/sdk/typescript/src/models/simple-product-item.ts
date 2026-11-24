import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SimpleProductItem = {
  type?: number;
  name?: string | null;
  description?: string | null;
  quantity?: number;
  unitName?: string | null;
  pricePerUnit?: number;
  total?: number;
  sellChartOfAccountCode?: string | null;
  buyChartOfAccountCode?: string | null;
  productCode?: string | null;
};

export const simpleProductItemSchema: Schema<SimpleProductItem> = s.object<SimpleProductItem>({
  type: s.optional(s.int()),
  name: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  quantity: s.optional(s.float64()),
  unitName: s.optionalNullable(s.string()),
  pricePerUnit: s.optional(s.float64()),
  total: s.optional(s.float64()),
  sellChartOfAccountCode: s.optionalNullable(s.string()),
  buyChartOfAccountCode: s.optionalNullable(s.string()),
  productCode: s.optionalNullable(s.string()),
});
