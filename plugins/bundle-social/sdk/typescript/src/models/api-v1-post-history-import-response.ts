import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mediaTypeSchema, type MediaType } from "./media-type.js";
import {
  statusBundleSocialPostImportApiSchema,
  type StatusBundleSocialPostImportApi,
} from "./status-bundle-social-post-import-api.js";
import { surfaceSchema, type Surface } from "./surface.js";

export type ApiV1PostHistoryImportResponse = {
  id: string;
  teamId: string;
  socialAccountId: string;
  requestedCount: number;
  withAnalytics: boolean;
  importCarousels: boolean;
  onlyLatest: boolean;
  surface?: Surface | null;
  mediaType?: MediaType | null;
  status: StatusBundleSocialPostImportApi;
  postsImported: number;
  analyticsImported: number;
  error?: string | null;
  rateLimitResetAt?: Date | null;
  startedAt?: Date | null;
  completedAt?: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PostHistoryImportResponseSchema: Schema<ApiV1PostHistoryImportResponse> =
  s.object<ApiV1PostHistoryImportResponse>(
    {
      id: s.string(),
      teamId: s.string(),
      socialAccountId: s.string(),
      requestedCount: s.float64(),
      withAnalytics: s.boolean(),
      importCarousels: s.boolean(),
      onlyLatest: s.boolean(),
      surface: s.optionalNullable(s.lazy(() => surfaceSchema)),
      mediaType: s.optionalNullable(s.lazy(() => mediaTypeSchema)),
      status: statusBundleSocialPostImportApiSchema,
      postsImported: s.float64(),
      analyticsImported: s.float64(),
      error: s.optionalNullable(s.string()),
      rateLimitResetAt: s.optionalNullable(s.dateTime()),
      startedAt: s.optionalNullable(s.dateTime()),
      completedAt: s.optionalNullable(s.dateTime()),
      createdAt: s.nullable(s.dateTime()),
      updatedAt: s.nullable(s.dateTime()),
      deletedAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
