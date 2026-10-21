import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authTypeOptionsGoogleCloudStorageAuthTypeAutoSchema,
  type AuthTypeOptionsGoogleCloudStorageAuthTypeAuto,
} from "./auth-type-options-google-cloud-storage-auth-type-auto.js";

export type GoogleCloudStorageAuthTypeAuto = {
  /** Discriminator value. */
  authType?: AuthTypeOptionsGoogleCloudStorageAuthTypeAuto;
};

export const googleCloudStorageAuthTypeAutoSchema: Schema<GoogleCloudStorageAuthTypeAuto> =
  s.object<GoogleCloudStorageAuthTypeAuto>({
    authType: s.optional(s.lazy(() => authTypeOptionsGoogleCloudStorageAuthTypeAutoSchema)),
  });
