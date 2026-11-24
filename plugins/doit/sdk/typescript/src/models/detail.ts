import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Detail = {
  issue: string;
  field?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const detailProperties: s.Shape<Detail> = {
  issue: s.string(),
  field: s.optional(s.string()),
};

export const detailInternalSchema: Schema<Detail> = s.object<Detail>(detailProperties, {
  additionalProperties: s.json(),
});

export const detailSchema: Schema<Detail> = s.lazySchema(() =>
  s.object<Detail>(
    {
      ...detailProperties,
      issue: s.string().check(s.pattern("^[a-z][a-z0-9_]*$")),
    },
    { additionalProperties: s.json() },
  ),
);
