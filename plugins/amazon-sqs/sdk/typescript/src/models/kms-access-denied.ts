import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type KmsAccessDenied = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const kmsAccessDeniedSchema: Schema<KmsAccessDenied> = s.object<KmsAccessDenied>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
