import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import {
  errorResponseUiPathAutomationHubAppInventoryApiSchema,
  type ErrorResponseUiPathAutomationHubAppInventoryApi,
} from "../models/error-response-ui-path-automation-hub-app-inventory-api.js";
import { pipelineDataSchema, type PipelineData } from "../models/pipeline-data.js";
import type { Servers } from "../servers.js";

/**
 * Retrieve automation pipeline data and status views
 */
export class Pipeline {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * UiPath Get Automation Pipeline Data
   *
   * @remarks
   * Retrieves aggregated pipeline data showing the distribution of automations across phases and
   * statuses. Used for reporting and dashboard views by CoE administrators to understand the
   * overall health and throughput of the automation program.
   *
   * @returns Automation pipeline summary data
   *
   * @throws {@link Pipeline.GetAutomationPipelineError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UiPathError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAutomationPipeline(
    options?: RequestOptions,
  ): ApiPromise<PipelineData, Pipeline.GetAutomationPipelineError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultUiPathAutomationHubAppInventoryApi("/automationpipeline"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pipelineDataSchema },
        errorFactory: Pipeline.GetAutomationPipelineError,
      },
      options,
    );
  }
}

export namespace Pipeline {
  export class GetAutomationPipelineError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseUiPathAutomationHubAppInventoryApi",
          ErrorResponseUiPathAutomationHubAppInventoryApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAutomationPipelineError> = [
      {
        on: 401,
        kind: "errorResponseUiPathAutomationHubAppInventoryApi",
        decode: { kind: "json", schema: errorResponseUiPathAutomationHubAppInventoryApiSchema },
      },
    ];
  }
}
