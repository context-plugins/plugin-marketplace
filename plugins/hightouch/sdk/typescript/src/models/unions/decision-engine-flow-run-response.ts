import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  decisionEngineRunResponseSchema,
  type DecisionEngineRunResponse,
} from "../decision-engine-run-response.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type DecisionEngineFlowRunResponse =
  | DecisionEngineRunResponse
  | ValidateErrorJson
  | InternalServerError;

export const decisionEngineFlowRunResponseSchema: Schema<DecisionEngineFlowRunResponse> =
  s.of<DecisionEngineFlowRunResponse>(
    s.union([
      s.lazy(() => decisionEngineRunResponseSchema),
      s.lazy(() => validateErrorJsonSchema),
      s.lazy(() => internalServerErrorSchema),
    ]),
  );
