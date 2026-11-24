import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  activitiesCreateRequestInternalSchema,
  type ActivitiesCreateRequest,
} from "../models/activities-create-request.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Send custom activity events and manage activity definitions.
 */
export class Activities {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create one or more custom activity events
   *
   * @remarks
   * Sends up to 100 custom activity events in a single payload (max 2 MB). Each activity references
   * a custom activity definition and may create or update the associated person via merge_by or
   * person_id.
   *
   * @returns Activities accepted.
   *
   * @throws {@link Activities.CreateActivitiesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link OrttoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createActivities(
    request: Activities.CreateActivitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Activities.CreateActivitiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/activities/create"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: activitiesCreateRequestInternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Activities.CreateActivitiesError,
      },
      options,
    );
  }
}

export namespace Activities {
  export type CreateActivitiesRequest = {
    body: ActivitiesCreateRequest;
  };

  export class CreateActivitiesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CreateActivitiesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
