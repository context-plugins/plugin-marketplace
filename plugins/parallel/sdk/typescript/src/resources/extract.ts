import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { v1ExtractRequestInternalSchema, type V1ExtractRequest } from "../models/v1-extract-request.js";
import { v1ExtractResponseSchema, type V1ExtractResponse } from "../models/v1-extract-response.js";
import type { Servers } from "../servers.js";

/**
 * Extract returns excerpts or full content from one or more URLs. Inputs are a list of URLs and an
 * optional search objective and keyword queries. The returned excerpts or full content is formatted
 * as markdown and suitable for LLM consumption.
 * - Result: excerpts or full content from the URL formatted as markdown
 */
export class Extract {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Extract
   *
   * @remarks
   * Extracts relevant content from specific web URLs.
   *
   * The legacy Extract API reference (`/v1beta/extract` endpoint) is available here, and migration
   * guide is here.
   *
   * @returns Successful Response
   *
   * @throws {@link Extract.ExtractV1ExtractPostError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ParallelError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  extractV1ExtractPost(
    request: Extract.ExtractV1ExtractPostRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ExtractResponse, Extract.ExtractV1ExtractPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/extract"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1ExtractRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v1ExtractResponseSchema },
        errorFactory: Extract.ExtractV1ExtractPostError,
      },
      options,
    );
  }
}

export namespace Extract {
  export type ExtractV1ExtractPostRequest = {
    body: V1ExtractRequest;
  };

  export class ExtractV1ExtractPostError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ExtractV1ExtractPostError> = [
      { on: 422, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
