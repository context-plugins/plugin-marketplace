import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createdBySchema, type CreatedBy } from "./created-by.js";
import { document1Schema, type Document1 } from "./document1.js";
import {
  paymentJuriSignTemplatesApiInternalSchema,
  paymentJuriSignTemplatesApiSchema,
  type PaymentJuriSignTemplatesApi,
} from "./payment-juri-sign-templates-api.js";
import { progressSchema, type Progress } from "./progress.js";
import {
  signer1JuriSignTemplatesApiInternalSchema,
  signer1JuriSignTemplatesApiSchema,
  type Signer1JuriSignTemplatesApi,
} from "./signer1-juri-sign-templates-api.js";
import {
  signingOrderTypeJuriSignTemplatesApiSchema,
  type SigningOrderTypeJuriSignTemplatesApi,
} from "./signing-order-type-juri-sign-templates-api.js";
import {
  statusJuriSignSignRequestsApiSchema,
  type StatusJuriSignSignRequestsApi,
} from "./status-juri-sign-sign-requests-api.js";

export type SignRequestJuriSignTemplatesApi = {
  id?: string;
  subject?: string;
  message?: string | null;
  status?: StatusJuriSignSignRequestsApi;
  signingOrderType?: SigningOrderTypeJuriSignTemplatesApi;
  /**
   * True if your organization's commercial contract includes the extended archiving option (10
   * years). Informational only — reflects the billed option, not a distinct technical purge policy.
   */
  extendedRetention?: boolean;
  progress?: Progress;
  /**
   * URL shown to the signer as an explicit "return to <domain>" button on the success page. Must
   * use https and match the domain declared for your organization (contact support to register it).
   */
  redirectUrl?: string | null;
  /**
   * Present only when a payment was requested on this sign request (see the `payment` field on
   * creation). The signer is invited to pay only after signing ("sign then pay") — `checkout_url`
   * is null until the sign request is fully signed.
   */
  payment?: PaymentJuriSignTemplatesApi | null;
  expiresAt?: Date;
  sentAt?: Date | null;
  completedAt?: Date | null;
  createdAt?: Date;
  document?: Document1;
  createdBy?: CreatedBy;
  signers?: Signer1JuriSignTemplatesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signRequestJuriSignTemplatesApiProperties: s.Shape<SignRequestJuriSignTemplatesApi> = {
  id: s.optional(s.string()),
  subject: s.optional(s.string()),
  message: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => statusJuriSignSignRequestsApiSchema)),
  signingOrderType: s.optional(s.lazy(() => signingOrderTypeJuriSignTemplatesApiSchema)),
  extendedRetention: s.optional(s.boolean()),
  progress: s.optional(s.lazy(() => progressSchema)),
  redirectUrl: s.optionalNullable(s.string()),
  payment: s.optionalNullable(s.lazy(() => paymentJuriSignTemplatesApiInternalSchema)),
  expiresAt: s.optional(s.dateTime()),
  sentAt: s.optionalNullable(s.dateTime()),
  completedAt: s.optionalNullable(s.dateTime()),
  createdAt: s.optional(s.dateTime()),
  document: s.optional(s.lazy(() => document1Schema)),
  createdBy: s.optional(s.lazy(() => createdBySchema)),
  signers: s.optional(s.array(s.lazy(() => signer1JuriSignTemplatesApiInternalSchema))),
  _keysMap: {
    signingOrderType: "signing_order_type",
    extendedRetention: "extended_retention",
    redirectUrl: "redirect_url",
    expiresAt: "expires_at",
    sentAt: "sent_at",
    completedAt: "completed_at",
    createdAt: "created_at",
    createdBy: "created_by",
  },
};

export const signRequestJuriSignTemplatesApiInternalSchema: Schema<SignRequestJuriSignTemplatesApi> =
  s.object<SignRequestJuriSignTemplatesApi>(signRequestJuriSignTemplatesApiProperties, {
    additionalProperties: s.json(),
  });

export const signRequestJuriSignTemplatesApiSchema: Schema<SignRequestJuriSignTemplatesApi> = s.lazySchema(
  () =>
    s.object<SignRequestJuriSignTemplatesApi>(
      {
        ...signRequestJuriSignTemplatesApiProperties,
        redirectUrl: s.optionalNullable(s.string().check(s.url())),
        payment: s.optionalNullable(s.lazy(() => paymentJuriSignTemplatesApiSchema)),
        signers: s.optional(s.array(s.lazy(() => signer1JuriSignTemplatesApiSchema))),
      },
      { additionalProperties: s.json() },
    ),
);
