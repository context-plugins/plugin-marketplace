import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A scheme's transaction link identifier to use in connecting a merchant initiated transaction to a
 * previous customer initiated transaction. If not provided, and a qualifying customer initiated
 * transaction has been previously made with the stored payment method, then Gr4vy will populate
 * this value with the identifier returned for that transaction. This field is also know as the
 * Mastercard Transaction Link ID (TLID).
 */
export type PreviousTransactionLinkId = string;

export const previousTransactionLinkIdSchema: Schema<PreviousTransactionLinkId> =
  s.of<PreviousTransactionLinkId>(s.union([s.string()]));
