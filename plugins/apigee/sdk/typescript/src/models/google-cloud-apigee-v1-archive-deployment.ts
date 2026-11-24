import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Archive Deployment information. */
export type GoogleCloudApigeeV1ArchiveDeployment = {
  /**
   * Output only. The time at which the Archive Deployment was created in milliseconds since the
   * epoch.
   */
  createdAt?: string;
  /**
   * Output only. The time at which the Archive Deployment was updated in milliseconds since the
   * epoch.
   */
  updatedAt?: string;
  /**
   * User-supplied key-value pairs used to organize ArchiveDeployments. Label keys must be between 1
   * and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the
   * following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values must be between 1 and 63
   * characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following
   * PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated
   * with a given store.
   */
  labels?: Record<string, string>;
  /**
   * Name of the Archive Deployment in the following format:
   * `organizations/{org}/environments/{env}/archiveDeployments/{id}`.
   */
  name?: string;
  /**
   * Input only. The Google Cloud Storage signed URL returned from GenerateUploadUrl and used to
   * upload the Archive zip file.
   */
  gcsUri?: string;
  /**
   * Output only. A reference to the LRO that created this Archive Deployment in the following
   * format: `organizations/{org}/operations/{id}`
   */
  operation?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ArchiveDeploymentSchema: Schema<GoogleCloudApigeeV1ArchiveDeployment> =
  s.object<GoogleCloudApigeeV1ArchiveDeployment>(
    {
      createdAt: s.optional(s.string()),
      updatedAt: s.optional(s.string()),
      labels: s.optional(s.record(s.string(), s.string())),
      name: s.optional(s.string()),
      gcsUri: s.optional(s.string()),
      operation: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
