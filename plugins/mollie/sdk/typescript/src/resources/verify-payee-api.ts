import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  verificationOfPayeeRequestSchema,
  type VerificationOfPayeeRequest,
} from "../models/verification-of-payee-request.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Verify Payee API
 */
export class VerifyPayeeApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Verify Payee
   *
   * @remarks
   * > 🚧 Beta feature > > This feature is currently in beta testing, and the final specification
   * may still change.
   *
   * Perform a Verification of Payee (VoP) check. This allows you to verify the account holder name
   * against the records held by the receiving bank before initiating a transfer.
   *
   * The verification result indicates whether the provided name matches, closely matches, or does
   * not match the name on file at the receiving bank. This helps prevent misdirected payments.
   *
   * ### Simulating verification scenarios in test mode
   *
   * In test mode, you can simulate various verification outcomes by adjusting the creditor name in
   * the `creditorBankAccount.accountHolderName` property. This allows you to test all possible
   * Verification of Payee results without needing special properties. The names are case
   * insensitive.
   *
   * | Account holder name                    | Scenario                                      | Verification result | Suggested name |
   * |----------------------------------------|-----------------------------------------------|---------------------|----------------|
   * | `John Close Match`                     | Name closely matches the bank records          | `close-match`       | `John Match`   |
   * | `John No Match`                        | Name does not match the bank records           | `no-match`          | —              |
   * | `John Unavailable`                     | Verification is not available                  | `not-available`     | —              |
   * | Any other name                         | Default: name matches the bank records         | `match`             | —              |
   *
   * @returns The verification result object.
   *
   * @throws {@link VerifyPayeeApi.VerifyPayeeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  verifyPayee(
    request: VerifyPayeeApi.VerifyPayeeRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, VerifyPayeeApi.VerifyPayeeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/business-accounts/payee-verifications"),
        auth: this.#auth.advancedAccessToken,
        pathParams: [],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => verificationOfPayeeRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: VerifyPayeeApi.VerifyPayeeError,
      },
      options,
    );
  }
}

export namespace VerifyPayeeApi {
  export type VerifyPayeeRequest = {
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: VerificationOfPayeeRequest;
  };

  export class VerifyPayeeError extends ApiError {
    declare readonly payload:
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<VerifyPayeeError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
