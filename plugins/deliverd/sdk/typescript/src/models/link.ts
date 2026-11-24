import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Link = {
  label: string;
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const linkProperties: s.Shape<Link> = {
  label: s.string(),
  url: s.string(),
};

export const linkInternalSchema: Schema<Link> = s.object<Link>(linkProperties, {
  additionalProperties: s.json(),
});

export const linkSchema: Schema<Link> = s.lazySchema(() =>
  s.object<Link>(
    {
      ...linkProperties,
      label: s.string().check(s.minLength(1), s.maxLength(100)),
      url: s.string().check(s.maxLength(2000), s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
