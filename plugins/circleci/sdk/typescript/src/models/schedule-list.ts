import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scheduleInternalSchema, scheduleSchema, type Schedule } from "./schedule.js";

export type ScheduleList = {
  /** List of schedules */
  items?: Schedule[];
  /** Token for retrieving the next page */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const scheduleListProperties: s.Shape<ScheduleList> = {
  items: s.optional(s.array(s.lazy(() => scheduleInternalSchema))),
  nextPageToken: s.optional(s.string()),
  _keysMap: {
    nextPageToken: "next_page_token",
  },
};

export const scheduleListInternalSchema: Schema<ScheduleList> = s.object<ScheduleList>(
  scheduleListProperties,
  { additionalProperties: s.json() },
);

export const scheduleListSchema: Schema<ScheduleList> = s.lazySchema(() =>
  s.object<ScheduleList>(
    {
      ...scheduleListProperties,
      items: s.optional(s.array(s.lazy(() => scheduleSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
