import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Details the code and title of the merchant ANZSIC division. */
export type Division1 = {
  code?: string;
  title?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const division1Schema: Schema<Division1> = s.object<Division1>(
  {
    code: s.optional(s.string()),
    title: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
