import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecapKeyMoment = {
  timestamp: number;
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recapKeyMomentSchema: Schema<RecapKeyMoment> = s.object<RecapKeyMoment>(
  {
    timestamp: s.int(),
    text: s.string(),
  },
  { additionalProperties: s.json() },
);
