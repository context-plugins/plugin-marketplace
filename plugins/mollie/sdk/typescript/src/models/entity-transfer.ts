import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount33Schema, type Amount33 } from "./amount33.js";
import { creditDebitIndicatorSchema, type CreditDebitIndicator } from "./credit-debit-indicator.js";
import { modeSchema, type Mode } from "./mode.js";
import { statusHistoryEntrySchema, type StatusHistoryEntry } from "./status-history-entry.js";
import { statusReason2Schema, type StatusReason2 } from "./status-reason2.js";
import { transferPartySchema, type TransferParty } from "./transfer-party.js";
import { transferParty1Schema, type TransferParty1 } from "./transfer-party1.js";
import { transferSchemeSchema, type TransferScheme } from "./transfer-scheme.js";
import { transferStatusSchema, type TransferStatus } from "./transfer-status.js";
import { metadataSchema, type Metadata } from "./unions/metadata.js";

export type EntityTransfer = {
  /**
   * Indicates the response contains a transfer object. Will always contain the string
   * `business-account-transfer` for this endpoint.
   */
  resource?: string;
  /**
   * The identifier uniquely referring to this transfer. Mollie assigns this identifier at transfer
   * creation time.
   */
  id?: string;
  /** Whether this entity was created in live mode or in test mode. */
  mode?: Mode;
  /** The IBAN of the debtor's (sender) Mollie account from which to initiate the transfer. */
  debtorIban?: string;
  /** The debtor (sender) of the transfer, including their name and account details. */
  debtor?: TransferParty;
  /** The creditor (recipient) of the transfer, including their name and account details. */
  creditor?: TransferParty1;
  /**
   * The amount of the transfer, e.g. `{"currency":"EUR", "value":"100.00"}` if you would want to
   * transfer €100.00.
   *
   * Only `EUR` is supported for SEPA transfers.
   */
  amount?: Amount33;
  /**
   * A short description of the transfer. This will appear on the bank statement of both the debtor
   * and creditor.
   *
   * It must begin with an alphanumeric character, followed by any combination of letters, numbers,
   * spaces or special characters `/ - ? : ( ) . , ' + _`.
   *
   * Constraints:
   * - Cannot be solely a hyphen (-) or colon (:)
   * - Cannot contain consecutive hyphens (--)
   * - Cannot contain consecutive colons (::)
   */
  description?: string | null;
  /**
   * The identifier of the corresponding transaction in the business accounts transaction resource.
   */
  businessAccountTransactionId?: string;
  /** The scheme, as requested by the client. */
  transferScheme?: TransferScheme;
  /**
   * Indicates whether the entry is a credit or debit from the perspective of the account holder.
   */
  creditDebitIndicator?: CreditDebitIndicator;
  /** The status of the transfer. */
  status?: TransferStatus;
  /** A chronological list of status transitions the transfer has gone through. */
  statusHistory?: StatusHistoryEntry[];
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt?: string;
  /**
   * A human-readable reason explaining the current status of the transfer. Only populated when the
   * transfer has reached a terminal status of `failed`, `rejected`, or `blocked`.
   *
   * This field is `null` for transfers that have not reached one of these statuses.
   */
  statusReason?: StatusReason2 | null;
  /**
   * Provide any data you like, for example a string or a JSON object. We will save the data
   * alongside the entity. Whenever you fetch the entity with our API, we will also include the
   * metadata. You can use up to approximately 1kB.
   */
  metadata?: Metadata | null;
  /**
   * Whether to create the entity in test mode or live mode.
   *
   * Most API credentials are specifically created for either live mode or test mode, in which case
   * this parameter must not be sent. For organization-level credentials such as OAuth access
   * tokens, you can enable test mode by setting `testmode` to `true`.
   */
  testmode?: boolean | null;
};

export const entityTransferSchema: Schema<EntityTransfer> = s.object<EntityTransfer>({
  resource: s.optional(s.string()),
  id: s.optional(s.string()),
  mode: s.optional(s.lazy(() => modeSchema)),
  debtorIban: s.optional(s.string()),
  debtor: s.optional(s.lazy(() => transferPartySchema)),
  creditor: s.optional(s.lazy(() => transferParty1Schema)),
  amount: s.optional(s.lazy(() => amount33Schema)),
  description: s.optionalNullable(s.string()),
  businessAccountTransactionId: s.optional(s.string()),
  transferScheme: s.optional(s.lazy(() => transferSchemeSchema)),
  creditDebitIndicator: s.optional(s.lazy(() => creditDebitIndicatorSchema)),
  status: s.optional(s.lazy(() => transferStatusSchema)),
  statusHistory: s.optional(s.array(s.lazy(() => statusHistoryEntrySchema))),
  createdAt: s.optional(s.string()),
  statusReason: s.optionalNullable(s.lazy(() => statusReason2Schema)),
  metadata: s.optionalNullable(s.lazy(() => metadataSchema)),
  testmode: s.optionalNullable(s.boolean()),
});
