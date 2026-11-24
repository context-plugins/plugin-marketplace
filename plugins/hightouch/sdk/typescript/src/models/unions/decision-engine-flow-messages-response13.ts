import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  decisionEngineErrorResponseSchema,
  type DecisionEngineErrorResponse,
} from "../decision-engine-error-response.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type DecisionEngineFlowMessagesResponse13 =
  | Record<string, unknown>
  | DecisionEngineErrorResponse
  | ValidateErrorJson
  | InternalServerError;

export const decisionEngineFlowMessagesResponse13Schema: Schema<DecisionEngineFlowMessagesResponse13> =
  s.of<DecisionEngineFlowMessagesResponse13>(
    s.union([
      s.record(s.string(), s.unknown()),
      s.lazy(() => decisionEngineErrorResponseSchema),
      s.lazy(() => validateErrorJsonSchema),
      s.lazy(() => internalServerErrorSchema),
    ]),
  );
