import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ReportsRequest1 = {
  title?: string;
  slug?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ReportsRequest1Properties: s.Shape<ApiV1ReportsRequest1> = {
  title: s.optional(s.string()),
  slug: s.optional(s.string()),
};

export const apiV1ReportsRequest1InternalSchema: Schema<ApiV1ReportsRequest1> =
  s.object<ApiV1ReportsRequest1>(apiV1ReportsRequest1Properties, { additionalProperties: s.json() });

export const apiV1ReportsRequest1Schema: Schema<ApiV1ReportsRequest1> = s.lazySchema(() =>
  s.object<ApiV1ReportsRequest1>(
    {
      ...apiV1ReportsRequest1Properties,
      title: s.optional(s.string().check(s.minLength(1), s.maxLength(300))),
      slug: s.optional(s.string().check(s.minLength(1), s.maxLength(200))),
    },
    { additionalProperties: s.json() },
  ),
);
