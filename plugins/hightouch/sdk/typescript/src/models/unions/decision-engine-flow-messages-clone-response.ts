import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  decisionEngineErrorResponseSchema,
  type DecisionEngineErrorResponse,
} from "../decision-engine-error-response.js";
import { decisionEngineMessageSchema, type DecisionEngineMessage } from "../decision-engine-message.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type DecisionEngineFlowMessagesCloneResponse =
  | DecisionEngineMessage
  | DecisionEngineErrorResponse
  | ValidateErrorJson
  | InternalServerError;

export const decisionEngineFlowMessagesCloneResponseSchema: Schema<DecisionEngineFlowMessagesCloneResponse> =
  s.of<DecisionEngineFlowMessagesCloneResponse>(
    s.union([
      s.lazy(() => decisionEngineMessageSchema),
      s.lazy(() => decisionEngineErrorResponseSchema),
      s.lazy(() => validateErrorJsonSchema),
      s.lazy(() => internalServerErrorSchema),
    ]),
  );
