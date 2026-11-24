import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { contactInputInternalSchema, type ContactInput } from "../models/contact-input.js";
import {
  errorCelestiaWebsiteContactApiSchema,
  type ErrorCelestiaWebsiteContactApi,
} from "../models/error-celestia-website-contact-api.js";
import { successSchema, type Success } from "../models/success.js";
import type { Servers } from "../servers.js";

export class Contact {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Submit a contact inquiry
   *
   * @remarks
   * Sends an inquiry to the configured Google Apps Script integration. No API key is required. If
   * the integration is not configured, the existing development fallback logs the inquiry and
   * returns success with an explicit message; that response does not confirm delivery. Submit only
   * with user consent.
   *
   * @returns Submission accepted. Read any message for delivery caveats.
   *
   * @throws {@link Contact.SubmitWebsiteContactError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CelestiaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  submitWebsiteContact(
    request: Contact.SubmitWebsiteContactRequest,
    options?: RequestOptions,
  ): ApiPromise<Success, Contact.SubmitWebsiteContactError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultCelestiaWebsiteContactApi("/api/contact/"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contactInputInternalSchema },
      },
      {
        success: { kind: "json", schema: successSchema },
        errorFactory: Contact.SubmitWebsiteContactError,
      },
      options,
    );
  }
}

export namespace Contact {
  export type SubmitWebsiteContactRequest = {
    body: ContactInput;
  };

  export class SubmitWebsiteContactError extends ApiError {
    declare readonly payload:
      | Declared<"errorCelestiaWebsiteContactApi", ErrorCelestiaWebsiteContactApi>
      | Declared<"errorCelestiaWebsiteContactApi2", ErrorCelestiaWebsiteContactApi>
      | Declared<"errorCelestiaWebsiteContactApi3", ErrorCelestiaWebsiteContactApi>
      | Declared<"errorCelestiaWebsiteContactApi4", ErrorCelestiaWebsiteContactApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<SubmitWebsiteContactError> = [
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
    ];
  }
}
