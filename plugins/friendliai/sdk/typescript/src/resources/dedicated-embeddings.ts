import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  dedicatedEmbeddingsBodySchema,
  type DedicatedEmbeddingsBody,
} from "../models/dedicated-embeddings-body.js";
import {
  dedicatedEmbeddingsSuccessSchema,
  type DedicatedEmbeddingsSuccess,
} from "../models/dedicated-embeddings-success.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class DedicatedEmbeddings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Embeddings
   *
   * @remarks
   * Generate an embedding vector from input text or token sequence.
   *
   * @returns Successfully generated embeddings.
   *
   * @throws {@link DedicatedEmbeddings.DedicatedEmbeddingsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedEmbeddings(
    request: DedicatedEmbeddings.DedicatedEmbeddingsRequest,
    options?: RequestOptions,
  ): ApiPromise<DedicatedEmbeddingsSuccess, DedicatedEmbeddings.DedicatedEmbeddingsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dedicated/v1/embeddings"),
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
        body: { kind: "json", value: request.body, schema: dedicatedEmbeddingsBodySchema },
      },
      {
        success: { kind: "json", schema: dedicatedEmbeddingsSuccessSchema },
        errorFactory: DedicatedEmbeddings.DedicatedEmbeddingsError,
      },
      options,
    );
  }
}

export namespace DedicatedEmbeddings {
  export type DedicatedEmbeddingsRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: DedicatedEmbeddingsBody;
  };

  export class DedicatedEmbeddingsError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedEmbeddingsError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
