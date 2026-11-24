import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createdBySchema, type CreatedBy } from "./created-by.js";
import {
  documentJuriSignSignRequestsApiSchema,
  type DocumentJuriSignSignRequestsApi,
} from "./document-juri-sign-sign-requests-api.js";
import { payment1InternalSchema, payment1Schema, type Payment1 } from "./payment1.js";
import { progressSchema, type Progress } from "./progress.js";
import { signer2InternalSchema, signer2Schema, type Signer2 } from "./signer2.js";
import { signingOrderType1Schema, type SigningOrderType1 } from "./signing-order-type1.js";
import {
  statusJuriSignSignRequestsApiSchema,
  type StatusJuriSignSignRequestsApi,
} from "./status-juri-sign-sign-requests-api.js";

export type SignRequest = {
  id?: string;
  subject?: string;
  message?: string | null;
  status?: StatusJuriSignSignRequestsApi;
  signingOrderType?: SigningOrderType1;
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
  payment?: Payment1 | null;
  expiresAt?: Date;
  sentAt?: Date | null;
  completedAt?: Date | null;
  createdAt?: Date;
  document?: DocumentJuriSignSignRequestsApi;
  createdBy?: CreatedBy;
  signers?: Signer2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signRequestProperties: s.Shape<SignRequest> = {
  id: s.optional(s.string()),
  subject: s.optional(s.string()),
  message: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => statusJuriSignSignRequestsApiSchema)),
  signingOrderType: s.optional(s.lazy(() => signingOrderType1Schema)),
  extendedRetention: s.optional(s.boolean()),
  progress: s.optional(s.lazy(() => progressSchema)),
  redirectUrl: s.optionalNullable(s.string()),
  payment: s.optionalNullable(s.lazy(() => payment1InternalSchema)),
  expiresAt: s.optional(s.dateTime()),
  sentAt: s.optionalNullable(s.dateTime()),
  completedAt: s.optionalNullable(s.dateTime()),
  createdAt: s.optional(s.dateTime()),
  document: s.optional(s.lazy(() => documentJuriSignSignRequestsApiSchema)),
  createdBy: s.optional(s.lazy(() => createdBySchema)),
  signers: s.optional(s.array(s.lazy(() => signer2InternalSchema))),
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

export const signRequestInternalSchema: Schema<SignRequest> = s.object<SignRequest>(signRequestProperties, {
  additionalProperties: s.json(),
});

export const signRequestSchema: Schema<SignRequest> = s.lazySchema(() =>
  s.object<SignRequest>(
    {
      ...signRequestProperties,
      redirectUrl: s.optionalNullable(s.string().check(s.url())),
      payment: s.optionalNullable(s.lazy(() => payment1Schema)),
      signers: s.optional(s.array(s.lazy(() => signer2Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
