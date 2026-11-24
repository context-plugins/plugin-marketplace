import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { apiV1ResponseSchema, type ApiV1Response } from "../models/api-v1-response.js";
import { apiV1400Error1Schema, type ApiV1400Error1 } from "../models/api-v1400-error1.js";
import { apiV1401Error1Schema, type ApiV1401Error1 } from "../models/api-v1401-error1.js";
import { apiV1403Error1Schema, type ApiV1403Error1 } from "../models/api-v1403-error1.js";
import { apiV1404Error1Schema, type ApiV1404Error1 } from "../models/api-v1404-error1.js";
import { apiV1429Error1Schema, type ApiV1429Error1 } from "../models/api-v1429-error1.js";
import { apiV1500Error1Schema, type ApiV1500Error1 } from "../models/api-v1500-error1.js";
import { apiV1502Error1Schema, type ApiV1502Error1 } from "../models/api-v1502-error1.js";
import { apiV1503Error1Schema, type ApiV1503Error1 } from "../models/api-v1503-error1.js";
import { apiV1504Error1Schema, type ApiV1504Error1 } from "../models/api-v1504-error1.js";
import type { Servers } from "../servers.js";

export class App {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get health
   *
   * @remarks
   * Check whether the bundle.social API is reachable and see the current operational status of
   * every supported social platform. Use this endpoint for uptime monitoring and to detect
   * platform-side outages before publishing.
   *
   * @returns 200
   *
   * @throws {@link App.AppGetHealthError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appGetHealth(options?: RequestOptions): ApiPromise<ApiV1Response, App.AppGetHealthError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ResponseSchema },
        errorFactory: App.AppGetHealthError,
      },
      options,
    );
  }
}

export namespace App {
  export class AppGetHealthError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1400Error1", ApiV1400Error1>
      | Declared<"apiV1401Error1", ApiV1401Error1>
      | Declared<"apiV1403Error1", ApiV1403Error1>
      | Declared<"apiV1404Error1", ApiV1404Error1>
      | Declared<"apiV1429Error1", ApiV1429Error1>
      | Declared<"apiV1500Error1", ApiV1500Error1>
      | Declared<"apiV1502Error1", ApiV1502Error1>
      | Declared<"apiV1503Error1", ApiV1503Error1>
      | Declared<"apiV1504Error1", ApiV1504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<AppGetHealthError> = [
      { on: 400, kind: "apiV1400Error1", decode: { kind: "json", schema: apiV1400Error1Schema } },
      { on: 401, kind: "apiV1401Error1", decode: { kind: "json", schema: apiV1401Error1Schema } },
      { on: 403, kind: "apiV1403Error1", decode: { kind: "json", schema: apiV1403Error1Schema } },
      { on: 404, kind: "apiV1404Error1", decode: { kind: "json", schema: apiV1404Error1Schema } },
      { on: 429, kind: "apiV1429Error1", decode: { kind: "json", schema: apiV1429Error1Schema } },
      { on: 500, kind: "apiV1500Error1", decode: { kind: "json", schema: apiV1500Error1Schema } },
      { on: 502, kind: "apiV1502Error1", decode: { kind: "json", schema: apiV1502Error1Schema } },
      { on: 503, kind: "apiV1503Error1", decode: { kind: "json", schema: apiV1503Error1Schema } },
      { on: 504, kind: "apiV1504Error1", decode: { kind: "json", schema: apiV1504Error1Schema } },
    ];
  }
}
