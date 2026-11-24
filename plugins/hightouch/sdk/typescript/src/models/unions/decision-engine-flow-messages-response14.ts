import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  decisionEngineErrorResponseSchema,
  type DecisionEngineErrorResponse,
} from "../decision-engine-error-response.js";
import { internalServerErrorSchema, type InternalServerError } from "../internal-server-error.js";

export type DecisionEngineFlowMessagesResponse14 = DecisionEngineErrorResponse | InternalServerError;

export const decisionEngineFlowMessagesResponse14Schema: Schema<DecisionEngineFlowMessagesResponse14> =
  s.of<DecisionEngineFlowMessagesResponse14>(
    s.union([s.lazy(() => decisionEngineErrorResponseSchema), s.lazy(() => internalServerErrorSchema)]),
  );
