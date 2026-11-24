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
  createExperienceRequestInternalSchema,
  type CreateExperienceRequest,
} from "../models/create-experience-request.js";
import {
  errorContentstackPersonalizeManagementAttributesApiSchema,
  type ErrorContentstackPersonalizeManagementAttributesApi,
} from "../models/error-contentstack-personalize-management-attributes-api.js";
import { experienceListInternalSchema, type ExperienceList } from "../models/experience-list.js";
import { experiencePrioritySchema, type ExperiencePriority } from "../models/experience-priority.js";
import { experienceInternalSchema, type Experience } from "../models/experience.js";
import type { Servers } from "../servers.js";

/**
 * Experiences define personalized content variations delivered to specific audience segments,
 * supporting both segmented and A/B test configurations.
 */
export class Experiences {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an experience
   *
   * @remarks
   * Creates a new experience in the Personalize project. Experiences can be of type SEGMENTED
   * (rule-based audience targeting) or AB_TEST (split testing with traffic distribution).
   *
   * @returns The newly created experience.
   *
   * @throws {@link Experiences.CreateExperienceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createExperience(
    request: Experiences.CreateExperienceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Experience, Experiences.CreateExperienceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackPersonalizeManagementAttributesApi("/experiences"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [],
        query: [],
        headers: [
          { name: "x-project-uid", value: request.xProjectUid, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createExperienceRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: experienceInternalSchema },
        errorFactory: Experiences.CreateExperienceError,
      },
      options,
    );
  }

  /**
   * Delete an experience
   *
   * @remarks
   * Permanently deletes an experience from the Personalize project. Only experiences in draft or
   * inactive status can be deleted.
   *
   * @returns Experience deleted successfully.
   *
   * @throws {@link Experiences.DeleteExperienceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteExperience(
    request: Experiences.DeleteExperienceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Experiences.DeleteExperienceError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultContentstackPersonalizeManagementAttributesApi("/experiences/{id}"),
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
        errorFactory: Experiences.DeleteExperienceError,
      },
      options,
    );
  }

  /**
   * Get all experiences
   *
   * @remarks
   * Retrieves all experience configurations in the Personalize project, including their variant
   * definitions and audience assignments.
   *
   * @returns A list of all experiences in the project.
   *
   * @throws {@link Experiences.GetAllExperiencesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllExperiences(
    request: Experiences.GetAllExperiencesRequest,
    options?: RequestOptions,
  ): ApiPromise<ExperienceList, Experiences.GetAllExperiencesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackPersonalizeManagementAttributesApi("/experiences"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "x-project-uid", value: request.xProjectUid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: experienceListInternalSchema },
        errorFactory: Experiences.GetAllExperiencesError,
      },
      options,
    );
  }

  /**
   * Get an experience
   *
   * @remarks
   * Retrieves details for a specific experience including its variants, audience assignments,
   * status, and configuration.
   *
   * @returns The requested experience.
   *
   * @throws {@link Experiences.GetExperienceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getExperience(
    request: Experiences.GetExperienceRequest,
    options?: RequestOptions,
  ): ApiPromise<Experience, Experiences.GetExperienceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackPersonalizeManagementAttributesApi("/experiences/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "x-project-uid", value: request.xProjectUid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: experienceInternalSchema },
        errorFactory: Experiences.GetExperienceError,
      },
      options,
    );
  }

  /**
   * Get experience priority order
   *
   * @remarks
   * Retrieves the priority ordering of all active experiences, which determines which experience
   * takes precedence when a user qualifies for multiple experiences.
   *
   * @returns The current experience priority ordering.
   *
   * @throws {@link Experiences.GetExperiencePriorityError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getExperiencePriority(
    request: Experiences.GetExperiencePriorityRequest,
    options?: RequestOptions,
  ): ApiPromise<ExperiencePriority, Experiences.GetExperiencePriorityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate:
          this.#servers.defaultContentstackPersonalizeManagementAttributesApi("/experiences/priority"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "x-project-uid", value: request.xProjectUid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: experiencePrioritySchema },
        errorFactory: Experiences.GetExperiencePriorityError,
      },
      options,
    );
  }

  /**
   * Update an experience
   *
   * @remarks
   * Updates the configuration of an existing experience including its name, variants, and audience
   * targeting rules.
   *
   * @returns The updated experience.
   *
   * @throws {@link Experiences.UpdateExperienceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateExperience(
    request: Experiences.UpdateExperienceRequest,
    options?: RequestOptions,
  ): ApiPromise<Experience, Experiences.UpdateExperienceError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultContentstackPersonalizeManagementAttributesApi("/experiences/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "x-project-uid", value: request.xProjectUid, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createExperienceRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: experienceInternalSchema },
        errorFactory: Experiences.UpdateExperienceError,
      },
      options,
    );
  }

  /**
   * Update experience priority order
   *
   * @remarks
   * Updates the priority ordering of experiences to control which experience is applied first when
   * a user qualifies for multiple active experiences.
   *
   * @returns Updated experience priority ordering.
   *
   * @throws {@link Experiences.UpdateExperiencePriorityError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateExperiencePriority(
    request: Experiences.UpdateExperiencePriorityRequest,
    options?: RequestOptions,
  ): ApiPromise<ExperiencePriority, Experiences.UpdateExperiencePriorityError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate:
          this.#servers.defaultContentstackPersonalizeManagementAttributesApi("/experiences/priority"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [],
        query: [],
        headers: [
          { name: "x-project-uid", value: request.xProjectUid, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: experiencePrioritySchema },
      },
      {
        success: { kind: "json", schema: experiencePrioritySchema },
        errorFactory: Experiences.UpdateExperiencePriorityError,
      },
      options,
    );
  }
}

export namespace Experiences {
  export type CreateExperienceRequestParams = {
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
    body: CreateExperienceRequest;
  };

  export class CreateExperienceError extends ApiError {
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

    static readonly errors: ErrorDecoders<CreateExperienceError> = [
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

  export type DeleteExperienceRequest = {
    /** The unique identifier of the experience. */
    id: string;
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
  };

  export class DeleteExperienceError extends ApiError {
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

    static readonly errors: ErrorDecoders<DeleteExperienceError> = [
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

  export type GetAllExperiencesRequest = {
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
  };

  export class GetAllExperiencesError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllExperiencesError> = [
      {
        on: 401,
        kind: "errorContentstackPersonalizeManagementAttributesApi",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
    ];
  }

  export type GetExperienceRequest = {
    /** The unique identifier of the experience. */
    id: string;
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
  };

  export class GetExperienceError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetExperienceError> = [
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

  export type GetExperiencePriorityRequest = {
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
  };

  export class GetExperiencePriorityError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExperiencePriorityError> = [
      {
        on: 401,
        kind: "errorContentstackPersonalizeManagementAttributesApi",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
    ];
  }

  export type UpdateExperienceRequest = {
    /** The unique identifier of the experience. */
    id: string;
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
    body: CreateExperienceRequest;
  };

  export class UpdateExperienceError extends ApiError {
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

    static readonly errors: ErrorDecoders<UpdateExperienceError> = [
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

  export type UpdateExperiencePriorityRequest = {
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
    body: ExperiencePriority;
  };

  export class UpdateExperiencePriorityError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateExperiencePriorityError> = [
      {
        on: 401,
        kind: "errorContentstackPersonalizeManagementAttributesApi",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
    ];
  }
}
