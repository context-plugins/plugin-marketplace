import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paymentInternalSchema, paymentSchema, type Payment } from "./payment.js";
import { signerInternalSchema, signerSchema, type Signer } from "./signer.js";
import { signingOrderTypeSchema, type SigningOrderType } from "./signing-order-type.js";
import { zoneInternalSchema, zoneSchema, type Zone } from "./zone.js";

export type CreateSignRequestInput = {
  /** UUID of a previously uploaded document */
  documentId: string;
  /** Email subject line for signers */
  subject: string;
  /** Optional message included in the invitation email */
  message?: string | null;
  /** Arbitrary key-value metadata for your records */
  metadata?: Record<string, unknown> | null;
  /**
   * Must use https and match the domain declared for your organization, or the request is rejected
   * with a 422. Contact support to register your domain.
   */
  redirectUrl?: string | null;
  /**
   * Request a payment from the signer once they've signed ("sign then pay" — the signature is never
   * blocked by payment). Requires an active Stripe Connect account for your organization (see
   * Settings > Paiement à la signature), or the request is rejected with a 422. JuriSign never
   * holds the funds: they go directly to your own Stripe account, minus a fixed 0.90€ platform fee.
   */
  payment?: Payment | null;
  /** 0 = parallel (all signers at once), 1 = sequential (one after another) */
  signingOrderType: SigningOrderType;
  /** Hours until the request expires (max 30 days) */
  expiryHours: number;
  signers: Signer[];
  /** Signature zone positions. Auto-generated at bottom of last page if omitted. */
  zones?: Zone[] | null;
  /** Require signers to take a selfie for identity verification @default false */
  requireSelfie?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createSignRequestInputProperties: s.Shape<CreateSignRequestInput> = {
  documentId: s.string(),
  subject: s.string(),
  message: s.optionalNullable(s.string()),
  metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
  redirectUrl: s.optionalNullable(s.string()),
  payment: s.optionalNullable(s.lazy(() => paymentInternalSchema)),
  signingOrderType: signingOrderTypeSchema,
  expiryHours: s.int(),
  signers: s.array(s.lazy(() => signerInternalSchema)),
  zones: s.optionalNullable(s.array(s.lazy(() => zoneInternalSchema))),
  requireSelfie: s.defaulted(s.boolean(), false),
  _keysMap: {
    documentId: "document_id",
    redirectUrl: "redirect_url",
    signingOrderType: "signing_order_type",
    expiryHours: "expiry_hours",
    requireSelfie: "require_selfie",
  },
};

export const createSignRequestInputInternalSchema: Schema<CreateSignRequestInput> =
  s.object<CreateSignRequestInput>(createSignRequestInputProperties, { additionalProperties: s.json() });

export const createSignRequestInputSchema: Schema<CreateSignRequestInput> = s.lazySchema(() =>
  s.object<CreateSignRequestInput>(
    {
      ...createSignRequestInputProperties,
      subject: s.string().check(s.maxLength(255)),
      message: s.optionalNullable(s.string().check(s.maxLength(2000))),
      redirectUrl: s.optionalNullable(s.string().check(s.maxLength(2048), s.url())),
      payment: s.optionalNullable(s.lazy(() => paymentSchema)),
      expiryHours: s.int().check(s.gte(1), s.lte(720)),
      signers: s.array(s.lazy(() => signerSchema)).check(s.minLength(1), s.maxLength(10)),
      zones: s.optionalNullable(s.array(s.lazy(() => zoneSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
