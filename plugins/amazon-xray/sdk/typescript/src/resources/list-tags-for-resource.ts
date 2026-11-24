import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  invalidRequestExceptionSchema,
  type InvalidRequestException,
} from "../models/invalid-request-exception.js";
import {
  listTagsForResourceRequestSchema,
  type ListTagsForResourceRequest,
} from "../models/list-tags-for-resource-request.js";
import {
  listTagsForResourceResponseSchema,
  type ListTagsForResourceResponse,
} from "../models/list-tags-for-resource-response.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import { throttledExceptionSchema, type ThrottledException } from "../models/throttled-exception.js";
import type { Servers } from "../servers.js";

export class ListTagsForResource {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List Tags For Resource
   *
   * @remarks
   * Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or
   * sampling rule.
   *
   * @returns Success
   *
   * @throws {@link ListTagsForResource.ListTagsForResourceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTagsForResource(
    request: ListTagsForResource.ListTagsForResourceRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<ListTagsForResourceResponse, ListTagsForResource.ListTagsForResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ListTagsForResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listTagsForResourceRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listTagsForResourceResponseSchema },
        errorFactory: ListTagsForResource.ListTagsForResourceError,
      },
      options,
    );
  }
}

export namespace ListTagsForResource {
  export type ListTagsForResourceRequestParams = {
    body?: ListTagsForResourceRequest;
  };

  export class ListTagsForResourceError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTagsForResourceError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }
}
