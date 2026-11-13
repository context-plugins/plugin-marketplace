import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Error body Todoist returns on 4xx responses. */
export type TodoistErrorError = {
  error?: string;
  errorCode?: number;
  errorExtra?: Record<string, unknown>;
  httpCode?: number;
  errorTag?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const todoistErrorErrorSchema: Schema<TodoistErrorError> = s.object<TodoistErrorError>(
  {
    error: s.optional(s.string()),
    errorCode: s.optional(s.int()),
    errorExtra: s.optional(s.record(s.string(), s.unknown())),
    httpCode: s.optional(s.int()),
    errorTag: s.optional(s.string()),
    _keysMap: {
      errorCode: "error_code",
      errorExtra: "error_extra",
      httpCode: "http_code",
      errorTag: "error_tag",
    },
  },
  { additionalProperties: s.json() },
);
