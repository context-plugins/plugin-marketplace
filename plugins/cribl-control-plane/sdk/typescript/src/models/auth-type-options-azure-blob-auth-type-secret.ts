import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const AuthTypeOptionsAzureBlobAuthTypeSecret = {
  Secret: "secret",
} as const;
export type AuthTypeOptionsAzureBlobAuthTypeSecret =
  | (typeof AuthTypeOptionsAzureBlobAuthTypeSecret)[keyof typeof AuthTypeOptionsAzureBlobAuthTypeSecret]
  | (string & {});

export const authTypeOptionsAzureBlobAuthTypeSecretSchema: EnumSchema<AuthTypeOptionsAzureBlobAuthTypeSecret> =
  s.enumOf<AuthTypeOptionsAzureBlobAuthTypeSecret>(AuthTypeOptionsAzureBlobAuthTypeSecret);
