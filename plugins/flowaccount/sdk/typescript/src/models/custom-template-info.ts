import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomTemplateInfo = {
  headerIndex?: string | null;
  productName?: string | null;
  includeTax?: string | null;
  isChooseDateColumn?: boolean;
  isChooseUnitPriceColumn?: boolean;
  columns?: Record<string, unknown>[] | null;
};

export const customTemplateInfoSchema: Schema<CustomTemplateInfo> = s.object<CustomTemplateInfo>({
  headerIndex: s.optionalNullable(s.string()),
  productName: s.optionalNullable(s.string()),
  includeTax: s.optionalNullable(s.string()),
  isChooseDateColumn: s.optional(s.boolean()),
  isChooseUnitPriceColumn: s.optional(s.boolean()),
  columns: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
});
