import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { details2Schema, type Details2 } from "./details2.js";
import { links44Schema, type Links44 } from "./links44.js";
import { mandateMethodSchema, type MandateMethod } from "./mandate-method.js";
import { mandateScopesSchema, type MandateScopes } from "./mandate-scopes.js";
import { mandateStatusSchema, type MandateStatus } from "./mandate-status.js";
import { modeSchema, type Mode } from "./mode.js";

export type EntityMandate = {
  /**
   * Indicates the response contains a mandate object. Will always contain the string `mandate` for
   * this endpoint.
   */
  resource?: string;
  /** The identifier uniquely referring to this mandate. Example: `mdt_pWUnw6pkBN`. */
  id?: string;
  /** Whether this entity was created in live mode or in test mode. */
  mode?: Mode;
  /**
   * Payment method of the mandate.
   *
   * SEPA Direct Debit and PayPal mandates can be created directly.
   */
  method?: MandateMethod;
  /** The customer's name. */
  consumerName?: string;
  /** The customer's IBAN. Required for SEPA Direct Debit mandates. */
  consumerAccount?: string | null;
  /** The BIC of the customer's bank. */
  consumerBic?: string | null;
  /** The customer's email address. Required for PayPal mandates. */
  consumerEmail?: string | null;
  details?: Details2;
  /** The date when the mandate was signed in `YYYY-MM-DD` format. */
  signatureDate?: string | null;
  /**
   * A custom mandate reference. For SEPA Direct Debit, it is vital to provide a unique reference.
   * Some banks will decline Direct Debit payments if the mandate reference is not unique.
   */
  mandateReference?: string | null;
  /**
   * The billing agreement ID given by PayPal. For example: `B-12A34567B8901234CD`. Required for
   * PayPal mandates. Must provide either this field or `payPalVaultId`, but not both.
   */
  paypalBillingAgreementId?: string | null;
  /**
   * The Vault ID given by PayPal. For example: `8kk8451t`. Required for PayPal mandates. Must
   * provide either this field or `paypalBillingAgreementId`, but not both.
   */
  payPalVaultId?: string | null;
  /**
   * An array defining the eligible use cases for the mandate. This field will always be present and
   * can contain one or both of the following values:
   */
  scopes?: MandateScopes[] | null;
  status?: MandateStatus;
  /** The identifier referring to the [customer](get-customer) this mandate was linked to. */
  customerId?: string;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt?: string;
  /**
   * Whether to create the entity in test mode or live mode.
   *
   * Most API credentials are specifically created for either live mode or test mode, in which case
   * this parameter must not be sent. For organization-level credentials such as OAuth access
   * tokens, you can enable test mode by setting `testmode` to `true`.
   */
  testmode?: boolean | null;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links?: Links44;
};

export const entityMandateSchema: Schema<EntityMandate> = s.object<EntityMandate>({
  resource: s.optional(s.string()),
  id: s.optional(s.string()),
  mode: s.optional(s.lazy(() => modeSchema)),
  method: s.optional(s.lazy(() => mandateMethodSchema)),
  consumerName: s.optional(s.string()),
  consumerAccount: s.optionalNullable(s.string()),
  consumerBic: s.optionalNullable(s.string()),
  consumerEmail: s.optionalNullable(s.string()),
  details: s.optional(s.lazy(() => details2Schema)),
  signatureDate: s.optionalNullable(s.string()),
  mandateReference: s.optionalNullable(s.string()),
  paypalBillingAgreementId: s.optionalNullable(s.string()),
  payPalVaultId: s.optionalNullable(s.string()),
  scopes: s.optionalNullable(s.array(s.lazy(() => mandateScopesSchema))),
  status: s.optional(s.lazy(() => mandateStatusSchema)),
  customerId: s.optional(s.string()),
  createdAt: s.optional(s.string()),
  testmode: s.optionalNullable(s.boolean()),
  links: s.optional(s.lazy(() => links44Schema)),
  _keysMap: {
    links: "_links",
  },
});
