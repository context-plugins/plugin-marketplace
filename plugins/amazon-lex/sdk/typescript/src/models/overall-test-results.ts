import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { overallTestResultItemSchema, type OverallTestResultItem } from "./overall-test-result-item.js";

export type OverallTestResults = {
  /** A list of the overall test results. */
  items: OverallTestResultItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const overallTestResultsSchema: Schema<OverallTestResults> = s.object<OverallTestResults>(
  {
    items: s.array(s.lazy(() => overallTestResultItemSchema)),
  },
  { additionalProperties: s.json() },
);
