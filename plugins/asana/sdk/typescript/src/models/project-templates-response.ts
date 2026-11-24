import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectTemplateBaseSchema, type ProjectTemplateBase } from "./project-template-base.js";

export type ProjectTemplatesResponse = {
  data?: ProjectTemplateBase;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectTemplatesResponseSchema: Schema<ProjectTemplatesResponse> =
  s.object<ProjectTemplatesResponse>(
    {
      data: s.optional(s.lazy(() => projectTemplateBaseSchema)),
    },
    { additionalProperties: s.json() },
  );
