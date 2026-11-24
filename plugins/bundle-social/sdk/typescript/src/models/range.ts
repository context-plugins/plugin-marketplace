import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Range = {
  /** Month in `YYYY-MM` format, inclusive. */
  startMonth: string;
  /** Month in `YYYY-MM` format, inclusive. */
  endMonth: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const rangeProperties: s.Shape<Range> = {
  startMonth: s.string(),
  endMonth: s.string(),
};

export const rangeInternalSchema: Schema<Range> = s.object<Range>(rangeProperties, {
  additionalProperties: s.json(),
});

export const rangeSchema: Schema<Range> = s.lazySchema(() =>
  s.object<Range>(
    {
      ...rangeProperties,
      startMonth: s.string().check(s.pattern("^\\d{4}-(0[1-9]|1[0-2])$")),
      endMonth: s.string().check(s.pattern("^\\d{4}-(0[1-9]|1[0-2])$")),
    },
    { additionalProperties: s.json() },
  ),
);
