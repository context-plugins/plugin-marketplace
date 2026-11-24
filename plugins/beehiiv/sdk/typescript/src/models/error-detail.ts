import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorDetail = {
  message: string;
  code: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorDetailSchema: Schema<ErrorDetail> = s.object<ErrorDetail>(
  {
    message: s.string(),
    code: s.string(),
  },
  { additionalProperties: s.json() },
);
