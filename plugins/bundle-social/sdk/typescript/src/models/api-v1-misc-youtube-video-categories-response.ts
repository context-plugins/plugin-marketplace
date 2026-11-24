import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  item3BundleSocialMiscApiSchema,
  type Item3BundleSocialMiscApi,
} from "./item3-bundle-social-misc-api.js";

export type ApiV1MiscYoutubeVideoCategoriesResponse = {
  kind?: string;
  etag?: string;
  items?: Item3BundleSocialMiscApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscYoutubeVideoCategoriesResponseSchema: Schema<ApiV1MiscYoutubeVideoCategoriesResponse> =
  s.object<ApiV1MiscYoutubeVideoCategoriesResponse>(
    {
      kind: s.optional(s.string()),
      etag: s.optional(s.string()),
      items: s.optional(s.array(s.lazy(() => item3BundleSocialMiscApiSchema))),
    },
    { additionalProperties: s.json() },
  );
