import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

export type Error = {
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

const errorProperties: s.Shape<Error> = {
  hint: s.optional(s.string()),
  docs: s.optional(s.string()),
  requestId: s.optional(s.string()),
  error: s.string(),
  code: codeSchema,
  _keysMap: {
    requestId: "request_id",
  },
};

export const errorInternalSchema: Schema<Error> = s.object<Error>(errorProperties, {
  additionalProperties: s.json(),
});

export const errorSchema: Schema<Error> = s.lazySchema(() =>
  s.object<Error>(
    {
      ...errorProperties,
      docs: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
