import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlayChart = {
  position: number;
  collection: string;
  category: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const playChartSchema: Schema<PlayChart> = s.object<PlayChart>(
  {
    position: s.int(),
    collection: s.string(),
    category: s.string(),
  },
  { additionalProperties: s.json() },
);
