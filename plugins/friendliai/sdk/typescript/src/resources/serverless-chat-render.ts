import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  serverlessChatRenderBodySchema,
  type ServerlessChatRenderBody,
} from "../models/serverless-chat-render-body.js";
import {
  serverlessChatRenderSuccessSchema,
  type ServerlessChatRenderSuccess,
} from "../models/serverless-chat-render-success.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class ServerlessChatRender {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Chat render
   *
   * @remarks
   * Render a list of chat messages into the prompt text sent to the model.
   *
   * @returns Successfully rendered chat messages into prompt text.
   *
   * @throws {@link ServerlessChatRender.ServerlessChatRenderError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  serverlessChatRender(
    request: ServerlessChatRender.ServerlessChatRenderRequest,
    options?: RequestOptions,
  ): ApiPromise<ServerlessChatRenderSuccess, ServerlessChatRender.ServerlessChatRenderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/serverless/v1/chat/render"),
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
        body: { kind: "json", value: request.body, schema: serverlessChatRenderBodySchema },
      },
      {
        success: { kind: "json", schema: serverlessChatRenderSuccessSchema },
        errorFactory: ServerlessChatRender.ServerlessChatRenderError,
      },
      options,
    );
  }
}

export namespace ServerlessChatRender {
  export type ServerlessChatRenderRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: ServerlessChatRenderBody;
  };

  export class ServerlessChatRenderError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ServerlessChatRenderError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
