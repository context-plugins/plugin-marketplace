import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  errorCelestiaWebsiteContactApiSchema,
  type ErrorCelestiaWebsiteContactApi,
} from "../models/error-celestia-website-contact-api.js";
import { subscriptionInputInternalSchema, type SubscriptionInput } from "../models/subscription-input.js";
import { successSchema, type Success } from "../models/success.js";
import type { Servers } from "../servers.js";

export class Subscribe {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Subscribe to the newsletter
   *
   * @remarks
   * Subscribes a consenting email owner through Mailchimp after server-side reCAPTCHA verification.
   * No API key is required from clients. Service credentials remain server-side.
   *
   * @returns Submission accepted. Read any message for delivery caveats.
   *
   * @throws {@link Subscribe.SubscribeToWebsiteNewsletterError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CelestiaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  subscribeToWebsiteNewsletter(
    request: Subscribe.SubscribeToWebsiteNewsletterRequest,
    options?: RequestOptions,
  ): ApiPromise<Success, Subscribe.SubscribeToWebsiteNewsletterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultCelestiaWebsiteContactApi("/api/subscribe/"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: subscriptionInputInternalSchema },
      },
      {
        success: { kind: "json", schema: successSchema },
        errorFactory: Subscribe.SubscribeToWebsiteNewsletterError,
      },
      options,
    );
  }
}

export namespace Subscribe {
  export type SubscribeToWebsiteNewsletterRequest = {
    body: SubscriptionInput;
  };

  export class SubscribeToWebsiteNewsletterError extends ApiError {
    declare readonly payload:
      | Declared<"errorCelestiaWebsiteContactApi", ErrorCelestiaWebsiteContactApi>
      | Declared<"errorCelestiaWebsiteContactApi2", ErrorCelestiaWebsiteContactApi>
      | Declared<"errorCelestiaWebsiteContactApi3", ErrorCelestiaWebsiteContactApi>
      | Declared<"errorCelestiaWebsiteContactApi4", ErrorCelestiaWebsiteContactApi>
      | Declared<"errorCelestiaWebsiteContactApi5", ErrorCelestiaWebsiteContactApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<SubscribeToWebsiteNewsletterError> = [
      {
        on: 400,
        kind: "errorCelestiaWebsiteContactApi",
        decode: { kind: "json", schema: errorCelestiaWebsiteContactApiSchema },
      },
      {
        on: 405,
        kind: "errorCelestiaWebsiteContactApi2",
        decode: { kind: "json", schema: errorCelestiaWebsiteContactApiSchema },
      },
      {
        on: 408,
        kind: "errorCelestiaWebsiteContactApi3",
        decode: { kind: "json", schema: errorCelestiaWebsiteContactApiSchema },
      },
      {
        on: 500,
        kind: "errorCelestiaWebsiteContactApi4",
        decode: { kind: "json", schema: errorCelestiaWebsiteContactApiSchema },
      },
      {
        on: 429,
        kind: "errorCelestiaWebsiteContactApi5",
        decode: { kind: "json", schema: errorCelestiaWebsiteContactApiSchema },
      },
    ];
  }
}
