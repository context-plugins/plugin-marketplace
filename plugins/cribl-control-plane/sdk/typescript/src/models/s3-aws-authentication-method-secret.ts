import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authTypeOptionsAzureBlobAuthTypeSecretSchema,
  type AuthTypeOptionsAzureBlobAuthTypeSecret,
} from "./auth-type-options-azure-blob-auth-type-secret.js";

export type S3AwsAuthenticationMethodSecret = {
  /** Discriminator value. */
  awsAuthenticationMethod?: AuthTypeOptionsAzureBlobAuthTypeSecret;
  /** Select or create a stored secret that references AWS access key and secret key. */
  awsSecret?: string;
};

export const s3AwsAuthenticationMethodSecretSchema: Schema<S3AwsAuthenticationMethodSecret> =
  s.object<S3AwsAuthenticationMethodSecret>({
    awsAuthenticationMethod: s.optional(s.lazy(() => authTypeOptionsAzureBlobAuthTypeSecretSchema)),
    awsSecret: s.optional(s.string()),
  });
