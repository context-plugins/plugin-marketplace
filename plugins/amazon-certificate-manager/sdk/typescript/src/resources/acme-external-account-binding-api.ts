import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApiSchema,
  type XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi,
} from "../models/xamz-target-aws-certificate-manager-acme-external-account-binding-api.js";
import {
  xAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApiSchema,
  type XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi,
} from "../models/xamz-target1-aws-certificate-manager-acme-external-account-binding-api.js";
import {
  xAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApiSchema,
  type XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi,
} from "../models/xamz-target2-aws-certificate-manager-acme-external-account-binding-api.js";
import {
  xAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApiSchema,
  type XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi,
} from "../models/xamz-target3-aws-certificate-manager-acme-external-account-binding-api.js";
import {
  xAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApiSchema,
  type XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi,
} from "../models/xamz-target4-aws-certificate-manager-acme-external-account-binding-api.js";
import type { Servers } from "../servers.js";

export class AcmeExternalAccountBindingApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Acme External Account Binding
   *
   * @remarks
   * Creates an external account binding (EAB) for an ACME endpoint. An EAB provides credentials
   * that authorize an ACME client to register an account with the endpoint. Each EAB is associated
   * with an IAM role that controls what certificate operations the ACME client can perform.
   *
   * @returns Success
   *
   * @throws {@link AcmeExternalAccountBindingApi.CreateAcmeExternalAccountBindingError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createAcmeExternalAccountBinding(
    request: AcmeExternalAccountBindingApi.CreateAcmeExternalAccountBindingRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AcmeExternalAccountBindingApi.CreateAcmeExternalAccountBindingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateAcmeExternalAccountBinding"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AcmeExternalAccountBindingApi.CreateAcmeExternalAccountBindingError,
      },
      options,
    );
  }

  /**
   * Delete Acme External Account Binding
   *
   * @remarks
   * Deletes an external account binding. Previously fetched credentials for this binding will no
   * longer be usable for account registration. A deleted binding cannot be recovered.
   *
   * @returns Success
   *
   * @throws {@link AcmeExternalAccountBindingApi.DeleteAcmeExternalAccountBindingError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteAcmeExternalAccountBinding(
    request: AcmeExternalAccountBindingApi.DeleteAcmeExternalAccountBindingRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AcmeExternalAccountBindingApi.DeleteAcmeExternalAccountBindingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteAcmeExternalAccountBinding"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AcmeExternalAccountBindingApi.DeleteAcmeExternalAccountBindingError,
      },
      options,
    );
  }

  /**
   * Describe Acme External Account Binding
   *
   * @remarks
   * Returns detailed metadata about the specified external account binding, including the
   * associated IAM role, expiration time, and usage history.
   *
   * @returns Success
   *
   * @throws {@link AcmeExternalAccountBindingApi.DescribeAcmeExternalAccountBindingError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeAcmeExternalAccountBinding(
    request: AcmeExternalAccountBindingApi.DescribeAcmeExternalAccountBindingRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AcmeExternalAccountBindingApi.DescribeAcmeExternalAccountBindingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeAcmeExternalAccountBinding"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AcmeExternalAccountBindingApi.DescribeAcmeExternalAccountBindingError,
      },
      options,
    );
  }

  /**
   * List Acme External Account Bindings
   *
   * @remarks
   * Retrieves a list of external account bindings for the specified ACME endpoint.
   *
   * @returns Success
   *
   * @throws {@link AcmeExternalAccountBindingApi.ListAcmeExternalAccountBindingsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listAcmeExternalAccountBindings(
    request: AcmeExternalAccountBindingApi.ListAcmeExternalAccountBindingsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AcmeExternalAccountBindingApi.ListAcmeExternalAccountBindingsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListAcmeExternalAccountBindings"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AcmeExternalAccountBindingApi.ListAcmeExternalAccountBindingsError,
      },
      options,
    );
  }

  /**
   * Revoke Acme External Account Binding
   *
   * @remarks
   * Revokes an external account binding, preventing new ACME accounts from being registered using
   * this binding. Existing ACME accounts that were previously registered using the binding are not
   * affected and must be revoked separately.
   *
   * @returns Success
   *
   * @throws {@link AcmeExternalAccountBindingApi.RevokeAcmeExternalAccountBindingError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  revokeAcmeExternalAccountBinding(
    request: AcmeExternalAccountBindingApi.RevokeAcmeExternalAccountBindingRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AcmeExternalAccountBindingApi.RevokeAcmeExternalAccountBindingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RevokeAcmeExternalAccountBinding"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AcmeExternalAccountBindingApi.RevokeAcmeExternalAccountBindingError,
      },
      options,
    );
  }
}

export namespace AcmeExternalAccountBindingApi {
  export type CreateAcmeExternalAccountBindingRequestParams = {
    xAmzTarget: XAmzTargetAwsCertificateManagerAcmeExternalAccountBindingApi;
  };

  export class CreateAcmeExternalAccountBindingError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAcmeExternalAccountBindingError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteAcmeExternalAccountBindingRequestParams = {
    xAmzTarget: XAmzTarget1AwsCertificateManagerAcmeExternalAccountBindingApi;
  };

  export class DeleteAcmeExternalAccountBindingError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAcmeExternalAccountBindingError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type DescribeAcmeExternalAccountBindingRequestParams = {
    xAmzTarget: XAmzTarget2AwsCertificateManagerAcmeExternalAccountBindingApi;
  };

  export class DescribeAcmeExternalAccountBindingError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeAcmeExternalAccountBindingError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListAcmeExternalAccountBindingsRequestParams = {
    xAmzTarget: XAmzTarget3AwsCertificateManagerAcmeExternalAccountBindingApi;
  };

  export class ListAcmeExternalAccountBindingsError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAcmeExternalAccountBindingsError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RevokeAcmeExternalAccountBindingRequestParams = {
    xAmzTarget: XAmzTarget4AwsCertificateManagerAcmeExternalAccountBindingApi;
  };

  export class RevokeAcmeExternalAccountBindingError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RevokeAcmeExternalAccountBindingError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
