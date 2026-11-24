import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  contractLifecycleResponseSchema,
  type ContractLifecycleResponse,
} from "../models/contract-lifecycle-response.js";
import {
  createContractResponseSchema,
  type CreateContractResponse,
} from "../models/create-contract-response.js";
import {
  customersContractsCancelRequestSchema,
  type CustomersContractsCancelRequest,
} from "../models/customers-contracts-cancel-request.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  mtsContractCreateInputInternalSchema,
  type MtsContractCreateInput,
} from "../models/mts-contract-create-input.js";
import {
  mtsContractDetailResponseInternalSchema,
  type MtsContractDetailResponse,
} from "../models/mts-contract-detail-response.js";
import { mtsContractInputInternalSchema, type MtsContractInput } from "../models/mts-contract-input.js";
import { mtsContractResponseSchema, type MtsContractResponse } from "../models/mts-contract-response.js";
import type { Servers } from "../servers.js";

/**
 * List and manage tenant-scoped contracts as a T1/T2 PartnerOps caller.
 */
export class Contracts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Activate contract
   *
   * @remarks
   * Transitions a draft contract to active or scheduled (when the start date is in the future).
   * Produces the same system state as activating via the Console.
   *
   * @returns OK - Contract activated or scheduled.
   *
   * @throws {@link Contracts.ActivateContractError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activateContract(
    request: Contracts.ActivateContractRequest,
    options?: RequestOptions,
  ): ApiPromise<ContractLifecycleResponse, Contracts.ActivateContractError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/{customerID}/contracts/{contractID}/activate"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "customerID", value: request.customerId, schema: s.string() },
          { name: "contractID", value: request.contractId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contractLifecycleResponseSchema },
        errorFactory: Contracts.ActivateContractError,
      },
      options,
    );
  }

  /**
   * Cancel contract
   *
   * @remarks
   * Cancels (deactivates) a contract. Active contracts cannot be deleted; cancel is the terminal
   * operation.
   *
   * @returns OK - Contract cancelled.
   *
   * @throws {@link Contracts.CancelContractError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelContract(
    request: Contracts.CancelContractRequest,
    options?: RequestOptions,
  ): ApiPromise<ContractLifecycleResponse, Contracts.CancelContractError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/{customerID}/contracts/{contractID}/cancel"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "customerID", value: request.customerId, schema: s.string() },
          { name: "contractID", value: request.contractId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => customersContractsCancelRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: contractLifecycleResponseSchema },
        errorFactory: Contracts.CancelContractError,
      },
      options,
    );
  }

  /**
   * Create contract
   *
   * @remarks
   * Creates a draft contract for the specified customer. Requires the caller to be the direct
   * parent (T1 for a T2-level contract, T2 for a T3-level contract). Write access requires a role
   * without contractsReadOnly; user API tokens must include the matching permission in their scope.
   *
   * @returns Created - The contract draft was created.
   *
   * @throws {@link Contracts.CreateContractError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createContract(
    request: Contracts.CreateContractRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateContractResponse, Contracts.CreateContractError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/{customerID}/contracts"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "customerID", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: mtsContractCreateInputInternalSchema },
      },
      {
        success: { kind: "json", schema: createContractResponseSchema },
        errorFactory: Contracts.CreateContractError,
      },
      options,
    );
  }

  /**
   * Retrieve a contract
   *
   * @remarks
   * Returns the specified contract.
   *
   * @returns OK - Contract returned.
   *
   * @throws {@link Contracts.GetContractError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContract(
    request: Contracts.GetContractRequest,
    options?: RequestOptions,
  ): ApiPromise<MtsContractDetailResponse, Contracts.GetContractError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{customerID}/contracts/{contractID}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "customerID", value: request.customerId, schema: s.string() },
          { name: "contractID", value: request.contractId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mtsContractDetailResponseInternalSchema },
        errorFactory: Contracts.GetContractError,
      },
      options,
    );
  }

  /**
   * List contracts
   *
   * @remarks
   * Lists the contracts held by the specified customer. Callable by a T1/T2 PartnerOps principal
   * for its own tenant or any descendant tenant. Read access requires contractsReadOnly,
   * contractsViewer, or a write-capable role (without contractsReadOnly). User API tokens must
   * include the matching permission in their scope.
   *
   * @returns OK - The request succeeded.
   *
   * @throws {@link Contracts.ListContractsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listContracts(
    request: Contracts.ListContractsRequest,
    options?: RequestOptions,
  ): ApiPromise<MtsContractResponse[], Contracts.ListContractsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{customerID}/contracts"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "customerID", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => mtsContractResponseSchema)) },
        errorFactory: Contracts.ListContractsError,
      },
      options,
    );
  }

  /**
   * Update contract
   *
   * @remarks
   * Creates a new version of the contract. The contract type is immutable and cannot be changed by
   * an update.
   *
   * @returns OK - New contract version created.
   *
   * @throws {@link Contracts.UpdateContractError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateContract(
    request: Contracts.UpdateContractRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateContractResponse, Contracts.UpdateContractError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/{customerID}/contracts/{contractID}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "customerID", value: request.customerId, schema: s.string() },
          { name: "contractID", value: request.contractId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: mtsContractInputInternalSchema },
      },
      {
        success: { kind: "json", schema: createContractResponseSchema },
        errorFactory: Contracts.UpdateContractError,
      },
      options,
    );
  }
}

export namespace Contracts {
  export type ActivateContractRequest = {
    customerId: string;
    contractId: string;
  };

  export class ActivateContractError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ActivateContractError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type CancelContractRequest = {
    customerId: string;
    contractId: string;
    body?: CustomersContractsCancelRequest;
  };

  export class CancelContractError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelContractError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateContractRequest = {
    /** The customer (tenant) the contract is created for. */
    customerId: string;
    body: MtsContractCreateInput;
  };

  export class CreateContractError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateContractError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetContractRequest = {
    customerId: string;
    contractId: string;
  };

  export class GetContractError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContractError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListContractsRequest = {
    /** The customer (tenant) whose contracts are requested. */
    customerId: string;
  };

  export class ListContractsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListContractsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateContractRequest = {
    customerId: string;
    contractId: string;
    body: MtsContractInput;
  };

  export class UpdateContractError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateContractError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
