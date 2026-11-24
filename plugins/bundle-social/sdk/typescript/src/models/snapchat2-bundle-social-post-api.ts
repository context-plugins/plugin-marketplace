import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status2BundleSocialPostApiSchema,
  type Status2BundleSocialPostApi,
} from "./status2-bundle-social-post-api.js";
import { type5Schema, type Type5 } from "./type5.js";

export type Snapchat2BundleSocialPostApi = {
  id?: string | null;
  mediaId?: string | null;
  mediaIds?: string[] | null;
  type?: Type5 | null;
  profileId?: string | null;
  sourceUploadId?: string | null;
  sourceUploadIds?: string[] | null;
  /** When the media ids were uploaded; Snap expires them after 24h. */
  mediaUploadedAt?: string | null;
  permalink?: string | null;
  status?: Status2BundleSocialPostApi | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const snapchat2BundleSocialPostApiSchema: Schema<Snapchat2BundleSocialPostApi> =
  s.object<Snapchat2BundleSocialPostApi>(
    {
      id: s.optionalNullable(s.string()),
      mediaId: s.optionalNullable(s.string()),
      mediaIds: s.optionalNullable(s.array(s.string())),
      type: s.optionalNullable(s.lazy(() => type5Schema)),
      profileId: s.optionalNullable(s.string()),
      sourceUploadId: s.optionalNullable(s.string()),
      sourceUploadIds: s.optionalNullable(s.array(s.string())),
      mediaUploadedAt: s.optionalNullable(s.string()),
      permalink: s.optionalNullable(s.string()),
      status: s.optionalNullable(s.lazy(() => status2BundleSocialPostApiSchema)),
    },
    { additionalProperties: s.json() },
  );
