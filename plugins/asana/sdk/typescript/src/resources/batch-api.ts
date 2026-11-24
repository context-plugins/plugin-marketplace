import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { batchRequest1Schema, type BatchRequest1 } from "../models/batch-request1.js";
import { batchResponse1Schema, type BatchResponse1 } from "../models/batch-response1.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * There are many cases where you want to accomplish a variety of work in the Asana API but want to
 * minimize the number of HTTP requests you make. For example:
 *
 * * Modern browsers limit the number of requests that a single web page can make at once.
 * * Mobile apps will use more battery life to keep the cellular radio on when making a series of
 *   requests.
 * * There is an overhead cost to developing software that can make multiple requests in parallel.
 * * Some cloud platforms handle parallelism poorly, or disallow it entirely.
 *
 * To make development easier in these use cases, Asana provides a **batch API** that enables
 * developers to perform multiple “actions” by making only a single HTTP request.
 *
 * #### Making a batch request
 *
 * To make a batch request, send a `POST` request to `/batch`. Like other `POST` endpoints, the body
 * should contain a `data` envelope. Inside this envelope should be a single `actions` field,
 * containing a list of “action” objects. Each action represents a standard request to an existing
 * endpoint in the Asana API.
 *
 * **The maximum number of actions allowed in a single batch request is 10**. Making a batch request
 * with no actions in it will result in a `400 Bad Request`.
 *
 * When the batch API receives the list of actions to execute, it will dispatch those actions to the
 * already-implemented endpoints specified by the `relative_path` and `method` for each action. This
 * happens in parallel, so all actions in the request will be processed simultaneously. There is no
 * guarantee of the execution order for these actions, nor is there a way to use the output of one
 * action as the input of another action (such as creating a task and then commenting on it).
 *
 * The response to the batch request will contain (within the `data` envelope) a list of result
 * objects, one for each action. The results are guaranteed to be in the same order as the actions
 * in the request (e.g., the first result in the response corresponds to the first action in the
 * request)
 *
 * The batch API will always attempt to return a `200 Success` response with individual result
 * objects for each individual action in the request. Only in certain cases (such as missing
 * authorization or malformed JSON in the body) will the entire request fail with another status
 * code. Even if every individual action in the request fails, the batch API will still return a
 * `200 Success` response, and each result object in the response will contain the errors
 * encountered with each action.
 *
 * #### Rate limiting
 *
 * The batch API fully respects all of our rate limiting. This means that a batch request counts
 * against *both* the standard rate limiter and the concurrent request limiter as though you had
 * made a separate HTTP request for every individual action. For example, a batch request with five
 * actions counts as five separate requests in the standard rate limiter, and counts as five
 * concurrent requests in the concurrent request limiter. The batch request itself incurs no cost.
 *
 * If any of the actions in a batch request would exceed any of the enforced limits, the *entire*
 * request will fail with a `429 Too Many Requests` error. This is to prevent the unpredictability
 * of which actions might succeed if not all of them could succeed.
 *
 * #### Restrictions
 *
 * Not every endpoint can be accessed through the batch API. Specifically, the following actions
 * cannot be taken and will result in a `400 Bad Request` for that action:
 *
 * * Uploading attachments
 * * Creating, getting, or deleting organization exports
 * * Any SCIM operations
 * * Nested calls to the batch API
 */
export class BatchApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Submit parallel requests
   *
   * @remarks
   * Make multiple requests in parallel to Asana's API.
   *
   * @returns Successfully completed the requested batch API operations.
   *
   * @throws {@link BatchApi.CreateBatchRequestError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AsanaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBatchRequest(
    request: BatchApi.CreateBatchRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchResponse1, BatchApi.CreateBatchRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/batch"),
        auth: anyAuth(this.#auth.personalAccessToken, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "opt_pretty", value: request.optPretty, schema: s.optionalNullable(s.boolean()) },
          {
            name: "opt_fields",
            value: request.optFields,
            schema: s.optional(s.array(s.string())),
            style: "csv",
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchRequest1Schema },
      },
      {
        success: { kind: "json", schema: batchResponse1Schema },
        errorFactory: BatchApi.CreateBatchRequestError,
      },
      options,
    );
  }
}

export namespace BatchApi {
  export type CreateBatchRequestRequest = {
    /**
     * Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON
     * this means doing proper line breaking and indentation to make it readable. This will take
     * extra time and increase the response size so it is advisable only to use this during
     * debugging.
     */
    optPretty?: boolean | null;
    /**
     * Defines fields to return. Some requests return *compact* representations of objects in order
     * to conserve resources and complete the request more efficiently. Other times requests return
     * more information than you may need. This option allows you to list the exact set of fields
     * that the API should be sure to return for the objects. The field names should be provided as
     * paths, described below. The id of included objects will always be returned, regardless of the
     * field options.
     */
    optFields?: string[];
    /** The requests to batch together via the Batch API. */
    body: BatchRequest1;
  };

  export class CreateBatchRequestError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBatchRequestError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
