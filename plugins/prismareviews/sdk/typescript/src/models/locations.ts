import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Locations = {
  /** Active live locations (test and disconnected ones are not counted). */
  used: number;
  /** Locations of your plan plus the extra locations you pay for. */
  limit: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationsSchema: Schema<Locations> = s.object<Locations>(
  {
    used: s.int(),
    limit: s.int(),
  },
  { additionalProperties: s.json() },
);
