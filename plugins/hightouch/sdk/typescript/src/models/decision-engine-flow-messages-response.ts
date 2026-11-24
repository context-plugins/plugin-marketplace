import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { decisionEngineMessageSchema, type DecisionEngineMessage } from "./decision-engine-message.js";

export type DecisionEngineFlowMessagesResponse = {
  hasMore: boolean;
  data: DecisionEngineMessage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const decisionEngineFlowMessagesResponseSchema: Schema<DecisionEngineFlowMessagesResponse> =
  s.object<DecisionEngineFlowMessagesResponse>(
    {
      hasMore: s.boolean(),
      data: s.array(s.lazy(() => decisionEngineMessageSchema)),
    },
    { additionalProperties: s.json() },
  );
