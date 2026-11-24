import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationSchema, type Pagination } from "./pagination.js";
import { signRequestInternalSchema, signRequestSchema, type SignRequest } from "./sign-request.js";

export type SignRequestsResponse = {
  data?: SignRequest[];
  meta?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signRequestsResponseProperties: s.Shape<SignRequestsResponse> = {
  data: s.optional(s.array(s.lazy(() => signRequestInternalSchema))),
  meta: s.optional(s.lazy(() => paginationSchema)),
};

export const signRequestsResponseInternalSchema: Schema<SignRequestsResponse> =
  s.object<SignRequestsResponse>(signRequestsResponseProperties, { additionalProperties: s.json() });

export const signRequestsResponseSchema: Schema<SignRequestsResponse> = s.lazySchema(() =>
  s.object<SignRequestsResponse>(
    {
      ...signRequestsResponseProperties,
      data: s.optional(s.array(s.lazy(() => signRequestSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
