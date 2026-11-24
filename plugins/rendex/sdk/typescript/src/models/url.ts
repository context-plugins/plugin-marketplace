import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Url = {
  /** Webpage URL to capture */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const urlProperties: s.Shape<Url> = {
  url: s.string(),
};

export const urlInternalSchema: Schema<Url> = s.object<Url>(urlProperties, {
  additionalProperties: s.json(),
});

export const urlSchema: Schema<Url> = s.lazySchema(() =>
  s.object<Url>(
    {
      ...urlProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
