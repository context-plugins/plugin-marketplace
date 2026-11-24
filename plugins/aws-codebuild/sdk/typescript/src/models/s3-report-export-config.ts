import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { packaging1Schema, type Packaging1 } from "./packaging1.js";

export type S3ReportExportConfig = {
  /** The name of the S3 bucket where the raw data of a report are exported. */
  bucket?: string;
  /**
   * The Amazon Web Services account identifier of the owner of the Amazon S3 bucket. This allows
   * report data to be exported to an Amazon S3 bucket that is owned by an account other than the
   * account running the build.
   */
  bucketOwner?: string;
  /** The path to the exported report's raw data results. */
  path?: string;
  /**
   * The type of build output artifact to create. Valid values include: NONE: CodeBuild creates the
   * raw data in the output bucket. This is the default if packaging is not specified. ZIP:
   * CodeBuild creates a ZIP file with the raw data in the output bucket.
   */
  packaging?: Packaging1;
  /** The encryption key for the report's encrypted raw data. */
  encryptionKey?: string;
  /** A boolean value that specifies if the results of a report are encrypted. */
  encryptionDisabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const s3ReportExportConfigSchema: Schema<S3ReportExportConfig> = s.object<S3ReportExportConfig>(
  {
    bucket: s.optional(s.string()),
    bucketOwner: s.optional(s.string()),
    path: s.optional(s.string()),
    packaging: s.optional(s.lazy(() => packaging1Schema)),
    encryptionKey: s.optional(s.string()),
    encryptionDisabled: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
