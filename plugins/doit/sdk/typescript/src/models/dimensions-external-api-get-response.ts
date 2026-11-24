import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dimensionsTypesSchema, type DimensionsTypes } from "./dimensions-types.js";
import { externalApiGetValueSchema, type ExternalApiGetValue } from "./external-api-get-value.js";

/** Dimension metadata returned by the API. */
export type DimensionsExternalApiGetResponse = {
  id?: string;
  label?: string;
  /**
   * Dimension filter type. Always pair `type` with `id` on scope filters. Discover valid `id` +
   * `type` pairs for your account with `GET /analytics/v1/dimensions`. `allocation_rule` replaces
   * `attribution`; `allocation` replaces `attribution_group`.
   */
  type?: DimensionsTypes;
  values?: ExternalApiGetValue[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dimensionsExternalApiGetResponseSchema: Schema<DimensionsExternalApiGetResponse> =
  s.object<DimensionsExternalApiGetResponse>(
    {
      id: s.optional(s.string()),
      label: s.optional(s.string()),
      type: s.optional(s.lazy(() => dimensionsTypesSchema)),
      values: s.optional(s.array(s.lazy(() => externalApiGetValueSchema))),
    },
    { additionalProperties: s.json() },
  );
