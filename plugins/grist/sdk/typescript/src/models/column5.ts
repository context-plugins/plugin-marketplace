import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Column5 = {
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const column5Schema: Schema<Column5> = s.object<Column5>(
  {
    id: s.string(),
  },
  { additionalProperties: s.json() },
);
