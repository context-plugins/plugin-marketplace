import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { connectivityTypeSchema, type ConnectivityType } from "./connectivity-type.js";
import { natGatewayAddressSchema, type NatGatewayAddress } from "./nat-gateway-address.js";
import {
  stateAmazonVpcNatGatewaysApiSchema,
  type StateAmazonVpcNatGatewaysApi,
} from "./state-amazon-vpc-nat-gateways-api.js";
import { tagSchema, type Tag } from "./tag.js";

/** Describes a NAT gateway */
export type NatGateway = {
  /** The ID of the NAT gateway */
  natGatewayId?: string;
  /** The ID of the subnet in which the NAT gateway is located */
  subnetId?: string;
  /** The ID of the VPC in which the NAT gateway is located */
  vpcId?: string;
  /** The state of the NAT gateway */
  state?: StateAmazonVpcNatGatewaysApi;
  /** Indicates whether the NAT gateway supports public or private connectivity */
  connectivityType?: ConnectivityType;
  /** Information about the IP addresses and network interface associated with the NAT gateway */
  natGatewayAddresses?: NatGatewayAddress[];
  /** The date and time the NAT gateway was created */
  createTime?: Date;
  /** Any tags assigned to the NAT gateway */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const natGatewaySchema: Schema<NatGateway> = s.object<NatGateway>(
  {
    natGatewayId: s.optional(s.string()),
    subnetId: s.optional(s.string()),
    vpcId: s.optional(s.string()),
    state: s.optional(s.lazy(() => stateAmazonVpcNatGatewaysApiSchema)),
    connectivityType: s.optional(s.lazy(() => connectivityTypeSchema)),
    natGatewayAddresses: s.optional(s.array(s.lazy(() => natGatewayAddressSchema))),
    createTime: s.optional(s.dateTime()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
  },
  { additionalProperties: s.json() },
);
