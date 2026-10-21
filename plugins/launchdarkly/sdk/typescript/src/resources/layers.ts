import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { layerCollectionRepSchema, type LayerCollectionRep } from "../models/layer-collection-rep.js";
import { layerPatchInputSchema, type LayerPatchInput } from "../models/layer-patch-input.js";
import { layerPostSchema, type LayerPost } from "../models/layer-post.js";
import { layerRepSchema, type LayerRep } from "../models/layer-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import type { Servers } from "../servers.js";

/**
 * > ### Available for customers using Experimentation > > Layers are available to customers using
 * [Experimentation](https://launchdarkly.com/docs/api/experiments).
 *
 * There are some cases in which you may not want to include a context in more than one experiment
 * at a time. For example, you may be concerned about collisions between experiments that are
 * testing similar parts of your app, like two different changes to the same section of your app's
 * user interface (UI), or experiments running on both the back end and front end of the same
 * functionality. In this case you can eliminate the interaction effect between experiments using
 * layers.
 *
 * A layer contains a set of experiments that cannot share traffic with each other. All of the
 * experiments within a layer are mutually exclusive, which means that if a context is included in
 * one experiment, LaunchDarkly will exclude it from any other experiments in the same layer.
 *
 * To learn more, read [Mutually exclusive
 * experiments](https://launchdarkly.com/docs/home/experimentation/mutually-exclusive).
 */
export class Layers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create layer
   *
   * @remarks
   * Create a layer. Experiments running in the same layer are granted mutually-exclusive traffic.
   *
   * @returns Layer response
   *
   * @throws {@link Layers.CreateLayerError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createLayer(
    request: Layers.CreateLayerRequest,
    options?: RequestOptions,
  ): ApiPromise<LayerRep, Layers.CreateLayerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/layers"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: layerPostSchema },
      },
      {
        success: { kind: "json", schema: layerRepSchema },
        errorFactory: Layers.CreateLayerError,
      },
      options,
    );
  }

  /**
   * Get layers
   *
   * @remarks
   * Get a collection of all layers for a project
   *
   * @returns Layer Collection response
   *
   * @throws {@link Layers.GetLayersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getLayers(
    request: Layers.GetLayersRequest,
    options?: RequestOptions,
  ): ApiPromise<LayerCollectionRep, Layers.GetLayersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/layers"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [{ name: "filter", value: request.filter, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: layerCollectionRepSchema },
        errorFactory: Layers.GetLayersError,
      },
      options,
    );
  }

  /**
   * Update layer
   *
   * @remarks
   * Update a layer by adding, changing, or removing traffic reservations for experiments, or by
   * changing layer name or description. Updating a layer uses the semantic patch format.
   *
   * To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to
   * your `Content-Type` header. To learn more, read [Updates using semantic
   * patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating layers.
   *
   * <details> <summary>Click to expand instructions for <strong>updating layers</strong></summary>
   *
   * #### updateName
   *
   * Updates the layer name.
   *
   * ##### Parameters
   *
   * - `name`: The new layer name.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *       "kind": "updateName",
   *       "name": "New name"
   *   }]
   * }
   * ```
   *
   * #### updateDescription
   *
   * Updates the layer description.
   *
   * ##### Parameters
   *
   * - `description`: The new description.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{
   *       "kind": "updateDescription",
   *       "description": "New description"
   *   }]
   * }
   * ```
   *
   * #### updateExperimentReservation
   *
   * Adds or updates a traffic reservation for an experiment in a layer.
   *
   * ##### Parameters
   *
   * - `experimentKey`: The key of the experiment whose reservation you are adding to or updating in
   *   the layer.
   * - `reservationPercent`: The amount of traffic in the layer to reserve. Must be an integer. Zero
   *   is allowed until iteration start.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "environmentKey": "production",
   *   "instructions": [{
   *       "kind": "updateExperimentReservation",
   *       "experimentKey": "exp-key",
   *       "reservationPercent": 10
   *   }]
   * }
   * ```
   *
   * #### removeExperiment
   *
   * Removes a traffic reservation for an experiment from a layer.
   *
   * ##### Parameters
   *
   * - `experimentKey`: The key of the experiment whose reservation you want to remove from the
   *   layer.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "environmentKey": "production",
   *   "instructions": [{
   *       "kind": "removeExperiment",
   *       "experimentKey": "exp-key"
   *   }]
   * }
   * ```
   *
   * </details>
   *
   * @returns Layer response
   *
   * @throws {@link Layers.UpdateLayerError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateLayer(
    request: Layers.UpdateLayerRequest,
    options?: RequestOptions,
  ): ApiPromise<LayerRep, Layers.UpdateLayerError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/layers/{layerKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "layerKey", value: request.layerKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: layerPatchInputSchema },
      },
      {
        success: { kind: "json", schema: layerRepSchema },
        errorFactory: Layers.UpdateLayerError,
      },
      options,
    );
  }
}

export namespace Layers {
  export type CreateLayerRequest = {
    /** The project key */
    projectKey: string;
    body: LayerPost;
  };

  export class CreateLayerError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateLayerError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetLayersRequest = {
    /** The project key */
    projectKey: string;
    /**
     * A comma-separated list of filters. This endpoint only accepts filtering by `experimentKey`.
     * The filter returns layers which include that experiment for the selected environment(s). For
     * example: `filter=reservations.experimentKey contains expKey`.
     */
    filter?: string;
  };

  export class GetLayersError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLayersError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type UpdateLayerRequest = {
    /** The project key */
    projectKey: string;
    /** The layer key */
    layerKey: string;
    body: LayerPatchInput;
  };

  export class UpdateLayerError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateLayerError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
