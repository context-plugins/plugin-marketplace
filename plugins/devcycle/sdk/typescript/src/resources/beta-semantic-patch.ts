import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { audiencePatchDtoSchema, type AudiencePatchDto } from "../models/audience-patch-dto.js";
import {
  badRequestErrorResponseSchema,
  type BadRequestErrorResponse,
} from "../models/bad-request-error-response.js";
import type { Servers } from "../servers.js";

export class BetaSemanticPatch {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * [Beta] Semantic Patch Update an Audience
   *
   * @remarks
   * Semantic Patch Update an Audience by ID or key
   *
   * @throws {@link BetaSemanticPatch.SemanticPatchControllerSemanticUpdateError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  semanticPatchControllerSemanticUpdate(
    request: BetaSemanticPatch.SemanticPatchControllerSemanticUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, BetaSemanticPatch.SemanticPatchControllerSemanticUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/semantic/projects/{project}/audiences/{key}"),
        auth: noneAuth,
        pathParams: [
          { name: "key", value: request.key, schema: s.string() },
          { name: "project", value: request.project, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: audiencePatchDtoSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: BetaSemanticPatch.SemanticPatchControllerSemanticUpdateError,
      },
      options,
    );
  }
}

export namespace BetaSemanticPatch {
  export type SemanticPatchControllerSemanticUpdateRequest = {
    /** A Audience key or ID */
    key: string;
    /** A Project key or ID */
    project: string;
    body: AudiencePatchDto;
  };

  export class SemanticPatchControllerSemanticUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"badRequestErrorResponse", BadRequestErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SemanticPatchControllerSemanticUpdateError> = [
      {
        on: 400,
        kind: "badRequestErrorResponse",
        decode: { kind: "json", schema: badRequestErrorResponseSchema },
      },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}
