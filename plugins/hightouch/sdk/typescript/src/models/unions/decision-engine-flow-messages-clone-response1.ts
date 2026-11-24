import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  decisionEngineErrorResponseSchema,
  type DecisionEngineErrorResponse,
} from "../decision-engine-error-response.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";

export type DecisionEngineFlowMessagesCloneResponse1 = DecisionEngineErrorResponse | InternalServerError;

export const decisionEngineFlowMessagesCloneResponse1Schema: Schema<DecisionEngineFlowMessagesCloneResponse1> =
  s.of<DecisionEngineFlowMessagesCloneResponse1>(
    s.union([s.lazy(() => decisionEngineErrorResponseSchema), s.lazy(() => internalServerErrorSchema)]),
  );
