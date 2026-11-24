import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status1AgentReadyScansApiSchema,
  type Status1AgentReadyScansApi,
} from "./status1-agent-ready-scans-api.js";

/** Result of a single check. */
export type CheckResultAgentReadyScansApi = {
  checkId: string;
  name: string;
  /** Outcome of a single check. */
  status: Status1AgentReadyScansApi;
  message: string;
  howToFix: string | null;
  details: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkResultAgentReadyScansApiSchema: Schema<CheckResultAgentReadyScansApi> =
  s.object<CheckResultAgentReadyScansApi>(
    {
      checkId: s.string(),
      name: s.string(),
      status: status1AgentReadyScansApiSchema,
      message: s.string(),
      howToFix: s.nullable(s.string()),
      details: s.record(s.string(), s.unknown()),
    },
    { additionalProperties: s.json() },
  );
