import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Search1API error. Every JSON error carries `ok: false`, `error` (a short status-derived label)
 * and `message` (human-readable detail); validation failures add `errors`. Payment challenges may
 * use RFC 9457 problem detail fields.
 */
export type ApiErrorError = {
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

const apiErrorErrorProperties: s.Shape<ApiErrorError> = {
  ok: s.optional(s.boolean()),
  error: s.optional(s.string()),
  message: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  type: s.optional(s.string()),
  title: s.optional(s.string()),
  status: s.optional(s.int()),
  detail: s.optional(s.string()),
};

export const apiErrorErrorInternalSchema: Schema<ApiErrorError> = s.object<ApiErrorError>(
  apiErrorErrorProperties,
  { additionalProperties: s.json() },
);

export const apiErrorErrorSchema: Schema<ApiErrorError> = s.lazySchema(() =>
  s.object<ApiErrorError>(
    {
      ...apiErrorErrorProperties,
      type: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
