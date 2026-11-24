import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResourceNotFoundError = {
  message?: string;
  resourceName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceNotFoundErrorSchema: Schema<ResourceNotFoundError> = s.object<ResourceNotFoundError>(
  {
    message: s.optional(s.string()),
    resourceName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
