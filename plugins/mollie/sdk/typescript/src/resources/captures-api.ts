import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { entityCaptureSchema, type EntityCapture } from "../models/entity-capture.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Captures API
 */
export class CapturesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create capture
   *
   * @remarks
   * Capture an *authorized* payment.
   *
   * Some payment methods allow you to first collect a customer's authorization, and capture the
   * amount at a later point.
   *
   * By default, Mollie captures payments automatically. If however you configured your payment with
   * `captureMode: manual`, you can capture the payment using this endpoint after having collected
   * the customer's authorization.
   *
   * @returns The newly created capture object. For a complete reference of the capture object,
   * refer to the [Get capture endpoint](get-capture) documentation.
   *
   * @throws {@link CapturesApi.CreateCaptureError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCapture(
    request: CapturesApi.CreateCaptureRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CapturesApi.CreateCaptureError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/payments/{paymentId}/captures"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "paymentId", value: request.paymentId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => entityCaptureSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: CapturesApi.CreateCaptureError,
      },
      options,
    );
  }

  /**
   * Get capture
   *
   * @remarks
   * Retrieve a single payment capture by its ID and the ID of its parent payment.
   *
   * @returns The capture object.
   *
   * @throws {@link CapturesApi.GetCaptureError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCapture(
    request: CapturesApi.GetCaptureRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CapturesApi.GetCaptureError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/payments/{paymentId}/captures/{captureId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [
          { name: "paymentId", value: request.paymentId, schema: s.string() },
          { name: "captureId", value: request.captureId, schema: s.string() },
        ],
        query: [
          { name: "embed", value: request.embed, schema: s.optionalNullable(s.string()) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CapturesApi.GetCaptureError,
      },
      options,
    );
  }

  /**
   * List captures
   *
   * @remarks
   * Retrieve a list of all captures created for a specific payment.
   *
   * The results are paginated.
   *
   * @returns A list of capture objects.
   *
   * @throws {@link CapturesApi.ListCapturesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCaptures(
    request: CapturesApi.ListCapturesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, CapturesApi.ListCapturesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/payments/{paymentId}/captures"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "paymentId", value: request.paymentId, schema: s.string() }],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          { name: "embed", value: request.embed, schema: s.optionalNullable(s.string()) },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: CapturesApi.ListCapturesError,
      },
      options,
    );
  }
}

export namespace CapturesApi {
  export type CreateCaptureRequest = {
    /** Provide the ID of the related payment. */
    paymentId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: EntityCapture;
  };

  export class CreateCaptureError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCaptureError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetCaptureRequest = {
    /** Provide the ID of the related payment. */
    paymentId: string;
    /** Provide the ID of the related capture. */
    captureId: string;
    /**
     * This endpoint allows you to embed additional resources via the `embed` query string
     * parameter.
     */
    embed?: string | null;
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetCaptureError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetCaptureError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListCapturesRequest = {
    /** Provide the ID of the related payment. */
    paymentId: string;
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /**
     * This endpoint allows you to embed additional resources via the `embed` query string
     * parameter.
     */
    embed?: string | null;
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListCapturesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCapturesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
