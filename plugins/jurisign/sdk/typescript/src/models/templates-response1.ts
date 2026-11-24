import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { templateDetailedSchema, type TemplateDetailed } from "./template-detailed.js";

export type TemplatesResponse1 = {
  data?: TemplateDetailed;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const templatesResponse1Schema: Schema<TemplatesResponse1> = s.object<TemplatesResponse1>(
  {
    data: s.optional(s.lazy(() => templateDetailedSchema)),
  },
  { additionalProperties: s.json() },
);
