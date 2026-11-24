import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Dimensions = {
  length: number;
  width: number;
  height: number;
  /** @default "in" */
  unit?: "in";
};

const dimensionsProperties: s.Shape<Dimensions> = {
  length: s.float64(),
  width: s.float64(),
  height: s.float64(),
  unit: s.defaulted(s.literal("in"), "in"),
};

export const dimensionsInternalSchema: Schema<Dimensions> = s.object<Dimensions>(dimensionsProperties);

export const dimensionsSchema: Schema<Dimensions> = s.lazySchema(() =>
  s.object<Dimensions>({
    ...dimensionsProperties,
    length: s.float64().check(s.gt(0), s.lte(120)),
    width: s.float64().check(s.gt(0), s.lte(120)),
    height: s.float64().check(s.gt(0), s.lte(120)),
  }),
);
