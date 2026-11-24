import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { faxInternalSchema, faxSchema, type Fax } from "./fax.js";

export type ApiV1FaxesResponse = {
  data?: Fax[];
  nextCursor?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1FaxesResponseProperties: s.Shape<ApiV1FaxesResponse> = {
  data: s.optional(s.array(s.lazy(() => faxInternalSchema))),
  nextCursor: s.optionalNullable(s.string()),
};

export const apiV1FaxesResponseInternalSchema: Schema<ApiV1FaxesResponse> = s.object<ApiV1FaxesResponse>(
  apiV1FaxesResponseProperties,
  { additionalProperties: s.json() },
);

export const apiV1FaxesResponseSchema: Schema<ApiV1FaxesResponse> = s.lazySchema(() =>
  s.object<ApiV1FaxesResponse>(
    {
      ...apiV1FaxesResponseProperties,
      data: s.optional(s.array(s.lazy(() => faxSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
