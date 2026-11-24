import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CloseTime = {
  hours?: number;
  minutes?: number;
  seconds?: number;
  nanos?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const closeTimeProperties: s.Shape<CloseTime> = {
  hours: s.optional(s.int()),
  minutes: s.optional(s.int()),
  seconds: s.optional(s.int()),
  nanos: s.optional(s.int()),
};

export const closeTimeInternalSchema: Schema<CloseTime> = s.object<CloseTime>(closeTimeProperties, {
  additionalProperties: s.json(),
});

export const closeTimeSchema: Schema<CloseTime> = s.lazySchema(() =>
  s.object<CloseTime>(
    {
      ...closeTimeProperties,
      hours: s.optional(s.int().check(s.gte(0), s.lte(23))),
      minutes: s.optional(s.int().check(s.gte(0), s.lte(59))),
      seconds: s.optional(s.int().check(s.gte(0), s.lte(59))),
      nanos: s.optional(s.int().check(s.gte(0), s.lte(999999999))),
    },
    { additionalProperties: s.json() },
  ),
);
