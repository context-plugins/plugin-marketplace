import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Kind4, kind4Schema } from "./kind4.js";

export type FindAllMemoryResult = {
  /** @default Kind4.Findall */
  kind?: Kind4;
  /** ID of the FindAll run. */
  id: string;
  /** When the FindAll result was last updated, as an RFC 3339 timestamp. */
  updatedAt: Date;
  /** Preview of the run's objective. May be truncated. */
  inputExcerpt: string;
  /** Current number of matched entities. */
  matchedCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const findAllMemoryResultSchema: Schema<FindAllMemoryResult> = s.object<FindAllMemoryResult>(
  {
    kind: s.defaulted(kind4Schema, Kind4.Findall),
    id: s.string(),
    updatedAt: s.dateTime(),
    inputExcerpt: s.string(),
    matchedCount: s.int(),
    _keysMap: {
      updatedAt: "updated_at",
      inputExcerpt: "input_excerpt",
      matchedCount: "matched_count",
    },
  },
  { additionalProperties: s.json() },
);
