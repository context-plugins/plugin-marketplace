import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { decisionEngineFlowSchema, type DecisionEngineFlow } from "../decision-engine-flow.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type DecisionEngineFlowResponse = DecisionEngineFlow | ValidateErrorJson | InternalServerError;

export const decisionEngineFlowResponseSchema: Schema<DecisionEngineFlowResponse> =
  s.of<DecisionEngineFlowResponse>(
    s.union([
      s.lazy(() => decisionEngineFlowSchema),
      s.lazy(() => validateErrorJsonSchema),
      s.lazy(() => internalServerErrorSchema),
    ]),
  );
