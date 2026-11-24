import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { evaluationTypeSchema, type EvaluationType } from "./evaluation-type.js";
import { metricsSchema, type Metrics } from "./metrics.js";

export type WindowSummary = {
  /** The timestamp that defines the start of the window. */
  testWindowStart?: Date;
  /** The timestamp that defines the end of the window. */
  testWindowEnd?: Date;
  /** The number of data points within the window. */
  itemCount?: number;
  /**
   * The type of evaluation. SUMMARY - The average metrics across all windows. COMPUTED - The
   * metrics for the specified window.
   */
  evaluationType?: EvaluationType;
  metrics?: Metrics;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const windowSummarySchema: Schema<WindowSummary> = s.object<WindowSummary>(
  {
    testWindowStart: s.optional(s.dateTime()),
    testWindowEnd: s.optional(s.dateTime()),
    itemCount: s.optional(s.int()),
    evaluationType: s.optional(s.lazy(() => evaluationTypeSchema)),
    metrics: s.optional(s.lazy(() => metricsSchema)),
    _keysMap: {
      testWindowStart: "TestWindowStart",
      testWindowEnd: "TestWindowEnd",
      itemCount: "ItemCount",
      evaluationType: "EvaluationType",
      metrics: "Metrics",
    },
  },
  { additionalProperties: s.json() },
);
