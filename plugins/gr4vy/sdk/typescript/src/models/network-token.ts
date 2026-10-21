import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { networkTokenStatus2Schema, type NetworkTokenStatus2 } from "./network-token-status2.js";
import { Type44, type44Schema } from "./type44.js";

export type NetworkToken = {
  /** Always `network-token`. @default Type44.NetworkToken */
  type?: Type44;
  /** The ID for the network token. */
  id: string;
  /** The expiration date for the network token. */
  expirationDate: string;
  /** The ID of the payment method used to generate this token */
  paymentMethodId: string;
  /** The state of the network token. */
  status: NetworkTokenStatus2;
  /** The token value. Will be present if succeeded. */
  token: string;
  /** The date and time when this network token was first created in our system. */
  createdAt: Date;
  /** The date and time when this network token was last updated in our system. */
  updatedAt: Date;
};

export const networkTokenSchema: Schema<NetworkToken> = s.object<NetworkToken>({
  type: s.defaulted(type44Schema, Type44.NetworkToken),
  id: s.string(),
  expirationDate: s.string(),
  paymentMethodId: s.string(),
  status: networkTokenStatus2Schema,
  token: s.string(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    expirationDate: "expiration_date",
    paymentMethodId: "payment_method_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
