import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const AuthTypeOptionsAzureBlobAuthTypeManual = {
  Manual: "manual",
} as const;
export type AuthTypeOptionsAzureBlobAuthTypeManual =
  | (typeof AuthTypeOptionsAzureBlobAuthTypeManual)[keyof typeof AuthTypeOptionsAzureBlobAuthTypeManual]
  | (string & {});

export const authTypeOptionsAzureBlobAuthTypeManualSchema: EnumSchema<AuthTypeOptionsAzureBlobAuthTypeManual> =
  s.enumOf<AuthTypeOptionsAzureBlobAuthTypeManual>(AuthTypeOptionsAzureBlobAuthTypeManual);
