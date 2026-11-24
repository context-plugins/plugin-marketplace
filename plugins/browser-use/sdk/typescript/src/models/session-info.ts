import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { titleSchema, type Title } from "./unions/title.js";
import { workspaceidSchema, type Workspaceid } from "./unions/workspaceid.js";

/**
 * Lightweight metadata for one V4 session (its most recent run).
 *
 * Deliberately slim — just what a session list needs (open the conversation, show a label + status
 * + time). The heavy per-run fields (result, error, token/cost totals) live on RunSummary and
 * aren't repeated here.
 */
export type SessionInfo = {
  sessionId: string;
  workspaceId: Workspaceid;
  latestRunId: string;
  task: string;
  title: Title;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionInfoSchema: Schema<SessionInfo> = s.object<SessionInfo>(
  {
    sessionId: s.string(),
    workspaceId: workspaceidSchema,
    latestRunId: s.string(),
    task: s.string(),
    title: titleSchema,
    status: statusSchema,
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
