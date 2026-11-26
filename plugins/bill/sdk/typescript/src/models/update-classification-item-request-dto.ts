import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { itemTypeRequestSchema, type ItemTypeRequest } from "./item-type-request.js";

/** Update an item (percentage updated) */
export type UpdateClassificationItemRequestDto = {
  type?: ItemTypeRequest;
  /** Item short name */
  shortName?: string;
  /** Item name */
  name?: string;
  /** Item description */
  description?: string;
  /**
   * BILL-generated ID of the parent item. You can set this field if this item is a child object.
   */
  parentId?: string;
  /** Item price */
  price?: number;
  /**
   * BILL-generated ID of the chart of accounts for the item when it is used for bills or purchases
   * in your accounting system. The value begins with `0ca`.
   */
  expenseChartOfAccountId?: string;
  /** Item description when it is used for bills or purchases in your accounting system */
  purchaseDescription?: string;
  /** Item purchase cost set in your accounting system */
  purchaseCost?: number;
  /** BILL-generated ID of the chart of accounts for the item. The value begins with `0ca`. */
  chartOfAccountId?: string;
  /** Set as `true` if the item is taxable */
  taxable?: boolean;
  /**
   * Item tax percentage. You can set this field for a set of item `type` values.
   * * `DISCOUNT`
   * * `SALES_TAX`
   * * `OTHER_CHARGE`
   */
  percentage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateClassificationItemRequestDtoSchema: Schema<UpdateClassificationItemRequestDto> =
  s.object<UpdateClassificationItemRequestDto>(
    {
      type: s.optional(s.lazy(() => itemTypeRequestSchema)),
      shortName: s.optional(s.string()),
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      parentId: s.optional(s.string()),
      price: s.optional(s.float64()),
      expenseChartOfAccountId: s.optional(s.string()),
      purchaseDescription: s.optional(s.string()),
      purchaseCost: s.optional(s.float64()),
      chartOfAccountId: s.optional(s.string()),
      taxable: s.optional(s.boolean()),
      percentage: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
