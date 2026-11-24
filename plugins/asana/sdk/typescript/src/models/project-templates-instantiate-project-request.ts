import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  projectTemplateInstantiateProjectRequestSchema,
  type ProjectTemplateInstantiateProjectRequest,
} from "./project-template-instantiate-project-request.js";

export type ProjectTemplatesInstantiateProjectRequest = {
  data?: ProjectTemplateInstantiateProjectRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectTemplatesInstantiateProjectRequestSchema: Schema<ProjectTemplatesInstantiateProjectRequest> =
  s.object<ProjectTemplatesInstantiateProjectRequest>(
    {
      data: s.optional(s.lazy(() => projectTemplateInstantiateProjectRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
