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
import { usageLimitErrorSchema, type UsageLimitError } from "../models/usage-limit-error.js";
import { v1LienTheftResponseSchema, type V1LienTheftResponse } from "../models/v1-lien-theft-response.js";
import type { Servers } from "../servers.js";

/**
 * Lien and theft records by VIN
 */
export class LienTheft {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Lien & Theft records
   *
   * @remarks
   * Check a VIN for active lien and theft records (US).
   *
   * @returns Lien/theft data retrieved.
   *
   * @throws {@link LienTheft.GetLienTheftError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLienTheft(
    request: LienTheft.GetLienTheftRequest,
    options?: RequestOptions,
  ): ApiPromise<V1LienTheftResponse, LienTheft.GetLienTheftError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/lien-theft"),
        auth: orAnonymous(anyAuth(this.#auth.apiKeyQuery, this.#auth.x402Payment)),
        pathParams: [],
        query: [{ name: "vin", value: request.vin, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1LienTheftResponseSchema },
        errorFactory: LienTheft.GetLienTheftError,
      },
      options,
    );
  }
}

export namespace LienTheft {
  export type GetLienTheftRequest = {
    /** The 17 character long vehicle identification number. */
    vin: string;
  };

  export const getLienTheftRequestSchema: Schema<GetLienTheftRequest> = s.lazySchema(() =>
    s.object<GetLienTheftRequest>({
      vin: s.string().check(s.minLength(17), s.maxLength(17)),
    }),
  );

  export class GetLienTheftError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"usageLimitError", UsageLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLienTheftError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "usageLimitError", decode: { kind: "json", schema: usageLimitErrorSchema } },
    ];
  }
}
