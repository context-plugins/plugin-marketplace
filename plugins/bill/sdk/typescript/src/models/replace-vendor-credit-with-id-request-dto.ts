import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  replaceVendorCreditLineItemDtoSchema,
  type ReplaceVendorCreditLineItemDto,
} from "./replace-vendor-credit-line-item-dto.js";

/** Replace VendorCredit request Dto. */
export type ReplaceVendorCreditWithIdRequestDto = {
  /** BILL-generated ID of the vendor credit. The value begins with `vcr`. */
  id: string;
  /** BILL-generated ID of the vendor. The value begins with `009`. */
  vendorId: string;
  /** User-generated vendor credit number. This value can be in your chosen number scheme. */
  referenceNumber: string;
  /** Vendor credit issued date. This value is in the `yyyy-MM-dd` format. */
  creditDate: string;
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
  vendorCreditLineItems: ReplaceVendorCreditLineItemDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const replaceVendorCreditWithIdRequestDtoProperties: s.Shape<ReplaceVendorCreditWithIdRequestDto> = {
  id: s.string(),
  vendorId: s.string(),
  referenceNumber: s.string(),
  creditDate: s.dateOnly(),
  description: s.optional(s.string()),
  applyToChartOfAccountId: s.optional(s.string()),
  applyToBankAccountId: s.optional(s.string()),
  vendorCreditLineItems: s.array(s.lazy(() => replaceVendorCreditLineItemDtoSchema)),
};

export const replaceVendorCreditWithIdRequestDtoInternalSchema: Schema<ReplaceVendorCreditWithIdRequestDto> =
  s.object<ReplaceVendorCreditWithIdRequestDto>(replaceVendorCreditWithIdRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const replaceVendorCreditWithIdRequestDtoSchema: Schema<ReplaceVendorCreditWithIdRequestDto> =
  s.lazySchema(() =>
    s.object<ReplaceVendorCreditWithIdRequestDto>(
      {
        ...replaceVendorCreditWithIdRequestDtoProperties,
        id: s.string().check(s.minLength(1)),
        vendorId: s.string().check(s.minLength(1)),
        referenceNumber: s.string().check(s.minLength(1), s.maxLength(100)),
        vendorCreditLineItems: s
          .array(s.lazy(() => replaceVendorCreditLineItemDtoSchema))
          .check(s.minLength(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
