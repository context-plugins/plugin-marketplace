import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { containerResponseSchema, type ContainerResponse } from "../models/container-response.js";
import {
  contentPublishingLimitResponseSchema,
  type ContentPublishingLimitResponse,
} from "../models/content-publishing-limit-response.js";
import {
  createContainerRequestSchema,
  type CreateContainerRequest,
} from "../models/create-container-request.js";
import { mediaPublishRequestSchema, type MediaPublishRequest } from "../models/media-publish-request.js";
import { mediaPublishResponseSchema, type MediaPublishResponse } from "../models/media-publish-response.js";
import {
  responseInstagramGraphPublishingApiSchema,
  type ResponseInstagramGraphPublishingApi,
} from "../models/response-instagram-graph-publishing-api.js";
import type { Servers } from "../servers.js";

/**
 * Content creation and publishing workflow
 */
export class Publishing {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Instagram Create Media Container
   *
   * @remarks
   * Create a media container for publishing content. Step 1 of the publishing flow.
   *
   * @returns Container created.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createMediaContainer(
    request: Publishing.CreateMediaContainerRequest,
    options?: RequestOptions,
  ): ApiPromise<ContainerResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{user_id}/media"),
        auth: noneAuth,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createContainerRequestSchema },
      },
      {
        success: { kind: "json", schema: containerResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Instagram Get Container Status
   *
   * @remarks
   * Check the publishing status of a media container.
   *
   * @returns Container status.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContainer(
    request: Publishing.GetContainerRequest,
    options?: RequestOptions,
  ): ApiPromise<ResponseInstagramGraphPublishingApi, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{container_id}"),
        auth: noneAuth,
        pathParams: [{ name: "container_id", value: request.containerId, schema: s.string() }],
        query: [
          { name: "access_token", value: request.accessToken, schema: s.string() },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: responseInstagramGraphPublishingApiSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Instagram Get Content Publishing Limit
   *
   * @remarks
   * Get current content publishing usage and rate limit status.
   *
   * @returns Publishing limit data.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContentPublishingLimit(
    request: Publishing.GetContentPublishingLimitRequest,
    options?: RequestOptions,
  ): ApiPromise<ContentPublishingLimitResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{user_id}/content_publishing_limit"),
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
        success: { kind: "json", schema: contentPublishingLimitResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Instagram Publish Media Container
   *
   * @remarks
   * Publish a media container. Step 2 of the publishing flow.
   *
   * @returns Media published.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link InstagramError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  publishMedia(
    request: Publishing.PublishMediaRequest,
    options?: RequestOptions,
  ): ApiPromise<MediaPublishResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{user_id}/media_publish"),
        auth: noneAuth,
        pathParams: [{ name: "user_id", value: request.userId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: mediaPublishRequestSchema },
      },
      {
        success: { kind: "json", schema: mediaPublishResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Publishing {
  export type CreateMediaContainerRequest = {
    userId: string;
    body: CreateContainerRequest;
  };

  export type GetContainerRequest = {
    containerId: string;
    accessToken: string;
    fields?: string;
  };

  export type GetContentPublishingLimitRequest = {
    userId: string;
    accessToken: string;
    fields?: string;
  };

  export type PublishMediaRequest = {
    userId: string;
    body: MediaPublishRequest;
  };
}
