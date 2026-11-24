import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  templateDeliverdDevTemplatesApiSchema,
  type TemplateDeliverdDevTemplatesApi,
} from "./template-deliverd-dev-templates-api.js";

export type ApiV1TemplatesResponse = {
  templates: TemplateDeliverdDevTemplatesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1TemplatesResponseSchema: Schema<ApiV1TemplatesResponse> = s.object<ApiV1TemplatesResponse>(
  {
    templates: s.array(s.lazy(() => templateDeliverdDevTemplatesApiSchema)),
  },
  { additionalProperties: s.json() },
);
