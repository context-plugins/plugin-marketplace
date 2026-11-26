import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  billCreateLineItemDtoInternalSchema,
  billCreateLineItemDtoSchema,
  type BillCreateLineItemDto,
} from "./bill-create-line-item-dto.js";
import {
  billVendorCreditRequestItemDtoInternalSchema,
  billVendorCreditRequestItemDtoSchema,
  type BillVendorCreditRequestItemDto,
} from "./bill-vendor-credit-request-item-dto.js";
import { classifications2Schema, type Classifications2 } from "./classifications2.js";
import { invoice1InternalSchema, invoice1Schema, type Invoice1 } from "./invoice1.js";

/** Create a bill */
export type BillCreateRequestDto = {
  /** BILL-generated ID of the vendor. The value begins with `009`. */
  vendorId: string;
  /** Bill description */
  description?: string;
  /** Bill due date. The value is in the `yyyy-MM-dd` format. */
  dueDate: string;
  paymentTermId?: string;
  /** Bill line items information */
  billLineItems: BillCreateLineItemDto[];
  invoice: Invoice1;
  /**
   * BILL-generated ID of the chart of accounts for the bill payment. The value begins with `0ca`.
   */
  payFromChartOfAccountId?: string;
  classifications?: Classifications2;
  /** Vendor credits applied to the bill */
  vendorCredits?: BillVendorCreditRequestItemDto[];
  /** Purchase order number linked with the bill */
  purchaseOrderNumber?: string;
  /**
   * Set as `true` for BILL to add approvals information in the response.
   *
   * When you have approval policies set up for bills and a bill matches a policy, you see an
   * additional `approvers` array of objects in the response. The array shows the list of individual
   * users and/or user groups assigned as bill approvers. In addition, the array provides
   * information about the status of the bill in the current approval flow.
   *
   * **Note**: When you set `billApprovals` as `true`, you must set the field as `true` if you want
   * to update the bill (`PATCH /v3/bills/{billId}`) or replace the bill (`PUT /v3/bills/{billId}`).
   */
  billApprovals?: boolean;
  /**
   * Set as `false` to reject the request when the bill's `invoice.invoiceNumber` duplicates an
   * existing invoice number for the vendor. Defaults to `true`, which allows duplicate invoice
   * numbers.
   */
  allowDuplicateInvoiceNumber?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const billCreateRequestDtoProperties: s.Shape<BillCreateRequestDto> = {
  vendorId: s.string(),
  description: s.optional(s.string()),
  dueDate: s.dateOnly(),
  paymentTermId: s.optional(s.string()),
  billLineItems: s.array(s.lazy(() => billCreateLineItemDtoInternalSchema)),
  invoice: invoice1InternalSchema,
  payFromChartOfAccountId: s.optional(s.string()),
  classifications: s.optional(s.lazy(() => classifications2Schema)),
  vendorCredits: s.optional(s.array(s.lazy(() => billVendorCreditRequestItemDtoInternalSchema))),
  purchaseOrderNumber: s.optional(s.string()),
  billApprovals: s.optional(s.boolean()),
  allowDuplicateInvoiceNumber: s.optional(s.boolean()),
};

export const billCreateRequestDtoInternalSchema: Schema<BillCreateRequestDto> =
  s.object<BillCreateRequestDto>(billCreateRequestDtoProperties, { additionalProperties: s.json() });

export const billCreateRequestDtoSchema: Schema<BillCreateRequestDto> = s.lazySchema(() =>
  s.object<BillCreateRequestDto>(
    {
      ...billCreateRequestDtoProperties,
      vendorId: s.string().check(s.minLength(1)),
      description: s.optional(s.string().check(s.maxLength(4000))),
      billLineItems: s.array(s.lazy(() => billCreateLineItemDtoSchema)).check(s.minLength(1)),
      invoice: invoice1Schema,
      vendorCredits: s.optional(s.array(s.lazy(() => billVendorCreditRequestItemDtoSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
