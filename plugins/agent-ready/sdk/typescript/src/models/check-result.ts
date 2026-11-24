import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

/** Result of a single check. */
export type CheckResult = {
  checkId: string;
  name: string;
  /** Outcome of a single check. */
  status: Status;
  message: string;
  howToFix: string | null;
  details: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkResultSchema: Schema<CheckResult> = s.object<CheckResult>(
  {
    checkId: s.string(),
    name: s.string(),
    status: statusSchema,
    message: s.string(),
    howToFix: s.nullable(s.string()),
    details: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
