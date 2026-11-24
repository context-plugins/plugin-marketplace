import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectDuplicateRequestSchema, type ProjectDuplicateRequest } from "./project-duplicate-request.js";

export type ProjectsDuplicateRequest = {
  data?: ProjectDuplicateRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsDuplicateRequestSchema: Schema<ProjectsDuplicateRequest> =
  s.object<ProjectsDuplicateRequest>(
    {
      data: s.optional(s.lazy(() => projectDuplicateRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
