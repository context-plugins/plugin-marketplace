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
 * Operations for managing network access control lists for subnet-level traffic filtering
 */
export class NetworkAcLs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Amazon VPC Create a Network ACL
   *
   * @remarks
   * Creates a network ACL in a VPC. Network ACLs provide an optional layer of security for your VPC
   * that acts as a firewall for controlling traffic in and out of one or more subnets.
   *
   * @returns Successfully created network ACL
   *
   * @throws {@link NetworkAcLs.CreateNetworkAclError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonVpcError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createNetworkAcl(
    request: NetworkAcLs.CreateNetworkAclRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, NetworkAcLs.CreateNetworkAclError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/?Action=CreateNetworkAcl"),
        auth: this.#auth.sigv4Auth,
        pathParams: [],
        query: [{ name: "VpcId", value: request.vpcId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: NetworkAcLs.CreateNetworkAclError,
      },
      options,
    );
  }

  /**
   * Amazon VPC Describe Network ACLs
   *
   * @remarks
   * Describes one or more of your network ACLs. A network ACL is an optional layer of security for
   * your VPC that acts as a firewall for controlling traffic in and out of one or more subnets.
   *
   * @returns Successfully described network ACLs
   *
   * @throws {@link NetworkAcLs.DescribeNetworkAclsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonVpcError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeNetworkAcls(
    request: NetworkAcLs.DescribeNetworkAclsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, NetworkAcLs.DescribeNetworkAclsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/?Action=DescribeNetworkAcls"),
        auth: this.#auth.sigv4Auth,
        pathParams: [],
        query: [
          { name: "NetworkAclId", value: request.networkAclId, schema: s.optional(s.array(s.string())) },
          { name: "Filter", value: request.filter, schema: s.optional(s.array(s.string())) },
          { name: "MaxResults", value: request.maxResults, schema: s.optional(s.int()) },
          { name: "NextToken", value: request.nextToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: NetworkAcLs.DescribeNetworkAclsError,
      },
      options,
    );
  }
}

export namespace NetworkAcLs {
  export type CreateNetworkAclRequest = {
    /** The ID of the VPC */
    vpcId: string;
  };

  export class CreateNetworkAclError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateNetworkAclError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type DescribeNetworkAclsRequest = {
    /** The IDs of the network ACLs to describe */
    networkAclId?: string[];
    /** Filters to apply to the results */
    filter?: string[];
    /** Maximum number of results to return */
    maxResults?: number;
    /** Token for the next page of results */
    nextToken?: string;
  };

  export const describeNetworkAclsRequestSchema: Schema<DescribeNetworkAclsRequest> = s.lazySchema(() =>
    s.object<DescribeNetworkAclsRequest>({
      networkAclId: s.optional(s.array(s.string())),
      filter: s.optional(s.array(s.string())),
      maxResults: s.optional(s.int().check(s.gte(5), s.lte(1000))),
      nextToken: s.optional(s.string()),
    }),
  );

  export class DescribeNetworkAclsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeNetworkAclsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}
