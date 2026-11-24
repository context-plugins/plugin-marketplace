import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  projectSaveAsTemplateRequestSchema,
  type ProjectSaveAsTemplateRequest,
} from "./project-save-as-template-request.js";

export type ProjectsSaveAsTemplateRequest = {
  data?: ProjectSaveAsTemplateRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsSaveAsTemplateRequestSchema: Schema<ProjectsSaveAsTemplateRequest> =
  s.object<ProjectsSaveAsTemplateRequest>(
    {
      data: s.optional(s.lazy(() => projectSaveAsTemplateRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
