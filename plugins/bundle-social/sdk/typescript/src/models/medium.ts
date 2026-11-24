import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Medium = {
  url: string;
  width?: number;
  height?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const mediumProperties: s.Shape<Medium> = {
  url: s.string(),
  width: s.optional(s.int()),
  height: s.optional(s.int()),
};

export const mediumInternalSchema: Schema<Medium> = s.object<Medium>(mediumProperties, {
  additionalProperties: s.json(),
});

export const mediumSchema: Schema<Medium> = s.lazySchema(() =>
  s.object<Medium>(
    {
      ...mediumProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
