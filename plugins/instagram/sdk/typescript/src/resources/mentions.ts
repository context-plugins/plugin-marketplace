import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { mediaListSchema, type MediaList } from "../models/media-list.js";
import type { Servers } from "../servers.js";

/**
 * Content where account was mentioned
 */
export class Mentions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Instagram Get User Tags
   *
   * @remarks
   * Get IG Media objects where the user has been tagged by other users.
   *
   * @returns List of tagged media.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getUserTags(
    request: Mentions.GetUserTagsRequest,
    options?: RequestOptions,
  ): ApiPromise<MediaList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{user_id}/tags"),
        auth: noneAuth,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [
          { name: "access_token", value: request.accessToken, schema: s.string() },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: mediaListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Mentions {
  export type GetUserTagsRequest = {
    userId: string;
    accessToken: string;
    fields?: string;
  };
}
