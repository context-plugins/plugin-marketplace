import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  serverlessKnowledgeRetrievalBodySchema,
  type ServerlessKnowledgeRetrievalBody,
} from "../models/serverless-knowledge-retrieval-body.js";
import {
  serverlessKnowledgeRetrievalSuccessSchema,
  type ServerlessKnowledgeRetrievalSuccess,
} from "../models/serverless-knowledge-retrieval-success.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class ServerlessKnowledge {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Knowledge Retrieval
   *
   * @remarks
   * Retrieve related documents from the chosen knowledge base by similarity.
   *
   * @returns Successful Response
   *
   * @throws {@link ServerlessKnowledge.ServerlessKnowledgeRetrieveError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  serverlessKnowledgeRetrieve(
    request: ServerlessKnowledge.ServerlessKnowledgeRetrieveRequest,
    options?: RequestOptions,
  ): ApiPromise<ServerlessKnowledgeRetrievalSuccess, ServerlessKnowledge.ServerlessKnowledgeRetrieveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/serverless/v1/knowledge/retrieve"),
        auth: this.#auth.token,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: serverlessKnowledgeRetrievalBodySchema },
      },
      {
        success: { kind: "json", schema: serverlessKnowledgeRetrievalSuccessSchema },
        errorFactory: ServerlessKnowledge.ServerlessKnowledgeRetrieveError,
      },
      options,
    );
  }
}

export namespace ServerlessKnowledge {
  export type ServerlessKnowledgeRetrieveRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: ServerlessKnowledgeRetrievalBody;
  };

  export class ServerlessKnowledgeRetrieveError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ServerlessKnowledgeRetrieveError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
