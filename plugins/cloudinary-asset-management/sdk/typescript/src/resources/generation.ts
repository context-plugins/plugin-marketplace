import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { generateImageRequestSchema, type GenerateImageRequest } from "../models/generate-image-request.js";
import { generateImageResultSchema, type GenerateImageResult } from "../models/generate-image-result.js";
import { imageToImageRequestSchema, type ImageToImageRequest } from "../models/image-to-image-request.js";
import { rateLimitedResponse1Schema, type RateLimitedResponse1 } from "../models/rate-limited-response1.js";
import type { Servers } from "../servers.js";

/**
 * Generate images from text prompts using AI models.
 */
export class Generation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Generate an image
   *
   * @remarks
   * Generate an image from a text prompt using AI models.
   *
   * The model is selected via the optional `model` object:
   * 1. If `model.id` is provided, use that exact model.
   * 2. Else if `model.family` (+ optional `model.tier`) is provided, resolve via the model
   *    registry; a missing tier defaults to `standard`.
   * 3. Else if `model.mode` is `auto`, the service picks the model for the request (optionally
   *    steered by `model.preference`).
   * 4. Otherwise, use the global default (nano-banana / premium, i.e. `nano-banana-2`).
   *
   * @returns Image generated successfully (synchronous).
   *
   * @throws {@link Generation.GenerateImageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  generateImage(
    request: Generation.GenerateImageRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GenerateImageResult, Generation.GenerateImageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/generate/{cloud_name}/text_to_image"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: generateImageRequestSchema },
      },
      {
        success: { kind: "json", schema: generateImageResultSchema },
        errorFactory: Generation.GenerateImageError,
      },
      options,
    );
  }

  /**
   * Generate an image from reference images
   *
   * @remarks
   * Generate an image guided by one or more **reference images** — restyle, on-brand variants,
   * character consistency, virtual try-on, edit/extend — steered by `prompt`.
   *
   * Only edit-capable models are selectable here. The model is selected via the optional `model`
   * object, exactly like `text_to_image`, but IDs are restricted to edit models:
   * 1. If `model.id` is provided, use that exact edit model.
   * 2. Else if `model.family` (+ optional `model.tier`) is provided, resolve to that family's edit
   *    model (e.g. `nano-banana` / `premium` → `nano-banana-2-edit`).
   * 3. Else if `model.mode` is `auto`, the service picks an edit model for the request (optionally
   *    steered by `model.preference`).
   * 4. Otherwise, use the default edit model (`nano-banana-2-edit`).
   *
   * Each reference image is either a stored managed asset (by `asset_id`, read-permission checked)
   * or an external HTTPS `url`.
   *
   * @returns Image generated successfully (synchronous).
   *
   * @throws {@link Generation.GenerateImageFromImagesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  generateImageFromImages(
    request: Generation.GenerateImageFromImagesRequest,
    options?: RequestOptions,
  ): ApiPromise<GenerateImageResult, Generation.GenerateImageFromImagesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/generate/{cloud_name}/image_to_image"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [{ name: "cloud_name", value: request.cloudName, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: imageToImageRequestSchema },
      },
      {
        success: { kind: "json", schema: generateImageResultSchema },
        errorFactory: Generation.GenerateImageFromImagesError,
      },
      options,
    );
  }
}

export namespace Generation {
  export type GenerateImageRequestParams = {
    /** The cloud name of your Cloudinary product environment. */
    cloudName: string;
    /** A JSON object containing the generation request parameters. */
    body: GenerateImageRequest;
  };

  export class GenerateImageError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"rateLimitedResponse1", RateLimitedResponse1>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GenerateImageError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "rateLimitedResponse1", decode: { kind: "json", schema: rateLimitedResponse1Schema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 502, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GenerateImageFromImagesRequest = {
    /** The cloud name of your Cloudinary product environment. */
    cloudName: string;
    /** A JSON object containing the image-to-image generation request parameters. */
    body: ImageToImageRequest;
  };

  export class GenerateImageFromImagesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"rateLimitedResponse1", RateLimitedResponse1>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GenerateImageFromImagesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "rateLimitedResponse1", decode: { kind: "json", schema: rateLimitedResponse1Schema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 502, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
