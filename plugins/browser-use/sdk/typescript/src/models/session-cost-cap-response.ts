import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SessionCostCapResponse = {
  sessionId: string;
  maxCostUsd: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionCostCapResponseSchema: Schema<SessionCostCapResponse> = s.object<SessionCostCapResponse>(
  {
    sessionId: s.string(),
    maxCostUsd: s.string(),
  },
  { additionalProperties: s.json() },
);
