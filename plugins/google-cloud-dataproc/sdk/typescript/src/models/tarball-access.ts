import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. (Optional) The access type to the diagnostic tarball. If not specified, falls back to
 * default access of the bucket
 */
export const TarballAccess = {
  TarballAccessUnspecified: "TARBALL_ACCESS_UNSPECIFIED",
  GoogleCloudSupport: "GOOGLE_CLOUD_SUPPORT",
  GoogleDataprocDiagnose: "GOOGLE_DATAPROC_DIAGNOSE",
} as const;
export type TarballAccess = (typeof TarballAccess)[keyof typeof TarballAccess] | (string & {});

export const tarballAccessSchema: EnumSchema<TarballAccess> = s.enumOf<TarballAccess>(TarballAccess);
