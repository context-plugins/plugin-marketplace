import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  billUpdateLineItemDtoInternalSchema,
  billUpdateLineItemDtoSchema,
  type BillUpdateLineItemDto,
} from "./bill-update-line-item-dto.js";
import {
  billVendorCreditRequestItemDtoInternalSchema,
  billVendorCreditRequestItemDtoSchema,
  type BillVendorCreditRequestItemDto,
} from "./bill-vendor-credit-request-item-dto.js";
import { classifications2Schema, type Classifications2 } from "./classifications2.js";
import { invoice2InternalSchema, invoice2Schema, type Invoice2 } from "./invoice2.js";

/** Update a bill */
export type BillUpdateRequestDto = {
  /** BILL-generated ID of the vendor. The value begins with `009`. */
  vendorId?: string;
  /** Bill description */
  description?: string;
  /** Bill due date. The value is in the `yyyy-MM-dd` format. */
  dueDate?: string;
  paymentTermId: string;
  /** Bill line items information */
  billLineItems?: BillUpdateLineItemDto[];
  invoice?: Invoice2;
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
   * to replace the bill with `PUT /v3/bills/{billId}`.
   */
  billApprovals?: boolean;
  /**
   * Rule for whether BILL re-matches the updated bill against your approval policies. The default
   * value is `false`.
   * * `true`: Rematch the updated bill. BILL removes any previously assigned approvers that are no
   *   longer valid, and then assigns any new approvers that match your policy rules.
   * * `false`: Do not rematch the updated bill. BILL assigns any new approvers that match your
   *   policy rules. Any previously assigned approvers are not removed.
   */
  policyRematch?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const billUpdateRequestDtoProperties: s.Shape<BillUpdateRequestDto> = {
  vendorId: s.optional(s.string()),
  description: s.optional(s.string()),
  dueDate: s.optional(s.dateOnly()),
  paymentTermId: s.string(),
  billLineItems: s.optional(s.array(s.lazy(() => billUpdateLineItemDtoInternalSchema))),
  invoice: s.optional(s.lazy(() => invoice2InternalSchema)),
  payFromChartOfAccountId: s.optional(s.string()),
  classifications: s.optional(s.lazy(() => classifications2Schema)),
  vendorCredits: s.optional(s.array(s.lazy(() => billVendorCreditRequestItemDtoInternalSchema))),
  purchaseOrderNumber: s.optional(s.string()),
  billApprovals: s.optional(s.boolean()),
  policyRematch: s.optional(s.boolean()),
};

export const billUpdateRequestDtoInternalSchema: Schema<BillUpdateRequestDto> =
  s.object<BillUpdateRequestDto>(billUpdateRequestDtoProperties, { additionalProperties: s.json() });

export const billUpdateRequestDtoSchema: Schema<BillUpdateRequestDto> = s.lazySchema(() =>
  s.object<BillUpdateRequestDto>(
    {
      ...billUpdateRequestDtoProperties,
      description: s.optional(s.string().check(s.maxLength(4000))),
      billLineItems: s.optional(s.array(s.lazy(() => billUpdateLineItemDtoSchema))),
      invoice: s.optional(s.lazy(() => invoice2Schema)),
      vendorCredits: s.optional(s.array(s.lazy(() => billVendorCreditRequestItemDtoSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
