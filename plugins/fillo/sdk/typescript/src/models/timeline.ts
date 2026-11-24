import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Timeline = {
  day: string;
  count: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timelineSchema: Schema<Timeline> = s.object<Timeline>(
  {
    day: s.string(),
    count: s.int(),
  },
  { additionalProperties: s.json() },
);
