import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chartOfAccountCategorySchema, type ChartOfAccountCategory } from "./chart-of-account-category.js";

export type IChartOfAccount = {
  id?: number;
  /** 1 = Assets 2 = Liabilities 3 = Equity 4 = Revenue 5 = Expenses */
  category?: ChartOfAccountCategory;
  code?: string | null;
  nameLocal?: string | null;
  nameForeign?: string | null;
  descriptionLocal?: string | null;
  descriptionForeign?: string | null;
  parentId?: number | null;
  isFolder?: boolean;
  isBank?: boolean;
  isReceivable?: boolean;
  isDelete?: boolean;
  isLock?: boolean;
  createdon?: Date;
  modifiedon?: Date;
  modifiedby?: number;
  value?: number;
  left?: number;
  right?: number;
  isDefault?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iChartOfAccountSchema: Schema<IChartOfAccount> = s.object<IChartOfAccount>(
  {
    id: s.optional(s.int()),
    category: s.optional(s.lazy(() => chartOfAccountCategorySchema)),
    code: s.optionalNullable(s.string()),
    nameLocal: s.optionalNullable(s.string()),
    nameForeign: s.optionalNullable(s.string()),
    descriptionLocal: s.optionalNullable(s.string()),
    descriptionForeign: s.optionalNullable(s.string()),
    parentId: s.optionalNullable(s.int()),
    isFolder: s.optional(s.boolean()),
    isBank: s.optional(s.boolean()),
    isReceivable: s.optional(s.boolean()),
    isDelete: s.optional(s.boolean()),
    isLock: s.optional(s.boolean()),
    createdon: s.optional(s.dateTime()),
    modifiedon: s.optional(s.dateTime()),
    modifiedby: s.optional(s.int()),
    value: s.optional(s.float64()),
    left: s.optional(s.int()),
    right: s.optional(s.int()),
    isDefault: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
