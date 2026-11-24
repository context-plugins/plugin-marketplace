import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationSchema, type Pagination } from "./pagination.js";
import { publicFormInternalSchema, publicFormSchema, type PublicForm } from "./public-form.js";

export type PublicFormsResponse = {
  data?: PublicForm[];
  meta?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const publicFormsResponseProperties: s.Shape<PublicFormsResponse> = {
  data: s.optional(s.array(s.lazy(() => publicFormInternalSchema))),
  meta: s.optional(s.lazy(() => paginationSchema)),
};

export const publicFormsResponseInternalSchema: Schema<PublicFormsResponse> = s.object<PublicFormsResponse>(
  publicFormsResponseProperties,
  { additionalProperties: s.json() },
);

export const publicFormsResponseSchema: Schema<PublicFormsResponse> = s.lazySchema(() =>
  s.object<PublicFormsResponse>(
    {
      ...publicFormsResponseProperties,
      data: s.optional(s.array(s.lazy(() => publicFormSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
