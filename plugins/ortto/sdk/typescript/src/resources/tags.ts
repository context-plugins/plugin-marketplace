import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { tagsGetRequestSchema, type TagsGetRequest } from "../models/tags-get-request.js";
import { tagsGetResponseSchema, type TagsGetResponse } from "../models/tags-get-response.js";
import type { Servers } from "../servers.js";

/**
 * Retrieve account tags.
 */
export class Tags {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a list of tags
   *
   * @remarks
   * Retrieves the tags configured on the account. An empty body returns all tags; an optional
   * search term filters the result.
   *
   * @returns List of tags.
   *
   * @throws {@link Tags.GetTagsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link OrttoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTags(
    request: Tags.GetTagsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<TagsGetResponse, Tags.GetTagsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tags/get"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => tagsGetRequestSchema)) },
      },
      {
        success: { kind: "json", schema: tagsGetResponseSchema },
        errorFactory: Tags.GetTagsError,
      },
      options,
    );
  }
}

export namespace Tags {
  export type GetTagsRequest = {
    body?: TagsGetRequest;
  };

  export class GetTagsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetTagsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
