import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { periodInternalSchema, periodSchema, type Period } from "./period.js";

export type RegularHours = {
  periods?: Period[];
};

const regularHoursProperties: s.Shape<RegularHours> = {
  periods: s.optional(s.array(s.lazy(() => periodInternalSchema))),
};

export const regularHoursInternalSchema: Schema<RegularHours> =
  s.object<RegularHours>(regularHoursProperties);

export const regularHoursSchema: Schema<RegularHours> = s.lazySchema(() =>
  s.object<RegularHours>({
    ...regularHoursProperties,
    periods: s.optional(s.array(s.lazy(() => periodSchema))),
  }),
);
