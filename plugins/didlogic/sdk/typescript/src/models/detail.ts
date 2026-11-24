import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Detail = {
  code: string;
  message: string;
  field: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detailSchema: Schema<Detail> = s.object<Detail>(
  {
    code: s.string(),
    message: s.string(),
    field: s.string(),
  },
  { additionalProperties: s.json() },
);
