import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data61InternalSchema, data61Schema, type Data61 } from "./unions/data61.js";

export type PoliciesBypassUrlsRequest = {
  data: Data61;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const policiesBypassUrlsRequestProperties: s.Shape<PoliciesBypassUrlsRequest> = {
  data: data61InternalSchema,
};

export const policiesBypassUrlsRequestInternalSchema: Schema<PoliciesBypassUrlsRequest> =
  s.object<PoliciesBypassUrlsRequest>(policiesBypassUrlsRequestProperties, {
    additionalProperties: s.json(),
  });

export const policiesBypassUrlsRequestSchema: Schema<PoliciesBypassUrlsRequest> = s.lazySchema(() =>
  s.object<PoliciesBypassUrlsRequest>(
    {
      ...policiesBypassUrlsRequestProperties,
      data: data61Schema,
    },
    { additionalProperties: s.json() },
  ),
);
