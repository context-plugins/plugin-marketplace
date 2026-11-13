import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body29 = {
  /** Curated template slug or saved template ID with a `UT_` prefix. */
  templateId: string;
  /** Locale for curated template content, with the template's English fallback. @default "en" */
  locale?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body29Properties: s.Shape<Body29> = {
  templateId: s.string(),
  locale: s.defaulted(s.string(), "en"),
  _keysMap: {
    templateId: "template_id",
  },
};

export const body29InternalSchema: Schema<Body29> = s.object<Body29>(body29Properties, {
  additionalProperties: s.json(),
});

export const body29Schema: Schema<Body29> = s.lazySchema(() =>
  s.object<Body29>(
    {
      ...body29Properties,
      locale: s.defaulted(s.string().check(s.maxLength(10)), "en"),
    },
    { additionalProperties: s.json() },
  ),
);
