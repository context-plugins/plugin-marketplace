import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type5Schema, type Type5 } from "./type5.js";
import { timestampSchema, type Timestamp } from "./unions/timestamp.js";

/** A message for a task run progress update. */
export type TaskRunProgressMessageEvent = {
  /** Event type; always starts with 'task_run.progress_msg'. */
  type: Type5;
  /** Progress update message. */
  message: string;
  /** Timestamp of the message. */
  timestamp: Timestamp;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskRunProgressMessageEventSchema: Schema<TaskRunProgressMessageEvent> =
  s.object<TaskRunProgressMessageEvent>(
    {
      type: type5Schema,
      message: s.string(),
      timestamp: timestampSchema,
    },
    { additionalProperties: s.json() },
  );
