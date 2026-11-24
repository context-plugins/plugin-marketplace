import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** API level DTO for apply vendor credit to bill request item. */
export type BillVendorCreditRequestItemDto = {
  /**
   * BILL-generated ID of the vendor credit applied to the bill payment. The value begins with
   * `vcr`.
   */
  id: string;
  /** Credit amount */
  amount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const billVendorCreditRequestItemDtoProperties: s.Shape<BillVendorCreditRequestItemDto> = {
  id: s.string(),
  amount: s.float64(),
};

export const billVendorCreditRequestItemDtoInternalSchema: Schema<BillVendorCreditRequestItemDto> =
  s.object<BillVendorCreditRequestItemDto>(billVendorCreditRequestItemDtoProperties, {
    additionalProperties: s.json(),
  });

export const billVendorCreditRequestItemDtoSchema: Schema<BillVendorCreditRequestItemDto> = s.lazySchema(() =>
  s.object<BillVendorCreditRequestItemDto>(
    {
      ...billVendorCreditRequestItemDtoProperties,
      id: s.string().check(s.minLength(1)),
      amount: s.float64().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
