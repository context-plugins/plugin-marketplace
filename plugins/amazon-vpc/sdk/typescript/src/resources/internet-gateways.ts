import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

/**
 * Operations for managing internet gateways that connect VPCs to the internet
 */
export class InternetGateways {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Amazon VPC Attach an Internet Gateway to a VPC
   *
   * @remarks
   * Attaches an internet gateway or a virtual private gateway to a VPC, enabling connectivity
   * between the internet and the VPC.
   *
   * @returns Successfully attached internet gateway
   *
   * @throws {@link InternetGateways.AttachInternetGatewayError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonVpcError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  attachInternetGateway(
    request: InternetGateways.AttachInternetGatewayRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, InternetGateways.AttachInternetGatewayError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/?Action=AttachInternetGateway"),
        auth: this.#auth.sigv4Auth,
        pathParams: [],
        query: [
          { name: "InternetGatewayId", value: request.internetGatewayId, schema: s.string() },
          { name: "VpcId", value: request.vpcId, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: InternetGateways.AttachInternetGatewayError,
      },
      options,
    );
  }

  /**
   * Amazon VPC Create an Internet Gateway
   *
   * @remarks
   * Creates an internet gateway for use with a VPC. After creating the internet gateway, you attach
   * it to a VPC using AttachInternetGateway.
   *
   * @returns Successfully created internet gateway
   *
   * @throws {@link InternetGateways.CreateInternetGatewayError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonVpcError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createInternetGateway(
    options?: RequestOptions,
  ): ApiPromise<undefined, InternetGateways.CreateInternetGatewayError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/?Action=CreateInternetGateway"),
        auth: this.#auth.sigv4Auth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: InternetGateways.CreateInternetGatewayError,
      },
      options,
    );
  }
}

export namespace InternetGateways {
  export type AttachInternetGatewayRequest = {
    /** The ID of the internet gateway */
    internetGatewayId: string;
    /** The ID of the VPC */
    vpcId: string;
  };

  export class AttachInternetGatewayError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AttachInternetGatewayError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }

  export class CreateInternetGatewayError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateInternetGatewayError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}
