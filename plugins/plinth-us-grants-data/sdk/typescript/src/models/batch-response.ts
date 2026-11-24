import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { batchResultSchema, type BatchResult } from "./batch-result.js";
import { xPlinth1Schema, type XPlinth1 } from "./unions/xplinth1.js";

export type BatchResponse = {
  /** @default 200 */
  code?: number;
  message: string;
  xPlinth?: XPlinth1;
  resultsCount: number;
  /** Calls this request cost: one per 50 rows. */
  callsCharged: number;
  results: BatchResult[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchResponseSchema: Schema<BatchResponse> = s.object<BatchResponse>(
  {
    code: s.defaulted(s.int(), 200),
    message: s.string(),
    xPlinth: s.optional(s.lazy(() => xPlinth1Schema)),
    resultsCount: s.int(),
    callsCharged: s.int(),
    results: s.array(s.lazy(() => batchResultSchema)),
    _keysMap: {
      xPlinth: "x_plinth",
      resultsCount: "results_count",
      callsCharged: "calls_charged",
    },
  },
  { additionalProperties: s.json() },
);
