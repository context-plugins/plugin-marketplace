import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Summary = {
  total: number;
  successful: number;
  failed: number;
  totalCost: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const summaryProperties: s.Shape<Summary> = {
  total: s.int(),
  successful: s.int(),
  failed: s.int(),
  totalCost: s.int(),
};

export const summaryInternalSchema: Schema<Summary> = s.object<Summary>(summaryProperties, {
  additionalProperties: s.json(),
});

export const summarySchema: Schema<Summary> = s.lazySchema(() =>
  s.object<Summary>(
    {
      ...summaryProperties,
      total: s.int().check(s.gte(0)),
      successful: s.int().check(s.gte(0)),
      failed: s.int().check(s.gte(0)),
      totalCost: s.int().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
