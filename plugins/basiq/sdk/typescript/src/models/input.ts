import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Echo of the input parameters */
export type Input = {
  /** Echo of the expense value from request */
  expense: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inputSchema: Schema<Input> = s.object<Input>(
  {
    expense: s.string(),
  },
  { additionalProperties: s.json() },
);
