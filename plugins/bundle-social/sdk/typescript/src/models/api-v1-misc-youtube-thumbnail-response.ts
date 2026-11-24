import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  itemBundleSocialMiscApiInternalSchema,
  itemBundleSocialMiscApiSchema,
  type ItemBundleSocialMiscApi,
} from "./item-bundle-social-misc-api.js";

export type ApiV1MiscYoutubeThumbnailResponse = {
  items?: ItemBundleSocialMiscApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscYoutubeThumbnailResponseProperties: s.Shape<ApiV1MiscYoutubeThumbnailResponse> = {
  items: s.optional(s.array(s.lazy(() => itemBundleSocialMiscApiInternalSchema))),
};

export const apiV1MiscYoutubeThumbnailResponseInternalSchema: Schema<ApiV1MiscYoutubeThumbnailResponse> =
  s.object<ApiV1MiscYoutubeThumbnailResponse>(apiV1MiscYoutubeThumbnailResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscYoutubeThumbnailResponseSchema: Schema<ApiV1MiscYoutubeThumbnailResponse> =
  s.lazySchema(() =>
    s.object<ApiV1MiscYoutubeThumbnailResponse>(
      {
        ...apiV1MiscYoutubeThumbnailResponseProperties,
        items: s.optional(s.array(s.lazy(() => itemBundleSocialMiscApiSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
