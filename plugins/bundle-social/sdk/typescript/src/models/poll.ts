import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Poll = {
  options: string[];
  durationMinutes: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const pollProperties: s.Shape<Poll> = {
  options: s.array(s.string()),
  durationMinutes: s.int(),
};

export const pollInternalSchema: Schema<Poll> = s.object<Poll>(pollProperties, {
  additionalProperties: s.json(),
});

export const pollSchema: Schema<Poll> = s.lazySchema(() =>
  s.object<Poll>(
    {
      ...pollProperties,
      options: s
        .array(s.string().check(s.minLength(1), s.maxLength(25)))
        .check(s.minLength(2), s.maxLength(4)),
      durationMinutes: s.int().check(s.gte(5), s.lte(10080)),
    },
    { additionalProperties: s.json() },
  ),
);
