import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exchangeTimingDataSchema, type ExchangeTimingData } from "./exchange-timing-data.js";
import { holidayTypeSchema, type HolidayType } from "./holiday-type.js";

export type HolidayData = {
  date?: Date;
  description?: string;
  holidayType?: HolidayType;
  closedExchanges?: string[];
  openExchanges?: ExchangeTimingData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const holidayDataSchema: Schema<HolidayData> = s.object<HolidayData>(
  {
    date: s.optional(s.dateTime()),
    description: s.optional(s.string()),
    holidayType: s.optional(s.lazy(() => holidayTypeSchema)),
    closedExchanges: s.optional(s.array(s.string())),
    openExchanges: s.optional(s.array(s.lazy(() => exchangeTimingDataSchema))),
    _keysMap: {
      holidayType: "holiday_type",
      closedExchanges: "closed_exchanges",
      openExchanges: "open_exchanges",
    },
  },
  { additionalProperties: s.json() },
);
