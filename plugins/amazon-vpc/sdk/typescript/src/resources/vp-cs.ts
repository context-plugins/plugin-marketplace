import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { instanceTenancy1Schema, type InstanceTenancy1 } from "../models/instance-tenancy1.js";
import type { Servers } from "../servers.js";

/**
 * Operations for creating and managing Virtual Private Clouds
 */
export class VpCs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Amazon VPC Create a VPC
   *
   * @remarks
   * Creates a VPC with the specified IPv4 CIDR block. The smallest VPC you can create uses a /28
   * netmask (16 IPv4 addresses), and the largest uses a /16 netmask (65,536 IPv4 addresses). After
   * creating the VPC, you can add one or more subnets.
   *
   * @returns Successfully created VPC
   *
   * @throws {@link VpCs.CreateVpcError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonVpcError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVpc(
    request: VpCs.CreateVpcRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VpCs.CreateVpcError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/?Action=CreateVpc"),
        auth: this.#auth.sigv4Auth,
        pathParams: [],
        query: [
          { name: "CidrBlock", value: request.cidrBlock, schema: s.string() },
          {
            name: "AmazonProvidedIpv6CidrBlock",
            value: request.amazonProvidedIpv6CidrBlock,
            schema: s.optional(s.boolean()),
          },
          {
            name: "InstanceTenancy",
            value: request.instanceTenancy,
            schema: s.optional(s.lazy(() => instanceTenancy1Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VpCs.CreateVpcError,
      },
      options,
    );
  }

  /**
   * Amazon VPC Delete a VPC
   *
   * @remarks
   * Deletes the specified VPC. You must detach or delete all gateways and resources that are
   * associated with the VPC before you can delete it. You must also delete all subnets associated
   * with the VPC.
   *
   * @returns Successfully deleted VPC
   *
   * @throws {@link VpCs.DeleteVpcError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonVpcError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVpc(
    request: VpCs.DeleteVpcRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VpCs.DeleteVpcError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/?Action=DeleteVpc"),
        auth: this.#auth.sigv4Auth,
        pathParams: [],
        query: [{ name: "VpcId", value: request.vpcId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VpCs.DeleteVpcError,
      },
      options,
    );
  }

  /**
   * Amazon VPC Describe VPCs
   *
   * @remarks
   * Describes one or more of your VPCs. Returns information about the VPC including the CIDR block,
   * DHCP options set, state, and tags.
   *
   * @returns Successfully described VPCs
   *
   * @throws {@link VpCs.DescribeVpcsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AmazonVpcError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeVpcs(
    request: VpCs.DescribeVpcsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, VpCs.DescribeVpcsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/?Action=DescribeVpcs"),
        auth: this.#auth.sigv4Auth,
        pathParams: [],
        query: [
          { name: "VpcId", value: request.vpcId, schema: s.optional(s.array(s.string())) },
          { name: "Filter", value: request.filter, schema: s.optional(s.array(s.string())) },
          { name: "MaxResults", value: request.maxResults, schema: s.optional(s.int()) },
          { name: "NextToken", value: request.nextToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VpCs.DescribeVpcsError,
      },
      options,
    );
  }

  /**
   * Amazon VPC Modify a VPC Attribute
   *
   * @remarks
   * Modifies the specified attribute of the specified VPC. You can modify the DNS resolution and
   * DNS hostname attributes.
   *
   * @returns Successfully modified VPC attribute
   *
   * @throws {@link VpCs.ModifyVpcAttributeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonVpcError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  modifyVpcAttribute(
    request: VpCs.ModifyVpcAttributeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VpCs.ModifyVpcAttributeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/?Action=ModifyVpcAttribute"),
        auth: this.#auth.sigv4Auth,
        pathParams: [],
        query: [
          { name: "VpcId", value: request.vpcId, schema: s.string() },
          {
            name: "EnableDnsSupport.Value",
            value: request.enableDnsSupportValue,
            schema: s.optional(s.boolean()),
          },
          {
            name: "EnableDnsHostnames.Value",
            value: request.enableDnsHostnamesValue,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: VpCs.ModifyVpcAttributeError,
      },
      options,
    );
  }
}

export namespace VpCs {
  export type CreateVpcRequest = {
    /** The IPv4 network range for the VPC in CIDR notation (e.g., 10.0.0.0/16) */
    cidrBlock: string;
    /** Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length */
    amazonProvidedIpv6CidrBlock?: boolean;
    /** The tenancy options for instances launched into the VPC */
    instanceTenancy?: InstanceTenancy1;
  };

  export class CreateVpcError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateVpcError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type DeleteVpcRequest = {
    /** The ID of the VPC to delete */
    vpcId: string;
  };

  export class DeleteVpcError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteVpcError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type DescribeVpcsRequest = {
    /** The IDs of the VPCs to describe */
    vpcId?: string[];
    /** Filters to apply to the results */
    filter?: string[];
    /** Maximum number of results to return */
    maxResults?: number;
    /** Token for the next page of results */
    nextToken?: string;
  };

  export const describeVpcsRequestSchema: Schema<DescribeVpcsRequest> = s.lazySchema(() =>
    s.object<DescribeVpcsRequest>({
      vpcId: s.optional(s.array(s.string())),
      filter: s.optional(s.array(s.string())),
      maxResults: s.optional(s.int().check(s.gte(5), s.lte(1000))),
      nextToken: s.optional(s.string()),
    }),
  );

  export class DescribeVpcsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeVpcsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type ModifyVpcAttributeRequest = {
    /** The ID of the VPC */
    vpcId: string;
    /** Indicates whether DNS resolution is supported for the VPC */
    enableDnsSupportValue?: boolean;
    /** Indicates whether instances launched in the VPC get DNS hostnames */
    enableDnsHostnamesValue?: boolean;
  };

  export class ModifyVpcAttributeError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ModifyVpcAttributeError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}
