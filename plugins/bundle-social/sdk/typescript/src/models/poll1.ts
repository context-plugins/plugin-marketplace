import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Poll1 = {
  optionA: string;
  optionB: string;
  optionC?: string | null;
  optionD?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const poll1Schema: Schema<Poll1> = s.object<Poll1>(
  {
    optionA: s.string(),
    optionB: s.string(),
    optionC: s.optionalNullable(s.string()),
    optionD: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
