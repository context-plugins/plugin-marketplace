import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type AcmeAccountSummary = {
  /** The URL of the ACME account. */
  accountUrl?: string;
  /** The thumbprint of the public key associated with the ACME account. */
  publicKeyThumbprint?: string;
  /** The status of the ACME account. */
  status?: Status;
  /** The time at which the ACME account was created. */
  createdAt?: string;
  /**
   * The Amazon Resource Name (ARN) of the external account binding associated with this ACME
   * account.
   */
  acmeExternalAccountBindingArn?: string;
  /** The contact information for the ACME account. */
  contacts?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const acmeAccountSummarySchema: Schema<AcmeAccountSummary> = s.object<AcmeAccountSummary>(
  {
    accountUrl: s.optional(s.string()),
    publicKeyThumbprint: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusSchema)),
    createdAt: s.optional(s.string()),
    acmeExternalAccountBindingArn: s.optional(s.string()),
    contacts: s.optional(s.array(s.string())),
    _keysMap: {
      accountUrl: "AccountUrl",
      publicKeyThumbprint: "PublicKeyThumbprint",
      status: "Status",
      createdAt: "CreatedAt",
      acmeExternalAccountBindingArn: "AcmeExternalAccountBindingArn",
      contacts: "Contacts",
    },
  },
  { additionalProperties: s.json() },
);
