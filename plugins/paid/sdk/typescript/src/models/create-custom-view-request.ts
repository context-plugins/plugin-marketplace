import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  createCustomViewRequestPeriodSchema,
  type CreateCustomViewRequestPeriod,
} from "./create-custom-view-request-period.js";
import {
  createCustomViewRequestScopeSchema,
  type CreateCustomViewRequestScope,
} from "./create-custom-view-request-scope.js";
import { customViewQuerySchema, type CustomViewQuery } from "./custom-view-query.js";

export type CreateCustomViewRequest = {
  /** Human-readable view name (shown in preview + audit log). */
  name: string;
  /** Optional longer description of what the view shows. */
  description?: string;
  /** One or more named queries. Each becomes a separately-keyed result set in the embed. */
  queries: CustomViewQuery[];
  /**
   * Self-contained HTML document that renders the result sets. Inline ALL CSS/JS/charting libraries
   * — the render sandbox has no network access. It receives the keyed result sets via a `message`
   * event (`data[<queryId>]`) and must not fetch anything itself.
   */
  renderBundle: string;
  /**
   * Optional default date range. Required if any query uses the `{period_start:DateTime}` /
   * `{period_end:DateTime}` placeholders. Can be changed later in Paid without re-authoring.
   */
  period?: CreateCustomViewRequestPeriod;
  /**
   * 'customer' (default): data is scoped to one viewing customer and the view is embeddable
   * per-customer. 'organization': data is org-wide; the view is internal-only (visible to org
   * members in Paid, never embeddable).
   */
  scope?: CreateCustomViewRequestScope;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createCustomViewRequestSchema: Schema<CreateCustomViewRequest> =
  s.object<CreateCustomViewRequest>(
    {
      name: s.string(),
      description: s.optional(s.string()),
      queries: s.array(s.lazy(() => customViewQuerySchema)),
      renderBundle: s.string(),
      period: s.optional(s.lazy(() => createCustomViewRequestPeriodSchema)),
      scope: s.optional(s.lazy(() => createCustomViewRequestScopeSchema)),
    },
    { additionalProperties: s.json() },
  );
