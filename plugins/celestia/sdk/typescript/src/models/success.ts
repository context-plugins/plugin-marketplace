import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Success = {
  /** @default "True" */
  success?: "True";
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const successSchema: Schema<Success> = s.object<Success>(
  {
    success: s.defaulted(s.literal("True"), "True"),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
