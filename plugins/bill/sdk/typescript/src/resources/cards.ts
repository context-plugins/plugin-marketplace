import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bdcErrorInternalSchema, type BdcError } from "../models/bdc-error.js";
import {
  cardPanTokenResponseDtoSchema,
  type CardPanTokenResponseDto,
} from "../models/card-pan-token-response-dto.js";
import { cardResponseDtoSchema, type CardResponseDto } from "../models/card-response-dto.js";
import {
  createCardRequestDtoInternalSchema,
  type CreateCardRequestDto,
} from "../models/create-card-request-dto.js";
import {
  paginationResponseDtoCardResponseDtoSchema,
  type PaginationResponseDtoCardResponseDto,
} from "../models/pagination-response-dto-card-response-dto.js";
import { updateCardRequestDtoSchema, type UpdateCardRequestDto } from "../models/update-card-request-dto.js";
import {
  userDeletedReasonTypeSchema,
  type UserDeletedReasonType,
} from "../models/user-deleted-reason-type.js";
import type { Servers } from "../servers.js";

export class Cards {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create a vendor card
   *
   * @remarks
   * Create a new vendor card.
   *
   * See Vendor cards in the Guides section for more information, sample requests, and responses.
   *
   * @returns Create a vendor card response
   *
   * @throws {@link Cards.CreateBudgetCardError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBudgetCard(
    request: Cards.CreateBudgetCardRequest,
    options?: RequestOptions,
  ): ApiPromise<CardResponseDto, Cards.CreateBudgetCardError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/spend/cards"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createCardRequestDtoInternalSchema },
      },
      {
        success: { kind: "json", schema: cardResponseDtoSchema },
        errorFactory: Cards.CreateBudgetCardError,
      },
      options,
    );
  }

  /**
   * Delete a vendor card
   *
   * @remarks
   * Delete an existing vendor card. A deleted card cannot be restored. The deleted card is not
   * available in the list of cards.
   *
   * @returns Delete a vendor card response
   *
   * @throws {@link Cards.DeleteCardError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCard(
    request: Cards.DeleteCardRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Cards.DeleteCardError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/spend/cards/{cardId}"),
        auth: noneAuth,
        pathParams: [{ name: "cardId", value: request.cardId, schema: s.string() }],
        query: [
          {
            name: "reason",
            value: request.reason,
            schema: s.optional(s.lazy(() => userDeletedReasonTypeSchema)),
          },
        ],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Cards.DeleteCardError,
      },
      options,
    );
  }

  /**
   * Freeze a vendor card
   *
   * @remarks
   * Freeze an existing vendor card.
   *
   * You can freeze virtual cards and physical cards. A frozen card cannot be used for payments.
   *
   * @returns Freeze a vendor card response
   *
   * @throws {@link Cards.FreezeCardError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  freezeCard(
    request: Cards.FreezeCardRequest,
    options?: RequestOptions,
  ): ApiPromise<CardResponseDto, Cards.FreezeCardError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/spend/cards/{cardId}/freeze"),
        auth: noneAuth,
        pathParams: [{ name: "cardId", value: request.cardId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cardResponseDtoSchema },
        errorFactory: Cards.FreezeCardError,
      },
      options,
    );
  }

  /**
   * Get vendor card details
   *
   * @remarks
   * Get details about an existing vendor card.
   *
   * @returns Get vendor card details response
   *
   * @throws {@link Cards.GetCardError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCard(
    request: Cards.GetCardRequest,
    options?: RequestOptions,
  ): ApiPromise<CardResponseDto, Cards.GetCardError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/spend/cards/{cardId}"),
        auth: noneAuth,
        pathParams: [{ name: "cardId", value: request.cardId, schema: s.string() }],
        query: [],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cardResponseDtoSchema },
        errorFactory: Cards.GetCardError,
      },
      options,
    );
  }

  /**
   * Get a PAN JWT token
   *
   * @returns Get a PAN JWT token response
   *
   * @throws {@link Cards.GetPanJwtError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPanJwt(
    request: Cards.GetPanJwtRequest,
    options?: RequestOptions,
  ): ApiPromise<CardPanTokenResponseDto, Cards.GetPanJwtError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/spend/cards/{cardId}/pan-jwt"),
        auth: noneAuth,
        pathParams: [{ name: "cardId", value: request.cardId, schema: s.string() }],
        query: [],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cardPanTokenResponseDtoSchema },
        errorFactory: Cards.GetPanJwtError,
      },
      options,
    );
  }

  /**
   * Get list of cards
   *
   * @remarks
   * Get a list of card objects. By default, you get 20 results on one page of results. Set `max` in
   * your request to get up to 100 results on one page.
   *
   * @returns Get list of cards response
   *
   * @throws {@link Cards.ListCardsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCards(
    request: Cards.ListCardsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginationResponseDtoCardResponseDto, Cards.ListCardsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/spend/cards"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "nextPage", value: request.nextPage, schema: s.optionalNullable(s.string()) },
          { name: "prevPage", value: request.prevPage, schema: s.optionalNullable(s.string()) },
          { name: "max", value: request.max, schema: s.optionalNullable(s.int()) },
          { name: "sort", value: request.sort, schema: s.optionalNullable(s.string()) },
          { name: "filters", value: request.filters, schema: s.optionalNullable(s.string()) },
        ],
        headers: [{ name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginationResponseDtoCardResponseDtoSchema },
        errorFactory: Cards.ListCardsError,
      },
      options,
    );
  }

  /**
   * Unfreeze a vendor card
   *
   * @remarks
   * Unfreeze an existing vendor card. You can unfreeze virtual cards and physical cards.
   *
   * @returns Unfreeze a vendor card response
   *
   * @throws {@link Cards.UnfreezeCardError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unfreezeCard(
    request: Cards.UnfreezeCardRequest,
    options?: RequestOptions,
  ): ApiPromise<CardResponseDto, Cards.UnfreezeCardError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/spend/cards/{cardId}/unfreeze"),
        auth: noneAuth,
        pathParams: [{ name: "cardId", value: request.cardId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cardResponseDtoSchema },
        errorFactory: Cards.UnfreezeCardError,
      },
      options,
    );
  }

  /**
   * Update a vendor card
   *
   * @remarks
   * Update details about an existing vendor card.
   *
   * @returns Update a vendor card response
   *
   * @throws {@link Cards.UpdateCardError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCard(
    request: Cards.UpdateCardRequest,
    options?: RequestOptions,
  ): ApiPromise<CardResponseDto, Cards.UpdateCardError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v3/spend/cards/{cardId}"),
        auth: noneAuth,
        pathParams: [{ name: "cardId", value: request.cardId, schema: s.string() }],
        query: [],
        headers: [
          { name: "apiToken", value: request.apiToken, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateCardRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: cardResponseDtoSchema },
        errorFactory: Cards.UpdateCardError,
      },
      options,
    );
  }
}

export namespace Cards {
  export type CreateBudgetCardRequest = {
    apiToken?: string | null;
    body: CreateCardRequestDto;
  };

  export class CreateBudgetCardError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBudgetCardError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type DeleteCardRequest = {
    cardId: string;
    reason?: UserDeletedReasonType;
    apiToken?: string | null;
  };

  export const deleteCardRequestSchema: Schema<DeleteCardRequest> = s.lazySchema(() =>
    s.object<DeleteCardRequest>({
      cardId: s.string().check(s.minLength(1)),
      reason: s.optional(s.lazy(() => userDeletedReasonTypeSchema)),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class DeleteCardError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCardError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type FreezeCardRequest = {
    cardId: string;
    apiToken?: string | null;
  };

  export const freezeCardRequestSchema: Schema<FreezeCardRequest> = s.lazySchema(() =>
    s.object<FreezeCardRequest>({
      cardId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class FreezeCardError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<FreezeCardError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetCardRequest = {
    cardId: string;
    apiToken?: string | null;
  };

  export const getCardRequestSchema: Schema<GetCardRequest> = s.lazySchema(() =>
    s.object<GetCardRequest>({
      cardId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class GetCardError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCardError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetPanJwtRequest = {
    cardId: string;
    apiToken?: string | null;
  };

  export const getPanJwtRequestSchema: Schema<GetPanJwtRequest> = s.lazySchema(() =>
    s.object<GetPanJwtRequest>({
      cardId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class GetPanJwtError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPanJwtError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListCardsRequest = {
    nextPage?: string | null;
    prevPage?: string | null;
    max?: number | null;
    sort?: string | null;
    filters?: string | null;
    apiToken?: string | null;
  };

  export const listCardsRequestSchema: Schema<ListCardsRequest> = s.lazySchema(() =>
    s.object<ListCardsRequest>({
      nextPage: s.optionalNullable(s.string()),
      prevPage: s.optionalNullable(s.string()),
      max: s.optionalNullable(s.int().check(s.gte(1), s.lte(100))),
      sort: s.optionalNullable(s.string()),
      filters: s.optionalNullable(s.string()),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class ListCardsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCardsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UnfreezeCardRequest = {
    cardId: string;
    apiToken?: string | null;
  };

  export const unfreezeCardRequestSchema: Schema<UnfreezeCardRequest> = s.lazySchema(() =>
    s.object<UnfreezeCardRequest>({
      cardId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
    }),
  );

  export class UnfreezeCardError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnfreezeCardError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UpdateCardRequest = {
    cardId: string;
    apiToken?: string | null;
    body: UpdateCardRequestDto;
  };

  export const updateCardRequestSchema: Schema<UpdateCardRequest> = s.lazySchema(() =>
    s.object<UpdateCardRequest>({
      cardId: s.string().check(s.minLength(1)),
      apiToken: s.optionalNullable(s.string()),
      body: updateCardRequestDtoSchema,
    }),
  );

  export class UpdateCardError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCardError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }
}
