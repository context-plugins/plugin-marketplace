import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authTypeOptionsAzureBlobAuthTypeManualSchema,
  type AuthTypeOptionsAzureBlobAuthTypeManual,
} from "./auth-type-options-azure-blob-auth-type-manual.js";

export type S3AwsAuthenticationMethodManual = {
  /** Discriminator value. */
  awsAuthenticationMethod?: AuthTypeOptionsAzureBlobAuthTypeManual;
  /**
   * Access key. If not present, will fall back to env.AWS_ACCESS_KEY_ID, or to the metadata
   * endpoint for IAM creds. Optional when running on AWS. This value can be a constant or a
   * JavaScript expression.
   */
  awsApiKey?: string;
  /**
   * Secret key. If not present, will fall back to env.AWS_SECRET_ACCESS_KEY, or to the metadata
   * endpoint for IAM creds. Optional when running on AWS. This value can be a constant or a
   * JavaScript expression.
   */
  awsSecretKey?: string;
};

export const s3AwsAuthenticationMethodManualSchema: Schema<S3AwsAuthenticationMethodManual> =
  s.object<S3AwsAuthenticationMethodManual>({
    awsAuthenticationMethod: s.optional(s.lazy(() => authTypeOptionsAzureBlobAuthTypeManualSchema)),
    awsApiKey: s.optional(s.string()),
    awsSecretKey: s.optional(s.string()),
  });
