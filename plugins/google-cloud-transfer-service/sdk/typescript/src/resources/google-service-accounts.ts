import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "../models/google-rpc-error.js";
import { googleServiceAccountSchema, type GoogleServiceAccount } from "../models/google-service-account.js";
import type { Servers } from "../servers.js";

export class GoogleServiceAccounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get googleServiceAccounts
   *
   * @remarks
   * Returns the Google service account that is used by Storage Transfer Service to access buckets
   * in the project where transfers run or in other projects. Each Google service account is
   * associated with one Google Cloud project. Users should add this service account to the Google
   * Cloud Storage bucket ACLs to grant access to Storage Transfer Service. This service account is
   * created and owned by Storage Transfer Service and can only be used by Storage Transfer Service.
   *
   * @returns Successful response
   *
   * @throws {@link GoogleServiceAccounts.StoragetransferGoogleServiceAccountsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudStorageTransferServiceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  storagetransferGoogleServiceAccountsGet(
    request: GoogleServiceAccounts.StoragetransferGoogleServiceAccountsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleServiceAccount, GoogleServiceAccounts.StoragetransferGoogleServiceAccountsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/googleServiceAccounts/{projectId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "projectId", value: request.projectId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleServiceAccountSchema },
        errorFactory: GoogleServiceAccounts.StoragetransferGoogleServiceAccountsGetError,
      },
      options,
    );
  }
}

export namespace GoogleServiceAccounts {
  export type StoragetransferGoogleServiceAccountsGetRequest = {
    /**
     * Required. The ID of the Google Cloud project that the Google service account is associated
     * with.
     */
    projectId: string;
  };

  export class StoragetransferGoogleServiceAccountsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<StoragetransferGoogleServiceAccountsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
