import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  journeyStateDeleteRequestSchema,
  type JourneyStateDeleteRequest,
} from "../models/journey-state-delete-request.js";
import {
  journeyStateDeleteResponseSchema,
  type JourneyStateDeleteResponse,
} from "../models/journey-state-delete-response.js";
import type { Servers } from "../servers.js";

export class InstanceManagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete instance
   *
   * @remarks
   * Delete instance
   *
   * @returns Delete instance response contains the Journey Instance Id
   *
   * @throws {@link InstanceManagement.DeleteInstanceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GbgGoNextGenFlowCaptainApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  deleteInstance(
    request: InstanceManagement.DeleteInstanceRequest,
    options?: RequestOptions,
  ): ApiPromise<JourneyStateDeleteResponse, InstanceManagement.DeleteInstanceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/journey/state/delete"),
        auth: this.#auth.customerAccess,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => journeyStateDeleteRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: journeyStateDeleteResponseSchema },
        errorFactory: InstanceManagement.DeleteInstanceError,
      },
      options,
    );
  }
}

export namespace InstanceManagement {
  export type DeleteInstanceRequest = {
    body?: JourneyStateDeleteRequest;
  };

  export class DeleteInstanceError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error405", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteInstanceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
