import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classifications1BillV3CreditMemosApiSchema,
  type Classifications1BillV3CreditMemosApi,
} from "./classifications1-bill-v3-credit-memos-api.js";
import {
  creditMemoLineItemResponseDtoSchema,
  type CreditMemoLineItemResponseDto,
} from "./credit-memo-line-item-response-dto.js";
import { creditMemoUsageDtoSchema, type CreditMemoUsageDto } from "./credit-memo-usage-dto.js";
import { creditStatusDtoSchema, type CreditStatusDto } from "./credit-status-dto.js";

/** CreditMemo response Dto. */
export type CreditMemoWithUsageResponseDto = {
  /** BILL-generated ID of the credit memo. The value begins with `ccr`. */
  id?: string;
  /** BILL-generated ID of the customer. The value begins with `0cu`. */
  customerId?: string;
  /** User-generated credit memo number. This value can be in your chosen number scheme. */
  referenceNumber?: string;
  /** Credit memo issued date. This value is in the `yyyy-MM-dd` format. */
  creditDate?: string;
  /** Credit memo description */
  description?: string;
  /** Set as `true` if the credit memo is archived */
  archived?: boolean;
  /**
   * BILL-generated ID of the `SALES_TAX` item. The value begins with `0ii`. The tax rate is applied
   * to all the credit memo line items set as taxable.
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
   */
  payToBankAccountId?: string;
  /** Credit memo amount */
  amount?: number;
  /** Credit memo amount applied to invoices */
  appliedAmount?: number;
  /** Credit memo sales tax amount. The value is set based on `salesTaxItemId`. */
  salesTaxTotal?: number;
  /** Credit memo sales tax percentage. The value is set based on `salesTaxItemId`. */
  salesTaxPercentage?: number;
  status?: CreditStatusDto;
  /** Credit memo created time */
  createdTime?: Date;
  /** Credit memo updated time */
  updatedTime?: Date;
  /** Credit memo line item information */
  creditMemoLineItems?: CreditMemoLineItemResponseDto[];
  classifications?: Classifications1BillV3CreditMemosApi;
  /** Credit memo usage information */
  usage?: CreditMemoUsageDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditMemoWithUsageResponseDtoSchema: Schema<CreditMemoWithUsageResponseDto> =
  s.object<CreditMemoWithUsageResponseDto>(
    {
      id: s.optional(s.string()),
      customerId: s.optional(s.string()),
      referenceNumber: s.optional(s.string()),
      creditDate: s.optional(s.dateOnly()),
      description: s.optional(s.string()),
      archived: s.optional(s.boolean()),
      salesTaxItemId: s.optional(s.string()),
      payToChartOfAccountId: s.optional(s.string()),
      payToBankAccountId: s.optional(s.string()),
      amount: s.optional(s.float64()),
      appliedAmount: s.optional(s.float64()),
      salesTaxTotal: s.optional(s.float64()),
      salesTaxPercentage: s.optional(s.float64()),
      status: s.optional(s.lazy(() => creditStatusDtoSchema)),
      createdTime: s.optional(s.dateTime()),
      updatedTime: s.optional(s.dateTime()),
      creditMemoLineItems: s.optional(s.array(s.lazy(() => creditMemoLineItemResponseDtoSchema))),
      classifications: s.optional(s.lazy(() => classifications1BillV3CreditMemosApiSchema)),
      usage: s.optional(s.array(s.lazy(() => creditMemoUsageDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
