import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { error400Schema, type Error400 } from "../models/error400.js";
import { error401Schema, type Error401 } from "../models/error401.js";
import { error403Schema, type Error403 } from "../models/error403.js";
import { error404Schema, type Error404 } from "../models/error404.js";
import { error405Schema, type Error405 } from "../models/error405.js";
import { error409Schema, type Error409 } from "../models/error409.js";
import { error425Schema, type Error425 } from "../models/error425.js";
import { error429Schema, type Error429 } from "../models/error429.js";
import { error500Schema, type Error500 } from "../models/error500.js";
import { error502Schema, type Error502 } from "../models/error502.js";
import { error504Schema, type Error504 } from "../models/error504.js";
import {
  giftCardActivationCreateSchema,
  type GiftCardActivationCreate,
} from "../models/gift-card-activation-create.js";
import {
  giftCardBalanceRequestSchema,
  type GiftCardBalanceRequest,
} from "../models/gift-card-balance-request.js";
import { giftCardCreateSchema, type GiftCardCreate } from "../models/gift-card-create.js";
import {
  giftCardIssuanceCreateSchema,
  type GiftCardIssuanceCreate,
} from "../models/gift-card-issuance-create.js";
import { giftCardIssuanceSchema, type GiftCardIssuance } from "../models/gift-card-issuance.js";
import { giftCardSummariesSchema, type GiftCardSummaries } from "../models/gift-card-summaries.js";
import { giftCardSchema, type GiftCard } from "../models/gift-card.js";
import { giftCardsSchema, type GiftCards } from "../models/gift-cards.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  buyerExternalIdentifier22Schema,
  type BuyerExternalIdentifier22,
} from "../models/unions/buyer-external-identifier22.js";
import { buyerId25Schema, type BuyerId25 } from "../models/unions/buyer-id25.js";
import { cursor2Schema, type Cursor2 } from "../models/unions/cursor2.js";
import { idempotencyKeySchema, type IdempotencyKey } from "../models/unions/idempotency-key.js";
import { idempotencyKey1Schema, type IdempotencyKey1 } from "../models/unions/idempotency-key1.js";
import {
  xGr4VyMerchantAccountIdSchema,
  type XGr4VyMerchantAccountId,
} from "../models/unions/xgr4-vy-merchant-account-id.js";
import type { Servers } from "../servers.js";

/**
 * Manage stored gift cards.
 */
