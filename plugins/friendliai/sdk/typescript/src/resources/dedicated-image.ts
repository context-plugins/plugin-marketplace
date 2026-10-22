import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  dedicatedImageEditBodySchema,
  type DedicatedImageEditBody,
} from "../models/dedicated-image-edit-body.js";
import {
  dedicatedImageGenerationBodySchema,
  type DedicatedImageGenerationBody,
} from "../models/dedicated-image-generation-body.js";
import {
  imageGenerationDedicatedResultSchema,
  type ImageGenerationDedicatedResult,
} from "../models/image-generation-dedicated-result.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import type { Servers } from "../servers.js";

export class DedicatedImage {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Image edits
   *
   * @remarks
   * Edit an image based on a text prompt.
   *
   * @returns Successfully edited image(s).
   *
   * @throws {@link DedicatedImage.DedicatedImagesEditError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedImagesEdit(
    request: DedicatedImage.DedicatedImagesEditRequest,
    options?: RequestOptions,
  ): ApiPromise<ImageGenerationDedicatedResult, DedicatedImage.DedicatedImagesEditError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dedicated/v1/images/edits"),
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
        body: { kind: "json", value: request.body, schema: dedicatedImageEditBodySchema },
      },
      {
        success: { kind: "json", schema: imageGenerationDedicatedResultSchema },
        errorFactory: DedicatedImage.DedicatedImagesEditError,
      },
      options,
    );
  }

  /**
   * Image generations
   *
   * @remarks
   * Generate an image from a text prompt.
   *
   * @returns Successfully generated image(s).
   *
   * @throws {@link DedicatedImage.DedicatedImagesGenerateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  dedicatedImagesGenerate(
    request: DedicatedImage.DedicatedImagesGenerateRequest,
    options?: RequestOptions,
  ): ApiPromise<ImageGenerationDedicatedResult, DedicatedImage.DedicatedImagesGenerateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/dedicated/v1/images/generations"),
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
        body: { kind: "json", value: request.body, schema: dedicatedImageGenerationBodySchema },
      },
      {
        success: { kind: "json", schema: imageGenerationDedicatedResultSchema },
        errorFactory: DedicatedImage.DedicatedImagesGenerateError,
      },
      options,
    );
  }
}

export namespace DedicatedImage {
  export type DedicatedImagesEditRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: DedicatedImageEditBody;
  };

  export class DedicatedImagesEditError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedImagesEditError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DedicatedImagesGenerateRequest = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: DedicatedImageGenerationBody;
  };

  export class DedicatedImagesGenerateError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DedicatedImagesGenerateError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
