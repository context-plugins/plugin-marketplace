import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Error body Shortcut returns on 4xx responses. */
export type ShortcutErrorError = {
  message?: string;
  tag?: string;
  errors?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shortcutErrorErrorSchema: Schema<ShortcutErrorError> = s.object<ShortcutErrorError>(
  {
    message: s.optional(s.string()),
    tag: s.optional(s.string()),
    errors: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
