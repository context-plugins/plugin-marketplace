import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { serviceAccountTokenSchema, type ServiceAccountToken } from "./service-account-token.js";

/** API tokens of a service account, at most 10. */
export type ServiceAccountTokensResponse = {
  /** The service account's non-deleted API tokens. */
  items: ServiceAccountToken[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const serviceAccountTokensResponseProperties: s.Shape<ServiceAccountTokensResponse> = {
  items: s.array(s.lazy(() => serviceAccountTokenSchema)),
};

export const serviceAccountTokensResponseInternalSchema: Schema<ServiceAccountTokensResponse> =
  s.object<ServiceAccountTokensResponse>(serviceAccountTokensResponseProperties, {
    additionalProperties: s.json(),
  });

export const serviceAccountTokensResponseSchema: Schema<ServiceAccountTokensResponse> = s.lazySchema(() =>
  s.object<ServiceAccountTokensResponse>(
    {
      ...serviceAccountTokensResponseProperties,
      items: s.array(s.lazy(() => serviceAccountTokenSchema)).check(s.maxLength(10)),
    },
    { additionalProperties: s.json() },
  ),
);
