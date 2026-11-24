import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Kind1, kind1Schema } from "./kind1.js";

export type TaskMemoryResult = {
  /** @default Kind1.Task */
  kind?: Kind1;
  /** ID of the task run. */
  id: string;
  /** When the run completed, as an RFC 3339 timestamp. */
  updatedAt: Date;
  /** Preview of the run's input. May be truncated. */
  inputExcerpt: string;
  /** Preview of the run's output. May be truncated. */
  outputExcerpt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskMemoryResultSchema: Schema<TaskMemoryResult> = s.object<TaskMemoryResult>(
  {
    kind: s.defaulted(kind1Schema, Kind1.Task),
    id: s.string(),
    updatedAt: s.dateTime(),
    inputExcerpt: s.string(),
    outputExcerpt: s.string(),
    _keysMap: {
      updatedAt: "updated_at",
      inputExcerpt: "input_excerpt",
      outputExcerpt: "output_excerpt",
    },
  },
  { additionalProperties: s.json() },
);
