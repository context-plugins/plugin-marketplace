import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1EmailCheckRequest = {
  /** The raw message headers (Show original / View source); the body is not needed. */
  headers: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1EmailCheckRequestProperties: s.Shape<V1EmailCheckRequest> = {
  headers: s.string(),
};

export const v1EmailCheckRequestInternalSchema: Schema<V1EmailCheckRequest> = s.object<V1EmailCheckRequest>(
  v1EmailCheckRequestProperties,
  { additionalProperties: s.json() },
);

export const v1EmailCheckRequestSchema: Schema<V1EmailCheckRequest> = s.lazySchema(() =>
  s.object<V1EmailCheckRequest>(
    {
      ...v1EmailCheckRequestProperties,
      headers: s.string().check(s.maxLength(65536)),
    },
    { additionalProperties: s.json() },
  ),
);
