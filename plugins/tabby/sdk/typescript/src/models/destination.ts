import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Destination city and airport */
export type Destination = {
  /** Destination IATA airport code, for example - LAX */
  airCode: string;
  /** Destination city code, for example - LAX */
  cityCode: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const destinationSchema: Schema<Destination> = s.object<Destination>(
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
