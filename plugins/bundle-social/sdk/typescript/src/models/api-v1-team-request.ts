import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1TeamRequest = {
  name?: string;
  avatarUrl?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1TeamRequestProperties: s.Shape<ApiV1TeamRequest> = {
  name: s.optional(s.string()),
  avatarUrl: s.optionalNullable(s.string()),
};

export const apiV1TeamRequestInternalSchema: Schema<ApiV1TeamRequest> = s.object<ApiV1TeamRequest>(
  apiV1TeamRequestProperties,
  { additionalProperties: s.json() },
);

export const apiV1TeamRequestSchema: Schema<ApiV1TeamRequest> = s.lazySchema(() =>
  s.object<ApiV1TeamRequest>(
    {
      ...apiV1TeamRequestProperties,
      name: s.optional(s.string().check(s.minLength(3), s.maxLength(80))),
    },
    { additionalProperties: s.json() },
  ),
);
