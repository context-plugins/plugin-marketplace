import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters for transactions with a pending manual anti-fraud review. */
export type PendingReview = boolean;

export const pendingReviewSchema: Schema<PendingReview> = s.of<PendingReview>(s.union([s.boolean()]));
