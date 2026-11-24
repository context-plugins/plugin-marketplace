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
  createVariableRequestSchema,
  type CreateVariableRequest,
} from "../models/create-variable-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { variableListSchema, type VariableList } from "../models/variable-list.js";
import { variableSchema, type Variable } from "../models/variable.js";
import type { Servers } from "../servers.js";

/**
 * Project variables are reusable key-value pairs that can be referenced across multiple automations
 * within a project.
 */
export class Variables {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a variable
   *
   * @remarks
   * Creates a new project variable that can be referenced in automation configurations. Variables
   * can store API keys, URLs, or other configuration values that are used across multiple
   * automations.
   *
   * @returns The newly created variable.
   *
   * @throws {@link Variables.CreateVariableError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVariable(
    request: Variables.CreateVariableRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Variable, Variables.CreateVariableError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackAutomateManagementAccountsApi(
          "/v1/organizations/{organization_uid}/projects/{project_uid}/variables",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "project_uid", value: request.projectUid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createVariableRequestSchema },
      },
      {
        success: { kind: "json", schema: variableSchema },
        errorFactory: Variables.CreateVariableError,
      },
      options,
    );
  }

  /**
   * Get all variables
   *
   * @remarks
   * Retrieves all project variables defined for the automation project. Variables are reusable
   * key-value pairs that can be referenced across automation configurations.
   *
   * @returns A list of project variables.
   *
   * @throws {@link Variables.GetAllVariablesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllVariables(
    request: Variables.GetAllVariablesRequest,
    options?: RequestOptions,
  ): ApiPromise<VariableList, Variables.GetAllVariablesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackAutomateManagementAccountsApi(
          "/v1/organizations/{organization_uid}/projects/{project_uid}/variables",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "project_uid", value: request.projectUid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: variableListSchema },
        errorFactory: Variables.GetAllVariablesError,
      },
      options,
    );
  }
}

export namespace Variables {
  export type CreateVariableRequestParams = {
    /** The unique identifier of the organization. */
    organizationUid: string;
    /** The unique identifier of the automation project. */
    projectUid: string;
    body: CreateVariableRequest;
  };

  export class CreateVariableError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CreateVariableError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAllVariablesRequest = {
    /** The unique identifier of the organization. */
    organizationUid: string;
    /** The unique identifier of the automation project. */
    projectUid: string;
  };

  export class GetAllVariablesError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetAllVariablesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
