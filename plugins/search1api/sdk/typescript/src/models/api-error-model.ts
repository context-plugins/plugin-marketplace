import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Search1API error. Every JSON error carries `ok: false`, `error` (a short status-derived label)
 * and `message` (human-readable detail); validation failures add `errors`. Payment challenges may
 * use RFC 9457 problem detail fields.
 */
export type ApiErrorModel = {
  ok?: boolean;
  error?: string;
  message?: string;
  errors?: Error[];
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiErrorModelProperties: s.Shape<ApiErrorModel> = {
  ok: s.optional(s.boolean()),
  error: s.optional(s.string()),
  message: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  type: s.optional(s.string()),
  title: s.optional(s.string()),
  status: s.optional(s.int()),
  detail: s.optional(s.string()),
};

export const apiErrorModelInternalSchema: Schema<ApiErrorModel> = s.object<ApiErrorModel>(
  apiErrorModelProperties,
  { additionalProperties: s.json() },
);

export const apiErrorModelSchema: Schema<ApiErrorModel> = s.lazySchema(() =>
  s.object<ApiErrorModel>(
    {
      ...apiErrorModelProperties,
      type: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
