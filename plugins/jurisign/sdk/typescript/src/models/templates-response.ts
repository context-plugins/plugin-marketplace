import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationSchema, type Pagination } from "./pagination.js";
import {
  templateJuriSignTemplatesApiSchema,
  type TemplateJuriSignTemplatesApi,
} from "./template-juri-sign-templates-api.js";

export type TemplatesResponse = {
  data?: TemplateJuriSignTemplatesApi[];
  meta?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const templatesResponseSchema: Schema<TemplatesResponse> = s.object<TemplatesResponse>(
  {
    data: s.optional(s.array(s.lazy(() => templateJuriSignTemplatesApiSchema))),
    meta: s.optional(s.lazy(() => paginationSchema)),
  },
  { additionalProperties: s.json() },
);
