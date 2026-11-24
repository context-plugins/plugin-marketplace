import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Response = {
  name?: string;
  version?: string;
  status?: string;
  docs?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseSchema: Schema<Response> = s.object<Response>(
  {
    name: s.optional(s.string()),
    version: s.optional(s.string()),
    status: s.optional(s.string()),
    docs: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
