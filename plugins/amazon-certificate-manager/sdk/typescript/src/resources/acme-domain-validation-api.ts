import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsCertificateManagerAcmeDomainValidationApiSchema,
  type XAmzTargetAwsCertificateManagerAcmeDomainValidationApi,
} from "../models/xamz-target-aws-certificate-manager-acme-domain-validation-api.js";
import {
  xAmzTarget1AwsCertificateManagerAcmeDomainValidationApiSchema,
  type XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi,
} from "../models/xamz-target1-aws-certificate-manager-acme-domain-validation-api.js";
import {
  xAmzTarget2AwsCertificateManagerAcmeDomainValidationApiSchema,
  type XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi,
} from "../models/xamz-target2-aws-certificate-manager-acme-domain-validation-api.js";
import { xAmzTarget3Schema, type XAmzTarget3 } from "../models/xamz-target3.js";
import { xAmzTarget4Schema, type XAmzTarget4 } from "../models/xamz-target4.js";
import type { Servers } from "../servers.js";

export class AcmeDomainValidationApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Acme Domain Validation
   *
   * @remarks
   * Creates a domain validation for an ACME endpoint. Domain validations authorize the endpoint to
   * issue certificates for specified domain names. You configure prevalidation to prove domain
   * ownership.
   *
   * @returns Success
   *
   * @throws {@link AcmeDomainValidationApi.CreateAcmeDomainValidationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createAcmeDomainValidation(
    request: AcmeDomainValidationApi.CreateAcmeDomainValidationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AcmeDomainValidationApi.CreateAcmeDomainValidationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateAcmeDomainValidation"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsCertificateManagerAcmeDomainValidationApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AcmeDomainValidationApi.CreateAcmeDomainValidationError,
      },
      options,
    );
  }

  /**
   * Delete Acme Domain Validation
   *
   * @remarks
   * Deletes a domain validation. After deletion, the ACME endpoint can no longer issue certificates
   * for the associated domain.
   *
   * @returns Success
   *
   * @throws {@link AcmeDomainValidationApi.DeleteAcmeDomainValidationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteAcmeDomainValidation(
    request: AcmeDomainValidationApi.DeleteAcmeDomainValidationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AcmeDomainValidationApi.DeleteAcmeDomainValidationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteAcmeDomainValidation"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AwsCertificateManagerAcmeDomainValidationApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AcmeDomainValidationApi.DeleteAcmeDomainValidationError,
      },
      options,
    );
  }

  /**
   * Describe Acme Domain Validation
   *
   * @remarks
   * Returns detailed metadata about the specified domain validation, including its status, domain
   * scope, and DNS resource records required for validation.
   *
   * @returns Success
   *
   * @throws {@link AcmeDomainValidationApi.DescribeAcmeDomainValidationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeAcmeDomainValidation(
    request: AcmeDomainValidationApi.DescribeAcmeDomainValidationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AcmeDomainValidationApi.DescribeAcmeDomainValidationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeAcmeDomainValidation"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AwsCertificateManagerAcmeDomainValidationApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AcmeDomainValidationApi.DescribeAcmeDomainValidationError,
      },
      options,
    );
  }

  /**
   * List Acme Domain Validations
   *
   * @remarks
   * Retrieves a list of domain validations for the specified ACME endpoint.
   *
   * @returns Success
   *
   * @throws {@link AcmeDomainValidationApi.ListAcmeDomainValidationsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listAcmeDomainValidations(
    request: AcmeDomainValidationApi.ListAcmeDomainValidationsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AcmeDomainValidationApi.ListAcmeDomainValidationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListAcmeDomainValidations"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget3Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AcmeDomainValidationApi.ListAcmeDomainValidationsError,
      },
      options,
    );
  }

  /**
   * Update Acme Domain Validation
   *
   * @remarks
   * Updates the prevalidation configuration of an existing domain validation.
   *
   * @returns Success
   *
   * @throws {@link AcmeDomainValidationApi.UpdateAcmeDomainValidationError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCertificateManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateAcmeDomainValidation(
    request: AcmeDomainValidationApi.UpdateAcmeDomainValidationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AcmeDomainValidationApi.UpdateAcmeDomainValidationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateAcmeDomainValidation"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget4Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AcmeDomainValidationApi.UpdateAcmeDomainValidationError,
      },
      options,
    );
  }
}

export namespace AcmeDomainValidationApi {
  export type CreateAcmeDomainValidationRequestParams = {
    xAmzTarget: XAmzTargetAwsCertificateManagerAcmeDomainValidationApi;
  };

  export class CreateAcmeDomainValidationError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAcmeDomainValidationError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteAcmeDomainValidationRequestParams = {
    xAmzTarget: XAmzTarget1AwsCertificateManagerAcmeDomainValidationApi;
  };

  export class DeleteAcmeDomainValidationError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAcmeDomainValidationError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeAcmeDomainValidationRequestParams = {
    xAmzTarget: XAmzTarget2AwsCertificateManagerAcmeDomainValidationApi;
  };

  export class DescribeAcmeDomainValidationError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeAcmeDomainValidationError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type ListAcmeDomainValidationsRequestParams = {
    xAmzTarget: XAmzTarget3;
  };

  export class ListAcmeDomainValidationsError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error500", undefined>
      | Declared<"error400", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAcmeDomainValidationsError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type UpdateAcmeDomainValidationRequestParams = {
    xAmzTarget: XAmzTarget4;
  };

  export class UpdateAcmeDomainValidationError extends ApiError {
    declare readonly payload:
      | Declared<"error403", undefined>
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAcmeDomainValidationError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
