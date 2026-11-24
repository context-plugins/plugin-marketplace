import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Sitelinks1 = {
  /** Sitelink URL */
  url?: string;
  /** Sitelink title */
  title?: string;
  /** Sitelink description */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const sitelinks1Properties: s.Shape<Sitelinks1> = {
  url: s.optional(s.string()),
  title: s.optional(s.string()),
  description: s.optional(s.string()),
};

export const sitelinks1InternalSchema: Schema<Sitelinks1> = s.object<Sitelinks1>(sitelinks1Properties, {
  additionalProperties: s.json(),
});

export const sitelinks1Schema: Schema<Sitelinks1> = s.lazySchema(() =>
  s.object<Sitelinks1>(
    {
      ...sitelinks1Properties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
