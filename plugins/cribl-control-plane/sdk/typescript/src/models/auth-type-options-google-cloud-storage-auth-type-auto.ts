import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const AuthTypeOptionsGoogleCloudStorageAuthTypeAuto = {
  Auto: "auto",
} as const;
export type AuthTypeOptionsGoogleCloudStorageAuthTypeAuto =
  | (typeof AuthTypeOptionsGoogleCloudStorageAuthTypeAuto)[keyof typeof AuthTypeOptionsGoogleCloudStorageAuthTypeAuto]
  | (string & {});

export const authTypeOptionsGoogleCloudStorageAuthTypeAutoSchema: EnumSchema<AuthTypeOptionsGoogleCloudStorageAuthTypeAuto> =
  s.enumOf<AuthTypeOptionsGoogleCloudStorageAuthTypeAuto>(AuthTypeOptionsGoogleCloudStorageAuthTypeAuto);
