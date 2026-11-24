import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { effectSchema, type Effect } from "./effect.js";

export type Result = {
  name: string;
  passed: boolean;
  effect: Effect;
  rule: string | null;
  problem: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultSchema: Schema<Result> = s.object<Result>(
  {
    name: s.string(),
    passed: s.boolean(),
    effect: effectSchema,
    rule: s.nullable(s.string()),
    problem: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
