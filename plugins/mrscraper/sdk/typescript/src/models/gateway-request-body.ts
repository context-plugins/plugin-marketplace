import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GatewayRequestBody = {
  action?: string;
  agent?: string;
  domain?: string;
  prompt?: string;
  stream?: boolean;
  taskDetails?: Record<string, unknown>;
  tokenUsage?: number;
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gatewayRequestBodySchema: Schema<GatewayRequestBody> = s.object<GatewayRequestBody>(
  {
    action: s.optional(s.string()),
    agent: s.optional(s.string()),
    domain: s.optional(s.string()),
    prompt: s.optional(s.string()),
    stream: s.optional(s.boolean()),
    taskDetails: s.optional(s.record(s.string(), s.unknown())),
    tokenUsage: s.optional(s.int()),
    url: s.optional(s.string()),
    _keysMap: {
      taskDetails: "task_details",
      tokenUsage: "token_usage",
    },
  },
  { additionalProperties: s.json() },
);
