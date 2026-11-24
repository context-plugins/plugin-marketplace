import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createEntityTemplateInternalSchema,
  type CreateEntityTemplate,
} from "../models/create-entity-template.js";
import { entityTemplateInternalSchema, type EntityTemplate } from "../models/entity-template.js";
import {
  updateEntityTemplateInternalSchema,
  type UpdateEntityTemplate,
} from "../models/update-entity-template.js";
import type { Servers } from "../servers.js";

export class EntityTemplates {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Entity Template
   *
   * @remarks
   * Create a new entity template for the Workspace.
   *
   * @returns Resource
   *
   * @throws {@link EntityTemplates.CreateEntityTemplateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEntityTemplate(
    request: EntityTemplates.CreateEntityTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<EntityTemplate, EntityTemplates.CreateEntityTemplateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/entity-templates"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createEntityTemplateInternalSchema },
      },
      {
        success: { kind: "json", schema: entityTemplateInternalSchema },
        errorFactory: EntityTemplates.CreateEntityTemplateError,
      },
      options,
    );
  }

  /**
   * Delete Entity Template
   *
   * @returns No Content
   *
   * @throws {@link EntityTemplates.DeleteEntityTemplateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteEntityTemplate(
    request: EntityTemplates.DeleteEntityTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EntityTemplates.DeleteEntityTemplateError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/entity-templates/{entity-template-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "entity-template-public-id", value: request.entityTemplatePublicId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EntityTemplates.DeleteEntityTemplateError,
      },
      options,
    );
  }

  /**
   * Disable Story Templates
   *
   * @remarks
   * Disables the Story Template feature for the Workspace.
   *
   * @returns No Content
   *
   * @throws {@link EntityTemplates.DisableStoryTemplatesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disableStoryTemplates(
    options?: RequestOptions,
  ): ApiPromise<undefined, EntityTemplates.DisableStoryTemplatesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/entity-templates/disable"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EntityTemplates.DisableStoryTemplatesError,
      },
      options,
    );
  }

  /**
   * Enable Story Templates
   *
   * @remarks
   * Enables the Story Template feature for the Workspace.
   *
   * @returns No Content
   *
   * @throws {@link EntityTemplates.EnableStoryTemplatesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enableStoryTemplates(
    options?: RequestOptions,
  ): ApiPromise<undefined, EntityTemplates.EnableStoryTemplatesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/entity-templates/enable"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EntityTemplates.EnableStoryTemplatesError,
      },
      options,
    );
  }

  /**
   * Get Entity Template
   *
   * @remarks
   * Get Entity Template returns information about a given entity template.
   *
   * @returns Resource
   *
   * @throws {@link EntityTemplates.GetEntityTemplateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEntityTemplate(
    request: EntityTemplates.GetEntityTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<EntityTemplate, EntityTemplates.GetEntityTemplateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/entity-templates/{entity-template-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "entity-template-public-id", value: request.entityTemplatePublicId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: entityTemplateInternalSchema },
        errorFactory: EntityTemplates.GetEntityTemplateError,
      },
      options,
    );
  }

  /**
   * List Entity Templates
   *
   * @remarks
   * List all the entity templates for the Workspace.
   *
   * @returns Resource
   *
   * @throws {@link EntityTemplates.ListEntityTemplatesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEntityTemplates(
    options?: RequestOptions,
  ): ApiPromise<EntityTemplate[], EntityTemplates.ListEntityTemplatesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/entity-templates"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => entityTemplateInternalSchema)) },
        errorFactory: EntityTemplates.ListEntityTemplatesError,
      },
      options,
    );
  }

  /**
   * Update Entity Template
   *
   * @remarks
   * Update an entity template's name or its contents.
   *
   * @returns Resource
   *
   * @throws {@link EntityTemplates.UpdateEntityTemplateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateEntityTemplate(
    request: EntityTemplates.UpdateEntityTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<EntityTemplate, EntityTemplates.UpdateEntityTemplateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/entity-templates/{entity-template-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "entity-template-public-id", value: request.entityTemplatePublicId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateEntityTemplateInternalSchema },
      },
      {
        success: { kind: "json", schema: entityTemplateInternalSchema },
        errorFactory: EntityTemplates.UpdateEntityTemplateError,
      },
      options,
    );
  }
}

export namespace EntityTemplates {
  export type CreateEntityTemplateRequest = {
    /** Request parameters for creating an entirely new entity template. */
    body: CreateEntityTemplate;
  };

  export class CreateEntityTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateEntityTemplateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DeleteEntityTemplateRequest = {
    /** The unique ID of the entity template. */
    entityTemplatePublicId: string;
  };

  export class DeleteEntityTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteEntityTemplateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export class DisableStoryTemplatesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DisableStoryTemplatesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export class EnableStoryTemplatesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnableStoryTemplatesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type GetEntityTemplateRequest = {
    /** The unique ID of the entity template. */
    entityTemplatePublicId: string;
  };

  export class GetEntityTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEntityTemplateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export class ListEntityTemplatesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListEntityTemplatesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UpdateEntityTemplateRequest = {
    /** The unique ID of the template to be updated. */
    entityTemplatePublicId: string;
    /**
     * Request parameters for changing either a template's name or any of the attributes it is
     * designed to pre-populate.
     */
    body: UpdateEntityTemplate;
  };

  export class UpdateEntityTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateEntityTemplateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
