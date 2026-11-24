import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { epicWorkflowInternalSchema, type EpicWorkflow } from "../models/epic-workflow.js";
import type { Servers } from "../servers.js";

export class EpicWorkflowApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Epic Workflow
   *
   * @remarks
   * Returns the Epic Workflow for the Workspace.
   *
   * @returns Resource
   *
   * @throws {@link EpicWorkflowApi.GetEpicWorkflowError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEpicWorkflow(options?: RequestOptions): ApiPromise<EpicWorkflow, EpicWorkflowApi.GetEpicWorkflowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/epic-workflow"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: epicWorkflowInternalSchema },
        errorFactory: EpicWorkflowApi.GetEpicWorkflowError,
      },
      options,
    );
  }
}

export namespace EpicWorkflowApi {
  export class GetEpicWorkflowError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEpicWorkflowError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
