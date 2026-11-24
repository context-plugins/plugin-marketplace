import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  stateAmazonVpcSubnetsApiSchema,
  type StateAmazonVpcSubnetsApi,
} from "./state-amazon-vpc-subnets-api.js";
import { tagSchema, type Tag } from "./tag.js";

/** Describes a subnet */
export type Subnet = {
  /** The ID of the subnet */
  subnetId?: string;
  /** The Amazon Resource Name (ARN) of the subnet */
  subnetArn?: string;
  /** The ID of the VPC the subnet is in */
  vpcId?: string;
  /** The current state of the subnet */
  state?: StateAmazonVpcSubnetsApi;
  /** The IPv4 CIDR block assigned to the subnet */
  cidrBlock?: string;
  /** The Availability Zone of the subnet */
  availabilityZone?: string;
  /** The AZ ID of the subnet */
  availabilityZoneId?: string;
  /** The number of unused private IPv4 addresses in the subnet */
  availableIpAddressCount?: number;
  /** Indicates whether this is the default subnet for the Availability Zone */
  defaultForAz?: boolean;
  /** Indicates whether instances launched in this subnet receive a public IPv4 address */
  mapPublicIpOnLaunch?: boolean;
  /** The ID of the AWS account that owns the subnet */
  ownerId?: string;
  /** Any tags assigned to the subnet */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subnetSchema: Schema<Subnet> = s.object<Subnet>(
  {
    subnetId: s.optional(s.string()),
    subnetArn: s.optional(s.string()),
    vpcId: s.optional(s.string()),
    state: s.optional(s.lazy(() => stateAmazonVpcSubnetsApiSchema)),
    cidrBlock: s.optional(s.string()),
    availabilityZone: s.optional(s.string()),
    availabilityZoneId: s.optional(s.string()),
    availableIpAddressCount: s.optional(s.int()),
    defaultForAz: s.optional(s.boolean()),
    mapPublicIpOnLaunch: s.optional(s.boolean()),
    ownerId: s.optional(s.string()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
  },
  { additionalProperties: s.json() },
);
