import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customViewDetailScopeSchema, type CustomViewDetailScope } from "./custom-view-detail-scope.js";
import { customViewSummaryPeriodSchema, type CustomViewSummaryPeriod } from "./custom-view-summary-period.js";
import { customViewSummaryStatusSchema, type CustomViewSummaryStatus } from "./custom-view-summary-status.js";

export type CustomViewSummary = {
  displayId: string;
  name: string;
  description: string | null;
  status: CustomViewSummaryStatus;
  /** How many named queries the view holds. */
  queryCount: number;
  /** The view's default date range, or null if it has none. */
  period: CustomViewSummaryPeriod | null;
  /** ISO 8601 creation timestamp. */
  createdAt: string;
  /**
   * 'customer': data is scoped to one viewing customer and the view is embeddable per-customer.
   * 'organization': data is org-wide and the view is internal-only.
   */
  scope: CustomViewDetailScope;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customViewSummarySchema: Schema<CustomViewSummary> = s.object<CustomViewSummary>(
  {
    displayId: s.string(),
    name: s.string(),
    description: s.nullable(s.string()),
    status: customViewSummaryStatusSchema,
    queryCount: s.int(),
    period: s.nullable(s.lazy(() => customViewSummaryPeriodSchema)),
    createdAt: s.string(),
    scope: customViewDetailScopeSchema,
  },
  { additionalProperties: s.json() },
);
