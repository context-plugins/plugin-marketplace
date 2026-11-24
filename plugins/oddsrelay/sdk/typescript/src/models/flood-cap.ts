import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FloodCap = {
  per10S: number;
  perMin: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const floodCapSchema: Schema<FloodCap> = s.object<FloodCap>(
  {
    per10S: s.int(),
    perMin: s.int(),
    _keysMap: {
      per10S: "per_10s",
      perMin: "per_min",
    },
  },
  { additionalProperties: s.json() },
);
