import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataInternalSchema, dataSchema, type Data } from "./data.js";

export type V1AccountResponse = {
  success?: boolean;
  data?: Data;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1AccountResponseProperties: s.Shape<V1AccountResponse> = {
  success: s.optional(s.boolean()),
  data: s.optional(s.lazy(() => dataInternalSchema)),
};

export const v1AccountResponseInternalSchema: Schema<V1AccountResponse> = s.object<V1AccountResponse>(
  v1AccountResponseProperties,
  { additionalProperties: s.json() },
);

export const v1AccountResponseSchema: Schema<V1AccountResponse> = s.lazySchema(() =>
  s.object<V1AccountResponse>(
    {
      ...v1AccountResponseProperties,
      data: s.optional(s.lazy(() => dataSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
