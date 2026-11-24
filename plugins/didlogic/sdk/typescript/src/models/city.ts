import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type City = {
  /** City identifier */
  id: number;
  /** City name and state/province */
  name: string;
  /** Area code for this city */
  areaCode: string;
  /** Number of available DIDs in this city */
  count: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cityProperties: s.Shape<City> = {
  id: s.int(),
  name: s.string(),
  areaCode: s.string(),
  count: s.int(),
  _keysMap: {
    areaCode: "area_code",
  },
};

export const cityInternalSchema: Schema<City> = s.object<City>(cityProperties, {
  additionalProperties: s.json(),
});

export const citySchema: Schema<City> = s.lazySchema(() =>
  s.object<City>(
    {
      ...cityProperties,
      count: s.int().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
