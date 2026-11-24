import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectTemplateCompactSchema, type ProjectTemplateCompact } from "./project-template-compact.js";

export type ProjectTemplatesResponse1 = {
  data?: ProjectTemplateCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectTemplatesResponse1Schema: Schema<ProjectTemplatesResponse1> =
  s.object<ProjectTemplatesResponse1>(
    {
      data: s.optional(s.array(s.lazy(() => projectTemplateCompactSchema))),
    },
    { additionalProperties: s.json() },
  );
