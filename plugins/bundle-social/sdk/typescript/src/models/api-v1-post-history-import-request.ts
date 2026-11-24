import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mediaTypeSchema, type MediaType } from "./media-type.js";
import {
  socialAccountTypeBundleSocialPostImportApiSchema,
  type SocialAccountTypeBundleSocialPostImportApi,
} from "./social-account-type-bundle-social-post-import-api.js";
import { Surface, surfaceSchema } from "./surface.js";

export type ApiV1PostHistoryImportRequest = {
  teamId: string;
  socialAccountType: SocialAccountTypeBundleSocialPostImportApi;
  count: number;
  /** @default true */
  withAnalytics?: boolean;
  /** @default false */
  importCarousels?: boolean;
  /** @default false */
  onlyLatest?: boolean;
  /** @default Surface.All */
  surface?: Surface;
  mediaType?: MediaType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1PostHistoryImportRequestProperties: s.Shape<ApiV1PostHistoryImportRequest> = {
  teamId: s.string(),
  socialAccountType: socialAccountTypeBundleSocialPostImportApiSchema,
  count: s.int(),
  withAnalytics: s.defaulted(s.boolean(), true),
  importCarousels: s.defaulted(s.boolean(), false),
  onlyLatest: s.defaulted(s.boolean(), false),
  surface: s.defaulted(surfaceSchema, Surface.All),
  mediaType: s.optional(s.lazy(() => mediaTypeSchema)),
};

export const apiV1PostHistoryImportRequestInternalSchema: Schema<ApiV1PostHistoryImportRequest> =
  s.object<ApiV1PostHistoryImportRequest>(apiV1PostHistoryImportRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1PostHistoryImportRequestSchema: Schema<ApiV1PostHistoryImportRequest> = s.lazySchema(() =>
  s.object<ApiV1PostHistoryImportRequest>(
    {
      ...apiV1PostHistoryImportRequestProperties,
      count: s.int().check(s.gte(1)),
    },
    { additionalProperties: s.json() },
  ),
);
