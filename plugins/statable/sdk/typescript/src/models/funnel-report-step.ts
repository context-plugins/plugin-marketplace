import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kindSchema, type Kind } from "./kind.js";

/** One step's outcome. Steps are ordered — do not sort them. */
export type FunnelReportStep = {
  /** 0-based position in the funnel. */
  index?: number;
  name?: string;
  kind?: Kind;
  /** Visitors/visits that reached this step. */
  visitors?: number;
  /** visitors / entering * 100 — cumulative vs the first step, NOT step-to-step. */
  conversionRate?: number;
  /** Visitors lost versus the previous step. */
  dropoff?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const funnelReportStepSchema: Schema<FunnelReportStep> = s.object<FunnelReportStep>(
  {
    index: s.optional(s.int()),
    name: s.optional(s.string()),
    kind: s.optional(s.lazy(() => kindSchema)),
    visitors: s.optional(s.int()),
    conversionRate: s.optional(s.float64()),
    dropoff: s.optional(s.int()),
    _keysMap: {
      conversionRate: "conversion_rate",
    },
  },
  { additionalProperties: s.json() },
);
