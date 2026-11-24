import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createStackRequestSchema, type CreateStackRequest } from "../models/create-stack-request.js";
import { error2Schema, type Error2 } from "../models/error2.js";
import { stackListSchema, type StackList } from "../models/stack-list.js";
import { stackSchema, type Stack } from "../models/stack.js";
import { updateStackRequestSchema, type UpdateStackRequest } from "../models/update-stack-request.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for creating and managing Contentstack stacks, including settings, users, sharing, and
 * ownership transfer.
 */
export class Stacks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a stack
   *
   * @remarks
   * Creates a new Contentstack stack within an organization. A stack is an independent repository
   * for content, assets, and configuration within a Contentstack account.
   *
   * @returns The newly created stack.
   *
   * @throws {@link Stacks.CreateStackError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createStack(
    request: Stacks.CreateStackRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Stack, Stacks.CreateStackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackEnvironmentsApi("/stacks"),
        auth: anyAuth(this.#auth.authtokenAuth, this.#auth.managementTokenAuth),
        pathParams: [],
        query: [],
        headers: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createStackRequestSchema },
      },
      {
        success: { kind: "json", schema: stackSchema },
        errorFactory: Stacks.CreateStackError,
      },
      options,
    );
  }

  /**
   * Delete a stack
   *
   * @remarks
   * Permanently deletes a stack and all its contents. This action is irreversible and will remove
   * all content types, entries, assets, and configuration from the stack.
   *
   * @returns Stack deleted successfully.
   *
   * @throws {@link Stacks.DeleteStackError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteStack(
    request: Stacks.DeleteStackRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Stacks.DeleteStackError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultContentstackEnvironmentsApi("/stacks/{api_key}"),
        auth: anyAuth(this.#auth.authtokenAuth, this.#auth.managementTokenAuth),
        pathParams: [{ name: "api_key", value: request.apiKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Stacks.DeleteStackError,
      },
      options,
    );
  }

  /**
   * Get all stacks
   *
   * @remarks
   * Returns all stacks accessible to the authenticated user, optionally filtered by organization.
   *
   * @returns A list of accessible stacks.
   *
   * @throws {@link Stacks.GetAllStacksError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllStacks(options?: RequestOptions): ApiPromise<StackList, Stacks.GetAllStacksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackEnvironmentsApi("/stacks"),
        auth: anyAuth(this.#auth.authtokenAuth, this.#auth.managementTokenAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: stackListSchema },
        errorFactory: Stacks.GetAllStacksError,
      },
      options,
    );
  }

  /**
   * Get a stack
   *
   * @remarks
   * Retrieves details for a specific stack identified by its API key, including configuration,
   * plan, and region information.
   *
   * @returns The requested stack details.
   *
   * @throws {@link Stacks.GetStackError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStack(
    request: Stacks.GetStackRequest,
    options?: RequestOptions,
  ): ApiPromise<Stack, Stacks.GetStackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackEnvironmentsApi("/stacks/{api_key}"),
        auth: anyAuth(this.#auth.authtokenAuth, this.#auth.managementTokenAuth),
        pathParams: [{ name: "api_key", value: request.apiKey, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: stackSchema },
        errorFactory: Stacks.GetStackError,
      },
      options,
    );
  }

  /**
   * Update a stack
   *
   * @remarks
   * Updates settings and metadata for a specific stack such as name, description, and master locale
   * configuration.
   *
   * @returns The updated stack object.
   *
   * @throws {@link Stacks.UpdateStackError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateStack(
    request: Stacks.UpdateStackRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Stack, Stacks.UpdateStackError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultContentstackEnvironmentsApi("/stacks/{api_key}"),
        auth: anyAuth(this.#auth.authtokenAuth, this.#auth.managementTokenAuth),
        pathParams: [{ name: "api_key", value: request.apiKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateStackRequestSchema },
      },
      {
        success: { kind: "json", schema: stackSchema },
        errorFactory: Stacks.UpdateStackError,
      },
      options,
    );
  }
}

export namespace Stacks {
  export type CreateStackRequestParams = {
    /** The UID of the organization in which to create the stack. */
    organizationUid: string;
    body: CreateStackRequest;
  };

  export class CreateStackError extends ApiError {
    declare readonly payload: Declared<"error2", Error2> | Declared<"error22", Error2> | Undeclared;

    static readonly errors: ErrorDecoders<CreateStackError> = [
      { on: 400, kind: "error2", decode: { kind: "json", schema: error2Schema } },
      { on: 401, kind: "error22", decode: { kind: "json", schema: error2Schema } },
    ];
  }

  export type DeleteStackRequest = {
    /** The API key identifying the Contentstack stack. */
    apiKey: string;
  };

  export class DeleteStackError extends ApiError {
    declare readonly payload: Declared<"error2", Error2> | Declared<"error22", Error2> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteStackError> = [
      { on: 401, kind: "error2", decode: { kind: "json", schema: error2Schema } },
      { on: 404, kind: "error22", decode: { kind: "json", schema: error2Schema } },
    ];
  }

  export class GetAllStacksError extends ApiError {
    declare readonly payload: Declared<"error2", Error2> | Undeclared;

    static readonly errors: ErrorDecoders<GetAllStacksError> = [
      { on: 401, kind: "error2", decode: { kind: "json", schema: error2Schema } },
    ];
  }

  export type GetStackRequest = {
    /** The API key identifying the Contentstack stack. */
    apiKey: string;
  };

  export class GetStackError extends ApiError {
    declare readonly payload: Declared<"error2", Error2> | Declared<"error22", Error2> | Undeclared;

    static readonly errors: ErrorDecoders<GetStackError> = [
      { on: 401, kind: "error2", decode: { kind: "json", schema: error2Schema } },
      { on: 404, kind: "error22", decode: { kind: "json", schema: error2Schema } },
    ];
  }

  export type UpdateStackRequestParams = {
    /** The API key identifying the Contentstack stack. */
    apiKey: string;
    body: UpdateStackRequest;
  };

  export class UpdateStackError extends ApiError {
    declare readonly payload: Declared<"error2", Error2> | Declared<"error22", Error2> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateStackError> = [
      { on: 400, kind: "error2", decode: { kind: "json", schema: error2Schema } },
      { on: 401, kind: "error22", decode: { kind: "json", schema: error2Schema } },
    ];
  }
}
