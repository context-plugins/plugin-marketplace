import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";

export type ReferencePredictorSummary = {
  /** The ARN of the reference predictor. */
  arn?: string;
  /** Whether the reference predictor is Active or Deleted. */
  state?: State;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const referencePredictorSummarySchema: Schema<ReferencePredictorSummary> =
  s.object<ReferencePredictorSummary>(
    {
      arn: s.optional(s.string()),
      state: s.optional(s.lazy(() => stateSchema)),
      _keysMap: {
        arn: "Arn",
        state: "State",
      },
    },
    { additionalProperties: s.json() },
  );
