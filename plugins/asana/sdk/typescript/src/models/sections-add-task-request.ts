import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sectionTaskInsertRequestSchema,
  type SectionTaskInsertRequest,
} from "./section-task-insert-request.js";

export type SectionsAddTaskRequest = {
  data?: SectionTaskInsertRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sectionsAddTaskRequestSchema: Schema<SectionsAddTaskRequest> = s.object<SectionsAddTaskRequest>(
  {
    data: s.optional(s.lazy(() => sectionTaskInsertRequestSchema)),
  },
  { additionalProperties: s.json() },
);
