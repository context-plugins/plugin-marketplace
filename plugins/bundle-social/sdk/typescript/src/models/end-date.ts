import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EndDate = {
  year?: number;
  month?: number;
  day?: number;
};

const endDateProperties: s.Shape<EndDate> = {
  year: s.optional(s.int()),
  month: s.optional(s.int()),
  day: s.optional(s.int()),
};

export const endDateInternalSchema: Schema<EndDate> = s.object<EndDate>(endDateProperties);

export const endDateSchema: Schema<EndDate> = s.lazySchema(() =>
  s.object<EndDate>({
    ...endDateProperties,
    month: s.optional(s.int().check(s.gte(1), s.lte(12))),
    day: s.optional(s.int().check(s.gte(1), s.lte(31))),
  }),
);
