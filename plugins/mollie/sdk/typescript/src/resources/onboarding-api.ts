import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  v2OnboardingMeRequestSchema,
  type V2OnboardingMeRequest,
} from "../models/v2-onboarding-me-request.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Onboarding API
 */
export class OnboardingApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get onboarding status
   *
   * @remarks
   * Retrieve the onboarding status of the currently authenticated organization.
   *
   * @returns The onboarding status object of the current organization.
   *
   * @throws {@link OnboardingApi.GetOnboardingStatusError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOnboardingStatus(
    request: OnboardingApi.GetOnboardingStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OnboardingApi.GetOnboardingStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/onboarding/me"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: OnboardingApi.GetOnboardingStatusError,
      },
      options,
    );
  }

  /**
   * Submit onboarding data
   *
   * @remarks
   * **⚠️ We no longer recommend implementing this endpoint. Please refer to the Client Links API
   * instead to kick off the onboarding process for your merchants.**
   *
   * Submit data that will be prefilled in the merchant's onboarding. The data you submit will only
   * be processed when the onboarding status is `needs-data`. Information that the merchant has
   * entered in their dashboard will not be overwritten.
   *
   * @returns An empty response.
   *
   * @throws {@link OnboardingApi.SubmitOnboardingDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  submitOnboardingData(
    request: OnboardingApi.SubmitOnboardingDataRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OnboardingApi.SubmitOnboardingDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/onboarding/me"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2OnboardingMeRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: OnboardingApi.SubmitOnboardingDataError,
      },
      options,
    );
  }
}

export namespace OnboardingApi {
  export type GetOnboardingStatusRequest = {
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetOnboardingStatusError extends ApiError {
    declare readonly payload: Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetOnboardingStatusError> = [
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type SubmitOnboardingDataRequest = {
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: V2OnboardingMeRequest;
  };

  export class SubmitOnboardingDataError extends ApiError {
    declare readonly payload: Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<SubmitOnboardingDataError> = [
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
