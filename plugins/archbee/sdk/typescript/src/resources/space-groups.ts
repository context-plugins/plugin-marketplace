import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  spaceGroupCreateRequestSchema,
  type SpaceGroupCreateRequest,
} from "../models/space-group-create-request.js";
import {
  spaceGroupCreateResponseSchema,
  type SpaceGroupCreateResponse,
} from "../models/space-group-create-response.js";
import {
  spaceGroupCreate400Error1Schema,
  type SpaceGroupCreate400Error1,
} from "../models/space-group-create400-error1.js";
import {
  spaceGroupDeleteRequestSchema,
  type SpaceGroupDeleteRequest,
} from "../models/space-group-delete-request.js";
import {
  spaceGroupDeleteResponseSchema,
  type SpaceGroupDeleteResponse,
} from "../models/space-group-delete-response.js";
import {
  spaceGroupDelete400Error1Schema,
  type SpaceGroupDelete400Error1,
} from "../models/space-group-delete400-error1.js";
import type { Servers } from "../servers.js";

/**
 * Grouping of documentation spaces
 */
export class SpaceGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Space Group
   *
   * @remarks
   * Create a new space group with desired fields, return the space group.
   *
   * @returns Process status
   *
   * @throws {@link SpaceGroups.CreateSpaceGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ArchbeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSpaceGroup(
    request: SpaceGroups.CreateSpaceGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<SpaceGroupCreateResponse, SpaceGroups.CreateSpaceGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/space-group/create"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: spaceGroupCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: spaceGroupCreateResponseSchema },
        errorFactory: SpaceGroups.CreateSpaceGroupError,
      },
      options,
    );
  }

  /**
   * Delete Space Group
   *
   * @remarks
   * Delete Archbee space group with given spaceGroupId.
   *
   * @returns Process status
   *
   * @throws {@link SpaceGroups.DeleteSpaceGroupError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ArchbeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSpaceGroup(
    request: SpaceGroups.DeleteSpaceGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<SpaceGroupDeleteResponse, SpaceGroups.DeleteSpaceGroupError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/space-group/delete"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: spaceGroupDeleteRequestSchema },
      },
      {
        success: { kind: "json", schema: spaceGroupDeleteResponseSchema },
        errorFactory: SpaceGroups.DeleteSpaceGroupError,
      },
      options,
    );
  }
}

export namespace SpaceGroups {
  export type CreateSpaceGroupRequest = {
    body: SpaceGroupCreateRequest;
  };

  export class CreateSpaceGroupError extends ApiError {
    declare readonly payload: Declared<"spaceGroupCreate400Error1", SpaceGroupCreate400Error1> | Undeclared;

    static readonly errors: ErrorDecoders<CreateSpaceGroupError> = [
      {
        on: 400,
        kind: "spaceGroupCreate400Error1",
        decode: { kind: "json", schema: spaceGroupCreate400Error1Schema },
      },
    ];
  }

  export type DeleteSpaceGroupRequest = {
    body: SpaceGroupDeleteRequest;
  };

  export class DeleteSpaceGroupError extends ApiError {
    declare readonly payload: Declared<"spaceGroupDelete400Error1", SpaceGroupDelete400Error1> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSpaceGroupError> = [
      {
        on: 400,
        kind: "spaceGroupDelete400Error1",
        decode: { kind: "json", schema: spaceGroupDelete400Error1Schema },
      },
    ];
  }
}
