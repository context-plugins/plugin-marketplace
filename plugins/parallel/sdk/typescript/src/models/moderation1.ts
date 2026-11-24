import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { input1Schema, type Input1 } from "./unions/input1.js";
import { output1Schema, type Output1 } from "./unions/output1.js";

/**
 * Moderation results for the request input and generated output, if moderated completions were
 * requested.
 */
export type Moderation1 = {
  input: Input1;
  output: Output1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const moderation1Schema: Schema<Moderation1> = s.object<Moderation1>(
  {
    input: input1Schema,
    output: output1Schema,
  },
  { additionalProperties: s.json() },
);
