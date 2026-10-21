import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  dedicatedChatRenderBodySchema,
  type DedicatedChatRenderBody,
} from "../models/dedicated-chat-render-body.js";
import {
  dedicatedChatRenderSuccessSchema,
  type DedicatedChatRenderSuccess,
} from "../models/dedicated-chat-render-success.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class DedicatedChatRender {
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
   * @throws {@link DedicatedChatRender.DedicatedChatRenderError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedChatRender(
    request: DedicatedChatRender.DedicatedChatRenderRequest,
    options?: RequestOptions,
  ): ApiPromise<DedicatedChatRenderSuccess, DedicatedChatRender.DedicatedChatRenderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dedicated/v1/chat/render"),
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
        body: { kind: "json", value: request.body, schema: dedicatedChatRenderBodySchema },
      },
      {
        success: { kind: "json", schema: dedicatedChatRenderSuccessSchema },
        errorFactory: DedicatedChatRender.DedicatedChatRenderError,
      },
      options,
    );
  }
}

export namespace DedicatedChatRender {
  export type DedicatedChatRenderRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: DedicatedChatRenderBody;
  };

  export class DedicatedChatRenderError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedChatRenderError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
