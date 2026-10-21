import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount35Schema, type Amount35 } from "./amount35.js";
import { draftTransferPartySchema, type DraftTransferParty } from "./draft-transfer-party.js";
import { draftTransferParty1Schema, type DraftTransferParty1 } from "./draft-transfer-party1.js";
import {
  draftTransferStatusReasonSchema,
  type DraftTransferStatusReason,
} from "./draft-transfer-status-reason.js";
import {
  draftTransferStatusResponseSchema,
  type DraftTransferStatusResponse,
} from "./draft-transfer-status-response.js";
import { links28Schema, type Links28 } from "./links28.js";
import { modeSchema, type Mode } from "./mode.js";

export type EntityDraftTransferResponse = {
  /**
   * Indicates the response contains a draft transfer object. Will always contain the string
   * `business-account-draft-transfer` for this endpoint.
   */
  resource?: string;
  /**
   * The identifier uniquely referring to this draft transfer. Mollie assigns this identifier at
   * draft transfer creation time.
   */
  id?: string;
  /** Whether this entity was created in live mode or in test mode. */
  mode?: Mode;
  /** The IBAN of the debtor's (sender) Mollie Business Account. */
  debtorIban?: string;
  /** The debtor (sender) of the draft transfer, resolved from `debtorIban` at creation time. */
  debtor?: DraftTransferParty;
  /** The creditor (recipient) of the draft transfer, including their name and account details. */
  creditor?: DraftTransferParty1;
  /**
   * The amount of the draft transfer, e.g. `{"currency":"EUR", "value":"100.00"}` if you would want
   * to transfer €100.00.
   *
   * Only `EUR` is supported.
   */
  amount?: Amount35;
  /**
   * A short description of the draft transfer. Once approved, this will appear on the bank
   * statement of both the debtor and creditor.
   */
  description?: string | null;
  /**
   * The date on which the resulting transfer will be executed, once approved. Defaults to same-day
   * if omitted, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date format.
   */
  scheduledExecutionDate?: string | null;
  status?: DraftTransferStatusResponse;
  /** The reason for the draft transfer's current status. `null` unless `status` is `declined`. */
  statusReason?: DraftTransferStatusReason | null;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt?: string;
  /**
   * The date and time the draft transfer was approved, in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format. `null` unless `status` is `approved`.
   */
  approvedAt?: string | null;
  /**
   * The date and time the draft transfer was declined by the initiator, in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format. `null` unless `statusReason.code` is
   * `declined-by-initiator`.
   */
  declinedAt?: string | null;
  /**
   * The date and time the draft transfer was deleted via the [Cancel draft
   * transfer](cancel-draft-transfer) endpoint, in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format. `null` unless `statusReason.code` is
   * `deleted-by-creator`.
   */
  deletedAt?: string | null;
  /**
   * Whether to create the entity in test mode or live mode.
   *
   * Most API credentials are specifically created for either live mode or test mode, in which case
   * this parameter must not be sent. For organization-level credentials such as OAuth access
   * tokens, you can enable test mode by setting `testmode` to `true`.
   */
  testmode?: boolean | null;
  /** Links to related resources. */
  links?: Links28;
};

export const entityDraftTransferResponseSchema: Schema<EntityDraftTransferResponse> =
  s.object<EntityDraftTransferResponse>({
    resource: s.optional(s.string()),
    id: s.optional(s.string()),
    mode: s.optional(s.lazy(() => modeSchema)),
    debtorIban: s.optional(s.string()),
    debtor: s.optional(s.lazy(() => draftTransferPartySchema)),
    creditor: s.optional(s.lazy(() => draftTransferParty1Schema)),
    amount: s.optional(s.lazy(() => amount35Schema)),
    description: s.optionalNullable(s.string()),
    scheduledExecutionDate: s.optionalNullable(s.dateOnly()),
    status: s.optional(s.lazy(() => draftTransferStatusResponseSchema)),
    statusReason: s.optionalNullable(s.lazy(() => draftTransferStatusReasonSchema)),
    createdAt: s.optional(s.string()),
    approvedAt: s.optionalNullable(s.string()),
    declinedAt: s.optionalNullable(s.string()),
    deletedAt: s.optionalNullable(s.string()),
    testmode: s.optionalNullable(s.boolean()),
    links: s.optional(s.lazy(() => links28Schema)),
    _keysMap: {
      links: "_links",
    },
  });
