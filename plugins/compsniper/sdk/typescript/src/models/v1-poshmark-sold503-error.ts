import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1PoshmarkSold503Error = {
  error: string;
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1PoshmarkSold503ErrorSchema: Schema<V1PoshmarkSold503Error> = s.object<V1PoshmarkSold503Error>(
  {
    error: s.string(),
    detail: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
