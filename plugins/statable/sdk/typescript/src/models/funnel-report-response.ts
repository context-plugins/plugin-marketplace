import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { funnelReportStepSchema, type FunnelReportStep } from "./funnel-report-step.js";
import { funnelSchema, type Funnel } from "./funnel.js";

export type FunnelReportResponse = {
  funnel?: Funnel;
  /** Visitors that reached step 0 — the funnel's denominator. */
  entering?: number;
  /** Total visitors/visits in the period (funnel-independent). */
  allVisitors?: number;
  steps?: FunnelReportStep[];
  /** The resolved request (site_id, funnel_id, normalized date_range, filters). */
  query?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const funnelReportResponseSchema: Schema<FunnelReportResponse> = s.object<FunnelReportResponse>(
  {
    funnel: s.optional(s.lazy(() => funnelSchema)),
    entering: s.optional(s.int()),
    allVisitors: s.optional(s.int()),
    steps: s.optional(s.array(s.lazy(() => funnelReportStepSchema))),
    query: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      allVisitors: "all_visitors",
    },
  },
  { additionalProperties: s.json() },
);
