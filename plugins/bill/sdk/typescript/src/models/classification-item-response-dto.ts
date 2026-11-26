import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { itemTypeResponseSchema, type ItemTypeResponse } from "./item-type-response.js";

/** CategoryItem response Dto. */
export type ClassificationItemResponseDto = {
  /** BILL-generated ID of the item. The value begins with `0ii`. */
  id?: string;
  type?: ItemTypeResponse;
  /** Item short name */
  shortName?: string;
  /** Item name */
  name?: string;
  /** Item description */
  description?: string;
  /** Set as `true` if the item is archived */
  archived?: boolean;
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
  /** Item tax percentage */
  percentage?: number;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classificationItemResponseDtoSchema: Schema<ClassificationItemResponseDto> =
  s.object<ClassificationItemResponseDto>(
    {
      id: s.optional(s.string()),
      type: s.optional(s.lazy(() => itemTypeResponseSchema)),
      shortName: s.optional(s.string()),
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      archived: s.optional(s.boolean()),
      parentId: s.optional(s.string()),
      price: s.optional(s.float64()),
      expenseChartOfAccountId: s.optional(s.string()),
      purchaseDescription: s.optional(s.string()),
      purchaseCost: s.optional(s.float64()),
      chartOfAccountId: s.optional(s.string()),
      taxable: s.optional(s.boolean()),
      percentage: s.optional(s.float64()),
      createdTime: s.optional(s.dateTime()),
      updatedTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
