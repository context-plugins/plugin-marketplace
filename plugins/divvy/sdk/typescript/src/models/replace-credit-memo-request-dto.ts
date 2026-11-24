import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classifications1BillV3CreditMemosApiSchema,
  type Classifications1BillV3CreditMemosApi,
} from "./classifications1-bill-v3-credit-memos-api.js";
import {
  replaceCreditMemoLineItemDtoInternalSchema,
  replaceCreditMemoLineItemDtoSchema,
  type ReplaceCreditMemoLineItemDto,
} from "./replace-credit-memo-line-item-dto.js";

/** Replace a credit memo */
export type ReplaceCreditMemoRequestDto = {
  /** BILL-generated ID of the customer. The value begins with `0cu`. */
  customerId: string;
  /** User-generated credit memo number. This value can be in your chosen number scheme. */
  referenceNumber: string;
  /** Credit memo issued date. This value is in the `yyyy-MM-dd` format. */
  creditDate: string;
  /** Credit memo description */
  description?: string;
  /**
   * BILL-generated ID of the `SALES_TAX` item. The value begins with `0ii`. The tax rate is applied
   * to all the credit memo line items set as taxable.
   *
   * You can set up a `SALES_TAX` percentage item with `POST /v3/classifications/items`.
   */
  salesTaxItemId?: string;
  /**
   * BILL-generated ID of the chart of accounts used when the credit memo is applied to an invoice
   * payment. The value begins with `0ca`.
   */
  payToChartOfAccountId?: string;
  /**
   * BILL-generated ID of the bank account used when the credit memo is applied to an invoice
   * payment. The value begins with `bac`.
   *
   * **Note**: You can set only one of `payToChartOfAccountId` or `payToBankAccountId`.
   */
  payToBankAccountId?: string;
  classifications?: Classifications1BillV3CreditMemosApi;
  /** Credit memo line item information */
  creditMemoLineItems: ReplaceCreditMemoLineItemDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const replaceCreditMemoRequestDtoProperties: s.Shape<ReplaceCreditMemoRequestDto> = {
  customerId: s.string(),
  referenceNumber: s.string(),
  creditDate: s.dateOnly(),
  description: s.optional(s.string()),
  salesTaxItemId: s.optional(s.string()),
  payToChartOfAccountId: s.optional(s.string()),
  payToBankAccountId: s.optional(s.string()),
  classifications: s.optional(s.lazy(() => classifications1BillV3CreditMemosApiSchema)),
  creditMemoLineItems: s.array(s.lazy(() => replaceCreditMemoLineItemDtoInternalSchema)),
};

export const replaceCreditMemoRequestDtoInternalSchema: Schema<ReplaceCreditMemoRequestDto> =
  s.object<ReplaceCreditMemoRequestDto>(replaceCreditMemoRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const replaceCreditMemoRequestDtoSchema: Schema<ReplaceCreditMemoRequestDto> = s.lazySchema(() =>
  s.object<ReplaceCreditMemoRequestDto>(
    {
      ...replaceCreditMemoRequestDtoProperties,
      customerId: s.string().check(s.minLength(1)),
      referenceNumber: s.string().check(s.minLength(1), s.maxLength(100)),
      creditMemoLineItems: s.array(s.lazy(() => replaceCreditMemoLineItemDtoSchema)).check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
