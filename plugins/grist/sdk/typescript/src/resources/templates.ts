import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { docWithWorkspaceSchema, type DocWithWorkspace } from "../models/doc-with-workspace.js";
import {
  workspaceWithDocsAndDomainSchema,
  type WorkspaceWithDocsAndDomain,
} from "../models/workspace-with-docs-and-domain.js";
import type { Servers } from "../servers.js";

export class Templates {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get template details
   *
   * @remarks
   * Get information about a specific template.
   *
   * **Note:** Requires a template organization to be configured on the server.
   *
   * @returns Template information
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTemplate(
    request: Templates.GetTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<DocWithWorkspace, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/templates/{templateId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "templateId", value: request.templateId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docWithWorkspaceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List available templates
   *
   * @remarks
   * Get all available templates. Templates are organized by workspace within a template
   * organization configured on the server.
   *
   * **Note:** Requires a template organization to be configured on the server.
   *
   * @returns List of workspaces containing templates
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTemplates(options?: RequestOptions): ApiPromise<WorkspaceWithDocsAndDomain[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/templates"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => workspaceWithDocsAndDomainSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Templates {
  export type GetTemplateRequest = {
    /** ID of the template */
    templateId: string;
  };
}
