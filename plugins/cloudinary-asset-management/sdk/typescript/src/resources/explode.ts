import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { explodeRequestSchema, type ExplodeRequest } from "../models/explode-request.js";
import { explodeResponseSchema, type ExplodeResponse } from "../models/explode-response.js";
import { resourceType9Schema, type ResourceType9 } from "../models/resource-type9.js";
import type { Servers } from "../servers.js";

/**
 * Generates derived images from a multi-frame/page file.
 */
export class Explode {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create derived images from multi-page file
   *
   * @remarks
   * Generates derived images for each of the individual pages/frames in a multi-page/frame file
   * (such as a PDF or animated image).
   *
   * @returns Explode operation started successfully
   *
   * @throws {@link Explode.ExplodeResourceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CloudinaryAssetManagementApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  explodeResource(
    request: Explode.ExplodeResourceRequest,
    options?: RequestOptions,
  ): ApiPromise<ExplodeResponse, Explode.ExplodeResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1_1/{cloud_name}/{resource_type}/explode"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.oauth2),
        pathParams: [
          { name: "cloud_name", value: request.cloudName, schema: s.string() },
          { name: "resource_type", value: request.resourceType, schema: resourceType9Schema },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: explodeRequestSchema },
      },
      {
        success: { kind: "json", schema: explodeResponseSchema },
        errorFactory: Explode.ExplodeResourceError,
      },
      options,
    );
  }
}

export namespace Explode {
  export type ExplodeResourceRequest = {
    /** The cloud name of your product environment. */
    cloudName: string;
    /** The type of resource to explode. Only "image" is supported. */
    resourceType: ResourceType9;
    /** The explode operation parameters. */
    body: ExplodeRequest;
  };

  export class ExplodeResourceError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExplodeResourceError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 401, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 403, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 404, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }
}
