import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request body for marking an action item as complete or incomplete. */
export type MarkActionItemCompleteRequest = {
  completed: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const markActionItemCompleteRequestSchema: Schema<MarkActionItemCompleteRequest> =
  s.object<MarkActionItemCompleteRequest>(
    {
      completed: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
