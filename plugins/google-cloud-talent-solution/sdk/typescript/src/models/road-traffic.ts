import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the traffic density to use when calculating commute time. */
export const RoadTraffic = {
  RoadTrafficUnspecified: "ROAD_TRAFFIC_UNSPECIFIED",
  TrafficFree: "TRAFFIC_FREE",
  BusyHour: "BUSY_HOUR",
} as const;
export type RoadTraffic = (typeof RoadTraffic)[keyof typeof RoadTraffic] | (string & {});

export const roadTrafficSchema: EnumSchema<RoadTraffic> = s.enumOf<RoadTraffic>(RoadTraffic);
