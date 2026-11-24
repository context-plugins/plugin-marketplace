import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

export type ErrorError = {
  /**
   * One sentence on what to do next. Present only on the errors a client meets while exploring
   * (`not_found`, `method_not_allowed`); other errors omit it. Human-readable — do not branch on
   * it.
   */
  hint?: string;
  /** Where to read more. Present together with `hint`, omitted otherwise. */
  docs?: string;
  /**
   * Same value as the X-Request-ID response header, repeated here because clients log bodies more
   * often than headers. Quote it in a support request. Present on every error, including the
   * `not_found` and `method_not_allowed` answers for a path or method that has no route.
   */
  requestId?: string;
  /** Human-readable detail. May be reworded — do not branch on it. */
  error: string;
  /**
   * Stable machine-readable slug (contract — never changes). The `ambiguous_domain` code is emitted
   * only by the MCP tools (when a `site` domain matches more than one stored site), not by /query.
   */
  code: Code;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const errorErrorProperties: s.Shape<ErrorError> = {
  hint: s.optional(s.string()),
  docs: s.optional(s.string()),
  requestId: s.optional(s.string()),
  error: s.string(),
  code: codeSchema,
  _keysMap: {
    requestId: "request_id",
  },
};

export const errorErrorInternalSchema: Schema<ErrorError> = s.object<ErrorError>(errorErrorProperties, {
  additionalProperties: s.json(),
});

export const errorErrorSchema: Schema<ErrorError> = s.lazySchema(() =>
  s.object<ErrorError>(
    {
      ...errorErrorProperties,
      docs: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
