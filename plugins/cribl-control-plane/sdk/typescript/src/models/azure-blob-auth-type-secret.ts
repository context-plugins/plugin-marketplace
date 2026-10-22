import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authTypeOptionsAzureBlobAuthTypeSecretSchema,
  type AuthTypeOptionsAzureBlobAuthTypeSecret,
} from "./auth-type-options-azure-blob-auth-type-secret.js";

export type AzureBlobAuthTypeSecret = {
  /** Discriminator value. */
  authType?: AuthTypeOptionsAzureBlobAuthTypeSecret;
  /** Text secret */
  textSecret: string;
};

export const azureBlobAuthTypeSecretSchema: Schema<AzureBlobAuthTypeSecret> =
  s.object<AzureBlobAuthTypeSecret>({
    authType: s.optional(s.lazy(() => authTypeOptionsAzureBlobAuthTypeSecretSchema)),
    textSecret: s.string(),
  });
