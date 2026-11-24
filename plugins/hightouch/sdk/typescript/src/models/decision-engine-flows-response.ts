import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { decisionEngineFlowSchema, type DecisionEngineFlow } from "./decision-engine-flow.js";

export type DecisionEngineFlowsResponse = {
  hasMore: boolean;
  data: DecisionEngineFlow[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const decisionEngineFlowsResponseSchema: Schema<DecisionEngineFlowsResponse> =
  s.object<DecisionEngineFlowsResponse>(
    {
      hasMore: s.boolean(),
      data: s.array(s.lazy(() => decisionEngineFlowSchema)),
    },
    { additionalProperties: s.json() },
  );
