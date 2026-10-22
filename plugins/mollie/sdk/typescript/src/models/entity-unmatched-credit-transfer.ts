import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { links32Schema, type Links32 } from "./links32.js";
import { remittanceInformationSchema, type RemittanceInformation } from "./remittance-information.js";
import { source2Schema, type Source2 } from "./source2.js";
import {
  unmatchedCreditTransferStatus1Schema,
  type UnmatchedCreditTransferStatus1,
} from "./unmatched-credit-transfer-status1.js";

export type EntityUnmatchedCreditTransfer = {
  /**
   * Indicates the response contains an unmatched credit transfer object. Will always contain the
   * string `unmatched-credit-transfer` for this endpoint.
   */
  resource: string;
  /** The identifier uniquely referring to this unmatched credit transfer. */
  id: string;
  profileId: string;
  /**
   * In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value`
   * field.
   */
  amount: Amount;
  /** Details about the sender of the credit transfer. */
  source: Source2;
  /** Remittance information provided with the unmatched credit transfer. */
  remittanceInformation: RemittanceInformation;
  /** The status of the unmatched credit transfer. */
  status: UnmatchedCreditTransferStatus1;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: string;
  /**
   * The date and time at which the unmatched credit transfer expires, in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  expiresAt: string;
  /**
   * The IDs of the payments this credit transfer was matched to. Only present when the status is
   * `matched`.
   */
  paymentIds?: string[];
  /** Links to related resources. */
  links: Links32;
};

export const entityUnmatchedCreditTransferSchema: Schema<EntityUnmatchedCreditTransfer> =
  s.object<EntityUnmatchedCreditTransfer>({
    resource: s.string(),
    id: s.string(),
    profileId: s.string(),
    amount: amountSchema,
    source: source2Schema,
    remittanceInformation: remittanceInformationSchema,
    status: unmatchedCreditTransferStatus1Schema,
    createdAt: s.string(),
    expiresAt: s.string(),
    paymentIds: s.optional(s.array(s.string())),
    links: links32Schema,
    _keysMap: {
      links: "_links",
    },
  });
