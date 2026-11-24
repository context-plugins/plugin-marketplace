import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  authorizationException1Schema,
  type AuthorizationException1,
} from "../models/authorization-exception1.js";
import {
  modelNotFoundException1Schema,
  type ModelNotFoundException1,
} from "../models/model-not-found-exception1.js";
import { payoutResourceSchema, type PayoutResource } from "../models/payout-resource.js";
import { v1PayoutsResponseInternalSchema, type V1PayoutsResponse } from "../models/v1-payouts-response.js";
import type { Servers } from "../servers.js";

export class Payouts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List all payouts
   *
   * @returns Paginated set of `PayoutResource`
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  payoutsIndex(options?: RequestOptions): ApiPromise<V1PayoutsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/payouts"),
        auth: this.#auth.http,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1PayoutsResponseInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a payout
   *
   * @returns `PayoutResource`
   *
   * @throws {@link Payouts.PayoutsShowError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  payoutsShow(
    request: Payouts.PayoutsShowRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutResource, Payouts.PayoutsShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/payouts/{payout}"),
        auth: this.#auth.http,
        pathParams: [{ name: "payout", value: request.payout, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: payoutResourceSchema },
        errorFactory: Payouts.PayoutsShowError,
      },
      options,
    );
  }
}

export namespace Payouts {
  export type PayoutsShowRequest = {
    /** The payout number */
    payout: string;
  };

  export class PayoutsShowError extends ApiError {
    declare readonly payload:
      | Declared<"authorizationException1", AuthorizationException1>
      | Declared<"modelNotFoundException1", ModelNotFoundException1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PayoutsShowError> = [
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
}
