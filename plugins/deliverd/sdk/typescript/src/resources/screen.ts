import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1ScreenRequestInternalSchema,
  type ApiV1ScreenRequest,
} from "../models/api-v1-screen-request.js";
import { apiV1ScreenResponseSchema, type ApiV1ScreenResponse } from "../models/api-v1-screen-response.js";
import type { Servers } from "../servers.js";

export class Screen {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Screen text before it goes to an AI model
   *
   * @remarks
   * Finds email addresses, phone numbers, IBANs, card numbers, national identifiers, secrets,
   * special-category data and the organisation's own terms, and decides against what the AI
   * register approves the model (`aiSystemId`) to receive: `allow`, `redact` (send `redactedText`),
   * `ask` (a person decides through the approval in `approval`; send the original only once it is
   * approved) or `deny`. Send `text`, screened in memory and never stored, or `counts`, what the
   * SDK found on the caller's machine, so the text never leaves it. Every check is audited with
   * counts and the verdict, never a value. On the Free plan the check is report-only (`mode:
   * report_only`): it runs and is audited, `verdict` is always `allow`, and `wouldBe` says what a
   * paid plan would have done. A net, not a guarantee: names are not reliably found.
   *
   * @returns The verdict, and why
   *
   * @throws {@link Screen.PostApiV1ScreenError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Screen(
    request: Screen.PostApiV1ScreenRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ScreenResponse, Screen.PostApiV1ScreenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/screen"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ScreenRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ScreenResponseSchema },
        errorFactory: Screen.PostApiV1ScreenError,
      },
      options,
    );
  }
}

export namespace Screen {
  export type PostApiV1ScreenRequest = {
    body?: ApiV1ScreenRequest;
  };

  export class PostApiV1ScreenError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1ScreenError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
