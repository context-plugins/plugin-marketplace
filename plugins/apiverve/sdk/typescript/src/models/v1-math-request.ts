import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1MathRequest = {
  /** Operation to perform */
  operation: string;
  /** First number */
  a: number;
  /** Second number */
  b: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1MathRequestSchema: Schema<V1MathRequest> = s.object<V1MathRequest>(
  {
    operation: s.string(),
    a: s.float64(),
    b: s.float64(),
  },
  { additionalProperties: s.json() },
);
