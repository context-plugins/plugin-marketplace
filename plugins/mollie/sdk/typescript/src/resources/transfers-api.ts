import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { transferRequestSchema, type TransferRequest } from "../models/transfer-request.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Transfers API
 */
export class TransfersApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create transfer
   *
   * @remarks
   * > 🚧 Beta feature > > This feature is currently in beta testing, and the final specification
   * may still change.
   *
   * Create a SEPA Credit Transfer from your Mollie Business Account.
   *
   * To initiate a transfer, you must provide the transfer scheme, the amount, the debtor IBAN (your
   * Mollie Business Account IBAN), and the creditor (recipient) details.
   *
   * Each request must include an `Idempotency-Key` header to prevent duplicate transfers, and must
   * be signed using the `X-Client-Signature` and `X-Client-Signed-At` headers.
   *
   * ### Simulating transfer scenarios in test mode
   *
   * In test mode, you can simulate various transfer scenarios by adjusting the transfer amount.
   * This allows you to mimic the typical status progression of a real-world transfer. Note that a
   * transfer's progression will stop once it reaches a final status: `blocked`, `failed`,
   * `processed`, or `returned`.
   *
   * | Amount  | Scenario                                            | Webhook sequence                                                                                                                                                   |
   * |---------|-----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
   * | `11.00` | Transfer initiated, pending review by Mollie        | `business-account-transfer.requested` → `business-account-transfer.initiated` → `business-account-transfer.pending-review`                                         |
   * | `12.00` | Transfer initiated, blocked by Mollie               | `business-account-transfer.requested` → `business-account-transfer.initiated` → `business-account-transfer.pending-review` → `business-account-transfer.blocked`   |
   * | `13.00` | Transfer initiated, failed on scheme submission     | `business-account-transfer.requested` → `business-account-transfer.initiated` → `business-account-transfer.failed`                                                 |
   * | `14.00` | Transfer processed, then returned by receiving bank | `business-account-transfer.requested` → `business-account-transfer.initiated` → `business-account-transfer.processed` → `business-account-transfer.returned`       |
   * | Other   | Default: transfer is processed                      | `business-account-transfer.requested` → `business-account-transfer.initiated` → `business-account-transfer.processed`                                              |
   *
   * @returns The newly created transfer object.
   *
   * @throws {@link TransfersApi.CreateTransferError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTransfer(
    request: TransfersApi.CreateTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TransfersApi.CreateTransferError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/business-accounts/transfers"),
        auth: this.#auth.advancedAccessToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Client-Signature", value: request.xClientSignature, schema: s.string() },
          { name: "X-Client-Signed-At", value: request.xClientSignedAt, schema: s.string() },
          { name: "Idempotency-Key", value: request.idempotencyKey, schema: s.string() },
          { name: "idempotency-key", value: request.idempotencyKeyHeader, schema: s.optional(s.string()) },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => transferRequestSchema)) },
      },
      {
        success: { kind: "empty" },
        errorFactory: TransfersApi.CreateTransferError,
      },
      options,
    );
  }

  /**
   * Get transfer
   *
   * @remarks
   * > 🚧 Beta feature > > This feature is currently in beta testing, and the final specification
   * may still change.
   *
   * Retrieve a single transfer object by its transfer ID. This allows you to check the current
   * status and details of a previously created transfer.
   *
   * @returns The transfer object.
   *
   * @throws {@link TransfersApi.GetTransferError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTransfer(
    request: TransfersApi.GetTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, TransfersApi.GetTransferError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/business-accounts/transfers/{businessAccountsTransferId}"),
        auth: this.#auth.advancedAccessToken,
        pathParams: [
          {
            name: "businessAccountsTransferId",
            value: request.businessAccountsTransferId,
            schema: s.string(),
          },
        ],
        query: [{ name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: TransfersApi.GetTransferError,
      },
      options,
    );
  }
}

export namespace TransfersApi {
  export type CreateTransferRequest = {
    /**
     * A cryptographic signature of the request payload, used to verify the authenticity of the
     * transfer request.
     */
    xClientSignature: string;
    /**
     * The timestamp (in ISO 8601 format) indicating when the client signed the request. Used in
     * conjunction with `X-Client-Signature` for request verification.
     */
    xClientSignedAt: string;
    /**
     * A unique value used to identify this request and prevent duplicate transfers. UUIDv4 is
     * recommended to guarantee uniqueness across multiple processes or servers. If two requests are
     * received with the same idempotency key, the second request will be discarded.
     *
     * View the [public
     * documentation](https://docs.mollie.com/reference/api-idempotency#using-an-idempotency-key) to
     * learn more.
     */
    idempotencyKey: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKeyHeader?: string;
    body?: TransferRequest;
  };

  export class CreateTransferError extends ApiError {
    declare readonly payload:
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateTransferError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type GetTransferRequest = {
    /** Provide the ID of the related transfer. */
    businessAccountsTransferId: string;
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

  export class GetTransferError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetTransferError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
