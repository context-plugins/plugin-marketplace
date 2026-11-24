import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RunEvent = {
  runId: string;
  id: number;
  ts: Date;
  type: string;
  data: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runEventSchema: Schema<RunEvent> = s.object<RunEvent>(
  {
    runId: s.string(),
    id: s.int(),
    ts: s.dateTime(),
    type: s.string(),
    data: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
