import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BatchGetFleetsInput = {
  /** The names or ARNs of the compute fleets. */
  names: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchGetFleetsInputSchema: Schema<BatchGetFleetsInput> = s.object<BatchGetFleetsInput>(
  {
    names: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
