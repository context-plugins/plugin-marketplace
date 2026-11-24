import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SideTasks = {
  open: number;
  done: number;
  awaiting: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sideTasksSchema: Schema<SideTasks> = s.object<SideTasks>(
  {
    open: s.float64(),
    done: s.float64(),
    awaiting: s.float64(),
  },
  { additionalProperties: s.json() },
);
