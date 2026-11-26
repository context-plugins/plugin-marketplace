import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  updateVendorCreditLineItemDtoInternalSchema,
  updateVendorCreditLineItemDtoSchema,
  type UpdateVendorCreditLineItemDto,
} from "./update-vendor-credit-line-item-dto.js";

/** Update VendorCredit with id request Dto. */
export type UpdateVendorCreditWithIdRequestDto = {
  /** BILL-generated ID of the vendor credit. The value begins with `vcr`. */
  id: string;
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

const updateVendorCreditWithIdRequestDtoProperties: s.Shape<UpdateVendorCreditWithIdRequestDto> = {
  id: s.string(),
  vendorId: s.optional(s.string()),
  referenceNumber: s.optional(s.string()),
  creditDate: s.optional(s.dateOnly()),
  description: s.optional(s.string()),
  applyToChartOfAccountId: s.optional(s.string()),
  applyToBankAccountId: s.optional(s.string()),
  vendorCreditLineItems: s.optional(s.array(s.lazy(() => updateVendorCreditLineItemDtoInternalSchema))),
};

export const updateVendorCreditWithIdRequestDtoInternalSchema: Schema<UpdateVendorCreditWithIdRequestDto> =
  s.object<UpdateVendorCreditWithIdRequestDto>(updateVendorCreditWithIdRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const updateVendorCreditWithIdRequestDtoSchema: Schema<UpdateVendorCreditWithIdRequestDto> =
  s.lazySchema(() =>
    s.object<UpdateVendorCreditWithIdRequestDto>(
      {
        ...updateVendorCreditWithIdRequestDtoProperties,
        id: s.string().check(s.minLength(1)),
        referenceNumber: s.optional(s.string().check(s.maxLength(100))),
        vendorCreditLineItems: s.optional(s.array(s.lazy(() => updateVendorCreditLineItemDtoSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
