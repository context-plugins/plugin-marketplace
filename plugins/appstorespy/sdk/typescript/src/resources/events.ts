import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { AppCountries, appCountriesSchema } from "../models/app-countries.js";
import { CacheTime, cacheTimeSchema } from "../models/cache-time.js";
import { eventSchema, type Event } from "../models/event.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { playLiveops401Error1Schema, type PlayLiveops401Error1 } from "../models/play-liveops401-error1.js";
import type { Servers } from "../servers.js";

/**
 * LiveOps events Google Play surfaces on an app listing: sales, tournaments, updates and new
 * content.
 */
export class Events {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Google Play LiveOps events for an app
   *
   * @remarks
   * Returns the LiveOps events (sales, tournaments, updates, new content) Google Play shows for one
   * app in one country. Responds 202 while a fresh crawl is in progress.
   *
   * @returns Successful Response
   *
   * @throws {@link Events.GetEventsPlayLiveopsGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEventsPlayLiveopsGet(
    request: Events.GetEventsPlayLiveopsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Event[], Events.GetEventsPlayLiveopsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/play/liveops"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "app", value: request.app, schema: s.string() },
          {
            name: "country",
            value: request.country,
            schema: s.defaulted(appCountriesSchema, AppCountries.Us),
          },
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
        success: { kind: "json", schema: s.array(s.lazy(() => eventSchema)) },
        errorFactory: Events.GetEventsPlayLiveopsGetError,
      },
      options,
    );
  }
}

export namespace Events {
  export type GetEventsPlayLiveopsGetRequest = {
    app: string;
    /** @default AppCountries.Us */
    country?: AppCountries;
    /** @default CacheTime._7D */
    freshness?: CacheTime;
  };

  export class GetEventsPlayLiveopsGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playLiveops401Error1", PlayLiveops401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEventsPlayLiveopsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 401, kind: "playLiveops401Error1", decode: { kind: "json", schema: playLiveops401Error1Schema } },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }
}
