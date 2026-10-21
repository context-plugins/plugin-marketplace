import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authTypeOptionsAzureBlobAuthTypeSecretSchema,
  type AuthTypeOptionsAzureBlobAuthTypeSecret,
} from "./auth-type-options-azure-blob-auth-type-secret.js";

export type GoogleCloudStorageAuthTypeSecret = {
  /** Discriminator value. */
  authType?: AuthTypeOptionsAzureBlobAuthTypeSecret;
  /** Select or create a stored text secret that references your credentials */
  textSecret: string;
};

export const googleCloudStorageAuthTypeSecretSchema: Schema<GoogleCloudStorageAuthTypeSecret> =
  s.object<GoogleCloudStorageAuthTypeSecret>({
    authType: s.optional(s.lazy(() => authTypeOptionsAzureBlobAuthTypeSecretSchema)),
    textSecret: s.string(),
  });
