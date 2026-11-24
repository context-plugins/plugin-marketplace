import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetAcmeExternalAccountBindingCredentialsResponse = {
  /** The key identifier for the external account binding credentials. */
  keyId?: string;
  /** The MAC key for the external account binding credentials. */
  macKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getAcmeExternalAccountBindingCredentialsResponseSchema: Schema<GetAcmeExternalAccountBindingCredentialsResponse> =
  s.object<GetAcmeExternalAccountBindingCredentialsResponse>(
    {
      keyId: s.optional(s.string()),
      macKey: s.optional(s.string()),
      _keysMap: {
        keyId: "KeyId",
        macKey: "MacKey",
      },
    },
    { additionalProperties: s.json() },
  );
