import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { timeSchema, type Time } from "./unions/time.js";

/** A single line of container output. */
export type EnvLogEntry = {
  stream: string;
  log: string;
  time?: Time;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const envLogEntrySchema: Schema<EnvLogEntry> = s.object<EnvLogEntry>(
  {
    stream: s.string(),
    log: s.string(),
    time: s.optional(s.lazy(() => timeSchema)),
  },
  { additionalProperties: s.json() },
);
