import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IosChart = {
  position: number;
  collection: string;
  category: string;
  platform: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const iosChartSchema: Schema<IosChart> = s.object<IosChart>(
  {
    position: s.int(),
    collection: s.string(),
    category: s.string(),
    platform: s.string(),
  },
  { additionalProperties: s.json() },
);
