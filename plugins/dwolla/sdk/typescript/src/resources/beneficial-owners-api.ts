import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { Accept, acceptSchema } from "../models/accept.js";
import {
  customersBeneficialOwnershipRequestSchema,
  type CustomersBeneficialOwnershipRequest,
} from "../models/customers-beneficial-ownership-request.js";
import {
  beneficialOwnersRequestSchema,
  type BeneficialOwnersRequest,
} from "../models/unions/beneficial-owners-request.js";
import {
  customersBeneficialOwnersRequestSchema,
  type CustomersBeneficialOwnersRequest,
} from "../models/unions/customers-beneficial-owners-request.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to Beneficial Owners
 */
export class BeneficialOwnersApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Certify beneficial ownership
   *
   * @remarks
   * Updates the beneficial ownership certification status to "certified", confirming that all
   * beneficial owner information is accurate and complete. This action enables the business
   * customer to send funds and is required to complete the verification process.
   *
   * @returns successful operation
   *
   * @throws {@link BeneficialOwnersApi.CertifyBeneficialOwnershipForCustomerError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  certifyBeneficialOwnershipForCustomer(
    request: BeneficialOwnersApi.CertifyBeneficialOwnershipForCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BeneficialOwnersApi.CertifyBeneficialOwnershipForCustomerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/{id}/beneficial-ownership"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: customersBeneficialOwnershipRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: BeneficialOwnersApi.CertifyBeneficialOwnershipForCustomerError,
      },
      options,
    );
  }

  /**
   * Create customer beneficial owner
   *
   * @remarks
   * Creates a new beneficial owner for a business verified customer. Beneficial owners are
   * individuals who own 25% or more of the company's equity. Requires personal information,
   * address, and SSN or passport for identity verification.
   *
   * @returns successful operation
   *
   * @throws {@link BeneficialOwnersApi.CreateBeneficialOwnerForCustomerError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBeneficialOwnerForCustomer(
    request: BeneficialOwnersApi.CreateBeneficialOwnerForCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BeneficialOwnersApi.CreateBeneficialOwnerForCustomerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/{id}/beneficial-owners"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: customersBeneficialOwnersRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: BeneficialOwnersApi.CreateBeneficialOwnerForCustomerError,
      },
      options,
    );
  }

  /**
   * Remove beneficial owner
   *
   * @remarks
   * Permanently removes a beneficial owner from a business customer. This action is irreversible
   * and the beneficial owner cannot be retrieved after removal. Removing a beneficial owner will
   * change the customer's certification status to "recertify".
   *
   * @returns successful operation
   *
   * @throws {@link BeneficialOwnersApi.DeleteBeneficialOwnerError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBeneficialOwner(
    request: BeneficialOwnersApi.DeleteBeneficialOwnerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BeneficialOwnersApi.DeleteBeneficialOwnerError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/beneficial-owners/{id}"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: BeneficialOwnersApi.DeleteBeneficialOwnerError,
      },
      options,
    );
  }

  /**
   * Retrieve beneficial ownership status
   *
   * @remarks
   * Returns the certification status of beneficial ownership for a business verified customer.
   * Status indicates whether beneficial owner information has been certified and affects the
   * customer's ability to send funds. Possible values include uncertified, certified, and
   * recertify.
   *
   * @returns successful operation
   *
   * @throws {@link BeneficialOwnersApi.GetBeneficialOwnershipStatusForCustomerError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBeneficialOwnershipStatusForCustomer(
    request: BeneficialOwnersApi.GetBeneficialOwnershipStatusForCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BeneficialOwnersApi.GetBeneficialOwnershipStatusForCustomerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{id}/beneficial-ownership"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: BeneficialOwnersApi.GetBeneficialOwnershipStatusForCustomerError,
      },
      options,
    );
  }

  /**
   * List customer beneficial owners
   *
   * @remarks
   * Returns all beneficial owners associated with a business verified customer. Beneficial owners
   * are individuals who directly or indirectly own 25% or more of the company's equity. Includes
   * personal information, verification status, and address details for each owner.
   *
   * @returns successful operation
   *
   * @throws {@link BeneficialOwnersApi.ListBeneficialOwnersForCustomerError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBeneficialOwnersForCustomer(
    request: BeneficialOwnersApi.ListBeneficialOwnersForCustomerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BeneficialOwnersApi.ListBeneficialOwnersForCustomerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{id}/beneficial-owners"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: BeneficialOwnersApi.ListBeneficialOwnersForCustomerError,
      },
      options,
    );
  }

  /**
   * Retrieve beneficial owner
   *
   * @remarks
   * Returns detailed information for a specific beneficial owner, including personal information,
   * address, and verification status. The verification status indicates the owner's identity
   * verification progress and affects the business customer's transaction capabilities.
   *
   * @returns successful operation
   *
   * @throws {@link BeneficialOwnersApi.RetrieveBeneficialOwnerError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveBeneficialOwner(
    request: BeneficialOwnersApi.RetrieveBeneficialOwnerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BeneficialOwnersApi.RetrieveBeneficialOwnerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/beneficial-owners/{id}"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: BeneficialOwnersApi.RetrieveBeneficialOwnerError,
      },
      options,
    );
  }

  /**
   * Update beneficial owner
   *
   * @remarks
   * Updates a beneficial owner's information to retry verification when their status is
   * "incomplete". Only beneficial owners with incomplete verification status can be updated. Used
   * to correct information that caused initial verification to fail.
   *
   * @returns successful operation
   *
   * @throws {@link BeneficialOwnersApi.UpdateBeneficialOwnerError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBeneficialOwner(
    request: BeneficialOwnersApi.UpdateBeneficialOwnerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BeneficialOwnersApi.UpdateBeneficialOwnerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beneficial-owners/{id}"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: beneficialOwnersRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: BeneficialOwnersApi.UpdateBeneficialOwnerError,
      },
      options,
    );
  }
}

export namespace BeneficialOwnersApi {
  export type CertifyBeneficialOwnershipForCustomerRequest = {
    /** Customer unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    /** Parameters for certifying beneficial ownership for a Customer */
    body: CustomersBeneficialOwnershipRequest;
  };

  export class CertifyBeneficialOwnershipForCustomerError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CertifyBeneficialOwnershipForCustomerError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type CreateBeneficialOwnerForCustomerRequest = {
    /** Customer ID for which to create a Beneficial Owner */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    /** Parameters for creating a beneficial owner */
    body: CustomersBeneficialOwnersRequest;
  };

  export class CreateBeneficialOwnerForCustomerError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBeneficialOwnerForCustomerError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type DeleteBeneficialOwnerRequest = {
    /** Beneficial owner unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class DeleteBeneficialOwnerError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBeneficialOwnerError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetBeneficialOwnershipStatusForCustomerRequest = {
    /** Customer unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetBeneficialOwnershipStatusForCustomerError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetBeneficialOwnershipStatusForCustomerError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListBeneficialOwnersForCustomerRequest = {
    /** Customer unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListBeneficialOwnersForCustomerError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListBeneficialOwnersForCustomerError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type RetrieveBeneficialOwnerRequest = {
    /** Beneficial owner unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class RetrieveBeneficialOwnerError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RetrieveBeneficialOwnerError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type UpdateBeneficialOwnerRequest = {
    /** Beneficial owner unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    /** Parameters for updating a beneficial owner */
    body: BeneficialOwnersRequest;
  };

  export class UpdateBeneficialOwnerError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBeneficialOwnerError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
