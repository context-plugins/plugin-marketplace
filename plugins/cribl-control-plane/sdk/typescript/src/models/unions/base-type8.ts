import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  azureBlobAuthTypeClientCertSchema,
  type AzureBlobAuthTypeClientCert,
} from "../azure-blob-auth-type-client-cert.js";
import {
  azureBlobAuthTypeClientSecretSchema,
  type AzureBlobAuthTypeClientSecret,
} from "../azure-blob-auth-type-client-secret.js";
import {
  azureBlobAuthTypeManualSchema,
  type AzureBlobAuthTypeManual,
} from "../azure-blob-auth-type-manual.js";
import {
  azureBlobAuthTypeSecretSchema,
  type AzureBlobAuthTypeSecret,
} from "../azure-blob-auth-type-secret.js";

export type BaseType8 =
  | (AzureBlobAuthTypeManual & { authType: "manual" })
  | (AzureBlobAuthTypeSecret & { authType: "secret" })
  | (AzureBlobAuthTypeClientSecret & { authType: "clientSecret" })
  | (AzureBlobAuthTypeClientCert & { authType: "clientCert" });

export const baseType8Schema: Schema<BaseType8> = s.discriminatedUnion<BaseType8>("authType", {
  manual: azureBlobAuthTypeManualSchema,
  secret: azureBlobAuthTypeSecretSchema,
  clientSecret: azureBlobAuthTypeClientSecretSchema,
  clientCert: azureBlobAuthTypeClientCertSchema,
});
