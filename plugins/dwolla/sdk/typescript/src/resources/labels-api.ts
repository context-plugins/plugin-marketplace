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
  customersLabelsRequestSchema,
  type CustomersLabelsRequest,
} from "../models/customers-labels-request.js";
import {
  labelReallocationsRequestSchema,
  type LabelReallocationsRequest,
} from "../models/label-reallocations-request.js";
import {
  labelsLedgerEntriesRequestSchema,
  type LabelsLedgerEntriesRequest,
} from "../models/labels-ledger-entries-request.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to Labels
 */
export class LabelsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a label for a customer
   *
   * @remarks
   * Creates a new label for a Verified Customer with a specified amount. Labels help organize and
   * track funds within a customer's balance. Returns the location of the created label resource in
   * the response header.
   *
   * @returns create
   *
   * @throws {@link LabelsApi.CreateCustomerLabelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomerLabel(
    request: LabelsApi.CreateCustomerLabelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LabelsApi.CreateCustomerLabelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/customers/{id}/labels"),
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
        body: { kind: "json", value: request.body, schema: customersLabelsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: LabelsApi.CreateCustomerLabelError,
      },
      options,
    );
  }

  /**
   * Create a label ledger entry
   *
   * @remarks
   * Create a new ledger entry to track fund adjustments on a Label by specifying a positive or
   * negative amount value. Returns the location of the created ledger entry in the response header.
   * Label amounts cannot go negative, so validation errors occur if the entry would result in a
   * negative Label balance.
   *
   * @returns created
   *
   * @throws {@link LabelsApi.CreateLabelLedgerEntryError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLabelLedgerEntry(
    request: LabelsApi.CreateLabelLedgerEntryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LabelsApi.CreateLabelLedgerEntryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/labels/{id}/ledger-entries"),
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
        body: { kind: "json", value: request.body, schema: labelsLedgerEntriesRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: LabelsApi.CreateLabelLedgerEntryError,
      },
      options,
    );
  }

  /**
   * Create a label reallocation
   *
   * @remarks
   * Reallocates funds between two labels belonging to the same Verified Customer. Moves the
   * specified amount from the source label to the destination label, creating ledger entries for
   * both. The reallocation only succeeds if the source label has sufficient funds.
   *
   * @returns created
   *
   * @throws {@link LabelsApi.CreateLabelReallocationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLabelReallocation(
    request: LabelsApi.CreateLabelReallocationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LabelsApi.CreateLabelReallocationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/label-reallocations"),
        auth: this.#auth.clientCredentials,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: labelReallocationsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: LabelsApi.CreateLabelReallocationError,
      },
      options,
    );
  }

  /**
   * Retrieve a label
   *
   * @remarks
   * Retrieve details for a specific Label used to categorize and track funds within your account.
   * Returns Label information including unique identifier, current amount with currency, and
   * creation timestamp.
   *
   * @returns successful operation
   *
   * @throws {@link LabelsApi.GetLabelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLabel(
    request: LabelsApi.GetLabelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LabelsApi.GetLabelError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/labels/{id}"),
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
        errorFactory: LabelsApi.GetLabelError,
      },
      options,
    );
  }

  /**
   * Retrieve a label ledger entry
   *
   * @remarks
   * Returns detailed information for a specific ledger entry on a Label, including its amount,
   * currency, and creation timestamp.
   *
   * @returns successful operation
   *
   * @throws {@link LabelsApi.GetLabelLedgerEntryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLabelLedgerEntry(
    request: LabelsApi.GetLabelLedgerEntryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LabelsApi.GetLabelLedgerEntryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ledger-entries/{ledgerEntryId}"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "ledgerEntryId", value: request.ledgerEntryId, schema: s.string() }],
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
        errorFactory: LabelsApi.GetLabelLedgerEntryError,
      },
      options,
    );
  }

  /**
   * List labels for a customer
   *
   * @remarks
   * Returns all labels for a specified Verified Customer, sorted by creation date (most recent
   * first). Supports pagination with limit and offset parameters. Each label includes its current
   * amount and creation timestamp.
   *
   * @returns success operation
   *
   * @throws {@link LabelsApi.ListCustomerLabelsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerLabels(
    request: LabelsApi.ListCustomerLabelsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LabelsApi.ListCustomerLabelsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/{id}/labels"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.optional(s.string()) },
        ],
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
        errorFactory: LabelsApi.ListCustomerLabelsError,
      },
      options,
    );
  }

  /**
   * List label ledger entries
   *
   * @remarks
   * Returns all ledger entries for a specific Label, sorted by creation date (newest first).
   * Supports pagination with limit and offset parameters. Each ledger entry includes its amount,
   * currency, and creation timestamp.
   *
   * @returns successful operation
   *
   * @throws {@link LabelsApi.ListLabelLedgerEntriesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listLabelLedgerEntries(
    request: LabelsApi.ListLabelLedgerEntriesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LabelsApi.ListLabelLedgerEntriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/labels/{id}/ledger-entries"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
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
        errorFactory: LabelsApi.ListLabelLedgerEntriesError,
      },
      options,
    );
  }

  /**
   * Remove a label
   *
   * @remarks
   * Delete a Label to stop tracking funds and remove it from your account. Returns success status
   * if the Label is successfully removed. Use this to streamline your account management and remove
   * unused Labels from your system.
   *
   * @returns successful operation
   *
   * @throws {@link LabelsApi.RemoveLabelError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeLabel(
    request: LabelsApi.RemoveLabelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LabelsApi.RemoveLabelError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/labels/{id}"),
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
        errorFactory: LabelsApi.RemoveLabelError,
      },
      options,
    );
  }

  /**
   * Retrieve a label reallocation
   *
   * @remarks
   * Retrieve details for a specific label reallocation that transfers funds between Labels. Returns
   * reallocation information including source and destination Labels, amount transferred, status,
   * and creation timestamp. Use this to track and audit fund movements between different Labels.
   *
   * @returns successful operation
   *
   * @throws {@link LabelsApi.RetrieveLabelReallocationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveLabelReallocation(
    request: LabelsApi.RetrieveLabelReallocationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, LabelsApi.RetrieveLabelReallocationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/label-reallocations/{reallocationId}"),
        auth: this.#auth.clientCredentials,
        pathParams: [{ name: "reallocationId", value: request.reallocationId, schema: s.string() }],
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
        errorFactory: LabelsApi.RetrieveLabelReallocationError,
      },
      options,
    );
  }
}

export namespace LabelsApi {
  export type CreateCustomerLabelRequest = {
    /** ID of customer to create a label for */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    /** Parameters to create a customer label */
    body: CustomersLabelsRequest;
  };

  export class CreateCustomerLabelError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerLabelError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type CreateLabelLedgerEntryRequest = {
    /** The Id of the Label to update. */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    /** Parameters to create a label ledger entry */
    body: LabelsLedgerEntriesRequest;
  };

  export class CreateLabelLedgerEntryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateLabelLedgerEntryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type CreateLabelReallocationRequest = {
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    /** Parameters to create a label reallocation */
    body: LabelReallocationsRequest;
  };

  export class CreateLabelReallocationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateLabelReallocationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetLabelRequest = {
    /** Label unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetLabelError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetLabelError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetLabelLedgerEntryRequest = {
    /** A label ledger entry unique identifier */
    ledgerEntryId: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class GetLabelLedgerEntryError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetLabelLedgerEntryError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListCustomerLabelsRequest = {
    /** ID of customer */
    id: string;
    /** How many results to return */
    limit?: string;
    /** How many results to skip */
    offset?: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListCustomerLabelsError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListCustomerLabelsError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type ListLabelLedgerEntriesRequest = {
    /** A label unique identifier */
    id: string;
    /** How many results to return */
    limit?: number;
    /** How many results to skip */
    offset?: number;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class ListLabelLedgerEntriesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListLabelLedgerEntriesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type RemoveLabelRequest = {
    /** A label unique identifier */
    id: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class RemoveLabelError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RemoveLabelError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type RetrieveLabelReallocationRequest = {
    /** Label reallocation unique identifier */
    reallocationId: string;
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class RetrieveLabelReallocationError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<RetrieveLabelReallocationError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
