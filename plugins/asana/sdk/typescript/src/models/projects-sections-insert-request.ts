import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  projectSectionInsertRequestSchema,
  type ProjectSectionInsertRequest,
} from "./project-section-insert-request.js";

export type ProjectsSectionsInsertRequest = {
  data?: ProjectSectionInsertRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsSectionsInsertRequestSchema: Schema<ProjectsSectionsInsertRequest> =
  s.object<ProjectsSectionsInsertRequest>(
    {
      data: s.optional(s.lazy(() => projectSectionInsertRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
