import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Factor1 = {
  label: string;
  status: string;
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const factor1Schema: Schema<Factor1> = s.object<Factor1>(
  {
    label: s.string(),
    status: s.string(),
    detail: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
