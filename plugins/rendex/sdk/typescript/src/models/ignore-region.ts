import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IgnoreRegion = {
  x: number;
  y: number;
  /** Pixels (> 0) */
  width: number;
  /** Pixels (> 0) */
  height: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ignoreRegionProperties: s.Shape<IgnoreRegion> = {
  x: s.float64(),
  y: s.float64(),
  width: s.float64(),
  height: s.float64(),
};

export const ignoreRegionInternalSchema: Schema<IgnoreRegion> = s.object<IgnoreRegion>(
  ignoreRegionProperties,
  { additionalProperties: s.json() },
);

export const ignoreRegionSchema: Schema<IgnoreRegion> = s.lazySchema(() =>
  s.object<IgnoreRegion>(
    {
      ...ignoreRegionProperties,
      x: s.float64().check(s.gte(0)),
      y: s.float64().check(s.gte(0)),
      width: s.float64().check(s.gt(0)),
      height: s.float64().check(s.gt(0)),
    },
    { additionalProperties: s.json() },
  ),
);
