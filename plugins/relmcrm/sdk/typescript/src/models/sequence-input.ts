import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stepSchema, type Step } from "./step.js";

export type SequenceInput = {
  name: string;
  channel?: string;
  connection?: string;
  trigger?: Record<string, unknown>;
  exitWhen?: Record<string, unknown>[];
  steps: Step[];
  enrollExisting?: boolean;
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sequenceInputSchema: Schema<SequenceInput> = s.object<SequenceInput>(
  {
    name: s.string(),
    channel: s.optional(s.string()),
    connection: s.optional(s.string()),
    trigger: s.optional(s.record(s.string(), s.unknown())),
    exitWhen: s.optional(s.array(s.record(s.string(), s.unknown()))),
    steps: s.array(s.lazy(() => stepSchema)),
    enrollExisting: s.optional(s.boolean()),
    enabled: s.optional(s.boolean()),
    _keysMap: {
      exitWhen: "exit_when",
      enrollExisting: "enroll_existing",
    },
  },
  { additionalProperties: s.json() },
);
