import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1WholesaleNumbersRequest = {
  /** From `/wholesale/areas` */
  areaId: string;
  /** Host, `{number}` template, or full sip URI (public hosts only). */
  deliverTo: string;
  friendlyName?: string;
  /** Pass when ordering outside the US. */
  countryId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1WholesaleNumbersRequestProperties: s.Shape<ApiV1WholesaleNumbersRequest> = {
  areaId: s.string(),
  deliverTo: s.string(),
  friendlyName: s.optional(s.string()),
  countryId: s.optional(s.string()),
};

export const apiV1WholesaleNumbersRequestInternalSchema: Schema<ApiV1WholesaleNumbersRequest> =
  s.object<ApiV1WholesaleNumbersRequest>(apiV1WholesaleNumbersRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1WholesaleNumbersRequestSchema: Schema<ApiV1WholesaleNumbersRequest> = s.lazySchema(() =>
  s.object<ApiV1WholesaleNumbersRequest>(
    {
      ...apiV1WholesaleNumbersRequestProperties,
      friendlyName: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
