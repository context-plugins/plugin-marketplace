import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsCertificateManagerAcmeEndpointApiSchema,
  type XAmzTargetAwsCertificateManagerAcmeEndpointApi,
} from "../models/xamz-target-aws-certificate-manager-acme-endpoint-api.js";
import {
  xAmzTarget1AwsCertificateManagerAcmeEndpointApiSchema,
  type XAmzTarget1AwsCertificateManagerAcmeEndpointApi,
} from "../models/xamz-target1-aws-certificate-manager-acme-endpoint-api.js";
import {
  xAmzTarget2AwsCertificateManagerAcmeEndpointApiSchema,
  type XAmzTarget2AwsCertificateManagerAcmeEndpointApi,
} from "../models/xamz-target2-aws-certificate-manager-acme-endpoint-api.js";
import {
  xAmzTarget3AwsCertificateManagerAcmeEndpointApiSchema,
  type XAmzTarget3AwsCertificateManagerAcmeEndpointApi,
} from "../models/xamz-target3-aws-certificate-manager-acme-endpoint-api.js";
import {
  xAmzTarget4AwsCertificateManagerAcmeEndpointApiSchema,
  type XAmzTarget4AwsCertificateManagerAcmeEndpointApi,
} from "../models/xamz-target4-aws-certificate-manager-acme-endpoint-api.js";
import type { Servers } from "../servers.js";

export class AcmeEndpointApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Acme Endpoint
   *
   * @remarks
   * Creates an ACME endpoint, which is a managed ACME server with a unique endpoint URL. After
   * creation, ACME clients can use the endpoint URL to automate certificate issuance using the ACME
   * protocol.
   *
   * @returns Success
   *
   * @throws {@link AcmeEndpointApi.CreateAcmeEndpointError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createAcmeEndpoint(
    request: AcmeEndpointApi.CreateAcmeEndpointRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AcmeEndpointApi.CreateAcmeEndpointError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateAcmeEndpoint"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsCertificateManagerAcmeEndpointApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AcmeEndpointApi.CreateAcmeEndpointError,
      },
      options,
    );
  }

  /**
   * Delete Acme Endpoint
   *
   * @remarks
   * Deletes an ACME endpoint. After deletion, the endpoint URL is no longer accessible and ACME
   * clients cannot issue certificates through it. Any existing external account bindings and domain
   * validations associated with the endpoint are also deleted.
   *
   * @returns Success
   *
   * @throws {@link AcmeEndpointApi.DeleteAcmeEndpointError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteAcmeEndpoint(
    request: AcmeEndpointApi.DeleteAcmeEndpointRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AcmeEndpointApi.DeleteAcmeEndpointError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteAcmeEndpoint"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AwsCertificateManagerAcmeEndpointApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AcmeEndpointApi.DeleteAcmeEndpointError,
      },
      options,
    );
  }

  /**
   * Describe Acme Endpoint
   *
   * @remarks
   * Returns detailed metadata about the specified ACME endpoint, including its status, URL,
   * authorization behavior, and certificate authority configuration.
   *
   * @returns Success
   *
   * @throws {@link AcmeEndpointApi.DescribeAcmeEndpointError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeAcmeEndpoint(
    request: AcmeEndpointApi.DescribeAcmeEndpointRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AcmeEndpointApi.DescribeAcmeEndpointError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeAcmeEndpoint"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AwsCertificateManagerAcmeEndpointApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AcmeEndpointApi.DescribeAcmeEndpointError,
      },
      options,
    );
  }

  /**
   * List Acme Endpoints
   *
   * @remarks
   * Retrieves a list of ACME endpoints in your account. Use this operation to view all configured
   * ACME endpoints and their current status.
   *
   * @returns Success
   *
   * @throws {@link AcmeEndpointApi.ListAcmeEndpointsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listAcmeEndpoints(
    request: AcmeEndpointApi.ListAcmeEndpointsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AcmeEndpointApi.ListAcmeEndpointsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListAcmeEndpoints"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AwsCertificateManagerAcmeEndpointApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AcmeEndpointApi.ListAcmeEndpointsError,
      },
      options,
    );
  }

  /**
   * Update Acme Endpoint
   *
   * @remarks
   * Updates the configuration of an existing ACME endpoint. You can change the authorization
   * behavior, contact requirement, or certificate authority settings.
   *
   * @returns Success
   *
   * @throws {@link AcmeEndpointApi.UpdateAcmeEndpointError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateAcmeEndpoint(
    request: AcmeEndpointApi.UpdateAcmeEndpointRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AcmeEndpointApi.UpdateAcmeEndpointError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateAcmeEndpoint"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget4AwsCertificateManagerAcmeEndpointApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AcmeEndpointApi.UpdateAcmeEndpointError,
      },
      options,
    );
  }
}

export namespace AcmeEndpointApi {
  export type CreateAcmeEndpointRequestParams = {
    xAmzTarget: XAmzTargetAwsCertificateManagerAcmeEndpointApi;
  };

  export class CreateAcmeEndpointError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAcmeEndpointError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteAcmeEndpointRequestParams = {
    xAmzTarget: XAmzTarget1AwsCertificateManagerAcmeEndpointApi;
  };

  export class DeleteAcmeEndpointError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAcmeEndpointError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeAcmeEndpointRequestParams = {
    xAmzTarget: XAmzTarget2AwsCertificateManagerAcmeEndpointApi;
  };

  export class DescribeAcmeEndpointError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeAcmeEndpointError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListAcmeEndpointsRequestParams = {
    xAmzTarget: XAmzTarget3AwsCertificateManagerAcmeEndpointApi;
  };

  export class ListAcmeEndpointsError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAcmeEndpointsError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateAcmeEndpointRequestParams = {
    xAmzTarget: XAmzTarget4AwsCertificateManagerAcmeEndpointApi;
  };

  export class UpdateAcmeEndpointError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAcmeEndpointError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
