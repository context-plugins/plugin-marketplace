import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Per-outcome counts across the batch. Field names are snake_case, matching the actual wire format
 * returned by this endpoint — an intentional inconsistency with the rest of the payload, which is
 * camelCase.
 */
export type ResellerHandshakeBatchSummary = {
  handshakeIssued: number;
  noOp: number;
  mapped: number;
  remapped: number;
  failed: number;
};

export const resellerHandshakeBatchSummarySchema: Schema<ResellerHandshakeBatchSummary> =
  s.object<ResellerHandshakeBatchSummary>({
    handshakeIssued: s.int(),
    noOp: s.int(),
    mapped: s.int(),
    remapped: s.int(),
    failed: s.int(),
    _keysMap: {
      handshakeIssued: "handshake_issued",
      noOp: "no_op",
    },
  });
