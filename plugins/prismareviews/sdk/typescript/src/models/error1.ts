import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type Error1 = {
  /** Family of the error, from the HTTP status. */
  type: Type;
  /** Stable, machine-readable code. Branch on this, not on `message`. */
  code: string;
  /** Human-readable explanation. It can change. */
  message: string;
  /** `true` for 429 and 5xx: the same request can succeed later. */
  retryable: boolean;
  /** The `req_…` ID, also in the `Request-Id` header. */
  requestId: string;
  /** Description of this code. */
  docsUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const error1Properties: s.Shape<Error1> = {
  type: typeSchema,
  code: s.string(),
  message: s.string(),
  retryable: s.boolean(),
  requestId: s.string(),
  docsUrl: s.string(),
  _keysMap: {
    requestId: "request_id",
    docsUrl: "docs_url",
  },
};

export const error1InternalSchema: Schema<Error1> = s.object<Error1>(error1Properties, {
  additionalProperties: s.json(),
});

export const error1Schema: Schema<Error1> = s.lazySchema(() =>
  s.object<Error1>(
    {
      ...error1Properties,
      docsUrl: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
