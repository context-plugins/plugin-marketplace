import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { docsFormsResponseSchema, type DocsFormsResponse } from "../models/docs-forms-response.js";
import { gristErrorSchema, type GristError } from "../models/grist-error.js";
import type { Servers } from "../servers.js";

export class Forms {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get form view data
   *
   * @remarks
   * Get the form configuration for a specific view section. Forms are a special view type that
   * allows external users to submit data.
   *
   * @returns Form data
   *
   * @throws {@link Forms.GetFormDataError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFormData(
    request: Forms.GetFormDataRequest,
    options?: RequestOptions,
  ): ApiPromise<DocsFormsResponse, Forms.GetFormDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/docs/{docId}/forms/{viewSectionId}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "docId", value: request.docId, schema: s.string() },
          { name: "viewSectionId", value: request.viewSectionId, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: docsFormsResponseSchema },
        errorFactory: Forms.GetFormDataError,
      },
      options,
    );
  }
}

export namespace Forms {
  export type GetFormDataRequest = {
    /** A string id (UUID) */
    docId: string;
    /** ID of the view section (form) */
    viewSectionId: number;
  };

  export class GetFormDataError extends ApiError {
    declare readonly payload: Declared<"gristError", GristError> | Undeclared;

    static readonly errors: ErrorDecoders<GetFormDataError> = [
      { on: 404, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }
}
