import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetAcmeExternalAccountBindingCredentialsRequest = {
  /** The Amazon Resource Name (ARN) of the ACME external account binding. */
  acmeExternalAccountBindingArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getAcmeExternalAccountBindingCredentialsRequestSchema: Schema<GetAcmeExternalAccountBindingCredentialsRequest> =
  s.object<GetAcmeExternalAccountBindingCredentialsRequest>(
    {
      acmeExternalAccountBindingArn: s.string(),
      _keysMap: {
        acmeExternalAccountBindingArn: "AcmeExternalAccountBindingArn",
      },
    },
    { additionalProperties: s.json() },
  );
