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
 * Operations for managing route tables and routes within a VPC
 */
export class RouteTables {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Amazon VPC Associate a Route Table with a Subnet
   *
   * @remarks
   * Associates a subnet or gateway with a route table. The subnet and route table must be in the
   * same VPC. This association causes traffic from the subnet to be routed according to the routes
   * in the route table.
   *
   * @returns Successfully associated route table
   *
   * @throws {@link RouteTables.AssociateRouteTableError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonVpcError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  associateRouteTable(
    request: RouteTables.AssociateRouteTableRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, RouteTables.AssociateRouteTableError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/?Action=AssociateRouteTable"),
        auth: this.#auth.sigv4Auth,
        pathParams: [],
        query: [
          { name: "RouteTableId", value: request.routeTableId, schema: s.string() },
          { name: "SubnetId", value: request.subnetId, schema: s.optional(s.string()) },
          { name: "GatewayId", value: request.gatewayId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: RouteTables.AssociateRouteTableError,
      },
      options,
    );
  }

  /**
   * Amazon VPC Create a Route in a Route Table
   *
   * @remarks
   * Creates a route in a route table within a VPC. You must specify either a destination CIDR block
   * or a prefix list ID. You must also specify exactly one of the targets.
   *
   * @returns Successfully created route
   *
   * @throws {@link RouteTables.CreateRouteError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonVpcError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRoute(
    request: RouteTables.CreateRouteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, RouteTables.CreateRouteError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/?Action=CreateRoute"),
        auth: this.#auth.sigv4Auth,
        pathParams: [],
        query: [
          { name: "RouteTableId", value: request.routeTableId, schema: s.string() },
          {
            name: "DestinationCidrBlock",
            value: request.destinationCidrBlock,
            schema: s.optional(s.string()),
          },
          { name: "GatewayId", value: request.gatewayId, schema: s.optional(s.string()) },
          { name: "NatGatewayId", value: request.natGatewayId, schema: s.optional(s.string()) },
          { name: "NetworkInterfaceId", value: request.networkInterfaceId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: RouteTables.CreateRouteError,
      },
      options,
    );
  }

  /**
   * Amazon VPC Create a Route Table
   *
   * @remarks
   * Creates a route table for the specified VPC. After you create a route table, you can add routes
   * and associate the table with a subnet.
   *
   * @returns Successfully created route table
   *
   * @throws {@link RouteTables.CreateRouteTableError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonVpcError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRouteTable(
    request: RouteTables.CreateRouteTableRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, RouteTables.CreateRouteTableError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/?Action=CreateRouteTable"),
        auth: this.#auth.sigv4Auth,
        pathParams: [],
        query: [{ name: "VpcId", value: request.vpcId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: RouteTables.CreateRouteTableError,
      },
      options,
    );
  }

  /**
   * Amazon VPC Describe Route Tables
   *
   * @remarks
   * Describes one or more of your route tables. Each subnet in your VPC must be associated with a
   * route table, which controls the routing for the subnet.
   *
   * @returns Successfully described route tables
   *
   * @throws {@link RouteTables.DescribeRouteTablesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonVpcError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeRouteTables(
    request: RouteTables.DescribeRouteTablesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, RouteTables.DescribeRouteTablesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/?Action=DescribeRouteTables"),
        auth: this.#auth.sigv4Auth,
        pathParams: [],
        query: [
          { name: "RouteTableId", value: request.routeTableId, schema: s.optional(s.array(s.string())) },
          { name: "Filter", value: request.filter, schema: s.optional(s.array(s.string())) },
          { name: "MaxResults", value: request.maxResults, schema: s.optional(s.int()) },
          { name: "NextToken", value: request.nextToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: RouteTables.DescribeRouteTablesError,
      },
      options,
    );
  }
}

export namespace RouteTables {
  export type AssociateRouteTableRequest = {
    /** The ID of the route table */
    routeTableId: string;
    /** The ID of the subnet */
    subnetId?: string;
    /** The ID of the internet gateway or virtual private gateway */
    gatewayId?: string;
  };

  export class AssociateRouteTableError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AssociateRouteTableError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type CreateRouteRequest = {
    /** The ID of the route table for the route */
    routeTableId: string;
    /** The IPv4 CIDR address block used for the destination match */
    destinationCidrBlock?: string;
    /** The ID of an internet gateway or virtual private gateway */
    gatewayId?: string;
    /** The ID of a NAT gateway */
    natGatewayId?: string;
    /** The ID of a network interface */
    networkInterfaceId?: string;
  };

  export class CreateRouteError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateRouteError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type CreateRouteTableRequest = {
    /** The ID of the VPC */
    vpcId: string;
  };

  export class CreateRouteTableError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateRouteTableError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export type DescribeRouteTablesRequest = {
    /** The IDs of the route tables to describe */
    routeTableId?: string[];
    /** Filters to apply to the results */
    filter?: string[];
    /** Maximum number of results to return */
    maxResults?: number;
    /** Token for the next page of results */
    nextToken?: string;
  };

  export const describeRouteTablesRequestSchema: Schema<DescribeRouteTablesRequest> = s.lazySchema(() =>
    s.object<DescribeRouteTablesRequest>({
      routeTableId: s.optional(s.array(s.string())),
      filter: s.optional(s.array(s.string())),
      maxResults: s.optional(s.int().check(s.gte(5), s.lte(1000))),
      nextToken: s.optional(s.string()),
    }),
  );

  export class DescribeRouteTablesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeRouteTablesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}
