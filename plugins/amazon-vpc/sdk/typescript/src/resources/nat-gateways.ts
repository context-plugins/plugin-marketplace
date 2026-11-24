import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectivityType1Schema, type ConnectivityType1 } from "../models/connectivity-type1.js";
import type { Servers } from "../servers.js";

/**
 * Operations for managing NAT gateways for outbound internet access from private subnets
 */
export class NatGateways {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Amazon VPC Create a NAT Gateway
   *
   * @remarks
   * Creates a NAT gateway in the specified subnet. A NAT gateway enables instances in a private
   * subnet to connect to the internet or other AWS services, but prevents the internet from
   * initiating a connection with those instances.
   *
   * @returns Successfully created NAT gateway
   *
   * @throws {@link NatGateways.CreateNatGatewayError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonVpcError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createNatGateway(
    request: NatGateways.CreateNatGatewayRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, NatGateways.CreateNatGatewayError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/?Action=CreateNatGateway"),
        auth: this.#auth.sigv4Auth,
        pathParams: [],
        query: [
          { name: "SubnetId", value: request.subnetId, schema: s.string() },
          { name: "AllocationId", value: request.allocationId, schema: s.optional(s.string()) },
          {
            name: "ConnectivityType",
            value: request.connectivityType,
            schema: s.optional(s.lazy(() => connectivityType1Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: NatGateways.CreateNatGatewayError,
      },
      options,
    );
  }

  /**
   * Amazon VPC Describe NAT Gateways
   *
   * @remarks
   * Describes one or more of your NAT gateways. Returns information about the NAT gateway including
   * its state, subnet, and associated Elastic IP address.
   *
   * @returns Successfully described NAT gateways
   *
   * @throws {@link NatGateways.DescribeNatGatewaysError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonVpcError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeNatGateways(
    request: NatGateways.DescribeNatGatewaysRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, NatGateways.DescribeNatGatewaysError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/?Action=DescribeNatGateways"),
        auth: this.#auth.sigv4Auth,
        pathParams: [],
        query: [
          { name: "NatGatewayId", value: request.natGatewayId, schema: s.optional(s.array(s.string())) },
          { name: "Filter", value: request.filter, schema: s.optional(s.array(s.string())) },
          { name: "MaxResults", value: request.maxResults, schema: s.optional(s.int()) },
          { name: "NextToken", value: request.nextToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: NatGateways.DescribeNatGatewaysError,
      },
      options,
    );
  }
}

export namespace NatGateways {
  export type CreateNatGatewayRequest = {
    /** The ID of the subnet in which to create the NAT gateway */
    subnetId: string;
    /** The allocation ID of an Elastic IP address to associate with the NAT gateway */
    allocationId?: string;
    /** Indicates whether the NAT gateway supports public or private connectivity */
    connectivityType?: ConnectivityType1;
  };

  export class CreateNatGatewayError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateNatGatewayError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type DescribeNatGatewaysRequest = {
    /** The IDs of the NAT gateways to describe */
    natGatewayId?: string[];
    /** Filters to apply to the results */
    filter?: string[];
    /** Maximum number of results to return */
    maxResults?: number;
    /** Token for the next page of results */
    nextToken?: string;
  };

  export const describeNatGatewaysRequestSchema: Schema<DescribeNatGatewaysRequest> = s.lazySchema(() =>
    s.object<DescribeNatGatewaysRequest>({
      natGatewayId: s.optional(s.array(s.string())),
      filter: s.optional(s.array(s.string())),
      maxResults: s.optional(s.int().check(s.gte(5), s.lte(1000))),
      nextToken: s.optional(s.string()),
    }),
  );

  export class DescribeNatGatewaysError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeNatGatewaysError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}
