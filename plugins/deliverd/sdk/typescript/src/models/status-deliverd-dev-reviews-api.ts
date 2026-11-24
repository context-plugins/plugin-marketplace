import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDeliverdDevReviewsApi = {
  Pending: "pending",
  Approved: "approved",
  ChangesRequested: "changes_requested",
  Expired: "expired",
  Cancelled: "cancelled",
} as const;
export type StatusDeliverdDevReviewsApi =
  | (typeof StatusDeliverdDevReviewsApi)[keyof typeof StatusDeliverdDevReviewsApi]
  | (string & {});

export const statusDeliverdDevReviewsApiSchema: EnumSchema<StatusDeliverdDevReviewsApi> =
  s.enumOf<StatusDeliverdDevReviewsApi>(StatusDeliverdDevReviewsApi);
