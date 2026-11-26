import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1AgentsInvokeRequest = {
  task: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1AgentsInvokeRequestSchema: Schema<V1AgentsInvokeRequest> = s.object<V1AgentsInvokeRequest>(
  {
    task: s.string(),
  },
  { additionalProperties: s.json() },
);
