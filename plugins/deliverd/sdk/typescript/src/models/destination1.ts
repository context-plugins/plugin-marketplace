import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Destination1 = {
  type: string;
  id: string;
  label?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const destination1Schema: Schema<Destination1> = s.object<Destination1>(
  {
    type: s.string(),
    id: s.string(),
    label: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
