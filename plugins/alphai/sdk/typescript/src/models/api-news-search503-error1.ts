import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { extraSchema, type Extra } from "./extra.js";

export type ApiNewsSearch503Error1 = {
  message?: string;
  extra?: Extra;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiNewsSearch503Error1Schema: Schema<ApiNewsSearch503Error1> = s.object<ApiNewsSearch503Error1>(
  {
    message: s.optional(s.string()),
    extra: s.optional(s.lazy(() => extraSchema)),
  },
  { additionalProperties: s.json() },
);
