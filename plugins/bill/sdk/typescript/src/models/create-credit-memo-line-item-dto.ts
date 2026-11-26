import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationsBillV3CreditMemosApiSchema,
  type ClassificationsBillV3CreditMemosApi,
} from "./classifications-bill-v3-credit-memos-api.js";

/** Credit Memo Create Request Line Item. */
export type CreateCreditMemoLineItemDto = {
  /** Credit memo line item description */
  description?: string;
  /**
   * Credit memo line item unit price. For a credit memo in an international currency (not USD),
   * this value is in the local currency.
   */
  price?: number;
  /** Credit memo line item unit quantity */
  quantity?: number;
  /**
   * Credit memo line item rate percent. Use `ratePercent` to apply a discount or markup in your
   * credit memo.
   *
   * BILL applies the `ratePercent` to the sum of the `amount` values of all the line items above
   * the `ratePercent` line item.
   *
   * **Note**: Use a separate line item to set a `ratePercent` for the credit memo. Set the
   * `ratePercent` line item as the final line item. Do not set `price` and `quantity` in the line
   * item when you set `ratePercent`.
   *
   * For example, let's say you have two line items in a credit memo with an `amount` sum of `$150`.
   * If you create a third line item with `ratePercent` set as `-10`, a 10% discount (`$15`) is
   * applied to the `amount` sum of `$150`.
   */
  ratePercent?: number;
  /** Set as `true` if the credit memo line item is taxable */
  taxable?: boolean;
  classifications?: ClassificationsBillV3CreditMemosApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createCreditMemoLineItemDtoProperties: s.Shape<CreateCreditMemoLineItemDto> = {
  description: s.optional(s.string()),
  price: s.optional(s.float64()),
  quantity: s.optional(s.float64()),
  ratePercent: s.optional(s.float64()),
  taxable: s.optional(s.boolean()),
  classifications: s.optional(s.lazy(() => classificationsBillV3CreditMemosApiSchema)),
};

export const createCreditMemoLineItemDtoInternalSchema: Schema<CreateCreditMemoLineItemDto> =
  s.object<CreateCreditMemoLineItemDto>(createCreditMemoLineItemDtoProperties, {
    additionalProperties: s.json(),
  });

export const createCreditMemoLineItemDtoSchema: Schema<CreateCreditMemoLineItemDto> = s.lazySchema(() =>
  s.object<CreateCreditMemoLineItemDto>(
    {
      ...createCreditMemoLineItemDtoProperties,
      ratePercent: s.optional(s.float64().check(s.gte(-100))),
    },
    { additionalProperties: s.json() },
  ),
);
