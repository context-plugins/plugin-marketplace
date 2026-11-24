import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { periodInternalSchema, periodSchema, type Period } from "./period.js";

export type MoreHour = {
  hoursTypeId?: string;
  periods?: Period[];
};

const moreHourProperties: s.Shape<MoreHour> = {
  hoursTypeId: s.optional(s.string()),
  periods: s.optional(s.array(s.lazy(() => periodInternalSchema))),
};

export const moreHourInternalSchema: Schema<MoreHour> = s.object<MoreHour>(moreHourProperties);

export const moreHourSchema: Schema<MoreHour> = s.lazySchema(() =>
  s.object<MoreHour>({
    ...moreHourProperties,
    periods: s.optional(s.array(s.lazy(() => periodSchema))),
  }),
);
