import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateTaskCommentRequest = {
  body: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateTaskCommentRequestSchema: Schema<UpdateTaskCommentRequest> =
  s.object<UpdateTaskCommentRequest>(
    {
      body: s.string(),
    },
    { additionalProperties: s.json() },
  );
