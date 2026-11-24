import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightSchema, type Insight } from "./insight.js";

export type GetInsightResult = {
  insight?: Insight;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getInsightResultSchema: Schema<GetInsightResult> = s.object<GetInsightResult>(
  {
    insight: s.optional(s.lazy(() => insightSchema)),
    _keysMap: {
      insight: "Insight",
    },
  },
  { additionalProperties: s.json() },
);
