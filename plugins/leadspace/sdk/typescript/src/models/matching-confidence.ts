import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { level1Schema, type Level1 } from "./level1.js";

export type MatchingConfidence = {
  level?: Level1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const matchingConfidenceSchema: Schema<MatchingConfidence> = s.object<MatchingConfidence>(
  {
    level: s.optional(s.lazy(() => level1Schema)),
  },
  { additionalProperties: s.json() },
);
