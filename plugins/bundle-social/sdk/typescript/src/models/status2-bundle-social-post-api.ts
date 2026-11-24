import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status2BundleSocialPostApi = {
  MediaUploaded: "MEDIA_UPLOADED",
  MediaProcessing: "MEDIA_PROCESSING",
  Published: "PUBLISHED",
} as const;
export type Status2BundleSocialPostApi =
  | (typeof Status2BundleSocialPostApi)[keyof typeof Status2BundleSocialPostApi]
  | (string & {});

export const status2BundleSocialPostApiSchema: EnumSchema<Status2BundleSocialPostApi> =
  s.enumOf<Status2BundleSocialPostApi>(Status2BundleSocialPostApi);
