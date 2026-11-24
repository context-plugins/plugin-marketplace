import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  decisionEngineFlowsResponseSchema,
  type DecisionEngineFlowsResponse,
} from "../decision-engine-flows-response.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type DecisionEngineFlowsResponse1 =
  | DecisionEngineFlowsResponse
  | ValidateErrorJson
  | InternalServerError;

export const decisionEngineFlowsResponse1Schema: Schema<DecisionEngineFlowsResponse1> =
  s.of<DecisionEngineFlowsResponse1>(
    s.union([
      s.lazy(() => decisionEngineFlowsResponseSchema),
      s.lazy(() => validateErrorJsonSchema),
      s.lazy(() => internalServerErrorSchema),
    ]),
  );
