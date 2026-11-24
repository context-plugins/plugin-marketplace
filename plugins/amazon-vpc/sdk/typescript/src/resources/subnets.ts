import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import type { Servers } from "../servers.js";

/**
 * Operations for creating and managing subnets within a VPC
 */
export class Subnets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Amazon VPC Create a Subnet
   *
   * @remarks
   * Creates a subnet in the specified VPC. The new subnet must have a CIDR block that is within the
   * VPC CIDR block. You can optionally specify an Availability Zone in which to create the subnet.
   *
   * @returns Successfully created subnet
   *
   * @throws {@link Subnets.CreateSubnetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonVpcError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSubnet(
    request: Subnets.CreateSubnetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Subnets.CreateSubnetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/?Action=CreateSubnet"),
        auth: this.#auth.sigv4Auth,
        pathParams: [],
        query: [
          { name: "VpcId", value: request.vpcId, schema: s.string() },
          { name: "CidrBlock", value: request.cidrBlock, schema: s.string() },
          { name: "AvailabilityZone", value: request.availabilityZone, schema: s.optional(s.string()) },
          { name: "Ipv6CidrBlock", value: request.ipv6CidrBlock, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Subnets.CreateSubnetError,
      },
      options,
    );
  }

  /**
   * Amazon VPC Delete a Subnet
   *
   * @remarks
   * Deletes the specified subnet. You must terminate all running instances in the subnet before you
   * can delete the subnet.
   *
   * @returns Successfully deleted subnet
   *
   * @throws {@link Subnets.DeleteSubnetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonVpcError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSubnet(
    request: Subnets.DeleteSubnetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Subnets.DeleteSubnetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/?Action=DeleteSubnet"),
        auth: this.#auth.sigv4Auth,
        pathParams: [],
        query: [{ name: "SubnetId", value: request.subnetId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Subnets.DeleteSubnetError,
      },
      options,
    );
  }

  /**
   * Amazon VPC Describe Subnets
   *
   * @remarks
   * Describes one or more of your subnets. Returns information about the subnet including the CIDR
   * block, Availability Zone, VPC, and state.
   *
   * @returns Successfully described subnets
   *
   * @throws {@link Subnets.DescribeSubnetsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonVpcError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeSubnets(
    request: Subnets.DescribeSubnetsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, Subnets.DescribeSubnetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/?Action=DescribeSubnets"),
        auth: this.#auth.sigv4Auth,
        pathParams: [],
        query: [
          { name: "SubnetId", value: request.subnetId, schema: s.optional(s.array(s.string())) },
          { name: "Filter", value: request.filter, schema: s.optional(s.array(s.string())) },
          { name: "MaxResults", value: request.maxResults, schema: s.optional(s.int()) },
          { name: "NextToken", value: request.nextToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Subnets.DescribeSubnetsError,
      },
      options,
    );
  }
}

export namespace Subnets {
  export type CreateSubnetRequest = {
    /** The ID of the VPC */
    vpcId: string;
    /** The IPv4 network range for the subnet in CIDR notation */
    cidrBlock: string;
    /** The Availability Zone or Local Zone for the subnet */
    availabilityZone?: string;
    /** The IPv6 network range for the subnet in CIDR notation */
    ipv6CidrBlock?: string;
  };

  export class CreateSubnetError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateSubnetError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type DeleteSubnetRequest = {
    /** The ID of the subnet to delete */
    subnetId: string;
  };

  export class DeleteSubnetError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSubnetError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type DescribeSubnetsRequest = {
    /** The IDs of the subnets to describe */
    subnetId?: string[];
    /** Filters to apply to the results */
    filter?: string[];
    /** Maximum number of results to return */
    maxResults?: number;
    /** Token for the next page of results */
    nextToken?: string;
  };

  export const describeSubnetsRequestSchema: Schema<DescribeSubnetsRequest> = s.lazySchema(() =>
    s.object<DescribeSubnetsRequest>({
      subnetId: s.optional(s.array(s.string())),
      filter: s.optional(s.array(s.string())),
      maxResults: s.optional(s.int().check(s.gte(5), s.lte(1000))),
      nextToken: s.optional(s.string()),
    }),
  );

  export class DescribeSubnetsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeSubnetsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}
