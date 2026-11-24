import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  adOfferAdvertisementsGetResponseSchema,
  type AdOfferAdvertisementsGetResponse,
} from "../models/ad-offer-advertisements-get-response.js";
import {
  adOfferCreateResponseSchema,
  type AdOfferCreateResponse,
} from "../models/ad-offer-create-response.js";
import { adOffersGetResponseSchema, type AdOffersGetResponse } from "../models/ad-offers-get-response.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  publicationsAdNetworkOffersRequestSchema,
  type PublicationsAdNetworkOffersRequest,
} from "../models/publications-ad-network-offers-request.js";
import type { Servers } from "../servers.js";

export class AdNetworkOffers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get ad offer advertisements OAuth Scope: posts:read
   *
   * @remarks
   * This feature is currently in beta and the API is subject to change.
   *
   * Retrieve the active text advertisement creatives available for an ad offer.
   *
   * @returns OK
   *
   * @throws {@link AdNetworkOffers.AdvertisementsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  advertisements(
    request: AdNetworkOffers.AdvertisementsRequest,
    options?: RequestOptions,
  ): ApiPromise<AdOfferAdvertisementsGetResponse, AdNetworkOffers.AdvertisementsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/publications/{publicationId}/ad_network/offers/{offerId}/advertisements",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "offerId", value: request.offerId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adOfferAdvertisementsGetResponseSchema },
        errorFactory: AdNetworkOffers.AdvertisementsError,
      },
      options,
    );
  }

  /**
   * Accept ad offer OAuth Scope: posts:write
   *
   * @remarks
   * This feature is currently in beta and the API is subject to change.
   *
   * Draft and accept an ad offer, then insert the resulting advertisement opportunity into a post.
   *
   * @returns Created
   *
   * @throws {@link AdNetworkOffers.CreateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create(
    request: AdNetworkOffers.CreateRequest,
    options?: RequestOptions,
  ): ApiPromise<AdOfferCreateResponse, AdNetworkOffers.CreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/publications/{publicationId}/ad_network/offers"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsAdNetworkOffersRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: adOfferCreateResponseSchema },
        errorFactory: AdNetworkOffers.CreateError,
      },
      options,
    );
  }

  /**
   * Get ad offers OAuth Scope: posts:read
   *
   * @remarks
   * This feature is currently in beta and the API is subject to change.
   *
   * Retrieve a list of ad offers available for the publication.
   *
   * @returns OK
   *
   * @throws {@link AdNetworkOffers.IndexError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index(
    request: AdNetworkOffers.IndexRequest,
    options?: RequestOptions,
  ): ApiPromise<AdOffersGetResponse, AdNetworkOffers.IndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/ad_network/offers"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [{ name: "requested_from", value: request.requestedFrom, schema: s.optional(s.string()) }],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: adOffersGetResponseSchema },
        errorFactory: AdNetworkOffers.IndexError,
      },
      options,
    );
  }
}

export namespace AdNetworkOffers {
  export type AdvertisementsRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** The ID of the ad offer. */
    offerId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class AdvertisementsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AdvertisementsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsAdNetworkOffersRequest;
  };

  export class CreateError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type IndexRequest = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** A source identifier for where the offers request originated. */
    requestedFrom?: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class IndexError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<IndexError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
