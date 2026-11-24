import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customViewSummarySchema, type CustomViewSummary } from "./custom-view-summary.js";

export type CustomViewListResponse = {
  views: CustomViewSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customViewListResponseSchema: Schema<CustomViewListResponse> = s.object<CustomViewListResponse>(
  {
    views: s.array(s.lazy(() => customViewSummarySchema)),
  },
  { additionalProperties: s.json() },
);
