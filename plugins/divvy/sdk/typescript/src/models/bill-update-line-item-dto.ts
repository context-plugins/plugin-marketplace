import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { classifications1Schema, type Classifications1 } from "./classifications1.js";

/** Line items that define a bill's overall amount. */
export type BillUpdateLineItemDto = {
  /** BILL-generated ID of the bill line item. The value begins with `bli`. */
  id: string;
  /**
   * Bill line item amount. For a bill in an international currency (not USD), this value is in the
   * local currency.
   *
   * If you set `amount`, `quantity`, and `price`, BILL uses the `amount` value as the bill line
   * item total amount.
   */
  amount?: number;
  /** Bill line item unit quantity */
  quantity?: number;
  /**
   * Bill line item unit price. For a bill in an international currency (not USD), this value is in
   * the local currency.
   */
  price?: number;
  /** Bill line item description */
  description?: string;
  classifications?: Classifications1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const billUpdateLineItemDtoProperties: s.Shape<BillUpdateLineItemDto> = {
  id: s.string(),
  amount: s.optional(s.float64()),
  quantity: s.optional(s.float64()),
  price: s.optional(s.float64()),
  description: s.optional(s.string()),
  classifications: s.optional(s.lazy(() => classifications1Schema)),
};

export const billUpdateLineItemDtoInternalSchema: Schema<BillUpdateLineItemDto> =
  s.object<BillUpdateLineItemDto>(billUpdateLineItemDtoProperties, { additionalProperties: s.json() });

export const billUpdateLineItemDtoSchema: Schema<BillUpdateLineItemDto> = s.lazySchema(() =>
  s.object<BillUpdateLineItemDto>(
    {
      ...billUpdateLineItemDtoProperties,
      id: s.string().check(s.minLength(1)),
      description: s.optional(s.string().check(s.maxLength(4000))),
    },
    { additionalProperties: s.json() },
  ),
);
