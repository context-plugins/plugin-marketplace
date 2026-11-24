import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createStoryLinkSchema, type CreateStoryLink } from "../models/create-story-link.js";
import { storyLinkSchema, type StoryLink } from "../models/story-link.js";
import { updateStoryLinkSchema, type UpdateStoryLink } from "../models/update-story-link.js";
import type { Servers } from "../servers.js";

export class StoryLinks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Story Link
   *
   * @remarks
   * Story Links (called Story Relationships in the UI) allow you create semantic relationships
   * between two stories. The parameters read like an active voice grammatical sentence: subject ->
   * verb -> object.
   *
   * The subject story acts on the object Story; the object story is the direct object of the
   * sentence.
   *
   * The subject story "blocks", "duplicates", or "relates to" the object story. Examples:
   * - "story 5 blocks story 6” -- story 6 is now "blocked" until story 5 is moved to a Done
   *   workflow state.
   * - "story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and
   *   should probably be archived).
   * - "story 7 relates to story 3”
   *
   * @returns Resource
   *
   * @throws {@link StoryLinks.CreateStoryLinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createStoryLink(
    request: StoryLinks.CreateStoryLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryLink, StoryLinks.CreateStoryLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/story-links"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createStoryLinkSchema },
      },
      {
        success: { kind: "json", schema: storyLinkSchema },
        errorFactory: StoryLinks.CreateStoryLinkError,
      },
      options,
    );
  }

  /**
   * Delete Story Link
   *
   * @remarks
   * Removes the relationship between the stories for the given Story Link.
   *
   * @returns No Content
   *
   * @throws {@link StoryLinks.DeleteStoryLinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteStoryLink(
    request: StoryLinks.DeleteStoryLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, StoryLinks.DeleteStoryLinkError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/story-links/{story-link-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "story-link-public-id", value: request.storyLinkPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: StoryLinks.DeleteStoryLinkError,
      },
      options,
    );
  }

  /**
   * Get Story Link
   *
   * @remarks
   * Returns the stories and their relationship for the given Story Link.
   *
   * @returns Resource
   *
   * @throws {@link StoryLinks.GetStoryLinkError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStoryLink(
    request: StoryLinks.GetStoryLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryLink, StoryLinks.GetStoryLinkError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/story-links/{story-link-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "story-link-public-id", value: request.storyLinkPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: storyLinkSchema },
        errorFactory: StoryLinks.GetStoryLinkError,
      },
      options,
    );
  }

  /**
   * Update Story Link
   *
   * @remarks
   * Updates the stories and/or the relationship for the given Story Link.
   *
   * @returns Resource
   *
   * @throws {@link StoryLinks.UpdateStoryLinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateStoryLink(
    request: StoryLinks.UpdateStoryLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<StoryLink, StoryLinks.UpdateStoryLinkError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/story-links/{story-link-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "story-link-public-id", value: request.storyLinkPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateStoryLinkSchema },
      },
      {
        success: { kind: "json", schema: storyLinkSchema },
        errorFactory: StoryLinks.UpdateStoryLinkError,
      },
      options,
    );
  }
}

export namespace StoryLinks {
  export type CreateStoryLinkRequest = {
    body: CreateStoryLink;
  };

  export class CreateStoryLinkError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateStoryLinkError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DeleteStoryLinkRequest = {
    /** The unique ID of the Story Link. */
    storyLinkPublicId: number;
  };

  export class DeleteStoryLinkError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteStoryLinkError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type GetStoryLinkRequest = {
    /** The unique ID of the Story Link. */
    storyLinkPublicId: number;
  };

  export class GetStoryLinkError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetStoryLinkError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UpdateStoryLinkRequest = {
    /** The unique ID of the Story Link. */
    storyLinkPublicId: number;
    body: UpdateStoryLink;
  };

  export class UpdateStoryLinkError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateStoryLinkError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
