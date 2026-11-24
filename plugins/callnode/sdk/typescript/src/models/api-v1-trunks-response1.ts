import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1TrunksResponse1 = {
  success?: boolean;
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1TrunksResponse1Schema: Schema<ApiV1TrunksResponse1> = s.object<ApiV1TrunksResponse1>(
  {
    success: s.optional(s.boolean()),
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
