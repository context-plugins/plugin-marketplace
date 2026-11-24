import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error = {
  /** A short code indicating the error code returned. @default "bad_request" */
  code?: "bad_request";
  /** A human readable explanation of what went wrong. */
  message: string;
  /** A link to our documentation with more details about this error code */
  docUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    code: s.defaulted(s.literal("bad_request"), "bad_request"),
    message: s.string(),
    docUrl: s.optional(s.string()),
    _keysMap: {
      docUrl: "doc_url",
    },
  },
  { additionalProperties: s.json() },
);
