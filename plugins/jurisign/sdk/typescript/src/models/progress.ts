import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Progress = {
  signed?: number;
  total?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const progressSchema: Schema<Progress> = s.object<Progress>(
  {
    signed: s.optional(s.int()),
    total: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
