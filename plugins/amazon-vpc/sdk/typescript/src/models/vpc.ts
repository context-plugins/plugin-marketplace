import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cidrBlockAssociationSetSchema, type CidrBlockAssociationSet } from "./cidr-block-association-set.js";
import { instanceTenancySchema, type InstanceTenancy } from "./instance-tenancy.js";
import {
  ipv6CidrBlockAssociationSetSchema,
  type Ipv6CidrBlockAssociationSet,
} from "./ipv6-cidr-block-association-set.js";
import { stateAmazonVpcVpCsApiSchema, type StateAmazonVpcVpCsApi } from "./state-amazon-vpc-vp-cs-api.js";
import { tagSchema, type Tag } from "./tag.js";

/** Describes a VPC */
export type Vpc = {
  /** The ID of the VPC */
  vpcId?: string;
  /** The current state of the VPC */
  state?: StateAmazonVpcVpCsApi;
  /** The primary IPv4 CIDR block for the VPC */
  cidrBlock?: string;
  /** Information about the IPv4 CIDR blocks associated with the VPC */
  cidrBlockAssociationSet?: CidrBlockAssociationSet[];
  /** Information about the IPv6 CIDR blocks associated with the VPC */
  ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociationSet[];
  /** The ID of the set of DHCP options associated with the VPC */
  dhcpOptionsId?: string;
  /** The allowed tenancy of instances launched into the VPC */
  instanceTenancy?: InstanceTenancy;
  /** Indicates whether the VPC is the default VPC */
  isDefault?: boolean;
  /** The ID of the AWS account that owns the VPC */
  ownerId?: string;
  /** Any tags assigned to the VPC */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vpcSchema: Schema<Vpc> = s.object<Vpc>(
  {
    vpcId: s.optional(s.string()),
    state: s.optional(s.lazy(() => stateAmazonVpcVpCsApiSchema)),
    cidrBlock: s.optional(s.string()),
    cidrBlockAssociationSet: s.optional(s.array(s.lazy(() => cidrBlockAssociationSetSchema))),
    ipv6CidrBlockAssociationSet: s.optional(s.array(s.lazy(() => ipv6CidrBlockAssociationSetSchema))),
    dhcpOptionsId: s.optional(s.string()),
    instanceTenancy: s.optional(s.lazy(() => instanceTenancySchema)),
    isDefault: s.optional(s.boolean()),
    ownerId: s.optional(s.string()),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
  },
  { additionalProperties: s.json() },
);
