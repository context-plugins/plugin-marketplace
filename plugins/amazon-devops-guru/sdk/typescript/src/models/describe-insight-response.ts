import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { proactiveInsightSchema, type ProactiveInsight } from "./proactive-insight.js";
import { reactiveInsightSchema, type ReactiveInsight } from "./reactive-insight.js";

export type DescribeInsightResponse = {
  proactiveInsight?: ProactiveInsight;
  reactiveInsight?: ReactiveInsight;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeInsightResponseSchema: Schema<DescribeInsightResponse> =
  s.object<DescribeInsightResponse>(
    {
      proactiveInsight: s.optional(s.lazy(() => proactiveInsightSchema)),
      reactiveInsight: s.optional(s.lazy(() => reactiveInsightSchema)),
      _keysMap: {
        proactiveInsight: "ProactiveInsight",
        reactiveInsight: "ReactiveInsight",
      },
    },
    { additionalProperties: s.json() },
  );
