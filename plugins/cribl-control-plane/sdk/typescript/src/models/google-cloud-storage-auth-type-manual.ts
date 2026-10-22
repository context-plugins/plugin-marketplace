import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authTypeOptionsAzureBlobAuthTypeManualSchema,
  type AuthTypeOptionsAzureBlobAuthTypeManual,
} from "./auth-type-options-azure-blob-auth-type-manual.js";

export type GoogleCloudStorageAuthTypeManual = {
  /** Discriminator value. */
  authType?: AuthTypeOptionsAzureBlobAuthTypeManual;
  /**
   * Contents of Google Cloud service account credentials (JSON keys) file. To upload a file, click
   * the upload button at this field's upper right.
   */
  serviceAccountCredentials: string;
};

export const googleCloudStorageAuthTypeManualSchema: Schema<GoogleCloudStorageAuthTypeManual> =
  s.object<GoogleCloudStorageAuthTypeManual>({
    authType: s.optional(s.lazy(() => authTypeOptionsAzureBlobAuthTypeManualSchema)),
    serviceAccountCredentials: s.string(),
  });
