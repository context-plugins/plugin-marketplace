import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dimensionsInternalSchema, dimensionsSchema, type Dimensions } from "./dimensions.js";
import { Type1, type1Schema } from "./type1.js";
import { weight2InternalSchema, weight2Schema, type Weight2 } from "./unions/weight2.js";

export type Package = {
  /**
   * Select custom unless the shipment will use the exact named carrier packaging.
   *
   * @default Type1.Custom
   */
  type?: Type1;
  weight: Weight2;
  dimensions: Dimensions;
  /** @default false */
  irregular?: boolean;
};

const packageProperties: s.Shape<Package> = {
  type: s.defaulted(type1Schema, Type1.Custom),
  weight: weight2InternalSchema,
  dimensions: dimensionsInternalSchema,
  irregular: s.defaulted(s.boolean(), false),
};

export const packageInternalSchema: Schema<Package> = s.object<Package>(packageProperties);

export const packageSchema: Schema<Package> = s.lazySchema(() =>
  s.object<Package>({
    ...packageProperties,
    weight: weight2Schema,
    dimensions: dimensionsSchema,
  }),
);
