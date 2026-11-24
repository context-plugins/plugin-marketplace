import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createCustomClassRequestSchema,
  type CreateCustomClassRequest,
} from "../models/create-custom-class-request.js";
import {
  createPhraseSetRequestSchema,
  type CreatePhraseSetRequest,
} from "../models/create-phrase-set-request.js";
import { customClassSchema, type CustomClass } from "../models/custom-class.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "../models/google-rpc-error.js";
import {
  listCustomClassesResponseSchema,
  type ListCustomClassesResponse,
} from "../models/list-custom-classes-response.js";
import {
  listPhraseSetResponseSchema,
  type ListPhraseSetResponse,
} from "../models/list-phrase-set-response.js";
import { phraseSetSchema, type PhraseSet } from "../models/phrase-set.js";
import type { Servers } from "../servers.js";

export class Projects {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create customClasses
   *
   * @remarks
   * Create a custom class.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.SpeechProjectsLocationsCustomClassesCreateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudSpeechToTextError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  speechProjectsLocationsCustomClassesCreate(
    request: Projects.SpeechProjectsLocationsCustomClassesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomClass, Projects.SpeechProjectsLocationsCustomClassesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/customClasses"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createCustomClassRequestSchema },
      },
      {
        success: { kind: "json", schema: customClassSchema },
        errorFactory: Projects.SpeechProjectsLocationsCustomClassesCreateError,
      },
      options,
    );
  }

  /**
   * Delete customClasses
   *
   * @remarks
   * Delete a custom class.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.SpeechProjectsLocationsCustomClassesDeleteError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudSpeechToTextError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  speechProjectsLocationsCustomClassesDelete(
    request: Projects.SpeechProjectsLocationsCustomClassesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Projects.SpeechProjectsLocationsCustomClassesDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "customClassesId", value: request.customClassesId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Projects.SpeechProjectsLocationsCustomClassesDeleteError,
      },
      options,
    );
  }

  /**
   * Get customClasses
   *
   * @remarks
   * Get a custom class.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.SpeechProjectsLocationsCustomClassesGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudSpeechToTextError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  speechProjectsLocationsCustomClassesGet(
    request: Projects.SpeechProjectsLocationsCustomClassesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomClass, Projects.SpeechProjectsLocationsCustomClassesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "customClassesId", value: request.customClassesId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customClassSchema },
        errorFactory: Projects.SpeechProjectsLocationsCustomClassesGetError,
      },
      options,
    );
  }

  /**
   * List customClasses
   *
   * @remarks
   * List custom classes.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.SpeechProjectsLocationsCustomClassesListError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudSpeechToTextError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  speechProjectsLocationsCustomClassesList(
    request: Projects.SpeechProjectsLocationsCustomClassesListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCustomClassesResponse, Projects.SpeechProjectsLocationsCustomClassesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/customClasses"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCustomClassesResponseSchema },
        errorFactory: Projects.SpeechProjectsLocationsCustomClassesListError,
      },
      options,
    );
  }

  /**
   * Patch customClasses
   *
   * @remarks
   * Update a custom class.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.SpeechProjectsLocationsCustomClassesPatchError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudSpeechToTextError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  speechProjectsLocationsCustomClassesPatch(
    request: Projects.SpeechProjectsLocationsCustomClassesPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<CustomClass, Projects.SpeechProjectsLocationsCustomClassesPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/customClasses/{customClassesId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "customClassesId", value: request.customClassesId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: customClassSchema },
      },
      {
        success: { kind: "json", schema: customClassSchema },
        errorFactory: Projects.SpeechProjectsLocationsCustomClassesPatchError,
      },
      options,
    );
  }

  /**
   * Create phraseSets
   *
   * @remarks
   * Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase.
   * The items in the PhraseSet are favored by the recognition model when you send a call that
   * includes the PhraseSet.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.SpeechProjectsLocationsPhraseSetsCreateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudSpeechToTextError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  speechProjectsLocationsPhraseSetsCreate(
    request: Projects.SpeechProjectsLocationsPhraseSetsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<PhraseSet, Projects.SpeechProjectsLocationsPhraseSetsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/phraseSets"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createPhraseSetRequestSchema },
      },
      {
        success: { kind: "json", schema: phraseSetSchema },
        errorFactory: Projects.SpeechProjectsLocationsPhraseSetsCreateError,
      },
      options,
    );
  }

  /**
   * Delete phraseSets
   *
   * @remarks
   * Delete a phrase set.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.SpeechProjectsLocationsPhraseSetsDeleteError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudSpeechToTextError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  speechProjectsLocationsPhraseSetsDelete(
    request: Projects.SpeechProjectsLocationsPhraseSetsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Projects.SpeechProjectsLocationsPhraseSetsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "phraseSetsId", value: request.phraseSetsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Projects.SpeechProjectsLocationsPhraseSetsDeleteError,
      },
      options,
    );
  }

  /**
   * Get phraseSets
   *
   * @remarks
   * Get a phrase set.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.SpeechProjectsLocationsPhraseSetsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudSpeechToTextError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  speechProjectsLocationsPhraseSetsGet(
    request: Projects.SpeechProjectsLocationsPhraseSetsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PhraseSet, Projects.SpeechProjectsLocationsPhraseSetsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "phraseSetsId", value: request.phraseSetsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: phraseSetSchema },
        errorFactory: Projects.SpeechProjectsLocationsPhraseSetsGetError,
      },
      options,
    );
  }

  /**
   * List phraseSets
   *
   * @remarks
   * List phrase sets.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.SpeechProjectsLocationsPhraseSetsListError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudSpeechToTextError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  speechProjectsLocationsPhraseSetsList(
    request: Projects.SpeechProjectsLocationsPhraseSetsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPhraseSetResponse, Projects.SpeechProjectsLocationsPhraseSetsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/locations/{locationsId}/phraseSets"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPhraseSetResponseSchema },
        errorFactory: Projects.SpeechProjectsLocationsPhraseSetsListError,
      },
      options,
    );
  }

  /**
   * Patch phraseSets
   *
   * @remarks
   * Update a phrase set.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.SpeechProjectsLocationsPhraseSetsPatchError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudSpeechToTextError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  speechProjectsLocationsPhraseSetsPatch(
    request: Projects.SpeechProjectsLocationsPhraseSetsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<PhraseSet, Projects.SpeechProjectsLocationsPhraseSetsPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/projects/{projectsId}/locations/{locationsId}/phraseSets/{phraseSetsId}",
        ),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "locationsId", value: request.locationsId, schema: s.string() },
          { name: "phraseSetsId", value: request.phraseSetsId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: phraseSetSchema },
      },
      {
        success: { kind: "json", schema: phraseSetSchema },
        errorFactory: Projects.SpeechProjectsLocationsPhraseSetsPatchError,
      },
      options,
    );
  }
}

export namespace Projects {
  export type SpeechProjectsLocationsCustomClassesCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: CreateCustomClassRequest;
  };

  export class SpeechProjectsLocationsCustomClassesCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<SpeechProjectsLocationsCustomClassesCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type SpeechProjectsLocationsCustomClassesDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (customClassesId). */
    customClassesId: string;
  };

  export class SpeechProjectsLocationsCustomClassesDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<SpeechProjectsLocationsCustomClassesDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type SpeechProjectsLocationsCustomClassesGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (customClassesId). */
    customClassesId: string;
  };

  export class SpeechProjectsLocationsCustomClassesGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<SpeechProjectsLocationsCustomClassesGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type SpeechProjectsLocationsCustomClassesListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * The maximum number of custom classes to return. The service may return fewer than this value.
     * If unspecified, at most 50 custom classes will be returned. The maximum value is 1000; values
     * above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListCustomClass` call. Provide this to retrieve the
     * subsequent page. When paginating, all other parameters provided to `ListCustomClass` must
     * match the call that provided the page token.
     */
    pageToken?: string;
  };

  export class SpeechProjectsLocationsCustomClassesListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<SpeechProjectsLocationsCustomClassesListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type SpeechProjectsLocationsCustomClassesPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (customClassesId). */
    customClassesId: string;
    /** The list of fields to be updated. */
    updateMask?: string;
    body: CustomClass;
  };

  export class SpeechProjectsLocationsCustomClassesPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<SpeechProjectsLocationsCustomClassesPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type SpeechProjectsLocationsPhraseSetsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    body: CreatePhraseSetRequest;
  };

  export class SpeechProjectsLocationsPhraseSetsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<SpeechProjectsLocationsPhraseSetsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type SpeechProjectsLocationsPhraseSetsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (phraseSetsId). */
    phraseSetsId: string;
  };

  export class SpeechProjectsLocationsPhraseSetsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<SpeechProjectsLocationsPhraseSetsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type SpeechProjectsLocationsPhraseSetsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (phraseSetsId). */
    phraseSetsId: string;
  };

  export class SpeechProjectsLocationsPhraseSetsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<SpeechProjectsLocationsPhraseSetsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type SpeechProjectsLocationsPhraseSetsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /**
     * The maximum number of phrase sets to return. The service may return fewer than this value. If
     * unspecified, at most 50 phrase sets will be returned. The maximum value is 1000; values above
     * 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `ListPhraseSet` call. Provide this to retrieve the
     * subsequent page. When paginating, all other parameters provided to `ListPhraseSet` must match
     * the call that provided the page token.
     */
    pageToken?: string;
  };

  export class SpeechProjectsLocationsPhraseSetsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<SpeechProjectsLocationsPhraseSetsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type SpeechProjectsLocationsPhraseSetsPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (locationsId). */
    locationsId: string;
    /** Resource name segment (phraseSetsId). */
    phraseSetsId: string;
    /** The list of fields to be updated. */
    updateMask?: string;
    body: PhraseSet;
  };

  export class SpeechProjectsLocationsPhraseSetsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<SpeechProjectsLocationsPhraseSetsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
