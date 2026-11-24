import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Part2 = {
  partNumber: number;
  etag: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const part2Properties: s.Shape<Part2> = {
  partNumber: s.int(),
  etag: s.string(),
};

export const part2InternalSchema: Schema<Part2> = s.object<Part2>(part2Properties, {
  additionalProperties: s.json(),
});

export const part2Schema: Schema<Part2> = s.lazySchema(() =>
  s.object<Part2>(
    {
      ...part2Properties,
      partNumber: s.int().check(s.gte(1), s.lte(10000)),
      etag: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
