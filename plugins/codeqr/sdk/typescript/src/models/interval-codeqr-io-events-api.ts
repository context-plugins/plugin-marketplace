import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The interval to retrieve events for. Takes precedence over start and end. If undefined, defaults
 * to 24h.
 */
export const IntervalCodeqrIoEventsApi = {
  _24H: "24h",
  _7D: "7d",
  _30D: "30d",
  _90D: "90d",
  Ytd: "ytd",
  _1Y: "1y",
  All: "all",
} as const;
export type IntervalCodeqrIoEventsApi =
  | (typeof IntervalCodeqrIoEventsApi)[keyof typeof IntervalCodeqrIoEventsApi]
  | (string & {});

export const intervalCodeqrIoEventsApiSchema: EnumSchema<IntervalCodeqrIoEventsApi> =
  s.enumOf<IntervalCodeqrIoEventsApi>(IntervalCodeqrIoEventsApi);
