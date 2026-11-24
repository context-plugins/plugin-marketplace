import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DecisionEngineErrorResponse = {
  /** Why the request failed. */
  message: string;
};

export const decisionEngineErrorResponseSchema: Schema<DecisionEngineErrorResponse> =
  s.object<DecisionEngineErrorResponse>({
    message: s.string(),
  });
