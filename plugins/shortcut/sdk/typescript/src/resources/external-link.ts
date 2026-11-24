import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { storySlimInternalSchema, type StorySlim } from "../models/story-slim.js";
import type { Servers } from "../servers.js";

export class ExternalLink {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get External Link Stories
   *
   * @remarks
   * Get Stories which have a given External Link associated with them.
   *
   * @returns Resource
   *
   * @throws {@link ExternalLink.GetExternalLinkStoriesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getExternalLinkStories(
    request: ExternalLink.GetExternalLinkStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], ExternalLink.GetExternalLinkStoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/external-link/stories"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "external_link", value: request.externalLink, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => storySlimInternalSchema)) },
        errorFactory: ExternalLink.GetExternalLinkStoriesError,
      },
      options,
    );
  }
}

export namespace ExternalLink {
  export type GetExternalLinkStoriesRequest = {
    /** The external link associated with one or more stories. */
    externalLink: string;
  };

  export const getExternalLinkStoriesRequestSchema: Schema<GetExternalLinkStoriesRequest> = s.lazySchema(() =>
    s.object<GetExternalLinkStoriesRequest>({
      externalLink: s.string().check(s.maxLength(2048), s.pattern("^https?://.+$")),
    }),
  );

  export class GetExternalLinkStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExternalLinkStoriesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
