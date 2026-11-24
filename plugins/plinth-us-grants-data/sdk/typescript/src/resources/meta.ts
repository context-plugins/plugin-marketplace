import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { metaResponseSchema, type MetaResponse } from "../models/meta-response.js";
import { jurisdictionSchema, type Jurisdiction } from "../models/unions/jurisdiction.js";
import type { Servers } from "../servers.js";

/**
 * Dataset scope, source freshness, and which Candid parameters this API honors. No key required.
 */
export class Meta {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Dataset scope, freshness and the Candid compatibility matrix
   *
   * @remarks
   * What is in the corpus, how current it is, and which Candid parameters this API honors. This is
   * the answer to Candid's `last_updated` filter: there is no per-row change stamp because the
   * dataset is rebuilt as a whole from monthly IRS releases, so a client keeping its own copy in
   * sync watches `dataset.version` and the fiscal year span here and re-pulls when either moves.
   * Keyless and unmetered.
   *
   * **`scope` carries TWO fiscal-year ends and they are not the same number.** `last_fiscal_year`
   * is the newest year any row falls in — sync against this. `last_complete_fiscal_year` is the
   * newest year that has finished arriving, and it is the one to quote in prose: the IRS releases
   * e-file data 12-24 months after the activity, so the corpus always holds a few hundred early
   * filings for a year that has barely begun. `partial_fiscal_years` names every year still
   * filling. Reporting `last_fiscal_year` as the coverage span overstates it by a year or two.
   *
   * @returns What this deployment holds, and how to get a key.
   *
   * @throws {@link Meta.GetMetaError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getMeta(
    request: Meta.GetMetaRequest = {},
    options?: RequestOptions,
  ): ApiPromise<MetaResponse, Meta.GetMetaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/meta"),
        auth: noneAuth,
        pathParams: [],
        query: [
          {
            name: "jurisdiction",
            value: request.jurisdiction,
            schema: s.optional(s.lazy(() => jurisdictionSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metaResponseSchema },
        errorFactory: Meta.GetMetaError,
      },
      options,
    );
  }
}

export namespace Meta {
  export type GetMetaRequest = {
    /**
     * Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
     * currency the filing was made in and are never converted, so every total is a
     * single-jurisdiction total. `x_plinth.dataset` names the source, licence and currency behind
     * the answer. Distinct from `country`, which is where the RECIPIENT sits.
     */
    jurisdiction?: Jurisdiction;
  };

  export class GetMetaError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GetMetaError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
