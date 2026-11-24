import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metrics1Schema, type Metrics1 } from "./metrics1.js";

export type Item2 = {
  /** The workflow name */
  name?: string;
  /** Workflow metrics */
  metrics?: Metrics1;
  /** Start of the reporting window */
  windowStart?: Date;
  /** End of the reporting window */
  windowEnd?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const item2Schema: Schema<Item2> = s.object<Item2>(
  {
    name: s.optional(s.string()),
    metrics: s.optional(s.lazy(() => metrics1Schema)),
    windowStart: s.optional(s.dateTime()),
    windowEnd: s.optional(s.dateTime()),
    _keysMap: {
      windowStart: "window_start",
      windowEnd: "window_end",
    },
  },
  { additionalProperties: s.json() },
);
