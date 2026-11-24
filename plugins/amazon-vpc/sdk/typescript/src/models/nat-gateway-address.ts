import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NatGatewayAddress = {
  allocationId?: string;
  networkInterfaceId?: string;
  privateIp?: string;
  publicIp?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const natGatewayAddressSchema: Schema<NatGatewayAddress> = s.object<NatGatewayAddress>(
  {
    allocationId: s.optional(s.string()),
    networkInterfaceId: s.optional(s.string()),
    privateIp: s.optional(s.string()),
    publicIp: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
