import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Venue = {
  key: string;
  name: string;
  regions: string[];
  isExchange: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const venueSchema: Schema<Venue> = s.object<Venue>(
  {
    key: s.string(),
    name: s.string(),
    regions: s.array(s.string()),
    isExchange: s.boolean(),
    _keysMap: {
      isExchange: "is_exchange",
    },
  },
  { additionalProperties: s.json() },
);
