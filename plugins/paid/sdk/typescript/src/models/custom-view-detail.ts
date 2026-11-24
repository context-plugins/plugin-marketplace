import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customViewDetailPeriodSchema, type CustomViewDetailPeriod } from "./custom-view-detail-period.js";
import { customViewDetailScopeSchema, type CustomViewDetailScope } from "./custom-view-detail-scope.js";
import { customViewDetailStatusSchema, type CustomViewDetailStatus } from "./custom-view-detail-status.js";

export type CustomViewDetail = {
  displayId: string;
  name: string;
  description: string | null;
  status: CustomViewDetailStatus;
  /** Ids of the result sets the render bundle will receive. */
  queryIds: string[];
  /** Self-contained HTML document rendered inside the isolated sandbox iframe. */
  renderBundle: string;
  /** The view's current default date range, or null if it uses no adjustable period. */
  period: CustomViewDetailPeriod | null;
  /**
   * 'customer': data is scoped to one viewing customer and the view is embeddable per-customer.
   * 'organization': data is org-wide and the view is internal-only.
   */
  scope: CustomViewDetailScope;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customViewDetailSchema: Schema<CustomViewDetail> = s.object<CustomViewDetail>(
  {
    displayId: s.string(),
    name: s.string(),
    description: s.nullable(s.string()),
    status: customViewDetailStatusSchema,
    queryIds: s.array(s.string()),
    renderBundle: s.string(),
    period: s.nullable(s.lazy(() => customViewDetailPeriodSchema)),
    scope: customViewDetailScopeSchema,
  },
  { additionalProperties: s.json() },
);
