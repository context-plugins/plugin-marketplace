import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The error shape returned by every non-2xx response. */
export type ErrorError = {
  /** The HTTP status code, repeated in the body. */
  status: number;
  /** A human-readable explanation that tries to name the specific problem. */
  message: string;
  /**
   * Where to look for the correct usage. Present on the `Route not found` response returned for
   * unrecognized paths.
   */
  documentation?: string;
  /**
   * Recovery suggestions, such as the host that actually serves the requested path. Present on the
   * `Route not found` response returned for unrecognized paths.
   */
  hints?: string[];
  /** Per-field validation failures, when the error came from schema validation. */
  details?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const errorErrorProperties: s.Shape<ErrorError> = {
  status: s.int(),
  message: s.string(),
  documentation: s.optional(s.string()),
  hints: s.optional(s.array(s.string())),
  details: s.optional(s.array(s.record(s.string(), s.unknown()))),
};

export const errorErrorInternalSchema: Schema<ErrorError> = s.object<ErrorError>(errorErrorProperties, {
  additionalProperties: s.json(),
});

export const errorErrorSchema: Schema<ErrorError> = s.lazySchema(() =>
  s.object<ErrorError>(
    {
      ...errorErrorProperties,
      documentation: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
