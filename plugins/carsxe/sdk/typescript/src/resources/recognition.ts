import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, orAnonymous } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  platerecognitionRequestSchema,
  type PlaterecognitionRequest,
} from "../models/platerecognition-request.js";
import {
  platerecognitionResponseSchema,
  type PlaterecognitionResponse,
} from "../models/platerecognition-response.js";
import { usageLimitErrorSchema, type UsageLimitError } from "../models/usage-limit-error.js";
import { v1VinocrRequestSchema, type V1VinocrRequest } from "../models/v1-vinocr-request.js";
import { v1VinocrResponseSchema, type V1VinocrResponse } from "../models/v1-vinocr-response.js";
import type { Servers } from "../servers.js";

/**
 * Plate and VIN recognition from images
 */
export class Recognition {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Plate Image Recognition
   *
   * @remarks
   * Extract a license plate number from an image of a vehicle. Send a JSON body containing an
   * `image_url` field with a URL to the image.
   *
   * @returns Plate recognized.
   *
   * @throws {@link Recognition.RecognizePlateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  recognizePlate(
    request: Recognition.RecognizePlateRequest,
    options?: RequestOptions,
  ): ApiPromise<PlaterecognitionResponse, Recognition.RecognizePlateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/platerecognition"),
        auth: orAnonymous(anyAuth(this.#auth.apiKeyQuery, this.#auth.x402Payment)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: platerecognitionRequestSchema },
      },
      {
        success: { kind: "json", schema: platerecognitionResponseSchema },
        errorFactory: Recognition.RecognizePlateError,
      },
      options,
    );
  }

  /**
   * VIN OCR
   *
   * @remarks
   * Extract a VIN from a photo. Send a JSON body containing an `image_url` field with either a URL
   * to an image or a base64-encoded image string.
   *
   * @returns VIN extracted from the image.
   *
   * @throws {@link Recognition.VinOcrError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  vinOcr(
    request: Recognition.VinOcrRequest,
    options?: RequestOptions,
  ): ApiPromise<V1VinocrResponse, Recognition.VinOcrError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/vinocr"),
        auth: orAnonymous(anyAuth(this.#auth.apiKeyQuery, this.#auth.x402Payment)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1VinocrRequestSchema },
      },
      {
        success: { kind: "json", schema: v1VinocrResponseSchema },
        errorFactory: Recognition.VinOcrError,
      },
      options,
    );
  }
}

export namespace Recognition {
  export type RecognizePlateRequest = {
    body: PlaterecognitionRequest;
  };

  export class RecognizePlateError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"usageLimitError", UsageLimitError>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RecognizePlateError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "usageLimitError", decode: { kind: "json", schema: usageLimitErrorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type VinOcrRequest = {
    body: V1VinocrRequest;
  };

  export class VinOcrError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"usageLimitError", UsageLimitError>
      | Undeclared;

    static readonly errors: ErrorDecoders<VinOcrError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "usageLimitError", decode: { kind: "json", schema: usageLimitErrorSchema } },
    ];
  }
}
