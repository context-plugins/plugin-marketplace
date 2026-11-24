import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modeSchema, type Mode } from "./mode.js";
import {
  statusBrowserUsePublicApiV4SessionsApiSchema,
  type StatusBrowserUsePublicApiV4SessionsApi,
} from "./status-browser-use-public-api-v4-sessions-api.js";
import { attachedfileidsSchema, type Attachedfileids } from "./unions/attachedfileids.js";
import { runidSchema, type Runid } from "./unions/runid.js";

/** One message on a session's queue (a v4_session_input row). */
export type QueuedMessage = {
  id: number;
  sessionId: string;
  runId: Runid;
  mode: Mode;
  status: StatusBrowserUsePublicApiV4SessionsApi;
  text: string;
  attachedFileIds?: Attachedfileids;
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const queuedMessageSchema: Schema<QueuedMessage> = s.object<QueuedMessage>(
  {
    id: s.int(),
    sessionId: s.string(),
    runId: runidSchema,
    mode: modeSchema,
    status: statusBrowserUsePublicApiV4SessionsApiSchema,
    text: s.string(),
    attachedFileIds: s.optional(s.lazy(() => attachedfileidsSchema)),
    createdAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
