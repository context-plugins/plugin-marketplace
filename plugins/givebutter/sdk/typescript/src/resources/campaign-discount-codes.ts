import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  authorizationException1Schema,
  type AuthorizationException1,
} from "../models/authorization-exception1.js";
import {
  campaignDiscountCodeResourceSchema,
  type CampaignDiscountCodeResource,
} from "../models/campaign-discount-code-resource.js";
import {
  modelNotFoundException1Schema,
  type ModelNotFoundException1,
} from "../models/model-not-found-exception1.js";
import {
  storeCampaignDiscountCodeRequestInternalSchema,
  type StoreCampaignDiscountCodeRequest,
} from "../models/store-campaign-discount-code-request.js";
import {
  updateCampaignDiscountCodeRequestInternalSchema,
  type UpdateCampaignDiscountCodeRequest,
} from "../models/update-campaign-discount-code-request.js";
import {
  v1CampaignsDiscountCodesResponseInternalSchema,
  type V1CampaignsDiscountCodesResponse,
} from "../models/v1-campaigns-discount-codes-response.js";
import {
  v1CampaignsDiscountCodes422Error1Schema,
  type V1CampaignsDiscountCodes422Error1,
} from "../models/v1-campaigns-discount-codes422-error1.js";
import { validationException1Schema, type ValidationException1 } from "../models/validation-exception1.js";
import type { Servers } from "../servers.js";

