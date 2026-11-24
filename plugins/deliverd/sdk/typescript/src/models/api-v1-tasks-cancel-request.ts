import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1TasksCancelRequest = {
  /** Why it was called off, for whoever reads the history */
  reason?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1TasksCancelRequestProperties: s.Shape<ApiV1TasksCancelRequest> = {
  reason: s.optional(s.string()),
};

export const apiV1TasksCancelRequestInternalSchema: Schema<ApiV1TasksCancelRequest> =
  s.object<ApiV1TasksCancelRequest>(apiV1TasksCancelRequestProperties, { additionalProperties: s.json() });

export const apiV1TasksCancelRequestSchema: Schema<ApiV1TasksCancelRequest> = s.lazySchema(() =>
  s.object<ApiV1TasksCancelRequest>(
    {
      ...apiV1TasksCancelRequestProperties,
      reason: s.optional(s.string().check(s.maxLength(2000))),
    },
    { additionalProperties: s.json() },
  ),
);
