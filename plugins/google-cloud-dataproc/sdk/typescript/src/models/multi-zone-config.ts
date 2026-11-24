import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { targetShapeSchema, type TargetShape } from "./target-shape.js";

/**
 * Configuration for multi-zonal clusters that can create instances across multiple Zones within the
 * Region.
 */
export type MultiZoneConfig = {
  /** Optional. The distribution shape of the nodes in the multi-zonal cluster. */
  targetShape?: TargetShape;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const multiZoneConfigSchema: Schema<MultiZoneConfig> = s.object<MultiZoneConfig>(
  {
    targetShape: s.optional(s.lazy(() => targetShapeSchema)),
  },
  { additionalProperties: s.json() },
);
