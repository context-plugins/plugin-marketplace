import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** System Health. */
export type SystemHealthResponse = {
  status?: string;
  groups?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const systemHealthResponseSchema: Schema<SystemHealthResponse> = s.object<SystemHealthResponse>(
  {
    status: s.optional(s.string()),
    groups: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
