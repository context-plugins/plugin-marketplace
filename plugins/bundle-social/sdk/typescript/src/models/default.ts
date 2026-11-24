import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Default = {
  url: string;
  width?: number;
  height?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const defaultProperties: s.Shape<Default> = {
  url: s.string(),
  width: s.optional(s.int()),
  height: s.optional(s.int()),
};

export const defaultInternalSchema: Schema<Default> = s.object<Default>(defaultProperties, {
  additionalProperties: s.json(),
});

export const defaultSchema: Schema<Default> = s.lazySchema(() =>
  s.object<Default>(
    {
      ...defaultProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
