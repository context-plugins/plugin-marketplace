import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2ComplianceRedactRequestSchema,
  type ApiV2ComplianceRedactRequest,
} from "../models/api-v2-compliance-redact-request.js";
import {
  apiV2ComplianceRedactResponseSchema,
  type ApiV2ComplianceRedactResponse,
} from "../models/api-v2-compliance-redact-response.js";
import {
  apiV2ComplianceRedact403Error1Schema,
  type ApiV2ComplianceRedact403Error1,
} from "../models/api-v2-compliance-redact403-error1.js";
import {
  apiV2ComplianceUnsubscribeRequestSchema,
  type ApiV2ComplianceUnsubscribeRequest,
} from "../models/api-v2-compliance-unsubscribe-request.js";
import {
  apiV2ComplianceUnsubscribeResponseSchema,
  type ApiV2ComplianceUnsubscribeResponse,
} from "../models/api-v2-compliance-unsubscribe-response.js";
import {
  apiV2ComplianceUnsubscribe403Error1Schema,
  type ApiV2ComplianceUnsubscribe403Error1,
} from "../models/api-v2-compliance-unsubscribe403-error1.js";
import type { Servers } from "../servers.js";

/**
 * TCPA compliance operations — unsubscribe and redact a subscriber.
 */
export class Compliance {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Redact
   *
   * @remarks
   * Note: When passed an email, phone number, Shopify customer ID, or Postscript subscriber ID,
   * this endpoint will also unsubscribe the subscriber if they have an active subscription
   *
   * @returns 202
   *
   * @throws {@link Compliance.RedactError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  redact(
    request: Compliance.RedactRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV2ComplianceRedactResponse, Compliance.RedactError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/compliance/redact"),
        auth: this.#auth.sec0,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Postscript-Shop-Token",
            value: request.xPostscriptShopToken,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV2ComplianceRedactRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV2ComplianceRedactResponseSchema },
        errorFactory: Compliance.RedactError,
      },
      options,
    );
  }

  /**
   * Unsubscribe
   *
   * @remarks
   * Opt outs subscribers from Postscript messaging.
   *
   * @returns 202
   *
   * @throws {@link Compliance.UnsubscribeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PostscriptError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  unsubscribe(
    request: Compliance.UnsubscribeRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV2ComplianceUnsubscribeResponse, Compliance.UnsubscribeError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/compliance/unsubscribe"),
        auth: this.#auth.sec0,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Postscript-Shop-Token",
            value: request.xPostscriptShopToken,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV2ComplianceUnsubscribeRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV2ComplianceUnsubscribeResponseSchema },
        errorFactory: Compliance.UnsubscribeError,
      },
      options,
    );
  }
}

export namespace Compliance {
  export type RedactRequest = {
    /**
     * Shop API Token. **Required for partners**. This header should be used only by partners. Shops
     * should include their API token in the *Authorization* header.
     */
    xPostscriptShopToken?: string;
    body?: ApiV2ComplianceRedactRequest;
  };

  export class RedactError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2ComplianceRedact403Error1", ApiV2ComplianceRedact403Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<RedactError> = [
      {
        on: 403,
        kind: "apiV2ComplianceRedact403Error1",
        decode: { kind: "json", schema: apiV2ComplianceRedact403Error1Schema },
      },
    ];
  }

  export type UnsubscribeRequest = {
    /**
     * Shop API Token. **Required for partners**. This header should be used only by partners. Shops
     * should include their API token in the *Authorization* header.
     */
    xPostscriptShopToken?: string;
    body?: ApiV2ComplianceUnsubscribeRequest;
  };

  export class UnsubscribeError extends ApiError {
    declare readonly payload:
      | Declared<"apiV2ComplianceUnsubscribe403Error1", ApiV2ComplianceUnsubscribe403Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UnsubscribeError> = [
      {
        on: 403,
        kind: "apiV2ComplianceUnsubscribe403Error1",
        decode: { kind: "json", schema: apiV2ComplianceUnsubscribe403Error1Schema },
      },
    ];
  }
}
