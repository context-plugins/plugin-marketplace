import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1TeamRequest1 = {
  name: string;
  avatarUrl?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1TeamRequest1Properties: s.Shape<ApiV1TeamRequest1> = {
  name: s.string(),
  avatarUrl: s.optionalNullable(s.string()),
};

export const apiV1TeamRequest1InternalSchema: Schema<ApiV1TeamRequest1> = s.object<ApiV1TeamRequest1>(
  apiV1TeamRequest1Properties,
  { additionalProperties: s.json() },
);

export const apiV1TeamRequest1Schema: Schema<ApiV1TeamRequest1> = s.lazySchema(() =>
  s.object<ApiV1TeamRequest1>(
    {
      ...apiV1TeamRequest1Properties,
      name: s.string().check(s.minLength(3), s.maxLength(80)),
    },
    { additionalProperties: s.json() },
  ),
);
