import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  modeDeliverdDevTasksApiSchema,
  type ModeDeliverdDevTasksApi,
} from "./mode-deliverd-dev-tasks-api.js";

export type Authority = {
  action: string;
  mode: ModeDeliverdDevTasksApi;
  source: string;
  reason: string;
  agentId: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authoritySchema: Schema<Authority> = s.object<Authority>(
  {
    action: s.string(),
    mode: modeDeliverdDevTasksApiSchema,
    source: s.string(),
    reason: s.string(),
    agentId: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
