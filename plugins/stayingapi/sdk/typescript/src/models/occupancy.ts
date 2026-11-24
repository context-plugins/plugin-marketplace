import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Occupancy = {
  adults: number;
  children: number;
  childAges: number[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const occupancyProperties: s.Shape<Occupancy> = {
  adults: s.int(),
  children: s.int(),
  childAges: s.array(s.int()),
};

export const occupancyInternalSchema: Schema<Occupancy> = s.object<Occupancy>(occupancyProperties, {
  additionalProperties: s.json(),
});

export const occupancySchema: Schema<Occupancy> = s.lazySchema(() =>
  s.object<Occupancy>(
    {
      ...occupancyProperties,
      adults: s.int().check(s.gt(0), s.lte(9007199254740991)),
      children: s.int().check(s.gte(0), s.lte(9007199254740991)),
      childAges: s.array(s.int().check(s.gte(0), s.lte(9007199254740991))),
    },
    { additionalProperties: s.json() },
  ),
);
