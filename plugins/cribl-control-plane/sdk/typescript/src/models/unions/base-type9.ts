import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  googleCloudStorageAuthTypeAutoSchema,
  type GoogleCloudStorageAuthTypeAuto,
} from "../google-cloud-storage-auth-type-auto.js";
import {
  googleCloudStorageAuthTypeManualSchema,
  type GoogleCloudStorageAuthTypeManual,
} from "../google-cloud-storage-auth-type-manual.js";
import {
  googleCloudStorageAuthTypeSecretSchema,
  type GoogleCloudStorageAuthTypeSecret,
} from "../google-cloud-storage-auth-type-secret.js";

export type BaseType9 =
  | (GoogleCloudStorageAuthTypeAuto & { authType: "auto" })
  | (GoogleCloudStorageAuthTypeManual & { authType: "manual" })
  | (GoogleCloudStorageAuthTypeSecret & { authType: "secret" });

export const baseType9Schema: Schema<BaseType9> = s.discriminatedUnion<BaseType9>("authType", {
  auto: googleCloudStorageAuthTypeAutoSchema,
  manual: googleCloudStorageAuthTypeManualSchema,
  secret: googleCloudStorageAuthTypeSecretSchema,
});
