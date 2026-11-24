import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { decisionEngineMessageSchema, type DecisionEngineMessage } from "../decision-engine-message.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type DecisionEngineFlowMessagesResponse11 =
  | DecisionEngineMessage
  | ValidateErrorJson
  | InternalServerError;

export const decisionEngineFlowMessagesResponse11Schema: Schema<DecisionEngineFlowMessagesResponse11> =
  s.of<DecisionEngineFlowMessagesResponse11>(
    s.union([
      s.lazy(() => decisionEngineMessageSchema),
      s.lazy(() => validateErrorJsonSchema),
      s.lazy(() => internalServerErrorSchema),
    ]),
  );
