import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Timestamp = {
  end: number;
  start: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timestampSchema: Schema<Timestamp> = s.object<Timestamp>(
  {
    end: s.float64(),
    start: s.float64(),
  },
  { additionalProperties: s.json() },
);
