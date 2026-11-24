import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type Job = {
  id?: string;
  type?: Type;
  name?: string;
  state?: string;
  command?: string;
  agentQueryRules?: string[];
  webUrl?: string;
  logUrl?: string;
  rawLogUrl?: string;
  exitStatus?: number | null;
  startedAt?: Date | null;
  finishedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const jobProperties: s.Shape<Job> = {
  id: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeSchema)),
  name: s.optional(s.string()),
  state: s.optional(s.string()),
  command: s.optional(s.string()),
  agentQueryRules: s.optional(s.array(s.string())),
  webUrl: s.optional(s.string()),
  logUrl: s.optional(s.string()),
  rawLogUrl: s.optional(s.string()),
  exitStatus: s.optionalNullable(s.int()),
  startedAt: s.optionalNullable(s.dateTime()),
  finishedAt: s.optionalNullable(s.dateTime()),
  _keysMap: {
    agentQueryRules: "agent_query_rules",
    webUrl: "web_url",
    logUrl: "log_url",
    rawLogUrl: "raw_log_url",
    exitStatus: "exit_status",
    startedAt: "started_at",
    finishedAt: "finished_at",
  },
};

export const jobInternalSchema: Schema<Job> = s.object<Job>(jobProperties, {
  additionalProperties: s.json(),
});

export const jobSchema: Schema<Job> = s.lazySchema(() =>
  s.object<Job>(
    {
      ...jobProperties,
      webUrl: s.optional(s.string().check(s.url())),
      logUrl: s.optional(s.string().check(s.url())),
      rawLogUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