export class GiftCardsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Activate a gift card
   *
   * @remarks
   * Activate a physical gift card through the primary gift card service. Set `store` to `true` to
   * also store the activated gift card.
   *
   * @returns Successful Response
   *
   * @throws {@link GiftCardsApi.ActivateGiftCardError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  activateGiftCard(
    request: GiftCardsApi.ActivateGiftCardRequest,
    options?: RequestOptions,
  ): ApiPromise<GiftCard, GiftCardsApi.ActivateGiftCardError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/gift-cards/activations"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "idempotency-key",
            value: request.idempotencyKey,
            schema: s.optional(s.lazy(() => idempotencyKeySchema)),
          },
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "json", value: request.body, schema: giftCardActivationCreateSchema },
      },
      {
        success: { kind: "json", schema: giftCardSchema },
        errorFactory: GiftCardsApi.ActivateGiftCardError,
      },
      options,
    );
  }

  /**
   * Create gift card
   *
   * @remarks
   * Store a new gift card in the vault.
   *
   * @returns Successful Response
   *
   * @throws {@link GiftCardsApi.CreateGiftCardError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createGiftCard(
    request: GiftCardsApi.CreateGiftCardRequest,
    options?: RequestOptions,
  ): ApiPromise<GiftCard, GiftCardsApi.CreateGiftCardError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/gift-cards"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: giftCardCreateSchema },
      },
      {
        success: { kind: "json", schema: giftCardSchema },
        errorFactory: GiftCardsApi.CreateGiftCardError,
      },
      options,
    );
  }

  /**
   * Get gift card
   *
   * @remarks
   * Fetch details about a gift card.
   *
   * @returns Successful Response
   *
   * @throws {@link GiftCardsApi.GetGiftCardError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getGiftCard(
    request: GiftCardsApi.GetGiftCardRequest,
    options?: RequestOptions,
  ): ApiPromise<GiftCard, GiftCardsApi.GetGiftCardError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/gift-cards/{gift_card_id}"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [{ name: "gift_card_id", value: request.giftCardId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: giftCardSchema },
        errorFactory: GiftCardsApi.GetGiftCardError,
      },
      options,
    );
  }

  /**
   * Issue a gift card
   *
   * @remarks
   * Issue a new virtual gift card through the primary gift card service.
   *
   * @returns Successful Response
   *
   * @throws {@link GiftCardsApi.IssueGiftCardError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  issueGiftCard(
    request: GiftCardsApi.IssueGiftCardRequest,
    options?: RequestOptions,
  ): ApiPromise<GiftCardIssuance, GiftCardsApi.IssueGiftCardError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/gift-cards/issuances"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "idempotency-key",
            value: request.idempotencyKey,
            schema: s.optional(s.lazy(() => idempotencyKey1Schema)),
          },
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "json", value: request.body, schema: giftCardIssuanceCreateSchema },
      },
      {
        success: { kind: "json", schema: giftCardIssuanceSchema },
        errorFactory: GiftCardsApi.IssueGiftCardError,
      },
      options,
    );
  }

  /**
   * List gift card balances
   *
   * @remarks
   * Fetch the balances for one or more gift cards.
   *
   * @returns Successful Response
   *
   * @throws {@link GiftCardsApi.ListGiftCardBalancesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGiftCardBalances(
    request: GiftCardsApi.ListGiftCardBalancesRequest,
    options?: RequestOptions,
  ): ApiPromise<GiftCardSummaries, GiftCardsApi.ListGiftCardBalancesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/gift-cards/balances"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: giftCardBalanceRequestSchema },
      },
      {
        success: { kind: "json", schema: giftCardSummariesSchema },
        errorFactory: GiftCardsApi.ListGiftCardBalancesError,
      },
      options,
    );
  }

  /**
   * List gift cards
   *
   * @remarks
   * Browser all gift cards.
   *
   * @returns Successful Response
   *
   * @throws {@link GiftCardsApi.ListGiftCardsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Gr4VyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGiftCards(
    request: GiftCardsApi.ListGiftCardsRequest,
    options?: RequestOptions,
  ): ApiPromise<GiftCards, GiftCardsApi.ListGiftCardsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/gift-cards"),
        auth: this.#auth.oAuth2PasswordBearer,
        pathParams: [],
        query: [
          {
            name: "buyer_external_identifier",
            value: request.buyerExternalIdentifier,
            schema: s.optional(s.lazy(() => buyerExternalIdentifier22Schema)),
          },
          { name: "buyer_id", value: request.buyerId, schema: s.optional(s.lazy(() => buyerId25Schema)) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursor2Schema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [
          {
            name: "x-gr4vy-merchant-account-id",
            value: request.xGr4VyMerchantAccountId,
            schema: s.optional(s.lazy(() => xGr4VyMerchantAccountIdSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: giftCardsSchema },
        errorFactory: GiftCardsApi.ListGiftCardsError,
      },
      options,
    );
  }
}

export namespace GiftCardsApi {
  export type ActivateGiftCardRequest = {
    /**
     * A unique key that identifies this request. If supported by the gift card service, the value
     * will be forwarded to make the activation idempotent. We recommend using V4 UUIDs, or another
     * random string with enough entropy to avoid collisions.
     */
    idempotencyKey?: IdempotencyKey;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body: GiftCardActivationCreate;
  };

  export class ActivateGiftCardError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ActivateGiftCardError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type CreateGiftCardRequest = {
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body: GiftCardCreate;
  };

  export class CreateGiftCardError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateGiftCardError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetGiftCardRequest = {
    /** The ID of the gift card. */
    giftCardId: string;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class GetGiftCardError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGiftCardError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type IssueGiftCardRequest = {
    /** A unique key forwarded to the gift card service to make the issuance idempotent. */
    idempotencyKey?: IdempotencyKey1;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body: GiftCardIssuanceCreate;
  };

  export class IssueGiftCardError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<IssueGiftCardError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListGiftCardBalancesRequest = {
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
    body: GiftCardBalanceRequest;
  };

  export class ListGiftCardBalancesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListGiftCardBalancesError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListGiftCardsRequest = {
    buyerExternalIdentifier?: BuyerExternalIdentifier22;
    buyerId?: BuyerId25;
    cursor?: Cursor2;
    /** @default 20 */
    limit?: number;
    /** The ID of the merchant account to use for this request. */
    xGr4VyMerchantAccountId?: XGr4VyMerchantAccountId;
  };

  export class ListGiftCardsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", Error400>
      | Declared<"error401", Error401>
      | Declared<"error403", Error403>
      | Declared<"error404", Error404>
      | Declared<"error405", Error405>
      | Declared<"error409", Error409>
      | Declared<"error425", Error425>
      | Declared<"error429", Error429>
      | Declared<"error500", Error500>
      | Declared<"error502", Error502>
      | Declared<"error504", Error504>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListGiftCardsError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: error401Schema } },
      { on: 403, kind: "error403", decode: { kind: "json", schema: error403Schema } },
      { on: 404, kind: "error404", decode: { kind: "json", schema: error404Schema } },
      { on: 405, kind: "error405", decode: { kind: "json", schema: error405Schema } },
      { on: 409, kind: "error409", decode: { kind: "json", schema: error409Schema } },
      { on: 425, kind: "error425", decode: { kind: "json", schema: error425Schema } },
      { on: 429, kind: "error429", decode: { kind: "json", schema: error429Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: error500Schema } },
      { on: 502, kind: "error502", decode: { kind: "json", schema: error502Schema } },
      { on: 504, kind: "error504", decode: { kind: "json", schema: error504Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
