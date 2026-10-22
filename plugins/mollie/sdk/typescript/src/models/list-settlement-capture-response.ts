import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountNullableSchema, type AmountNullable } from "./amount-nullable.js";
import { amountNullable9Schema, type AmountNullable9 } from "./amount-nullable9.js";
import { links50Schema, type Links50 } from "./links50.js";
import { modeSchema, type Mode } from "./mode.js";
import { metadataSchema, type Metadata } from "./unions/metadata.js";

export type ListSettlementCaptureResponse = {
  /**
   * Indicates the response contains a capture object. Will always contain the string `capture` for
   * this endpoint.
   */
  resource: string;
  /** The identifier uniquely referring to this capture. Example: `cpt_mNepDkEtco6ah3QNPUGYH`. */
  id: string;
  /** Whether this entity was created in live mode or in test mode. */
  mode: Mode;
  /** The description of the capture. */
  description?: string;
  /** The amount captured. If no amount is provided, the full authorized amount is captured. */
  amount: AmountNullable9 | null;
  /**
   * The capture's status. Settlement captures always have a status of `succeeded`.
   *
   * @default "succeeded"
   */
  status?: "succeeded";
  /**
   * Provide any data you like, for example a string or a JSON object. We will save the data
   * alongside the entity. Whenever you fetch the entity with our API, we will also include the
   * metadata. You can use up to approximately 1kB.
   */
  metadata?: Metadata | null;
  /**
   * The unique identifier of the payment this capture was created for. For example:
   * `tr_5B8cwPMGnU6qLbRvo7qEZo`. The full payment object can be retrieved via the payment URL in
   * the `_links` object.
   */
  paymentId: string;
  /**
   * The unique identifier of the shipment that triggered the creation of this capture, if
   * applicable. For example: `shp_gNapNy9qQTUFZYnCrCF7J`.
   */
  shipmentId?: string | null;
  /**
   * The identifier referring to the settlement this capture was settled with. For example,
   * `stl_BkEjN2eBb`. This field is omitted if the capture is not settled (yet).
   */
  settlementId?: string | null;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: string;
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
  links: Links50;
  /**
   * The amount settled to your account for this capture, converted to the currency your account is
   * settled in.
   */
  settlementAmount?: AmountNullable | null;
};

export const listSettlementCaptureResponseSchema: Schema<ListSettlementCaptureResponse> =
  s.object<ListSettlementCaptureResponse>({
    resource: s.string(),
    id: s.string(),
    mode: modeSchema,
    description: s.optional(s.string()),
    amount: s.nullable(s.lazy(() => amountNullable9Schema)),
    status: s.defaulted(s.literal("succeeded"), "succeeded"),
    metadata: s.optionalNullable(s.lazy(() => metadataSchema)),
    paymentId: s.string(),
    shipmentId: s.optionalNullable(s.string()),
    settlementId: s.optionalNullable(s.string()),
    createdAt: s.string(),
    testmode: s.optionalNullable(s.boolean()),
    links: links50Schema,
    settlementAmount: s.optionalNullable(s.lazy(() => amountNullableSchema)),
    _keysMap: {
      links: "_links",
    },
  });
