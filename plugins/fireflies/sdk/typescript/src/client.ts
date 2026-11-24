import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { ApiError, type Declared, type Undeclared } from "./core/api-error.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import type { ErrorDecoders } from "./core/response-decoder.js";
import * as host from "./core/runtime-environment.js";
import { uuid } from "./core/uuid.js";
import * as s from "./core/validation/index.js";
import { graphQlErrorResponseSchema, type GraphQlErrorResponse } from "./models/graph-ql-error-response.js";
import { graphQlRequestSchema, type GraphQlRequest } from "./models/graph-ql-request.js";
import { graphQlResponseSchema, type GraphQlResponse } from "./models/graph-ql-response.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The Fireflies GraphQL API provides a single HTTP endpoint for querying and mutating all meeting
 * data including transcripts, summaries, action items, speakers, and analytics. Developers can
 * retrieve transcripts, manage live meetings, work with AskFred AI threads, handle bites (meeting
 * clips), and access audit event logs via strongly-typed GraphQL queries and mutations.
 * Authentication uses a Bearer API key passed in the Authorization header.
 */
export class FirefliesAiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "FIREFLIES_AI_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "FirefliesAiClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  /**
   * Execute a GraphQL operation
   *
   * @remarks
   * All Fireflies API operations are performed via GraphQL POST requests to this single endpoint.
   * The body must contain a `query` string (GraphQL query or mutation) and optionally a `variables`
   * object. See the Fireflies documentation for the full schema of available queries and mutations.
   *
   * @returns GraphQL response (errors may still be present in the response body)
   *
   * @throws {@link FirefliesAiClient.GraphqlOperationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FirefliesAiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  graphqlOperation(
    request: FirefliesAiClient.GraphqlOperationRequest,
    options?: RequestOptions,
  ): ApiPromise<GraphQlResponse, FirefliesAiClient.GraphqlOperationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: graphQlRequestSchema },
      },
      {
        success: { kind: "json", schema: graphQlResponseSchema },
        errorFactory: FirefliesAiClient.GraphqlOperationError,
      },
      options,
    );
  }
}

export namespace FirefliesAiClient {
  export type GraphqlOperationRequest = {
    body: GraphQlRequest;
  };

  export class GraphqlOperationError extends ApiError {
    declare readonly payload:
      | Declared<"graphQlErrorResponse", GraphQlErrorResponse>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GraphqlOperationError> = [
      { on: 401, kind: "graphQlErrorResponse", decode: { kind: "json", schema: graphQlErrorResponseSchema } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
