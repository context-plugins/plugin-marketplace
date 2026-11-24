import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { eventContractCreateSchema, type EventContractCreate } from "../models/event-contract-create.js";
import { eventContractUpdateSchema, type EventContractUpdate } from "../models/event-contract-update.js";
import { eventDomainCreateSchema, type EventDomainCreate } from "../models/event-domain-create.js";
import { eventDomainUpdateSchema, type EventDomainUpdate } from "../models/event-domain-update.js";
import {
  eventsContractsResponseSchema,
  type EventsContractsResponse,
} from "../models/events-contracts-response.js";
import {
  eventsDomainsResponseSchema,
  type EventsDomainsResponse,
} from "../models/events-domains-response.js";
import { internalServerErrorSchema, type InternalServerError } from "../models/internal-server-error.js";
import {
  OrderByHightouchEventsApi,
  orderByHightouchEventsApiSchema,
} from "../models/order-by-hightouch-events-api.js";
import {
  eventsContractsResponse1Schema,
  type EventsContractsResponse1,
} from "../models/unions/events-contracts-response1.js";
import {
  eventsContractsResponse11Schema,
  type EventsContractsResponse11,
} from "../models/unions/events-contracts-response11.js";
import {
  eventsDomainsResponse1Schema,
  type EventsDomainsResponse1,
} from "../models/unions/events-domains-response1.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../models/validate-error-json.js";
import type { Servers } from "../servers.js";

