import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { inputSchema, type Input } from "./input.js";
import { status37Schema, type Status37 } from "./status37.js";

export type Step32 = {
  id: string;
  executionId: string;
  stepId?: string | null;
  status: Status37;
  attemptCount: number;
  input?: Input;
  output?: Record<string, unknown>;
  error?: Error | null;
  startedAt?: Date | null;
  completedAt?: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const step32Schema: Schema<Step32> = s.object<Step32>(
  {
    id: s.string(),
    executionId: s.string(),
    stepId: s.optionalNullable(s.string()),
    status: status37Schema,
    attemptCount: s.float64(),
    input: s.optional(s.lazy(() => inputSchema)),
    output: s.optional(s.record(s.string(), s.unknown())),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    startedAt: s.optionalNullable(s.dateTime()),
    completedAt: s.optionalNullable(s.dateTime()),
    createdAt: s.nullable(s.dateTime()),
    updatedAt: s.nullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
