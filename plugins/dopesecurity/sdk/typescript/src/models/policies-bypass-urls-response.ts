import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data5InternalSchema, data5Schema, type Data5 } from "./data5.js";

export type PoliciesBypassUrlsResponse = {
  data: Data5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const policiesBypassUrlsResponseProperties: s.Shape<PoliciesBypassUrlsResponse> = {
  data: data5InternalSchema,
};

export const policiesBypassUrlsResponseInternalSchema: Schema<PoliciesBypassUrlsResponse> =
  s.object<PoliciesBypassUrlsResponse>(policiesBypassUrlsResponseProperties, {
    additionalProperties: s.json(),
  });

export const policiesBypassUrlsResponseSchema: Schema<PoliciesBypassUrlsResponse> = s.lazySchema(() =>
  s.object<PoliciesBypassUrlsResponse>(
    {
      ...policiesBypassUrlsResponseProperties,
      data: data5Schema,
    },
    { additionalProperties: s.json() },
  ),
);
