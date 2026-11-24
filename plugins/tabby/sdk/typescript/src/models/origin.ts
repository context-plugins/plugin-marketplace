import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Origin city and airport */
export type Origin = {
  /** Origin IATA airport code, for example - JFK */
  airCode: string;
  /** Origin city code, for example - NYC */
  cityCode: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const originSchema: Schema<Origin> = s.object<Origin>(
  {
    airCode: s.string(),
    cityCode: s.string(),
    _keysMap: {
      airCode: "air_code",
      cityCode: "city_code",
    },
  },
  { additionalProperties: s.json() },
);
