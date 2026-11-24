import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Seniority = {
  id?: number;
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const senioritySchema: Schema<Seniority> = s.object<Seniority>(
  {
    id: s.optional(s.float64()),
    value: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
