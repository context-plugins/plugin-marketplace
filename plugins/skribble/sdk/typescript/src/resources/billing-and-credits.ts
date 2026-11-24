import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { billingCreditInfosSchema, type BillingCreditInfos } from "../models/billing-credit-infos.js";
import { billingCreditUsageSchema, type BillingCreditUsage } from "../models/billing-credit-usage.js";
import {
  problemSkribbleAdditionalInformationApiInternalSchema,
  type ProblemSkribbleAdditionalInformationApi,
} from "../models/problem-skribble-additional-information-api.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for managing account credits, billing information, and payment operations.
 */
export class BillingAndCredits {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Credits information
   *
   * @remarks
   * Get the list of credit usage information associated with specific endpoints
   *
   * @returns Success
   *
   * @throws {@link BillingAndCredits.GetBillingCreditsInfosError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBillingCreditsInfos(
    options?: RequestOptions,
  ): ApiPromise<BillingCreditInfos, BillingAndCredits.GetBillingCreditsInfosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleAdditionalInformationApi("/billing/credits/infos"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: billingCreditInfosSchema },
        errorFactory: BillingAndCredits.GetBillingCreditsInfosError,
      },
      options,
    );
  }

  /**
   * Invoiced credit details
   *
   * @remarks
   * Get invoiced credit details for the most recent billing period or a specified time period
   *
   * @returns Success
   *
   * @throws {@link BillingAndCredits.GetBillingCreditsInvoicedError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBillingCreditsInvoiced(
    request: BillingAndCredits.GetBillingCreditsInvoicedRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BillingCreditUsage, BillingAndCredits.GetBillingCreditsInvoicedError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleAdditionalInformationApi("/billing/credits/invoiced"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [{ name: "period", value: request.period, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: billingCreditUsageSchema },
        errorFactory: BillingAndCredits.GetBillingCreditsInvoicedError,
      },
      options,
    );
  }

  /**
   * Current credit usage
   *
   * @remarks
   * Get credit usage list and details for current billing period
   *
   * @returns Success
   *
   * @throws {@link BillingAndCredits.GetBillingCreditsUsageError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBillingCreditsUsage(
    options?: RequestOptions,
  ): ApiPromise<BillingCreditUsage, BillingAndCredits.GetBillingCreditsUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleAdditionalInformationApi("/billing/credits/usage"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: billingCreditUsageSchema },
        errorFactory: BillingAndCredits.GetBillingCreditsUsageError,
      },
      options,
    );
  }
}

export namespace BillingAndCredits {
  export class GetBillingCreditsInfosError extends ApiError {
    declare readonly payload:
      | Declared<"problemSkribbleAdditionalInformationApi", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi2", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi3", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi4", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi5", ProblemSkribbleAdditionalInformationApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBillingCreditsInfosError> = [
      {
        on: 400,
        kind: "problemSkribbleAdditionalInformationApi",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 404,
        kind: "problemSkribbleAdditionalInformationApi2",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 429,
        kind: "problemSkribbleAdditionalInformationApi3",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 500,
        kind: "problemSkribbleAdditionalInformationApi4",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 503,
        kind: "problemSkribbleAdditionalInformationApi5",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
    ];
  }

  export type GetBillingCreditsInvoicedRequest = {
    /**
     * Format YYYY, YYYYMM, YYYYMMDD is supported. If not specified the last invoiced period is used
     * by default
     */
    period?: string;
  };

  export class GetBillingCreditsInvoicedError extends ApiError {
    declare readonly payload:
      | Declared<"problemSkribbleAdditionalInformationApi", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi2", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi3", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi4", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi5", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi6", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi7", ProblemSkribbleAdditionalInformationApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBillingCreditsInvoicedError> = [
      {
        on: 400,
        kind: "problemSkribbleAdditionalInformationApi",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 401,
        kind: "problemSkribbleAdditionalInformationApi2",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 403,
        kind: "problemSkribbleAdditionalInformationApi3",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 404,
        kind: "problemSkribbleAdditionalInformationApi4",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 429,
        kind: "problemSkribbleAdditionalInformationApi5",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 500,
        kind: "problemSkribbleAdditionalInformationApi6",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 503,
        kind: "problemSkribbleAdditionalInformationApi7",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
    ];
  }

  export class GetBillingCreditsUsageError extends ApiError {
    declare readonly payload:
      | Declared<"problemSkribbleAdditionalInformationApi", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi2", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi3", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi4", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi5", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi6", ProblemSkribbleAdditionalInformationApi>
      | Declared<"problemSkribbleAdditionalInformationApi7", ProblemSkribbleAdditionalInformationApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBillingCreditsUsageError> = [
      {
        on: 400,
        kind: "problemSkribbleAdditionalInformationApi",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 401,
        kind: "problemSkribbleAdditionalInformationApi2",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 403,
        kind: "problemSkribbleAdditionalInformationApi3",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 404,
        kind: "problemSkribbleAdditionalInformationApi4",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 429,
        kind: "problemSkribbleAdditionalInformationApi5",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 500,
        kind: "problemSkribbleAdditionalInformationApi6",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
      {
        on: 503,
        kind: "problemSkribbleAdditionalInformationApi7",
        decode: { kind: "json", schema: problemSkribbleAdditionalInformationApiInternalSchema },
      },
    ];
  }
}
