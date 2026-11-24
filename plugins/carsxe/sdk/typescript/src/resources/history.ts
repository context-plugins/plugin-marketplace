import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, orAnonymous } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "../models/error.js";
import { Format, formatSchema } from "../models/format.js";
import { historyResponseSchema, type HistoryResponse } from "../models/history-response.js";
import { usageLimitErrorSchema, type UsageLimitError } from "../models/usage-limit-error.js";
import type { Servers } from "../servers.js";

/**
 * Vehicle history reports
 */
export class History {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Vehicle History
   *
   * @remarks
   * Retrieve a vehicle history report by VIN, including title, brand, junk/salvage and insurance
   * records.
   *
   * @returns History report retrieved.
   *
   * @throws {@link History.GetVehicleHistoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVehicleHistory(
    request: History.GetVehicleHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<HistoryResponse, History.GetVehicleHistoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/history"),
        auth: orAnonymous(anyAuth(this.#auth.apiKeyQuery, this.#auth.x402Payment)),
        pathParams: [],
        query: [
          { name: "vin", value: request.vin, schema: s.string() },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: historyResponseSchema },
        errorFactory: History.GetVehicleHistoryError,
      },
      options,
    );
  }
}

export namespace History {
  export type GetVehicleHistoryRequest = {
    /** The 17 character long vehicle identification number. */
    vin: string;
    /** The format of the response. One of `json` or `xml`. @default Format.Json */
    format?: Format;
  };

  export const getVehicleHistoryRequestSchema: Schema<GetVehicleHistoryRequest> = s.lazySchema(() =>
    s.object<GetVehicleHistoryRequest>({
      vin: s.string().check(s.minLength(17), s.maxLength(17)),
      format: s.defaulted(formatSchema, Format.Json),
    }),
  );

  export class GetVehicleHistoryError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"usageLimitError", UsageLimitError>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVehicleHistoryError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "usageLimitError", decode: { kind: "json", schema: usageLimitErrorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
