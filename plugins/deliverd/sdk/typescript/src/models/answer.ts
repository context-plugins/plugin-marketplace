import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kind1Schema, type Kind1 } from "./kind1.js";

export type Answer = {
  question: string;
  kind: Kind1;
  value?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const answerSchema: Schema<Answer> = s.object<Answer>(
  {
    question: s.string(),
    kind: kind1Schema,
    value: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
