import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billingPeriodSchema, type BillingPeriod } from "./billing-period.js";
import {
  billingStatementDetailLineItemDtoSchema,
  type BillingStatementDetailLineItemDto,
} from "./billing-statement-detail-line-item-dto.js";
import {
  billingStatementPaymentStatusSchema,
  type BillingStatementPaymentStatus,
} from "./billing-statement-payment-status.js";
import { downloadLinkSchema, type DownloadLink } from "./download-link.js";

/** BillingStatementDetail response Dto. */
export type BillingStatementDetailResponseDto = {
  /** BILL-generated ID of the billing statement. The value begins with `0S0`. */
  id: string;
  /** Billing invoice number */
  invoiceNumber: string;
  /** Billing invoice date */
  invoiceDate: string;
  /** Billing invoice description */
  description: string;
  billingPeriod: BillingPeriod;
  paymentStatus: BillingStatementPaymentStatus;
  /** Billing invoice payment date */
  paymentDate?: string;
  /** Billing invoice amount */
  amount: number;
  /** Statement details. This includes billing invoice line item information. */
  statementDetails?: BillingStatementDetailLineItemDto[];
  downloadLink: DownloadLink;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billingStatementDetailResponseDtoSchema: Schema<BillingStatementDetailResponseDto> =
  s.object<BillingStatementDetailResponseDto>(
    {
      id: s.string(),
      invoiceNumber: s.string(),
      invoiceDate: s.dateOnly(),
      description: s.string(),
      billingPeriod: billingPeriodSchema,
      paymentStatus: billingStatementPaymentStatusSchema,
      paymentDate: s.optional(s.dateOnly()),
      amount: s.float64(),
      statementDetails: s.optional(s.array(s.lazy(() => billingStatementDetailLineItemDtoSchema))),
      downloadLink: downloadLinkSchema,
    },
    { additionalProperties: s.json() },
  );
