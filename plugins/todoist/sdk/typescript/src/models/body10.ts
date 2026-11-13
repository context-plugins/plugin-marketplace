import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body10 = {
  /** Content of the comment */
  content: string;
  /** String ID of the project */
  projectId?: string | null;
  /** String ID of the task */
  taskId?: string | null;
  /** A [File attachment](#tag/Sync/Comments/File-Attachments) object */
  attachment?: Record<string, unknown> | null;
  /** Optional list of user IDs to notify about this comment. */
  uidsToNotify?: number[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body10Properties: s.Shape<Body10> = {
  content: s.string(),
  projectId: s.optionalNullable(s.string()),
  taskId: s.optionalNullable(s.string()),
  attachment: s.optionalNullable(s.record(s.string(), s.unknown())),
  uidsToNotify: s.optionalNullable(s.array(s.int())),
  _keysMap: {
    projectId: "project_id",
    taskId: "task_id",
    uidsToNotify: "uids_to_notify",
  },
};

export const body10InternalSchema: Schema<Body10> = s.object<Body10>(body10Properties, {
  additionalProperties: s.json(),
});

export const body10Schema: Schema<Body10> = s.lazySchema(() =>
  s.object<Body10>(
    {
      ...body10Properties,
      content: s.string().check(s.minLength(1), s.maxLength(15000)),
    },
    { additionalProperties: s.json() },
  ),
);
