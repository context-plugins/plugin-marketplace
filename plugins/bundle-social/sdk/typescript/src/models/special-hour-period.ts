import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { endDateInternalSchema, endDateSchema, type EndDate } from "./end-date.js";
import { startDateInternalSchema, startDateSchema, type StartDate } from "./start-date.js";
import { closeTime1InternalSchema, closeTime1Schema, type CloseTime1 } from "./unions/close-time1.js";
import { openTime1InternalSchema, openTime1Schema, type OpenTime1 } from "./unions/open-time1.js";

export type SpecialHourPeriod = {
  startDate?: StartDate;
  endDate?: EndDate;
  openTime?: OpenTime1;
  closeTime?: CloseTime1;
  closed?: boolean;
};

const specialHourPeriodProperties: s.Shape<SpecialHourPeriod> = {
  startDate: s.optional(s.lazy(() => startDateInternalSchema)),
  endDate: s.optional(s.lazy(() => endDateInternalSchema)),
  openTime: s.optional(s.lazy(() => openTime1InternalSchema)),
  closeTime: s.optional(s.lazy(() => closeTime1InternalSchema)),
  closed: s.optional(s.boolean()),
};

export const specialHourPeriodInternalSchema: Schema<SpecialHourPeriod> =
  s.object<SpecialHourPeriod>(specialHourPeriodProperties);

export const specialHourPeriodSchema: Schema<SpecialHourPeriod> = s.lazySchema(() =>
  s.object<SpecialHourPeriod>({
    ...specialHourPeriodProperties,
    startDate: s.optional(s.lazy(() => startDateSchema)),
    endDate: s.optional(s.lazy(() => endDateSchema)),
    openTime: s.optional(s.lazy(() => openTime1Schema)),
    closeTime: s.optional(s.lazy(() => closeTime1Schema)),
  }),
);
