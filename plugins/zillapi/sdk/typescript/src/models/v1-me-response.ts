import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { meInternalSchema, meSchema, type Me } from "./me.js";

export type V1MeResponse = {
  data?: Me;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1MeResponseProperties: s.Shape<V1MeResponse> = {
  data: s.optional(s.lazy(() => meInternalSchema)),
  requestId: s.optional(s.string()),
  _keysMap: {
    requestId: "request_id",
  },
};

export const v1MeResponseInternalSchema: Schema<V1MeResponse> = s.object<V1MeResponse>(
  v1MeResponseProperties,
  { additionalProperties: s.json() },
);

export const v1MeResponseSchema: Schema<V1MeResponse> = s.lazySchema(() =>
  s.object<V1MeResponse>(
    {
      ...v1MeResponseProperties,
      data: s.optional(s.lazy(() => meSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
