import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  item4BundleSocialMiscApiSchema,
  type Item4BundleSocialMiscApi,
} from "./item4-bundle-social-misc-api.js";

export type ApiV1MiscYoutubeRegionsResponse = {
  kind?: string;
  etag?: string;
  items?: Item4BundleSocialMiscApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscYoutubeRegionsResponseSchema: Schema<ApiV1MiscYoutubeRegionsResponse> =
  s.object<ApiV1MiscYoutubeRegionsResponse>(
    {
      kind: s.optional(s.string()),
      etag: s.optional(s.string()),
      items: s.optional(s.array(s.lazy(() => item4BundleSocialMiscApiSchema))),
    },
    { additionalProperties: s.json() },
  );
