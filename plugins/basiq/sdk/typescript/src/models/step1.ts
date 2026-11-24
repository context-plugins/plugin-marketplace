import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result1Schema, type Result1 } from "./result1.js";

export type Step1 = {
  title?: string;
  status?: string;
  result?: Result1 | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const step1Schema: Schema<Step1> = s.object<Step1>(
  {
    title: s.optional(s.string()),
    status: s.optional(s.string()),
    result: s.optionalNullable(s.lazy(() => result1Schema)),
  },
  { additionalProperties: s.json() },
);
