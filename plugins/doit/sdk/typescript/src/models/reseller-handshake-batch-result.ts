import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  resellerHandshakeBatchSummarySchema,
  type ResellerHandshakeBatchSummary,
} from "./reseller-handshake-batch-summary.js";
import { resellerHandshakeResultSchema, type ResellerHandshakeResult } from "./reseller-handshake-result.js";

export type ResellerHandshakeBatchResult = {
  dpmaId: string;
  results: ResellerHandshakeResult[];
  /**
   * Per-outcome counts across the batch. Field names are snake_case, matching the actual wire
   * format returned by this endpoint — an intentional inconsistency with the rest of the payload,
   * which is camelCase.
   */
  summary: ResellerHandshakeBatchSummary;
};

export const resellerHandshakeBatchResultSchema: Schema<ResellerHandshakeBatchResult> =
  s.object<ResellerHandshakeBatchResult>({
    dpmaId: s.string(),
    results: s.array(s.lazy(() => resellerHandshakeResultSchema)),
    summary: resellerHandshakeBatchSummarySchema,
  });
