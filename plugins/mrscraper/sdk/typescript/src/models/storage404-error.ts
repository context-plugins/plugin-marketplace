import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Storage404Error = {
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storage404ErrorSchema: Schema<Storage404Error> = s.object<Storage404Error>(
  {
    error: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
