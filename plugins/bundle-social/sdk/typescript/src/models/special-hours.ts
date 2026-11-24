import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  specialHourPeriodInternalSchema,
  specialHourPeriodSchema,
  type SpecialHourPeriod,
} from "./special-hour-period.js";

export type SpecialHours = {
  specialHourPeriods?: SpecialHourPeriod[];
};

const specialHoursProperties: s.Shape<SpecialHours> = {
  specialHourPeriods: s.optional(s.array(s.lazy(() => specialHourPeriodInternalSchema))),
};

export const specialHoursInternalSchema: Schema<SpecialHours> =
  s.object<SpecialHours>(specialHoursProperties);

export const specialHoursSchema: Schema<SpecialHours> = s.lazySchema(() =>
  s.object<SpecialHours>({
    ...specialHoursProperties,
    specialHourPeriods: s.optional(s.array(s.lazy(() => specialHourPeriodSchema))),
  }),
);
