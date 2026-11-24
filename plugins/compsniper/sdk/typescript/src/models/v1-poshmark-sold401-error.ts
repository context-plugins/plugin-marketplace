import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1PoshmarkSold401Error = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1PoshmarkSold401ErrorSchema: Schema<V1PoshmarkSold401Error> = s.object<V1PoshmarkSold401Error>(
  {
    error: s.string(),
  },
  { additionalProperties: s.json() },
);
