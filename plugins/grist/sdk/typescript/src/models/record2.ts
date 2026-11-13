import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Record2 = {
  id: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const record2Schema: Schema<Record2> = s.object<Record2>(
  {
    id: s.float64(),
  },
  { additionalProperties: s.json() },
);
