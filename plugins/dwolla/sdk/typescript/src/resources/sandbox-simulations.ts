import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { Accept, acceptSchema } from "../models/accept.js";
import type { Servers } from "../servers.js";

/**
 * Sandbox-only operations for simulating processing of bank transfers
 */
export class SandboxSimulations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Sandbox simulations (bank transfers, VAN transfers, or customer verification directives)
   *
   * @remarks
   * Sandbox-only endpoint with three modes:
   *
   * **Simulate bank transfer processing** — Omit the body or send an empty JSON object. Processes
   * or fails the last 500 bank transfers on the authorized application or Sandbox account (and
   * initiated micro-deposits). If webhooks are configured, events are delivered. If a bank-to-bank
   * transaction involves two users, call this twice to process debit and credit sides. Returns
   * **200** with a HAL document including `total`.
   *
   * **Simulate VAN (virtual) transfers** — Send a JSON body with `type` set to `virtual` and a
   * `transfers` array (up to 10 items). External transfers are created and processed immediately.
   * Returns **202 Accepted**.
   *
   * **Simulate verification directives** — For a business Verified Customer in **`retry`** or
   * **`document`** status, send `type`: `customer-verification`, `_links.customer.href` pointing at
   * that customer, and `errorCode` set to one of: `PersonalIDRequired`, `POBoxNotAllowed`,
   * `AddressNotAssociatedWithBusiness`, `EINDocumentRequired`. Returns **200** with HAL
   * `_links.self` and `errorCode`. Then **GET** the Customer; the same code appears in
   * `_embedded.errors` for end-to-end testing.
   *
   * @returns Success. **Bank transfer processing** returns HAL with `total`. **Customer
   * verification directives** return HAL `_links.self` and `errorCode` (retrieve the Customer for
   * `_embedded.errors`).
   *
   * @throws {@link SandboxSimulations.SimulateBankTransferProcessingError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  simulateBankTransferProcessing(
    request: SandboxSimulations.SimulateBankTransferProcessingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SandboxSimulations.SimulateBankTransferProcessingError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sandbox-simulations"),
        auth: this.#auth.clientCredentials,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SandboxSimulations.SimulateBankTransferProcessingError,
      },
      options,
    );
  }
}

export namespace SandboxSimulations {
  export type SimulateBankTransferProcessingRequest = {
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
  };

  export class SimulateBankTransferProcessingError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SimulateBankTransferProcessingError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }
}
