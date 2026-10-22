import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  containerImageEditBodySchema,
  type ContainerImageEditBody,
} from "../models/container-image-edit-body.js";
import {
  containerImageGenerationBodySchema,
  type ContainerImageGenerationBody,
} from "../models/container-image-generation-body.js";
import {
  imageGenerationContainerResultSchema,
  type ImageGenerationContainerResult,
} from "../models/image-generation-container-result.js";
import type { Servers } from "../servers.js";

export class ContainerImage {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Image edits
   *
   * @remarks
   * Edit an image based on a text prompt.
   *
   * @returns Successfully edited image.
   *
   * @throws {@link ContainerImage.ContainerImagesEditError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  containerImagesEdit(
    request: ContainerImage.ContainerImagesEditRequest,
    options?: RequestOptions,
  ): ApiPromise<ImageGenerationContainerResult, ContainerImage.ContainerImagesEditError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/images/edits"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: containerImageEditBodySchema },
      },
      {
        success: { kind: "json", schema: imageGenerationContainerResultSchema },
        errorFactory: ContainerImage.ContainerImagesEditError,
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
   * @returns Successfully generated image.
   *
   * @throws {@link ContainerImage.ContainerImagesGenerateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  containerImagesGenerate(
    request: ContainerImage.ContainerImagesGenerateRequest,
    options?: RequestOptions,
  ): ApiPromise<ImageGenerationContainerResult, ContainerImage.ContainerImagesGenerateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/images/generations"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: containerImageGenerationBodySchema },
      },
      {
        success: { kind: "json", schema: imageGenerationContainerResultSchema },
        errorFactory: ContainerImage.ContainerImagesGenerateError,
      },
      options,
    );
  }
}

export namespace ContainerImage {
  export type ContainerImagesEditRequest = {
    body: ContainerImageEditBody;
  };

  export class ContainerImagesEditError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ContainerImagesEditError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ContainerImagesGenerateRequest = {
    body: ContainerImageGenerationBody;
  };

  export class ContainerImagesGenerateError extends ApiError {
    declare readonly payload: Declared<"error422", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ContainerImagesGenerateError> = [
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
