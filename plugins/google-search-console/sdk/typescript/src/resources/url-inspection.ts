import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "../models/google-rpc-error.js";
import {
  inspectUrlIndexRequestSchema,
  type InspectUrlIndexRequest,
} from "../models/inspect-url-index-request.js";
import {
  inspectUrlIndexResponseSchema,
  type InspectUrlIndexResponse,
} from "../models/inspect-url-index-response.js";
import type { Servers } from "../servers.js";

export class UrlInspection {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Inspect index
   *
   * @remarks
   * Index inspection.
   *
   * @returns Successful response
   *
   * @throws {@link UrlInspection.SearchconsoleUrlInspectionIndexInspectError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleSearchConsoleError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  searchconsoleUrlInspectionIndexInspect(
    request: UrlInspection.SearchconsoleUrlInspectionIndexInspectRequest,
    options?: RequestOptions,
  ): ApiPromise<InspectUrlIndexResponse, UrlInspection.SearchconsoleUrlInspectionIndexInspectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/urlInspection/index:inspect"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: inspectUrlIndexRequestSchema },
      },
      {
        success: { kind: "json", schema: inspectUrlIndexResponseSchema },
        errorFactory: UrlInspection.SearchconsoleUrlInspectionIndexInspectError,
      },
      options,
    );
  }
}

export namespace UrlInspection {
  export type SearchconsoleUrlInspectionIndexInspectRequest = {
    body: InspectUrlIndexRequest;
  };

  export class SearchconsoleUrlInspectionIndexInspectError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<SearchconsoleUrlInspectionIndexInspectError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
