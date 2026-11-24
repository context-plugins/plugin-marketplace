import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SuccessResponse = {
  /** Whether the operation was successful */
  success?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const successResponseSchema: Schema<SuccessResponse> = s.object<SuccessResponse>(
  {
    success: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
