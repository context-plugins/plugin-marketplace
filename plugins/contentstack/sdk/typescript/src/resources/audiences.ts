import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { audienceListSchema, type AudienceList } from "../models/audience-list.js";
import { audienceSchema, type Audience } from "../models/audience.js";
import {
  createAudienceRequestSchema,
  type CreateAudienceRequest,
} from "../models/create-audience-request.js";
import {
  errorContentstackPersonalizeManagementAttributesApiSchema,
  type ErrorContentstackPersonalizeManagementAttributesApi,
} from "../models/error-contentstack-personalize-management-attributes-api.js";
import type { Servers } from "../servers.js";

/**
 * Audiences are defined segments of users grouped by demographic, behavioral, or other
 * attribute-based criteria for targeted content experiences.
 */
export class Audiences {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an audience
   *
   * @remarks
   * Creates a new audience segment in the Personalize project based on attribute conditions and
   * behavioral rules.
   *
   * @returns The newly created audience.
   *
   * @throws {@link Audiences.CreateAudienceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAudience(
    request: Audiences.CreateAudienceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Audience, Audiences.CreateAudienceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackPersonalizeManagementAttributesApi("/audiences"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [],
        query: [],
        headers: [
          { name: "x-project-uid", value: request.xProjectUid, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createAudienceRequestSchema },
      },
      {
        success: { kind: "json", schema: audienceSchema },
        errorFactory: Audiences.CreateAudienceError,
      },
      options,
    );
  }

  /**
   * Delete an audience
   *
   * @remarks
   * Permanently deletes an audience from the Personalize project. Audiences referenced in active
   * experiences cannot be deleted.
   *
   * @returns Audience deleted successfully.
   *
   * @throws {@link Audiences.DeleteAudienceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAudience(
    request: Audiences.DeleteAudienceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Audiences.DeleteAudienceError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultContentstackPersonalizeManagementAttributesApi("/audiences/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "x-project-uid", value: request.xProjectUid, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Audiences.DeleteAudienceError,
      },
      options,
    );
  }

  /**
   * Get all audiences
   *
   * @remarks
   * Retrieves all audience segment definitions in the Personalize project. Audiences define the
   * user groups that experiences are targeted to.
   *
   * @returns A list of all audiences in the project.
   *
   * @throws {@link Audiences.GetAllAudiencesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllAudiences(
    request: Audiences.GetAllAudiencesRequest,
    options?: RequestOptions,
  ): ApiPromise<AudienceList, Audiences.GetAllAudiencesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackPersonalizeManagementAttributesApi("/audiences"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "x-project-uid", value: request.xProjectUid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: audienceListSchema },
        errorFactory: Audiences.GetAllAudiencesError,
      },
      options,
    );
  }

  /**
   * Update an audience
   *
   * @remarks
   * Updates the rules and configuration of an existing audience segment.
   *
   * @returns The updated audience.
   *
   * @throws {@link Audiences.UpdateAudienceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAudience(
    request: Audiences.UpdateAudienceRequest,
    options?: RequestOptions,
  ): ApiPromise<Audience, Audiences.UpdateAudienceError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultContentstackPersonalizeManagementAttributesApi("/audiences/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "x-project-uid", value: request.xProjectUid, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createAudienceRequestSchema },
      },
      {
        success: { kind: "json", schema: audienceSchema },
        errorFactory: Audiences.UpdateAudienceError,
      },
      options,
    );
  }
}

export namespace Audiences {
  export type CreateAudienceRequestParams = {
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
    body: CreateAudienceRequest;
  };

  export class CreateAudienceError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi2",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAudienceError> = [
      {
        on: 400,
        kind: "errorContentstackPersonalizeManagementAttributesApi",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
      {
        on: 401,
        kind: "errorContentstackPersonalizeManagementAttributesApi2",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
    ];
  }

  export type DeleteAudienceRequest = {
    /** The unique identifier of the audience. */
    id: string;
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
  };

  export class DeleteAudienceError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi2",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAudienceError> = [
      {
        on: 401,
        kind: "errorContentstackPersonalizeManagementAttributesApi",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
      {
        on: 404,
        kind: "errorContentstackPersonalizeManagementAttributesApi2",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
    ];
  }

  export type GetAllAudiencesRequest = {
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
  };

  export class GetAllAudiencesError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllAudiencesError> = [
      {
        on: 401,
        kind: "errorContentstackPersonalizeManagementAttributesApi",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
    ];
  }

  export type UpdateAudienceRequest = {
    /** The unique identifier of the audience. */
    id: string;
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
    body: CreateAudienceRequest;
  };

  export class UpdateAudienceError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi2",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi3",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAudienceError> = [
      {
        on: 400,
        kind: "errorContentstackPersonalizeManagementAttributesApi",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
      {
        on: 401,
        kind: "errorContentstackPersonalizeManagementAttributesApi2",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
      {
        on: 404,
        kind: "errorContentstackPersonalizeManagementAttributesApi3",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
    ];
  }
}
