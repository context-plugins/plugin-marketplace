import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authTypeOptionsGoogleCloudStorageAuthTypeAutoSchema,
  type AuthTypeOptionsGoogleCloudStorageAuthTypeAuto,
} from "./auth-type-options-google-cloud-storage-auth-type-auto.js";

export type S3AwsAuthenticationMethodAuto = {
  /** Discriminator value. */
  awsAuthenticationMethod?: AuthTypeOptionsGoogleCloudStorageAuthTypeAuto;
};

export const s3AwsAuthenticationMethodAutoSchema: Schema<S3AwsAuthenticationMethodAuto> =
  s.object<S3AwsAuthenticationMethodAuto>({
    awsAuthenticationMethod: s.optional(s.lazy(() => authTypeOptionsGoogleCloudStorageAuthTypeAutoSchema)),
  });
