import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ReplyDeletion = {
  /** Review ID. */
  id: string;
  /** Always `false`: the deletion is queued. @default "False" */
  deleted?: "False";
  /** @default "queued" */
  status?: "queued";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const replyDeletionSchema: Schema<ReplyDeletion> = s.object<ReplyDeletion>(
  {
    id: s.string(),
    deleted: s.defaulted(s.literal("False"), "False"),
    status: s.defaulted(s.literal("queued"), "queued"),
  },
  { additionalProperties: s.json() },
);
