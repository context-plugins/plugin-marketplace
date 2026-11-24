import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  automationListResponseSchema,
  type AutomationListResponse,
} from "../models/automation-list-response.js";
import { automationSchema, type Automation } from "../models/automation.js";
import {
  automationsCollaboratorsResponseInternalSchema,
  type AutomationsCollaboratorsResponse,
} from "../models/automations-collaborators-response.js";
import {
  createAutomationIdeaRequestInternalSchema,
  type CreateAutomationIdeaRequest,
} from "../models/create-automation-idea-request.js";
import {
  errorResponseUiPathAutomationHubAppInventoryApiSchema,
  type ErrorResponseUiPathAutomationHubAppInventoryApi,
} from "../models/error-response-ui-path-automation-hub-app-inventory-api.js";
import {
  updateAutomationRequestSchema,
  type UpdateAutomationRequest,
} from "../models/update-automation-request.js";
import type { Servers } from "../servers.js";

/**
 * Manage automation ideas and projects in the pipeline
 */
export class Automations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath Create an Automation Idea
   *
   * @remarks
   * Creates a new automation idea in Automation Hub. The submitted idea enters the pipeline at the
   * Idea phase and is available for assessment and prioritization by CoE administrators. The
   * request body must include the idea name, description, submitter information, and the estimated
   * benefit details used in cost-benefit analysis.
   *
   * @returns Automation idea created successfully
   *
   * @throws {@link Automations.CreateAutomationIdeaError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAutomationIdea(
    request: Automations.CreateAutomationIdeaRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Automation, Automations.CreateAutomationIdeaError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultUiPathAutomationHubAppInventoryApi("/automations"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createAutomationIdeaRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: automationSchema },
        errorFactory: Automations.CreateAutomationIdeaError,
      },
      options,
    );
  }

  /**
   * UiPath Delete an Automation
   *
   * @remarks
   * Permanently deletes an automation record from Automation Hub by its unique identifier. This
   * action removes the idea and all associated documents, comments, and collaborator data. This
   * action cannot be undone.
   *
   * @returns Automation deleted successfully
   *
   * @throws {@link Automations.DeleteAutomationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAutomation(
    request: Automations.DeleteAutomationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Automations.DeleteAutomationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultUiPathAutomationHubAppInventoryApi("/automations/{automationId}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "automationId", value: request.automationId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Automations.DeleteAutomationError,
      },
      options,
    );
  }

  /**
   * UiPath Get an Automation by ID
   *
   * @remarks
   * Retrieves a single automation record by its unique identifier. Returns full details including
   * pipeline phase, status, cost-benefit analysis data, collaborators, documents, and tags.
   *
   * @returns The requested automation record
   *
   * @throws {@link Automations.GetAutomationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAutomation(
    request: Automations.GetAutomationRequest,
    options?: RequestOptions,
  ): ApiPromise<Automation, Automations.GetAutomationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathAutomationHubAppInventoryApi("/automations/{automationId}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "automationId", value: request.automationId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: automationSchema },
        errorFactory: Automations.GetAutomationError,
      },
      options,
    );
  }

  /**
   * UiPath List Collaborators for an Automation
   *
   * @remarks
   * Retrieves the list of collaborators assigned to a specific automation idea or project.
   * Collaborators have defined roles such as subject matter expert, developer, or reviewer.
   *
   * @returns A list of collaborators for the automation
   *
   * @throws {@link Automations.ListAutomationCollaboratorsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAutomationCollaborators(
    request: Automations.ListAutomationCollaboratorsRequest,
    options?: RequestOptions,
  ): ApiPromise<AutomationsCollaboratorsResponse, Automations.ListAutomationCollaboratorsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathAutomationHubAppInventoryApi(
          "/automations/{automationId}/collaborators",
        ),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "automationId", value: request.automationId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: automationsCollaboratorsResponseInternalSchema },
        errorFactory: Automations.ListAutomationCollaboratorsError,
      },
      options,
    );
  }

  /**
   * UiPath List Automations
   *
   * @remarks
   * Retrieves a list of automation ideas and projects from Automation Hub. Supports filtering by
   * phase, status, and other pipeline attributes. Returns a paginated list of automation records
   * including metadata, cost-benefit analysis data, and submission details. Used by CoE teams to
   * programmatically query and track the automation pipeline.
   *
   * @returns A paginated list of automations
   *
   * @throws {@link Automations.ListAutomationsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAutomations(
    request: Automations.ListAutomationsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<AutomationListResponse, Automations.ListAutomationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathAutomationHubAppInventoryApi("/automations"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "phase", value: request.phase, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: automationListResponseSchema },
        errorFactory: Automations.ListAutomationsError,
      },
      options,
    );
  }

  /**
   * UiPath Remove a Collaborator from an Automation
   *
   * @remarks
   * Removes a collaborator from an automation by their user ID. The user will lose access to
   * collaborate on the automation idea or project.
   *
   * @returns Collaborator removed successfully
   *
   * @throws {@link Automations.RemoveAutomationCollaboratorError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeAutomationCollaborator(
    request: Automations.RemoveAutomationCollaboratorRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Automations.RemoveAutomationCollaboratorError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultUiPathAutomationHubAppInventoryApi(
          "/automations/{automationId}/collaborators",
        ),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "automationId", value: request.automationId, schema: s.int() }],
        query: [{ name: "userId", value: request.userId, schema: s.int() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Automations.RemoveAutomationCollaboratorError,
      },
      options,
    );
  }

  /**
   * UiPath Update an Automation
   *
   * @remarks
   * Partially updates an automation record by its unique identifier. Commonly used to advance an
   * automation through the pipeline by updating its phase and status. Only fields included in the
   * request body are modified.
   *
   * @returns Automation updated successfully
   *
   * @throws {@link Automations.UpdateAutomationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAutomation(
    request: Automations.UpdateAutomationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Automation, Automations.UpdateAutomationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.defaultUiPathAutomationHubAppInventoryApi("/automations/{automationId}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "automationId", value: request.automationId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateAutomationRequestSchema },
      },
      {
        success: { kind: "json", schema: automationSchema },
        errorFactory: Automations.UpdateAutomationError,
      },
      options,
    );
  }
}

export namespace Automations {
  export type CreateAutomationIdeaRequestParams = {
    body: CreateAutomationIdeaRequest;
  };

  export class CreateAutomationIdeaError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi2",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateAutomationIdeaError> = [
      {
        on: 400,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
      {
        on: 401,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi2",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
    ];
  }

  export type DeleteAutomationRequest = {
    /** Unique integer identifier of the automation idea or project */
    automationId: number;
  };

  export class DeleteAutomationError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi2",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAutomationError> = [
      {
        on: 401,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi2",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
    ];
  }

  export type GetAutomationRequest = {
    /** Unique integer identifier of the automation idea or project */
    automationId: number;
  };

  export class GetAutomationError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi2",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAutomationError> = [
      {
        on: 401,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi2",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
    ];
  }

  export type ListAutomationCollaboratorsRequest = {
    /** Unique integer identifier of the automation idea or project */
    automationId: number;
  };

  export class ListAutomationCollaboratorsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi2",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAutomationCollaboratorsError> = [
      {
        on: 401,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi2",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
    ];
  }

  export type ListAutomationsRequest = {
    /**
     * Filter automations by pipeline phase (e.g., Idea, Assessment, Development, Testing,
     * Production)
     */
    phase?: string;
    /** Filter automations by status within their current phase */
    status?: string;
    /** Page number for pagination (1-based) @default 1 */
    page?: number;
    /** Number of records per page @default 20 */
    pageSize?: number;
  };

  export const listAutomationsRequestSchema: Schema<ListAutomationsRequest> = s.lazySchema(() =>
    s.object<ListAutomationsRequest>({
      phase: s.optional(s.string()),
      status: s.optional(s.string()),
      page: s.defaulted(s.int().check(s.gte(1)), 1),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 20),
    }),
  );

  export class ListAutomationsError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi2",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAutomationsError> = [
      {
        on: 401,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
      {
        on: 403,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi2",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
    ];
  }

  export type RemoveAutomationCollaboratorRequest = {
    /** Unique integer identifier of the automation idea or project */
    automationId: number;
    /** Unique identifier of the user to remove as a collaborator */
    userId: number;
  };

  export class RemoveAutomationCollaboratorError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi2",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveAutomationCollaboratorError> = [
      {
        on: 401,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi2",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
    ];
  }

  export type UpdateAutomationRequestParams = {
    /** Unique integer identifier of the automation idea or project */
    automationId: number;
    body: UpdateAutomationRequest;
  };

  export class UpdateAutomationError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi2",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi3",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAutomationError> = [
      {
        on: 400,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
      {
        on: 401,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi2",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi3",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
    ];
  }
}
