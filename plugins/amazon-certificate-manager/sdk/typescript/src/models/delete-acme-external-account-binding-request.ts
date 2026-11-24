import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteAcmeExternalAccountBindingRequest = {
  /** The Amazon Resource Name (ARN) of the ACME external account binding to delete. */
  acmeExternalAccountBindingArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteAcmeExternalAccountBindingRequestSchema: Schema<DeleteAcmeExternalAccountBindingRequest> =
  s.object<DeleteAcmeExternalAccountBindingRequest>(
    {
      acmeExternalAccountBindingArn: s.string(),
      _keysMap: {
        acmeExternalAccountBindingArn: "AcmeExternalAccountBindingArn",
      },
    },
    { additionalProperties: s.json() },
  );
