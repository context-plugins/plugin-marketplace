import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { closeDaySchema, type CloseDay } from "./close-day.js";
import { openDaySchema, type OpenDay } from "./open-day.js";
import { closeTime1InternalSchema, closeTime1Schema, type CloseTime1 } from "./unions/close-time1.js";
import { openTime1InternalSchema, openTime1Schema, type OpenTime1 } from "./unions/open-time1.js";

export type Period = {
  openDay?: OpenDay;
  openTime?: OpenTime1;
  closeDay?: CloseDay;
  closeTime?: CloseTime1;
};

const periodProperties: s.Shape<Period> = {
  openDay: s.optional(s.lazy(() => openDaySchema)),
  openTime: s.optional(s.lazy(() => openTime1InternalSchema)),
  closeDay: s.optional(s.lazy(() => closeDaySchema)),
  closeTime: s.optional(s.lazy(() => closeTime1InternalSchema)),
};

export const periodInternalSchema: Schema<Period> = s.object<Period>(periodProperties);

export const periodSchema: Schema<Period> = s.lazySchema(() =>
  s.object<Period>({
    ...periodProperties,
    openTime: s.optional(s.lazy(() => openTime1Schema)),
    closeTime: s.optional(s.lazy(() => closeTime1Schema)),
  }),
);
