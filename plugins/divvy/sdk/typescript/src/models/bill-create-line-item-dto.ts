import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { classifications1Schema, type Classifications1 } from "./classifications1.js";

/** Line items that define a bill's overall amount. */
export type BillCreateLineItemDto = {
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

const billCreateLineItemDtoProperties: s.Shape<BillCreateLineItemDto> = {
  amount: s.optional(s.float64()),
  quantity: s.optional(s.float64()),
  price: s.optional(s.float64()),
  description: s.optional(s.string()),
  classifications: s.optional(s.lazy(() => classifications1Schema)),
};

export const billCreateLineItemDtoInternalSchema: Schema<BillCreateLineItemDto> =
  s.object<BillCreateLineItemDto>(billCreateLineItemDtoProperties, { additionalProperties: s.json() });

export const billCreateLineItemDtoSchema: Schema<BillCreateLineItemDto> = s.lazySchema(() =>
  s.object<BillCreateLineItemDto>(
    {
      ...billCreateLineItemDtoProperties,
      description: s.optional(s.string().check(s.maxLength(4000))),
    },
    { additionalProperties: s.json() },
  ),
);
