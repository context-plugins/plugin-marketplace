import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { captureStatus3Schema, type CaptureStatus3 } from "./capture-status3.js";
import { Type9, type9Schema } from "./type9.js";
import { capturedAtSchema, type CapturedAt } from "./unions/captured-at.js";
import { cartItemsSchema, type CartItems } from "./unions/cart-items.js";
import { errorCodeSchema, type ErrorCode } from "./unions/error-code.js";
import { externalIdentifier6Schema, type ExternalIdentifier6 } from "./unions/external-identifier6.js";
import { isoResponseCodeSchema, type IsoResponseCode } from "./unions/iso-response-code.js";
import { rawResponseCodeSchema, type RawResponseCode } from "./unions/raw-response-code.js";
import {
  rawResponseDescriptionSchema,
  type RawResponseDescription,
} from "./unions/raw-response-description.js";
import { tracking1Schema, type Tracking1 } from "./unions/tracking1.js";
import {
  transactionExternalIdentifierSchema,
  type TransactionExternalIdentifier,
} from "./unions/transaction-external-identifier.js";
import { xidSchema, type Xid } from "./unions/xid.js";

export type Capture = {
  /** Always `capture`. @default Type9.Capture */
  type?: Type9;
  /** The unique identifier for the capture. */
  id: string;
  /** The merchant account this capture belongs to. */
  merchantAccountId: string;
  /** The ID of the transaction associated with this capture. */
  transactionId: string;
  /** The payment service's unique ID for the capture. */
  xid?: Xid;
  /** The ISO 4217 currency code for this capture. */
  currency: string;
  /** The capture amount in the smallest currency unit. */
  amount: number;
  /** The status of the capture. */
  status: CaptureStatus3;
  /** Whether this is marked as the final capture for the associated transaction. */
  final: boolean;
  /** The date and time this capture was created. */
  createdAt: Date;
  /** The date and time this capture was last updated. */
  updatedAt: Date;
  /** The date and time the capture was completed. */
  capturedAt?: CapturedAt;
  /** An external identifier that can be used to match the capture against your own records. */
  externalIdentifier?: ExternalIdentifier6;
  /** The standardized error code set by Gr4vy. */
  errorCode?: ErrorCode;
  /** The ISO response code. */
  isoResponseCode?: IsoResponseCode;
  /**
   * This is the response code received from the payment service. This can be set to any value and
   * is not standardized across different payment services.
   */
  rawResponseCode?: RawResponseCode;
  /**
   * This is the response description received from the payment service. This can be set to any
   * value and is not standardized across different payment services.
   */
  rawResponseDescription?: RawResponseDescription;
  /** The external identifier of the associated transaction. */
  transactionExternalIdentifier?: TransactionExternalIdentifier;
  /** An array of cart items that represents the line items of this capture. */
  cartItems?: CartItems;
  /** The shipment tracking details associated with the capture. */
  tracking?: Tracking1;
};

export const captureSchema: Schema<Capture> = s.object<Capture>({
  type: s.defaulted(type9Schema, Type9.Capture),
  id: s.string(),
  merchantAccountId: s.string(),
  transactionId: s.string(),
  xid: s.optional(s.lazy(() => xidSchema)),
  currency: s.string(),
  amount: s.int(),
  status: captureStatus3Schema,
  final: s.boolean(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  capturedAt: s.optional(s.lazy(() => capturedAtSchema)),
  externalIdentifier: s.optional(s.lazy(() => externalIdentifier6Schema)),
  errorCode: s.optional(s.lazy(() => errorCodeSchema)),
  isoResponseCode: s.optional(s.lazy(() => isoResponseCodeSchema)),
  rawResponseCode: s.optional(s.lazy(() => rawResponseCodeSchema)),
  rawResponseDescription: s.optional(s.lazy(() => rawResponseDescriptionSchema)),
  transactionExternalIdentifier: s.optional(s.lazy(() => transactionExternalIdentifierSchema)),
  cartItems: s.optional(s.lazy(() => cartItemsSchema)),
  tracking: s.optional(s.lazy(() => tracking1Schema)),
  _keysMap: {
    merchantAccountId: "merchant_account_id",
    transactionId: "transaction_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
    capturedAt: "captured_at",
    externalIdentifier: "external_identifier",
    errorCode: "error_code",
    isoResponseCode: "iso_response_code",
    rawResponseCode: "raw_response_code",
    rawResponseDescription: "raw_response_description",
    transactionExternalIdentifier: "transaction_external_identifier",
    cartItems: "cart_items",
  },
});
