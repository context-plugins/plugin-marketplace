import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metadataSchema, type Metadata } from "./unions/metadata.js";

/** Request to create a task group. */
export type CreateTaskGroupRequest = {
  /** User-provided metadata stored with the task group. */
  metadata?: Metadata;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createTaskGroupRequestSchema: Schema<CreateTaskGroupRequest> = s.object<CreateTaskGroupRequest>(
  {
    metadata: s.optional(s.lazy(() => metadataSchema)),
  },
  { additionalProperties: s.json() },
);
