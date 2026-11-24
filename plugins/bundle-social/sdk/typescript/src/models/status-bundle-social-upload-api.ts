import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusBundleSocialUploadApi = {
  Used: "USED",
  Unused: "UNUSED",
} as const;
export type StatusBundleSocialUploadApi =
  | (typeof StatusBundleSocialUploadApi)[keyof typeof StatusBundleSocialUploadApi]
  | (string & {});

export const statusBundleSocialUploadApiSchema: EnumSchema<StatusBundleSocialUploadApi> =
  s.enumOf<StatusBundleSocialUploadApi>(StatusBundleSocialUploadApi);