export class CampaignDiscountCodes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a discount code
   *
   * @returns No content
   *
   * @throws {@link CampaignDiscountCodes.CampaignsDiscountCodesDestroyError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  campaignsDiscountCodesDestroy(
    request: CampaignDiscountCodes.CampaignsDiscountCodesDestroyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CampaignDiscountCodes.CampaignsDiscountCodesDestroyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/campaigns/{campaign}/discount-codes/{discountCode}"),
        auth: this.#auth.http,
        pathParams: [
          { name: "campaign", value: request.campaign, schema: s.int() },
          { name: "discountCode", value: request.discountCode, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CampaignDiscountCodes.CampaignsDiscountCodesDestroyError,
      },
      options,
    );
  }

  /**
   * List all discount codes
   *
   * @returns Paginated set of `CampaignDiscountCodeResource`
   *
   * @throws {@link CampaignDiscountCodes.CampaignsDiscountCodesIndexError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  campaignsDiscountCodesIndex(
    request: CampaignDiscountCodes.CampaignsDiscountCodesIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CampaignsDiscountCodesResponse, CampaignDiscountCodes.CampaignsDiscountCodesIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/campaigns/{campaign}/discount-codes"),
        auth: this.#auth.http,
        pathParams: [{ name: "campaign", value: request.campaign, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CampaignsDiscountCodesResponseInternalSchema },
        errorFactory: CampaignDiscountCodes.CampaignsDiscountCodesIndexError,
      },
      options,
    );
  }

  /**
   * Get a discount code
   *
   * @returns `CampaignDiscountCodeResource`
   *
   * @throws {@link CampaignDiscountCodes.CampaignsDiscountCodesShowError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  campaignsDiscountCodesShow(
    request: CampaignDiscountCodes.CampaignsDiscountCodesShowRequest,
    options?: RequestOptions,
  ): ApiPromise<CampaignDiscountCodeResource, CampaignDiscountCodes.CampaignsDiscountCodesShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/campaigns/{campaign}/discount-codes/{discountCode}"),
        auth: this.#auth.http,
        pathParams: [
          { name: "campaign", value: request.campaign, schema: s.int() },
          { name: "discountCode", value: request.discountCode, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: campaignDiscountCodeResourceSchema },
        errorFactory: CampaignDiscountCodes.CampaignsDiscountCodesShowError,
      },
      options,
    );
  }

  /**
   * Create a discount code
   *
   * @returns `CampaignDiscountCodeResource`
   *
   * @throws {@link CampaignDiscountCodes.CampaignsDiscountCodesStoreError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  campaignsDiscountCodesStore(
    request: CampaignDiscountCodes.CampaignsDiscountCodesStoreRequest,
    options?: RequestOptions,
  ): ApiPromise<CampaignDiscountCodeResource, CampaignDiscountCodes.CampaignsDiscountCodesStoreError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/campaigns/{campaign}/discount-codes"),
        auth: this.#auth.http,
        pathParams: [{ name: "campaign", value: request.campaign, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: storeCampaignDiscountCodeRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: campaignDiscountCodeResourceSchema },
        errorFactory: CampaignDiscountCodes.CampaignsDiscountCodesStoreError,
      },
      options,
    );
  }

  /**
   * Update a discount code
   *
   * @returns `CampaignDiscountCodeResource`
   *
   * @throws {@link CampaignDiscountCodes.CampaignsDiscountCodesUpdateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  campaignsDiscountCodesUpdate(
    request: CampaignDiscountCodes.CampaignsDiscountCodesUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<CampaignDiscountCodeResource, CampaignDiscountCodes.CampaignsDiscountCodesUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v1/campaigns/{campaign}/discount-codes/{discountCode}"),
        auth: this.#auth.http,
        pathParams: [
          { name: "campaign", value: request.campaign, schema: s.int() },
          { name: "discountCode", value: request.discountCode, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateCampaignDiscountCodeRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: campaignDiscountCodeResourceSchema },
        errorFactory: CampaignDiscountCodes.CampaignsDiscountCodesUpdateError,
      },
      options,
    );
  }
}

export namespace CampaignDiscountCodes {
  export type CampaignsDiscountCodesDestroyRequest = {
    /** The campaign ID */
    campaign: number;
    /** The discount code ID */
    discountCode: number;
  };

  export class CampaignsDiscountCodesDestroyError extends ApiError {
    declare readonly payload:
      | Declared<"v1CampaignsDiscountCodes422Error1", V1CampaignsDiscountCodes422Error1>
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CampaignsDiscountCodesDestroyError> = [
      {
        on: 422,
        kind: "v1CampaignsDiscountCodes422Error1",
        decode: { kind: "json", schema: v1CampaignsDiscountCodes422Error1Schema },
      },
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }

  export type CampaignsDiscountCodesIndexRequest = {
    /** The campaign ID */
    campaign: number;
  };

  export class CampaignsDiscountCodesIndexError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CampaignsDiscountCodesIndexError> = [
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }

  export type CampaignsDiscountCodesShowRequest = {
    /** The campaign ID */
    campaign: number;
    /** The discount code ID */
    discountCode: number;
  };

  export class CampaignsDiscountCodesShowError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CampaignsDiscountCodesShowError> = [
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
    ];
  }

  export type CampaignsDiscountCodesStoreRequest = {
    /** The campaign ID */
    campaign: number;
    body: StoreCampaignDiscountCodeRequest;
  };

  export class CampaignsDiscountCodesStoreError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Declared<"validationException1", ValidationException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CampaignsDiscountCodesStoreError> = [
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
    ];
  }

  export type CampaignsDiscountCodesUpdateRequest = {
    /** The campaign ID */
    campaign: number;
    /** The discount code ID */
    discountCode: number;
    body: UpdateCampaignDiscountCodeRequest;
  };

  export class CampaignsDiscountCodesUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Declared<"validationException1", ValidationException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<CampaignsDiscountCodesUpdateError> = [
      {
        on: 403,
        kind: "authorizationException1",
        decode: { kind: "json", schema: authorizationException1Schema },
      },
      {
        on: 404,
        kind: "modelNotFoundException1",
        decode: { kind: "json", schema: modelNotFoundException1Schema },
      },
      { on: 422, kind: "validationException1", decode: { kind: "json", schema: validationException1Schema } },
    ];
  }
}
