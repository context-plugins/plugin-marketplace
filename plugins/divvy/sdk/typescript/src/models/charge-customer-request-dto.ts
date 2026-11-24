import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fundingAccount2Schema, type FundingAccount2 } from "./funding-account2.js";
import { invoicePayRequestDtoSchema, type InvoicePayRequestDto } from "./invoice-pay-request-dto.js";

/** Charge a customer */
export type ChargeCustomerRequestDto = {
  /** BILL-generated ID of the customer. The value begins with `0cu`. */
  customerId: string;
  fundingAccount: FundingAccount2;
  /**
   * Invoice payment description. This value is included in the check memo or in the bank descriptor
   * for electronic payments.
   */
  description?: string;
  /**
   * Received payment date. Funds are withdrawn from the customer bank account on this date.This
   * value is in the `yyyy-MM-dd` format.
   */
  paymentDate?: string;
  /** List of invoices to be paid */
  invoicePayments: InvoicePayRequestDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chargeCustomerRequestDtoSchema: Schema<ChargeCustomerRequestDto> =
  s.object<ChargeCustomerRequestDto>(
    {
      customerId: s.string(),
      fundingAccount: fundingAccount2Schema,
      description: s.optional(s.string()),
      paymentDate: s.optional(s.dateOnly()),
      invoicePayments: s.array(s.lazy(() => invoicePayRequestDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
