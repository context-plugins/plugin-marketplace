import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  appSubscriptionsResponseSchema,
  type AppSubscriptionsResponse,
} from "../models/app-subscriptions-response.js";
import {
  appUserSubscriptionStatusResponseSchema,
  type AppUserSubscriptionStatusResponse,
} from "../models/app-user-subscription-status-response.js";
import { createEventRequestSchema, type CreateEventRequest } from "../models/create-event-request.js";
import { eventResponseSchema, type EventResponse } from "../models/event-response.js";
import type { Servers } from "../servers.js";

export class HermesPartnerApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Semrush Get event status
   *
   * @remarks
   * Documentation
   *
   * @returns OK
   *
   * @throws {@link HermesPartnerApi.GetApisV4HermesV0EventByIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SemrushError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApisV4HermesV0EventById(
    request: HermesPartnerApi.GetApisV4HermesV0EventByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<EventResponse, HermesPartnerApi.GetApisV4HermesV0EventByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/apis/v4/hermes/v0/event/{id}"),
        auth: this.#auth.jwtIssuerToken,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: eventResponseSchema },
        errorFactory: HermesPartnerApi.GetApisV4HermesV0EventByIdError,
      },
      options,
    );
  }

  /**
   * Semrush Get available subscriptions
   *
   * @remarks
   * List all application's registered subscriptions Documentation
   *
   * @returns OK
   *
   * @throws {@link HermesPartnerApi.GetApisV4HermesV0SubscriptionsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SemrushError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApisV4HermesV0Subscriptions(
    options?: RequestOptions,
  ): ApiPromise<AppSubscriptionsResponse, HermesPartnerApi.GetApisV4HermesV0SubscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/apis/v4/hermes/v0/subscriptions"),
        auth: this.#auth.jwtIssuerToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: appSubscriptionsResponseSchema },
        errorFactory: HermesPartnerApi.GetApisV4HermesV0SubscriptionsError,
      },
      options,
    );
  }

  /**
   * Semrush Get user's subscription status
   *
   * @remarks
   * Documentation
   *
   * @returns OK
   *
   * @throws {@link HermesPartnerApi.GetApisV4HermesV0UserByUserIdSubscriptionByIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SemrushError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApisV4HermesV0UserByUserIdSubscriptionById(
    request: HermesPartnerApi.GetApisV4HermesV0UserByUserIdSubscriptionByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AppUserSubscriptionStatusResponse,
    HermesPartnerApi.GetApisV4HermesV0UserByUserIdSubscriptionByIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/apis/v4/hermes/v0/user/{user_id}/subscription/{id}"),
        auth: this.#auth.jwtIssuerToken,
        pathParams: [
          { name: "user_id", value: request.userId, schema: s.int() },
          { name: "id", value: request.id, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: appUserSubscriptionStatusResponseSchema },
        errorFactory: HermesPartnerApi.GetApisV4HermesV0UserByUserIdSubscriptionByIdError,
      },
      options,
    );
  }

  /**
   * Semrush Send notification
   *
   * @remarks
   * Documentation
   *
   * @returns Created
   *
   * @throws {@link HermesPartnerApi.PostApisV4HermesV0EventError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SemrushError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApisV4HermesV0Event(
    request: HermesPartnerApi.PostApisV4HermesV0EventRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, HermesPartnerApi.PostApisV4HermesV0EventError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/apis/v4/hermes/v0/event"),
        auth: this.#auth.jwtIssuerToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createEventRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: HermesPartnerApi.PostApisV4HermesV0EventError,
      },
      options,
    );
  }
}

export namespace HermesPartnerApi {
  export type GetApisV4HermesV0EventByIdRequest = {
    /** Subscription id */
    id: string;
  };

  export class GetApisV4HermesV0EventByIdError extends ApiError {
    declare readonly payload: Declared<"error400", string> | Declared<"error401", string> | Undeclared;

    static readonly errors: ErrorDecoders<GetApisV4HermesV0EventByIdError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.string() } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export class GetApisV4HermesV0SubscriptionsError extends ApiError {
    declare readonly payload: Declared<"error400", string> | Declared<"error401", string> | Undeclared;

    static readonly errors: ErrorDecoders<GetApisV4HermesV0SubscriptionsError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.string() } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetApisV4HermesV0UserByUserIdSubscriptionByIdRequest = {
    /** User id */
    userId: number;
    /** Subscription id */
    id: number;
  };

  export class GetApisV4HermesV0UserByUserIdSubscriptionByIdError extends ApiError {
    declare readonly payload: Declared<"error400", string> | Declared<"error401", string> | Undeclared;

    static readonly errors: ErrorDecoders<GetApisV4HermesV0UserByUserIdSubscriptionByIdError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.string() } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type PostApisV4HermesV0EventRequest = {
    body?: CreateEventRequest;
  };

  export class PostApisV4HermesV0EventError extends ApiError {
    declare readonly payload: Declared<"error400", string> | Declared<"error401", string> | Undeclared;

    static readonly errors: ErrorDecoders<PostApisV4HermesV0EventError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.string() } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: s.string() } },
    ];
  }
}
