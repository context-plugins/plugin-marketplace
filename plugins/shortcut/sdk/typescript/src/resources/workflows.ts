import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { workflowInternalSchema, type Workflow } from "../models/workflow.js";
import type { Servers } from "../servers.js";

export class Workflows {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Workflow
   *
   * @remarks
   * Get Workflow returns information about a chosen Workflow.
   *
   * @returns Resource
   *
   * @throws {@link Workflows.GetWorkflowError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWorkflow(
    request: Workflows.GetWorkflowRequest,
    options?: RequestOptions,
  ): ApiPromise<Workflow, Workflows.GetWorkflowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/workflows/{workflow-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "workflow-public-id", value: request.workflowPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workflowInternalSchema },
        errorFactory: Workflows.GetWorkflowError,
      },
      options,
    );
  }

  /**
   * List Workflows
   *
   * @remarks
   * Returns a list of all Workflows in the Workspace.
   *
   * @returns Resource
   *
   * @throws {@link Workflows.ListWorkflowsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWorkflows(options?: RequestOptions): ApiPromise<Workflow[], Workflows.ListWorkflowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/workflows"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => workflowInternalSchema)) },
        errorFactory: Workflows.ListWorkflowsError,
      },
      options,
    );
  }
}

export namespace Workflows {
  export type GetWorkflowRequest = {
    /** The ID of the Workflow. */
    workflowPublicId: number;
  };

  export class GetWorkflowError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWorkflowError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export class ListWorkflowsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListWorkflowsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
