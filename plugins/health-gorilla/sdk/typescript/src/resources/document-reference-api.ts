import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { bundleSchema, type Bundle } from "../models/bundle.js";
import { documentReferenceSchema, type DocumentReference } from "../models/document-reference.js";
import type { Servers } from "../servers.js";

/**
 * Clinical document metadata.
 */
export class DocumentReferenceApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Read a DocumentReference resource by id
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link HealthGorillaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  readDocumentReference(
    request: DocumentReferenceApi.ReadDocumentReferenceRequest,
    options?: RequestOptions,
  ): ApiPromise<DocumentReference, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/DocumentReference/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: documentReferenceSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Search DocumentReference resources
   *
   * @returns A FHIR Bundle of DocumentReference resources.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link HealthGorillaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchDocumentReferences(
    request: DocumentReferenceApi.SearchDocumentReferencesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Bundle, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/DocumentReference"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "patient", value: request.patient, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
          { name: "_count", value: request.count, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bundleSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace DocumentReferenceApi {
  export type ReadDocumentReferenceRequest = {
    /** The logical id of the resource. */
    id: string;
  };

  export type SearchDocumentReferencesRequest = {
    /** Reference to the subject Patient (e.g. Patient/{id}). */
    patient?: string;
    type?: string;
    /** Number of results per page. */
    count?: number;
  };
}
