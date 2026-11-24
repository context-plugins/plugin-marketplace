import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataBundleSocialMiscApiInternalSchema,
  dataBundleSocialMiscApiSchema,
  type DataBundleSocialMiscApi,
} from "./data-bundle-social-misc-api.js";

export type ApiV1MiscInstagramTagsResponse = {
  /**
   * Whether the user is discoverable via Instagram business_discovery (typically Business/Creator).
   * Personal/private accounts can return false even if taggable in media payload.
   */
  exists: boolean;
  /** User data if exists, null otherwise */
  data: DataBundleSocialMiscApi | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscInstagramTagsResponseProperties: s.Shape<ApiV1MiscInstagramTagsResponse> = {
  exists: s.boolean(),
  data: s.nullable(s.lazy(() => dataBundleSocialMiscApiInternalSchema)),
};

export const apiV1MiscInstagramTagsResponseInternalSchema: Schema<ApiV1MiscInstagramTagsResponse> =
  s.object<ApiV1MiscInstagramTagsResponse>(apiV1MiscInstagramTagsResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscInstagramTagsResponseSchema: Schema<ApiV1MiscInstagramTagsResponse> = s.lazySchema(() =>
  s.object<ApiV1MiscInstagramTagsResponse>(
    {
      ...apiV1MiscInstagramTagsResponseProperties,
      data: s.nullable(s.lazy(() => dataBundleSocialMiscApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
