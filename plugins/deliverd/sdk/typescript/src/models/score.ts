import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Score = {
  control: string;
  passed: boolean;
  reason: string;
  evidenceId: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scoreSchema: Schema<Score> = s.object<Score>(
  {
    control: s.string(),
    passed: s.boolean(),
    reason: s.string(),
    evidenceId: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
