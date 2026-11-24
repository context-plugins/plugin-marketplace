import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Plan = {
  automatePlan?: string;
  parallelSessionsRunning?: number;
  teamParallelSessionsMaxAllowed?: number;
  parallelSessionsMaxAllowed?: number;
  queuedSessions?: number;
  queuedSessionsMaxAllowed?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planSchema: Schema<Plan> = s.object<Plan>(
  {
    automatePlan: s.optional(s.string()),
    parallelSessionsRunning: s.optional(s.int()),
    teamParallelSessionsMaxAllowed: s.optional(s.int()),
    parallelSessionsMaxAllowed: s.optional(s.int()),
    queuedSessions: s.optional(s.int()),
    queuedSessionsMaxAllowed: s.optional(s.int()),
    _keysMap: {
      automatePlan: "automate_plan",
      parallelSessionsRunning: "parallel_sessions_running",
      teamParallelSessionsMaxAllowed: "team_parallel_sessions_max_allowed",
      parallelSessionsMaxAllowed: "parallel_sessions_max_allowed",
      queuedSessions: "queued_sessions",
      queuedSessionsMaxAllowed: "queued_sessions_max_allowed",
    },
  },
  { additionalProperties: s.json() },
);
