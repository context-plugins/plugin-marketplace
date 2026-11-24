import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { assetItemDetailedSchema, type AssetItemDetailed } from "../models/asset-item-detailed.js";
import { assetResponseSchema, type AssetResponse } from "../models/asset-response.js";
import {
  billingV1AssetsRequestSchema,
  type BillingV1AssetsRequest,
} from "../models/billing-v1-assets-request.js";
import {
  billingV1AssetsResponseSchema,
  type BillingV1AssetsResponse,
} from "../models/billing-v1-assets-response.js";
import {
  billingV1AssetsResponse1Schema,
  type BillingV1AssetsResponse1,
} from "../models/billing-v1-assets-response1.js";
import { errorSchema, type Error } from "../models/error.js";
import { problemDetailsInternalSchema, type ProblemDetails } from "../models/problem-details.js";
import type { Servers } from "../servers.js";

/**
 * Manage cloud resources or services in your cloud environment.
 */
export class Assets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an asset
   *
   * @remarks
   * Creates a new asset.
   *
   * @returns OK - The request succeeded.
   *
   * @throws {@link Assets.CreateAssetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAsset(
    request: Assets.CreateAssetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<AssetResponse, Assets.CreateAssetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/billing/v1/createAsset"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: s.defaulted(s.string(), "amazon-web-services") },
          { name: "mode", value: request.mode, schema: s.defaulted(s.string(), "New") },
          {
            name: "accountName",
            value: request.accountName,
            schema: s.defaulted(s.string(), "Account name"),
          },
          { name: "rootEmail", value: request.rootEmail, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: assetResponseSchema },
        errorFactory: Assets.CreateAssetError,
      },
      options,
    );
  }

  /**
   * Retrieve an asset
   *
   * @remarks
   * Returns the full details of an asset specified by the asset id.
   *
   * @returns OK - Asset details returned.
   *
   * @throws {@link Assets.GetAssetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAsset(
    request: Assets.GetAssetRequest,
    options?: RequestOptions,
  ): ApiPromise<AssetItemDetailed, Assets.GetAssetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/billing/v1/assets/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: assetItemDetailedSchema },
        errorFactory: Assets.GetAssetError,
      },
      options,
    );
  }

  /**
   * Update an asset
   *
   * @remarks
   * Updates an existing asset, such as G Suite/Workspace or Office 365 subscription, to add or
   * remove licenses.
   *
   * @returns OK - Asset updated.
   *
   * @throws {@link Assets.IdOfAssetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  idOfAsset(
    request: Assets.IdOfAssetRequest,
    options?: RequestOptions,
  ): ApiPromise<BillingV1AssetsResponse1, Assets.IdOfAssetError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/billing/v1/assets/{id}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => billingV1AssetsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: billingV1AssetsResponse1Schema },
        errorFactory: Assets.IdOfAssetError,
      },
      options,
    );
  }

  /**
   * List assets
   *
   * @remarks
   * Returns a list of all available customer assets, such as Google Cloud billing accounts, G
   * Suite/Workspace subscriptions, etc. Assets are returned in reverse chronological order by
   * default.
   *
   * @returns OK - List of available assets returned.
   *
   * @throws {@link Assets.IdOfAssetsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  idOfAssets(
    request: Assets.IdOfAssetsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BillingV1AssetsResponse, Assets.IdOfAssetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/billing/v1/assets"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: billingV1AssetsResponseSchema },
        errorFactory: Assets.IdOfAssetsError,
      },
      options,
    );
  }
}

export namespace Assets {
  export type CreateAssetRequest = {
    /** Asset type. For example, amazon-web-services @default "amazon-web-services" */
    type?: string;
    /** Asset mode. @default "New" */
    mode?: string;
    /** The desired name of the account. @default "Account name" */
    accountName?: string;
    /** The root account email. */
    rootEmail?: string;
  };

  export class CreateAssetError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAssetError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 409, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 500, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type GetAssetRequest = {
    /** The unique id of an asset. */
    id: string;
  };

  export class GetAssetError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAssetError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type IdOfAssetRequest = {
    /** The unique id of an asset. */
    id: string;
    body?: BillingV1AssetsRequest;
  };

  export class IdOfAssetError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<IdOfAssetError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type IdOfAssetsRequest = {
    /**
     * The maximum number of results to return in a single page. Leverage the page tokens to iterate
     * through the entire collection.
     *
     * @default 50
     */
    maxResults?: number;
    /** Page token, returned by a previous call, to request the next page of results */
    pageToken?: string;
    /**
     * An expression for filtering the results of the request. The syntax is `key:[<value>]`. e.g:
     * "type:g-suite". Multiple filters can be connected using a pipe |. Note that using different
     * keys in the same filter results in “AND,” while using the same key multiple times in the same
     * filter results in “OR”.
     */
    filter?: string;
  };

  export class IdOfAssetsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<IdOfAssetsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
