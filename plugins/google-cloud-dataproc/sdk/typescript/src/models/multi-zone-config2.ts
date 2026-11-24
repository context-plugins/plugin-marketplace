import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { targetShapeSchema, type TargetShape } from "./target-shape.js";

/**
 * Optional. Controls how instances within this Cluster are allowed to exist in multiple Zones
 * within the Region. Only one of zone_uri or multi_zone_config must be set.
 */
export type MultiZoneConfig2 = {
  /** Optional. The distribution shape of the nodes in the multi-zonal cluster. */
  targetShape?: TargetShape;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const multiZoneConfig2Schema: Schema<MultiZoneConfig2> = s.object<MultiZoneConfig2>(
  {
    targetShape: s.optional(s.lazy(() => targetShapeSchema)),
  },
  { additionalProperties: s.json() },
);
