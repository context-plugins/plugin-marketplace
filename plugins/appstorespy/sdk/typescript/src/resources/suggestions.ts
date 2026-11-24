import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { AppCountries, appCountriesSchema } from "../models/app-countries.js";
import { AppLanguages, appLanguagesSchema } from "../models/app-languages.js";
import { CacheTime, cacheTimeSchema } from "../models/cache-time.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  playSuggestions401Error1Schema,
  type PlaySuggestions401Error1,
} from "../models/play-suggestions401-error1.js";
import { suggestSchema, type Suggest } from "../models/suggest.js";
import type { Servers } from "../servers.js";

/**
 * Google Play search autocomplete suggestions for a term, country and language.
 */
export class Suggestions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Google Play keyword suggestions
   *
   * @remarks
   * Returns Google Play search autocomplete suggestions for a term in one country and language.
   * Responds 202 with a partial result while a fresh crawl is in progress; `freshness` sets how old
   * a cached result may be before it is recrawled.
   *
   * @returns Successful Response
   *
   * @throws {@link Suggestions.GetSuggestsPlaySuggestionsGet2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSuggestsPlaySuggestionsGet2(
    request: Suggestions.GetSuggestsPlaySuggestionsGet2Request,
    options?: RequestOptions,
  ): ApiPromise<Suggest, Suggestions.GetSuggestsPlaySuggestionsGet2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/play/suggestions"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.string() },
          {
            name: "country",
            value: request.country,
            schema: s.defaulted(appCountriesSchema, AppCountries.Us),
          },
          { name: "lang", value: request.lang, schema: s.defaulted(appLanguagesSchema, AppLanguages.EnUs) },
          {
            name: "freshness",
            value: request.freshness,
            schema: s.defaulted(cacheTimeSchema, CacheTime._7D),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: suggestSchema },
        errorFactory: Suggestions.GetSuggestsPlaySuggestionsGet2Error,
      },
      options,
    );
  }
}

export namespace Suggestions {
  export type GetSuggestsPlaySuggestionsGet2Request = {
    q: string;
    /** @default AppCountries.Us */
    country?: AppCountries;
    /** @default AppLanguages.EnUs */
    lang?: AppLanguages;
    /** @default CacheTime._7D */
    freshness?: CacheTime;
  };

  export class GetSuggestsPlaySuggestionsGet2Error extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playSuggestions401Error1", PlaySuggestions401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSuggestsPlaySuggestionsGet2Error> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "playSuggestions401Error1",
        decode: { kind: "json", schema: playSuggestions401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }
}
