import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TextInputSpecification = {
  /** Time for which a bot waits before re-prompting a customer for text input. */
  startTimeoutMs: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const textInputSpecificationSchema: Schema<TextInputSpecification> = s.object<TextInputSpecification>(
  {
    startTimeoutMs: s.int(),
  },
  { additionalProperties: s.json() },
);
