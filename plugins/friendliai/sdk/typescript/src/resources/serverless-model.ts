import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import {
  openRouterModelListSuccessSchema,
  type OpenRouterModelListSuccess,
} from "../models/open-router-model-list-success.js";
import {
  serverlessModelListSuccessSchema,
  type ServerlessModelListSuccess,
} from "../models/serverless-model-list-success.js";
import type { Servers } from "../servers.js";

export class ServerlessModel {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * List Models
   *
   * @remarks
   * Lists the currently available models, and provides basic information about each one such as
   * pricing and functionality.
   *
   * @returns Successfully listed all available models.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  serverlessModels(options?: RequestOptions): ApiPromise<ServerlessModelListSuccess, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/serverless/v1/models"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: serverlessModelListSuccessSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * OpenRouter Models
   *
   * @remarks
   * Lists the currently available models for OpenRouter integration, and provides basic information
   * about each one such as pricing and functionality.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  serverlessOpenrouterModels(options?: RequestOptions): ApiPromise<OpenRouterModelListSuccess, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/serverless/v1/openrouter/models"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: openRouterModelListSuccessSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
