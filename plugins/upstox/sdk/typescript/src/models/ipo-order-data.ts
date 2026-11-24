import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ipoOrderBidSchema, type IpoOrderBid } from "./ipo-order-bid.js";
import { issueTypeSchema, type IssueType } from "./issue-type.js";

export type IpoOrderData = {
  /** Reference id of the IPO the application was placed against */
  id?: string;
  /** Trading symbol of the issuer */
  symbol?: string;
  /** Exchange the application was submitted to. Casing follows the exchange feed and may vary */
  exchange?: string;
  /** Id of the request that created the application */
  requestId?: string;
  /** Application id. Pass this as order_id to the get-order and cancel-order APIs */
  orderId?: string;
  /**
   * Lifecycle stage of the application. Known values: awaiting_mandate, ipo_allotted,
   * ipo_not_allotted, application_deleted
   */
  status?: string;
  /** Outcome of the application. Known values: success, allotted, not_allotted */
  orderStatus?: string;
  /** State of the UPI mandate backing the application. Known values: pending, mandate_accepted */
  paymentStatus?: string;
  /**
   * Investor category the application was placed under. IND (individual) and HNI can be applied
   * for; EMP appears on employee-quota applications
   */
  category?: string;
  /** Issue type of the IPO. `regular` is a mainboard issue */
  issueType?: IssueType;
  /** Free-text reason from the exchange or registrar explaining the current status */
  reason?: string;
  /** UPI id the mandate was raised against */
  upi?: string;
  /**
   * Amount blocked in the applicant's bank account for this application, as a decimal string.
   * Absent until the mandate is accepted
   */
  upiAmountBlocked?: string;
  /**
   * When the application was submitted to NSE, in yyyy-MM-dd'T'HH:mm:ss; null if not submitted
   * there
   */
  nseSubmittedDate?: string;
  /**
   * When the application was submitted to BSE, in yyyy-MM-dd'T'HH:mm:ss; null if not submitted
   * there
   */
  bseSubmittedDate?: string;
  /** When the UPI mandate was approved; null until approved */
  mandateApprovedDate?: string;
  /** When the application was rejected; null unless rejected */
  rejectionDate?: string;
  /** When the UPI mandate was rejected; null unless rejected */
  mandateRejectionDate?: string;
  /** When cancellation was requested; null unless a cancellation was raised */
  cancelRequestedDate?: string;
  /** When cancellation was accepted; null unless the cancellation completed */
  cancelAcceptedDate?: string;
  /** Shares allotted. 0 until allotment completes, and on applications that were not allotted */
  unitsAllotted?: number;
  /** Bids placed in this application */
  bids?: IpoOrderBid[];
  /** When the application was created, in yyyy-MM-dd'T'HH:mm:ss */
  createdAt?: string;
  /** When the application was last updated, in yyyy-MM-dd'T'HH:mm:ss */
  lastUpdatedAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipoOrderDataSchema: Schema<IpoOrderData> = s.object<IpoOrderData>(
  {
    id: s.optional(s.string()),
    symbol: s.optional(s.string()),
    exchange: s.optional(s.string()),
    requestId: s.optional(s.string()),
    orderId: s.optional(s.string()),
    status: s.optional(s.string()),
    orderStatus: s.optional(s.string()),
    paymentStatus: s.optional(s.string()),
    category: s.optional(s.string()),
    issueType: s.optional(s.lazy(() => issueTypeSchema)),
    reason: s.optional(s.string()),
    upi: s.optional(s.string()),
    upiAmountBlocked: s.optional(s.string()),
    nseSubmittedDate: s.optional(s.string()),
    bseSubmittedDate: s.optional(s.string()),
    mandateApprovedDate: s.optional(s.string()),
    rejectionDate: s.optional(s.string()),
    mandateRejectionDate: s.optional(s.string()),
    cancelRequestedDate: s.optional(s.string()),
    cancelAcceptedDate: s.optional(s.string()),
    unitsAllotted: s.optional(s.int()),
    bids: s.optional(s.array(s.lazy(() => ipoOrderBidSchema))),
    createdAt: s.optional(s.string()),
    lastUpdatedAt: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
      orderId: "order_id",
      orderStatus: "order_status",
      paymentStatus: "payment_status",
      issueType: "issue_type",
      upiAmountBlocked: "upi_amount_blocked",
      nseSubmittedDate: "nse_submitted_date",
      bseSubmittedDate: "bse_submitted_date",
      mandateApprovedDate: "mandate_approved_date",
      rejectionDate: "rejection_date",
      mandateRejectionDate: "mandate_rejection_date",
      cancelRequestedDate: "cancel_requested_date",
      cancelAcceptedDate: "cancel_accepted_date",
      unitsAllotted: "units_allotted",
      createdAt: "created_at",
      lastUpdatedAt: "last_updated_at",
    },
  },
  { additionalProperties: s.json() },
);
