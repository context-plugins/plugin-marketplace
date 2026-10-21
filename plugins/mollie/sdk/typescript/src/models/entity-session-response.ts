import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { links34Schema, type Links34 } from "./links34.js";
import { modeSchema, type Mode } from "./mode.js";
import { paymentAddress5Schema, type PaymentAddress5 } from "./payment-address5.js";
import { paymentAddress6Schema, type PaymentAddress6 } from "./payment-address6.js";
import { payment1Schema, type Payment1 } from "./payment1.js";
import { sessionLineItemResponseSchema, type SessionLineItemResponse } from "./session-line-item-response.js";
import {
  sessionRequiredCustomerDetailsResponseSchema,
  type SessionRequiredCustomerDetailsResponse,
} from "./session-required-customer-details-response.js";
import {
  sessionSequenceTypeResponse2Schema,
  type SessionSequenceTypeResponse2,
} from "./session-sequence-type-response2.js";
import { sessionStatusSchema, type SessionStatus } from "./session-status.js";
import { shipping2Schema, type Shipping2 } from "./unions/shipping2.js";

export type EntitySessionResponse = {
  /** The resource type of the object. */
  resource?: string;
  /**
   * The identifier uniquely referring to this Checkout Session. Mollie assigns this identifier at
   * Checkout Session creation time. Mollie will always refer to the Checkout Session by this ID.
   * Example: `sess_5B8cwPMGnU6qLbRvo7qEZo`.
   */
  id?: string;
  /** Whether this entity was created in live mode or in test mode. */
  mode?: Mode;
  /**
   * The client access token for the Checkout Session. Use the client access token to initialize
   * Mollie Components.
   */
  clientAccessToken?: string;
  status?: SessionStatus;
  /**
   * In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value`
   * field.
   */
  amount?: Amount;
  /**
   * A user-friendly description of the Checkout Session that may be shown to the customer during
   * the checkout process.
   *
   * Any payment created for the Checkout Session will use the same description.
   */
  description?: string;
  /**
   * List of items the customer will pay for in this Checkout Session. The sum of all line items
   * must equal the Checkout Session's amount.
   *
   * All lines must have the same currency as the Checkout Session.
   */
  lines?: SessionLineItemResponse[];
  /**
   * The URL your customer will be redirected to after the payment process.
   *
   * It could make sense for the redirectUrl to contain a unique identifier – like your order ID –
   * so you can show the right page referencing the order when your customer returns.
   */
  redirectUrl?: string;
  /**
   * > 🚧 Private beta > > This property is currently in private beta, and the final specification
   * may still change.
   *
   * Declare which customer details should be collected during checkout. Mollie can collect these
   * details for you with the Express Component and returns them on the Checkout Session's and
   * payment's `billingAddress` and `shippingAddress`.
   */
  requiredCustomerDetails?: SessionRequiredCustomerDetailsResponse[];
  /**
   * The customer's billing address details. We advise to provide these details to improve fraud
   * protection and conversion.
   */
  billingAddress?: PaymentAddress5;
  /**
   * The customer's shipping address details. We advise to provide these details to improve fraud
   * protection and conversion.
   */
  shippingAddress?: PaymentAddress6;
  /**
   * > 🚧 Private beta > > This property is currently in private beta, and the final specification
   * may still change.
   *
   * Shipping information for the Checkout Session. Provide either `options` or `callbackUrl`, not
   * both.
   *
   * The `lines` of the Checkout Session must not contain a line with type `shipping_fee`. When
   * `shipping` is set, `requiredCustomerDetails` must contain `shipping-address`.
   */
  shipping?: Shipping2;
  /**
   * The ID of the [customer](get-customer) the Checkout Session is being created for. This is used
   * primarily for recurring payments, but can also be used on regular payments to enable
   * single-click payments.
   *
   * If `sequenceType` is set to `first`, this field is required.
   */
  customerId?: string;
  /**
   * **Only relevant for recurring payments.**
   *
   * Indicate if this Checkout Session is used for a one-off or a first of a recurring payment.
   *
   * With a `first` payment, the customer agrees to automatic recurring charges taking place on
   * their account in the future.
   *
   * Defaults to `oneoff`, which is a regular non-recurring payment.
   */
  sequenceType?: SessionSequenceTypeResponse2;
  /**
   * Provide any data you like in a JSON object. We will save the data alongside the entity.
   * Whenever you fetch the entity with our API, we will also include the metadata. You can use up
   * to approximately 1kB.
   *
   * Any payment created for the Checkout Session will use the same metadata.
   */
  metadata?: Record<string, unknown>;
  payment?: Payment1;
  /**
   * The identifier referring to the [profile](get-profile) this entity belongs to.
   *
   * When using an API Key, the `profileId` must not be sent since it is linked to the key. However,
   * for OAuth and Organization tokens, the `profileId` is required.
   *
   * For more information, see [Authentication](authentication).
   */
  profileId?: string;
  /**
   * Whether to create the entity in test mode or live mode.
   *
   * Most API credentials are specifically created for either live mode or test mode, in which case
   * this parameter must not be sent. For organization-level credentials such as OAuth access
   * tokens, you can enable test mode by setting `testmode` to `true`.
   */
  testmode?: boolean | null;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt?: string;
  /**
   * The date and time the Checkout Session expired, in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Omitted if the Checkout Session has not
   * expired.
   */
  expiredAt?: string | null;
  /**
   * The date and time the Checkout Session was completed, in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Omitted if the Checkout Session has not
   * been completed.
   */
  completedAt?: string | null;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links?: Links34;
};

export const entitySessionResponseSchema: Schema<EntitySessionResponse> = s.object<EntitySessionResponse>({
  resource: s.optional(s.string()),
  id: s.optional(s.string()),
  mode: s.optional(s.lazy(() => modeSchema)),
  clientAccessToken: s.optional(s.string()),
  status: s.optional(s.lazy(() => sessionStatusSchema)),
  amount: s.optional(s.lazy(() => amountSchema)),
  description: s.optional(s.string()),
  lines: s.optional(s.array(s.lazy(() => sessionLineItemResponseSchema))),
  redirectUrl: s.optional(s.string()),
  requiredCustomerDetails: s.optional(s.array(s.lazy(() => sessionRequiredCustomerDetailsResponseSchema))),
  billingAddress: s.optional(s.lazy(() => paymentAddress5Schema)),
  shippingAddress: s.optional(s.lazy(() => paymentAddress6Schema)),
  shipping: s.optional(s.lazy(() => shipping2Schema)),
  customerId: s.optional(s.string()),
  sequenceType: s.optional(s.lazy(() => sessionSequenceTypeResponse2Schema)),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  payment: s.optional(s.lazy(() => payment1Schema)),
  profileId: s.optional(s.string()),
  testmode: s.optionalNullable(s.boolean()),
  createdAt: s.optional(s.string()),
  expiredAt: s.optionalNullable(s.string()),
  completedAt: s.optionalNullable(s.string()),
  links: s.optional(s.lazy(() => links34Schema)),
  _keysMap: {
    links: "_links",
  },
});
