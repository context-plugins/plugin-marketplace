import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformTypeSchema, type PlatformType } from "./platform-type.js";

export type ApiV1AnalyticsPostForceRequest = {
  postId?: string | null;
  platformType?: PlatformType | null;
  importedPostId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AnalyticsPostForceRequestSchema: Schema<ApiV1AnalyticsPostForceRequest> =
  s.object<ApiV1AnalyticsPostForceRequest>(
    {
      postId: s.optionalNullable(s.string()),
      platformType: s.optionalNullable(s.lazy(() => platformTypeSchema)),
      importedPostId: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
