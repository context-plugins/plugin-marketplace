import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  updateVendorCreditLineItemDtoInternalSchema,
  updateVendorCreditLineItemDtoSchema,
  type UpdateVendorCreditLineItemDto,
} from "./update-vendor-credit-line-item-dto.js";

/** Update a vendor credit */
export type UpdateVendorCreditRequestDto = {
  /** BILL-generated ID of the vendor. The value begins with `009`. */
  vendorId?: string;
  /** User-generated vendor credit number. This value can be in your chosen number scheme. */
  referenceNumber?: string;
  /** Vendor credit issued date. This value is in the `yyyy-MM-dd` format. */
  creditDate?: string;
  /** Vendor credit description */
  description?: string;
  /**
   * BILL-generated ID of the chart of accounts used when the vendor credit is applied to a bill
   * payment. The value begins with `0ca`.
   */
  applyToChartOfAccountId?: string;
  /**
   * BILL-generated ID of the bank account used when the vendor credit is applied to a bill payment.
   * The value begins with `bac`.
   *
   * **Note**: You can set only one of `applyToChartOfAccountId` or `applyToBankAccountId`.
   */
  applyToBankAccountId?: string;
  /** Vendor credit line item information */
  vendorCreditLineItems?: UpdateVendorCreditLineItemDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateVendorCreditRequestDtoProperties: s.Shape<UpdateVendorCreditRequestDto> = {
  vendorId: s.optional(s.string()),
  referenceNumber: s.optional(s.string()),
  creditDate: s.optional(s.dateOnly()),
  description: s.optional(s.string()),
  applyToChartOfAccountId: s.optional(s.string()),
  applyToBankAccountId: s.optional(s.string()),
  vendorCreditLineItems: s.optional(s.array(s.lazy(() => updateVendorCreditLineItemDtoInternalSchema))),
};

export const updateVendorCreditRequestDtoInternalSchema: Schema<UpdateVendorCreditRequestDto> =
  s.object<UpdateVendorCreditRequestDto>(updateVendorCreditRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const updateVendorCreditRequestDtoSchema: Schema<UpdateVendorCreditRequestDto> = s.lazySchema(() =>
  s.object<UpdateVendorCreditRequestDto>(
    {
      ...updateVendorCreditRequestDtoProperties,
      referenceNumber: s.optional(s.string().check(s.maxLength(100))),
      vendorCreditLineItems: s.optional(s.array(s.lazy(() => updateVendorCreditLineItemDtoSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
