import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Standard error response. */
export type ErrorErrorContentstackPersonalizeManagementAttributesApi = {
  /** Human-readable description of the error. */
  message?: string;
  /** HTTP status code. */
  status?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorErrorContentstackPersonalizeManagementAttributesApiSchema: Schema<ErrorErrorContentstackPersonalizeManagementAttributesApi> =
  s.object<ErrorErrorContentstackPersonalizeManagementAttributesApi>(
    {
      message: s.optional(s.string()),
      status: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
