import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { xAmzTargetSchema, type XAmzTarget } from "../models/xamz-target.js";
import { xAmzTarget1Schema, type XAmzTarget1 } from "../models/xamz-target1.js";
import { xAmzTarget2Schema, type XAmzTarget2 } from "../models/xamz-target2.js";
import type { Servers } from "../servers.js";

export class AcmeAccountApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Describe Acme Account
   *
   * @remarks
   * Returns detailed metadata about the specified ACME account, including its status, public key
   * thumbprint, and associated external account binding.
   *
   * @returns Success
   *
   * @throws {@link AcmeAccountApi.DescribeAcmeAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeAcmeAccount(
    request: AcmeAccountApi.DescribeAcmeAccountRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AcmeAccountApi.DescribeAcmeAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeAcmeAccount"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTargetSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AcmeAccountApi.DescribeAcmeAccountError,
      },
      options,
    );
  }

  /**
   * List Acme Accounts
   *
   * @remarks
   * Retrieves a list of ACME accounts registered with the specified ACME endpoint. ACME accounts
   * are created when clients use external account binding credentials to register.
   *
   * @returns Success
   *
   * @throws {@link AcmeAccountApi.ListAcmeAccountsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listAcmeAccounts(
    request: AcmeAccountApi.ListAcmeAccountsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AcmeAccountApi.ListAcmeAccountsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListAcmeAccounts"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget1Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AcmeAccountApi.ListAcmeAccountsError,
      },
      options,
    );
  }

  /**
   * Revoke Acme Account
   *
   * @remarks
   * Revokes an ACME account, preventing it from requesting or revoking certificates. This operation
   * is irreversible.
   *
   * @returns Success
   *
   * @throws {@link AcmeAccountApi.RevokeAcmeAccountError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  revokeAcmeAccount(
    request: AcmeAccountApi.RevokeAcmeAccountRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AcmeAccountApi.RevokeAcmeAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#RevokeAcmeAccount"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget2Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AcmeAccountApi.RevokeAcmeAccountError,
      },
      options,
    );
  }
}

export namespace AcmeAccountApi {
  export type DescribeAcmeAccountRequestParams = {
    xAmzTarget: XAmzTarget;
  };

  export class DescribeAcmeAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeAcmeAccountError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListAcmeAccountsRequestParams = {
    xAmzTarget: XAmzTarget1;
  };

  export class ListAcmeAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAcmeAccountsError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type RevokeAcmeAccountRequestParams = {
    xAmzTarget: XAmzTarget2;
  };

  export class RevokeAcmeAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<RevokeAcmeAccountError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
