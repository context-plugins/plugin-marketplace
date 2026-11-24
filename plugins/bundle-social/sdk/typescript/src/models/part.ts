import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Part = {
  partNumber: number;
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const partProperties: s.Shape<Part> = {
  partNumber: s.int(),
  url: s.string(),
};

export const partInternalSchema: Schema<Part> = s.object<Part>(partProperties, {
  additionalProperties: s.json(),
});

export const partSchema: Schema<Part> = s.lazySchema(() =>
  s.object<Part>(
    {
      ...partProperties,
      partNumber: s.int().check(s.gte(1), s.lte(10000)),
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
