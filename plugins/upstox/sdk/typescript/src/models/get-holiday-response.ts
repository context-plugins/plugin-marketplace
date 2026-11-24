import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { holidayDataSchema, type HolidayData } from "./holiday-data.js";
import { statusSchema, type Status } from "./status.js";

export type GetHolidayResponse = {
  status?: Status;
  /** Response data for holiday list */
  data?: HolidayData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getHolidayResponseSchema: Schema<GetHolidayResponse> = s.object<GetHolidayResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.array(s.lazy(() => holidayDataSchema))),
  },
  { additionalProperties: s.json() },
);
