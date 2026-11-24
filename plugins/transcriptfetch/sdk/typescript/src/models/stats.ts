import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Engagement counts where the source exposes them. */
export type Stats = {
  plays?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statsSchema: Schema<Stats> = s.object<Stats>(
  {
    plays: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);
