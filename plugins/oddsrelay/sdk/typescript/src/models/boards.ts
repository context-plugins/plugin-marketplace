import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Boards = {
  processedAt: string | null;
  /** The board's odds age, seconds. */
  ageS: number | null;
  /** Events. */
  count: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const boardsSchema: Schema<Boards> = s.object<Boards>(
  {
    processedAt: s.nullable(s.string()),
    ageS: s.nullable(s.float64()),
    count: s.nullable(s.int()),
    _keysMap: {
      processedAt: "processed_at",
      ageS: "age_s",
    },
  },
  { additionalProperties: s.json() },
);
