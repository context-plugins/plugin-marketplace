import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { callInternalSchema, callSchema, type Call } from "./call.js";

export type ApiV1OutboundCallsResponse = {
  calls?: Call[];
  /** Pass as `cursor` to fetch the next page. Null on the last page. */
  nextCursor?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1OutboundCallsResponseProperties: s.Shape<ApiV1OutboundCallsResponse> = {
  calls: s.optional(s.array(s.lazy(() => callInternalSchema))),
  nextCursor: s.optionalNullable(s.string()),
};

export const apiV1OutboundCallsResponseInternalSchema: Schema<ApiV1OutboundCallsResponse> =
  s.object<ApiV1OutboundCallsResponse>(apiV1OutboundCallsResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1OutboundCallsResponseSchema: Schema<ApiV1OutboundCallsResponse> = s.lazySchema(() =>
  s.object<ApiV1OutboundCallsResponse>(
    {
      ...apiV1OutboundCallsResponseProperties,
      calls: s.optional(s.array(s.lazy(() => callSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
