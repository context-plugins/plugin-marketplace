import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { result1Schema, type Result1 } from "./result1.js";

export type Step2 = {
  title?: string;
  status?: string;
  result?: Result1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const step2Schema: Schema<Step2> = s.object<Step2>(
  {
    title: s.optional(s.string()),
    status: s.optional(s.string()),
    result: s.optional(s.lazy(() => result1Schema)),
  },
  { additionalProperties: s.json() },
);
