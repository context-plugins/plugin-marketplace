import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storedAttachmentSchema, type StoredAttachment } from "./stored-attachment.js";

/**
 * The persisted shape of ``task_versions.brief``.
 *
 * Drafts are no longer authored; the brief-archive worker is the only remaining writer.
 */
export type TaskBrief = {
  prompt: string;
  attachments?: StoredAttachment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskBriefSchema: Schema<TaskBrief> = s.object<TaskBrief>(
  {
    prompt: s.string(),
    attachments: s.optional(s.array(s.lazy(() => storedAttachmentSchema))),
  },
  { additionalProperties: s.json() },
);
