import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  decisionEngineFlowMessagesResponseSchema,
  type DecisionEngineFlowMessagesResponse,
} from "../decision-engine-flow-messages-response.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type DecisionEngineFlowMessagesResponse1 =
  | DecisionEngineFlowMessagesResponse
  | ValidateErrorJson
  | InternalServerError;

export const decisionEngineFlowMessagesResponse1Schema: Schema<DecisionEngineFlowMessagesResponse1> =
  s.of<DecisionEngineFlowMessagesResponse1>(
    s.union([
      s.lazy(() => decisionEngineFlowMessagesResponseSchema),
      s.lazy(() => validateErrorJsonSchema),
      s.lazy(() => internalServerErrorSchema),
    ]),
  );