export class Events {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an Event Contract
   *
   * @remarks
   * Create a new event contract
   *
   * @returns Ok
   *
   * @throws {@link Events.CreateContractError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createContract(
    request: Events.CreateContractRequest,
    options?: RequestOptions,
  ): ApiPromise<EventsContractsResponse1, Events.CreateContractError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/events/contracts"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: eventContractCreateSchema },
      },
      {
        success: { kind: "json", schema: eventsContractsResponse1Schema },
        errorFactory: Events.CreateContractError,
      },
      options,
    );
  }

  /**
   * Create an Event Domain
   *
   * @remarks
   * Create a new event domain, with its events and components.
   *
   * @returns Ok
   *
   * @throws {@link Events.CreateDomainError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDomain(
    request: Events.CreateDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<EventsDomainsResponse1, Events.CreateDomainError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/events/domains"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: eventDomainCreateSchema },
      },
      {
        success: { kind: "json", schema: eventsDomainsResponse1Schema },
        errorFactory: Events.CreateDomainError,
      },
      options,
    );
  }

  /**
   * Get Contract
   *
   * @remarks
   * Retrieve a contract based on its contract ID
   *
   * @returns Ok
   *
   * @throws {@link Events.GetContractError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContract(
    request: Events.GetContractRequest,
    options?: RequestOptions,
  ): ApiPromise<EventsContractsResponse1, Events.GetContractError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/events/contracts/{contractId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "contractId", value: request.contractId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventsContractsResponse1Schema },
        errorFactory: Events.GetContractError,
      },
      options,
    );
  }

  /**
   * Get Domain
   *
   * @remarks
   * Retrieve a domain by its id, including its events and components.
   *
   * @returns Ok
   *
   * @throws {@link Events.GetDomainError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDomain(
    request: Events.GetDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<EventsDomainsResponse1, Events.GetDomainError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/events/domains/{domainId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "domainId", value: request.domainId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventsDomainsResponse1Schema },
        errorFactory: Events.GetDomainError,
      },
      options,
    );
  }

  /**
   * List Event Contracts
   *
   * @remarks
   * List all event contracts in the current workspace
   *
   * @returns Ok
   *
   * @throws {@link Events.ListContractsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listContracts(
    request: Events.ListContractsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<EventsContractsResponse, Events.ListContractsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/events/contracts"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.float64(), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 100) },
          {
            name: "orderBy",
            value: request.orderBy,
            schema: s.defaulted(orderByHightouchEventsApiSchema, OrderByHightouchEventsApi.Id),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventsContractsResponseSchema },
        errorFactory: Events.ListContractsError,
      },
      options,
    );
  }

  /**
   * List Event Domains
   *
   * @remarks
   * List all event domains in the current workspace.
   *
   * Optional query `source`: filter to domains linked to that event source (slug). When set,
   * returned components are also filtered to those applicable to the source.
   *
   * @returns Ok
   *
   * @throws {@link Events.ListDomainsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDomains(
    request: Events.ListDomainsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<EventsDomainsResponse, Events.ListDomainsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/events/domains"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "source", value: request.source, schema: s.optional(s.string()) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.float64(), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.float64(), 100) },
          {
            name: "orderBy",
            value: request.orderBy,
            schema: s.defaulted(orderByHightouchEventsApiSchema, OrderByHightouchEventsApi.Id),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventsDomainsResponseSchema },
        errorFactory: Events.ListDomainsError,
      },
      options,
    );
  }

  /**
   * Update an Event Contract
   *
   * @remarks
   * Update an existing event contract
   *
   * Patch an event contract based on its Hightouch ID
   *
   * @returns Ok
   *
   * @throws {@link Events.UpdateContractError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateContract(
    request: Events.UpdateContractRequest,
    options?: RequestOptions,
  ): ApiPromise<EventsContractsResponse11, Events.UpdateContractError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/events/contracts/{contractId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "contractId", value: request.contractId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: eventContractUpdateSchema },
      },
      {
        success: { kind: "json", schema: eventsContractsResponse11Schema },
        errorFactory: Events.UpdateContractError,
      },
      options,
    );
  }

  /**
   * Update an Event Domain
   *
   * @remarks
   * Update an existing event domain, replacing its events and components.
   *
   * @returns Ok
   *
   * @throws {@link Events.UpdateDomainError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDomain(
    request: Events.UpdateDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<EventsDomainsResponse1, Events.UpdateDomainError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/events/domains/{domainId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "domainId", value: request.domainId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: eventDomainUpdateSchema },
      },
      {
        success: { kind: "json", schema: eventsDomainsResponse1Schema },
        errorFactory: Events.UpdateDomainError,
      },
      options,
    );
  }
}

export namespace Events {
  export type CreateContractRequest = {
    body: EventContractCreate;
  };

  export class CreateContractError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateContractError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }

  export type CreateDomainRequest = {
    body: EventDomainCreate;
  };

  export class CreateDomainError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateDomainError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }

  export type GetContractRequest = {
    /** The id of the contract */
    contractId: string;
  };

  export class GetContractError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContractError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type GetDomainRequest = {
    /** The id of the domain */
    domainId: string;
  };

  export class GetDomainError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDomainError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type ListContractsRequest = {
    name?: string;
    /** set the offset on results (for pagination) @default 0 */
    offset?: number;
    /** limit the number of objects returned (default is 100) @default 100 */
    limit?: number;
    /** specify the order @default OrderByHightouchEventsApi.Id */
    orderBy?: OrderByHightouchEventsApi;
  };

  export class ListContractsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListContractsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type ListDomainsRequest = {
    name?: string;
    /** filter to domains (and components) for this event source slug */
    source?: string;
    /** set the offset on results (for pagination) @default 0 */
    offset?: number;
    /** limit the number of objects returned (default is 100) @default 100 */
    limit?: number;
    /** specify the order @default OrderByHightouchEventsApi.Id */
    orderBy?: OrderByHightouchEventsApi;
  };

  export class ListDomainsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDomainsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
    ];
  }

  export type UpdateContractRequest = {
    contractId: string;
    body: EventContractUpdate;
  };

  export class UpdateContractError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateContractError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }

  export type UpdateDomainRequest = {
    /** The domain's id */
    domainId: string;
    body: EventDomainUpdate;
  };

  export class UpdateDomainError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"validateErrorJson", ValidateErrorJson>
      | Declared<"internalServerError", InternalServerError>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateDomainError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "validateErrorJson", decode: { kind: "json", schema: validateErrorJsonSchema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
    ];
  }
}
