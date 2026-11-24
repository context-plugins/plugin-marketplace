import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StartDate = {
  year?: number;
  month?: number;
  day?: number;
};

const startDateProperties: s.Shape<StartDate> = {
  year: s.optional(s.int()),
  month: s.optional(s.int()),
  day: s.optional(s.int()),
};

export const startDateInternalSchema: Schema<StartDate> = s.object<StartDate>(startDateProperties);

export const startDateSchema: Schema<StartDate> = s.lazySchema(() =>
  s.object<StartDate>({
    ...startDateProperties,
    month: s.optional(s.int().check(s.gte(1), s.lte(12))),
    day: s.optional(s.int().check(s.gte(1), s.lte(31))),
  }),
);
