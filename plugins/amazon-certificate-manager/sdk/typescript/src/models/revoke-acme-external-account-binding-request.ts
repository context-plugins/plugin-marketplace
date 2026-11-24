import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RevokeAcmeExternalAccountBindingRequest = {
  /** The Amazon Resource Name (ARN) of the ACME external account binding to revoke. */
  acmeExternalAccountBindingArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const revokeAcmeExternalAccountBindingRequestSchema: Schema<RevokeAcmeExternalAccountBindingRequest> =
  s.object<RevokeAcmeExternalAccountBindingRequest>(
    {
      acmeExternalAccountBindingArn: s.string(),
      _keysMap: {
        acmeExternalAccountBindingArn: "AcmeExternalAccountBindingArn",
      },
    },
    { additionalProperties: s.json() },
  );
