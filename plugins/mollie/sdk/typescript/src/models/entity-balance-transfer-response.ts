import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount37Schema, type Amount37 } from "./amount37.js";
import {
  balanceTransferCategoryResponseSchema,
  type BalanceTransferCategoryResponse,
} from "./balance-transfer-category-response.js";
import { balanceTransferStatusSchema, type BalanceTransferStatus } from "./balance-transfer-status.js";
import {
  entityBalanceTransferPartyResponseSchema,
  type EntityBalanceTransferPartyResponse,
} from "./entity-balance-transfer-party-response.js";
import { modeSchema, type Mode } from "./mode.js";
import { statusReason3Schema, type StatusReason3 } from "./status-reason3.js";

export type EntityBalanceTransferResponse = {
  /**
   * Indicates the response contains a balance transfer object. Will always contain the string
   * `connect-balance-transfer` for this endpoint.
   */
  resource: string;
  /**
   * The identifier uniquely referring to this balance transfer. Mollie assigns this identifier at
   * balance transfer creation time. Mollie will always refer to the balance transfer by this ID.
   * Example: `cbtr_j8NvRAM2WNZtsykpLEX8J`.
   */
  id: string;
  /**
   * The amount to be transferred, e.g. `{"currency":"EUR", "value":"1000.00"}` if you would like to
   * transfer €1000.00.
   */
  amount: Amount37;
  /** A party involved in the balance transfer, either the sender or the receiver. */
  source: EntityBalanceTransferPartyResponse;
  /** A party involved in the balance transfer, either the sender or the receiver. */
  destination: EntityBalanceTransferPartyResponse;
  /** The transfer description for initiating party. */
  description: string;
  /** The status of the transfer. */
  status: BalanceTransferStatus;
  /** The reason for the current status of the transfer, if applicable. */
  statusReason: StatusReason3;
  /** The type of the transfer. Different fees may apply to different types of transfers. */
  category?: BalanceTransferCategoryResponse;
  /**
   * A JSON object that you can attach to a balance transfer. This can be useful for storing
   * additional information about the transfer in a structured format. Maximum size is approximately
   * 1KB.
   */
  metadata?: Record<string, unknown>;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: string;
  /**
   * The date and time when the transfer was completed, in ISO 8601 format. This parameter is
   * omitted if the transfer is not executed (yet).
   */
  executedAt?: string | null;
  /**
   * Whether to create the entity in test mode or live mode.
   *
   * You can enable test mode by setting `testmode` to `true`.
   */
  testmode?: boolean;
  /** Whether this entity was created in live mode or in test mode. */
  mode: Mode;
};

export const entityBalanceTransferResponseSchema: Schema<EntityBalanceTransferResponse> =
  s.object<EntityBalanceTransferResponse>({
    resource: s.string(),
    id: s.string(),
    amount: amount37Schema,
    source: entityBalanceTransferPartyResponseSchema,
    destination: entityBalanceTransferPartyResponseSchema,
    description: s.string(),
    status: balanceTransferStatusSchema,
    statusReason: statusReason3Schema,
    category: s.optional(s.lazy(() => balanceTransferCategoryResponseSchema)),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    createdAt: s.string(),
    executedAt: s.optionalNullable(s.string()),
    testmode: s.optional(s.boolean()),
    mode: modeSchema,
  });
