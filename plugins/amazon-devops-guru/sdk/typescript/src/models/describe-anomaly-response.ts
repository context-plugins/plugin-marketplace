import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { proactiveAnomalySchema, type ProactiveAnomaly } from "./proactive-anomaly.js";
import { reactiveAnomalySchema, type ReactiveAnomaly } from "./reactive-anomaly.js";

export type DescribeAnomalyResponse = {
  proactiveAnomaly?: ProactiveAnomaly;
  reactiveAnomaly?: ReactiveAnomaly;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeAnomalyResponseSchema: Schema<DescribeAnomalyResponse> =
  s.object<DescribeAnomalyResponse>(
    {
      proactiveAnomaly: s.optional(s.lazy(() => proactiveAnomalySchema)),
      reactiveAnomaly: s.optional(s.lazy(() => reactiveAnomalySchema)),
      _keysMap: {
        proactiveAnomaly: "ProactiveAnomaly",
        reactiveAnomaly: "ReactiveAnomaly",
      },
    },
    { additionalProperties: s.json() },
  );
