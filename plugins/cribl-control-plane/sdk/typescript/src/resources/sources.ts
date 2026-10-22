import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { addHecTokenRequestSchema, type AddHecTokenRequest } from "../models/add-hec-token-request.js";
import { countedInputResponseSchema, type CountedInputResponse } from "../models/counted-input-response.js";
import {
  countedInputSplunkHecSchema,
  type CountedInputSplunkHec,
} from "../models/counted-input-splunk-hec.js";
import { countedInputStatusSchema, type CountedInputStatus } from "../models/counted-input-status.js";
import { countedJobInfoSchema, type CountedJobInfo } from "../models/counted-job-info.js";
import { countedStringSchema, type CountedString } from "../models/counted-string.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  paginatedInputResponseSchema,
  type PaginatedInputResponse,
} from "../models/paginated-input-response.js";
import { paginatedInputStatusSchema, type PaginatedInputStatus } from "../models/paginated-input-status.js";
import { inputSchema, type Input } from "../models/unions/input.js";
import {
  updateHecTokenRequestSchema,
  type UpdateHecTokenRequest,
} from "../models/update-hec-token-request.js";
import type { Servers } from "../servers.js";

/**
 * Actions related to Sources
 */
export class Sources {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Source
   *
   * @remarks
   * Create a new Source. The system-managed provenance field (JSON
   * <code>criblSourceProvenance</code>) must be omitted from the request body.
   *
   * @returns The created Source object in a single-item list.
   *
   * @throws {@link Sources.CreateInputError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createInput(
    request: Sources.CreateInputRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedInputResponse, Sources.CreateInputError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/system/inputs"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: countedInputResponseSchema },
        errorFactory: Sources.CreateInputError,
      },
      options,
    );
  }

  /**
   * Add an HEC token and optional metadata to a Splunk HEC Source
   *
   * @remarks
   * Add an HEC token and optional metadata to the specified Splunk HEC Source.
   *
   * @returns The updated Splunk HEC Source with the new HEC token.
   *
   * @throws {@link Sources.CreateInputHecTokenByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createInputHecTokenById(
    request: Sources.CreateInputHecTokenByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedInputSplunkHec, Sources.CreateInputHecTokenByIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/system/inputs/{id}/hectoken"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: addHecTokenRequestSchema },
      },
      {
        success: { kind: "json", schema: countedInputSplunkHecSchema },
        errorFactory: Sources.CreateInputHecTokenByIdError,
      },
      options,
    );
  }

  /**
   * Create a Source within a Pack
   *
   * @remarks
   * Create a new Source. The system-managed provenance field (JSON
   * <code>criblSourceProvenance</code>) must be omitted from the request body within the specified
   * Pack.
   *
   * @returns The created Source object in a single-item list.
   *
   * @throws {@link Sources.CreateInputSystemByPackError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createInputSystemByPack(
    request: Sources.CreateInputSystemByPackRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedInputResponse, Sources.CreateInputSystemByPackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/p/{pack}/system/inputs"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "pack", value: request.pack, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: countedInputResponseSchema },
        errorFactory: Sources.CreateInputSystemByPackError,
      },
      options,
    );
  }

  /**
   * Add an HEC token and optional metadata to a Splunk HEC Source within a Pack
   *
   * @remarks
   * Add an HEC token and optional metadata to the specified Splunk HEC Source within the specified
   * Pack.
   *
   * @returns The updated Splunk HEC Source with the new HEC token.
   *
   * @throws {@link Sources.CreateInputSystemHecTokenByPackAndIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createInputSystemHecTokenByPackAndId(
    request: Sources.CreateInputSystemHecTokenByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedInputSplunkHec, Sources.CreateInputSystemHecTokenByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/p/{pack}/system/inputs/{id}/hectoken"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "pack", value: request.pack, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: addHecTokenRequestSchema },
      },
      {
        success: { kind: "json", schema: countedInputSplunkHecSchema },
        errorFactory: Sources.CreateInputSystemHecTokenByPackAndIdError,
      },
      options,
    );
  }

  /**
   * Delete a Source
   *
   * @remarks
   * Delete the specified Source.
   *
   * @returns The deleted Source object in a single-item list.
   *
   * @throws {@link Sources.DeleteInputByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteInputById(
    request: Sources.DeleteInputByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedInputResponse, Sources.DeleteInputByIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/system/inputs/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedInputResponseSchema },
        errorFactory: Sources.DeleteInputByIdError,
      },
      options,
    );
  }

  /**
   * Clear the persistent queue for a Source
   *
   * @remarks
   * Clear the persistent queue (PQ) for the specified Source.
   *
   * @returns A list of job ids for the background job that clears the persistent queue
   *
   * @throws {@link Sources.DeleteInputPqByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteInputPqById(
    request: Sources.DeleteInputPqByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedString, Sources.DeleteInputPqByIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/system/inputs/{id}/pq"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedStringSchema },
        errorFactory: Sources.DeleteInputPqByIdError,
      },
      options,
    );
  }

  /**
   * Delete a Source within a Pack
   *
   * @remarks
   * Delete the specified Source within the specified Pack.
   *
   * @returns The deleted Source object in a single-item list.
   *
   * @throws {@link Sources.DeleteInputSystemByPackAndIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteInputSystemByPackAndId(
    request: Sources.DeleteInputSystemByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedInputResponse, Sources.DeleteInputSystemByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/p/{pack}/system/inputs/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "pack", value: request.pack, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedInputResponseSchema },
        errorFactory: Sources.DeleteInputSystemByPackAndIdError,
      },
      options,
    );
  }

  /**
   * Clear the persistent queue for a Source within a Pack
   *
   * @remarks
   * Clear the persistent queue (PQ) for the specified Source within the specified Pack.
   *
   * @returns A list of job ids for the background job that clears the persistent queue
   *
   * @throws {@link Sources.DeleteInputSystemPqByPackAndIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteInputSystemPqByPackAndId(
    request: Sources.DeleteInputSystemPqByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedString, Sources.DeleteInputSystemPqByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/p/{pack}/system/inputs/{id}/pq"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "pack", value: request.pack, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedStringSchema },
        errorFactory: Sources.DeleteInputSystemPqByPackAndIdError,
      },
      options,
    );
  }

  /**
   * List all Sources
   *
   * @remarks
   * Get a list of all Sources.
   *
   * @returns List of Source objects.
   *
   * @throws {@link Sources.GetInputError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getInput(
    request: Sources.GetInputRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedInputResponse, Sources.GetInputError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/system/inputs"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: s.optional(s.array(s.string())) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedInputResponseSchema },
        errorFactory: Sources.GetInputError,
      },
      options,
    );
  }

  /**
   * Get a Source
   *
   * @remarks
   * Get the specified Source.
   *
   * @returns The requested Source object in a single-item list.
   *
   * @throws {@link Sources.GetInputByIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getInputById(
    request: Sources.GetInputByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedInputResponse, Sources.GetInputByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/system/inputs/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedInputResponseSchema },
        errorFactory: Sources.GetInputByIdError,
      },
      options,
    );
  }

  /**
   * Get information about the latest job to clear the persistent queue for a Source
   *
   * @remarks
   * Get information about the latest job to clear the persistent queue (PQ) for the specified
   * Source.
   *
   * @returns The latest clear-PQ job information for the specified Source.
   *
   * @throws {@link Sources.GetInputPqByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getInputPqById(
    request: Sources.GetInputPqByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedJobInfo, Sources.GetInputPqByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/system/inputs/{id}/pq"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedJobInfoSchema },
        errorFactory: Sources.GetInputPqByIdError,
      },
      options,
    );
  }

  /**
   * List the status of all Sources
   *
   * @remarks
   * List status information and optional metrics for all configured Sources in the Worker Group or
   * Edge Fleet.
   *
   * @returns List of Source status objects.
   *
   * @throws {@link Sources.GetInputStatusError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getInputStatus(
    request: Sources.GetInputStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedInputStatus, Sources.GetInputStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/system/status/inputs"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [
          { name: "metrics", value: request.metrics, schema: s.optional(s.boolean()) },
          { name: "type", value: request.type, schema: s.optional(s.boolean()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedInputStatusSchema },
        errorFactory: Sources.GetInputStatusError,
      },
      options,
    );
  }

  /**
   * Get the status of a Source
   *
   * @remarks
   * Get the status and optional metrics for the specified Source.
   *
   * @returns The requested Source status object in a single-item list.
   *
   * @throws {@link Sources.GetInputStatusByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getInputStatusById(
    request: Sources.GetInputStatusByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedInputStatus, Sources.GetInputStatusByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/system/status/inputs/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "metrics", value: request.metrics, schema: s.optional(s.boolean()) },
          { name: "type", value: request.type, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedInputStatusSchema },
        errorFactory: Sources.GetInputStatusByIdError,
      },
      options,
    );
  }

  /**
   * List the status of all Sources within a Pack
   *
   * @remarks
   * List status information and optional metrics for all configured Sources in the Worker Group or
   * Edge Fleet within the specified Pack.
   *
   * @returns List of Source status objects.
   *
   * @throws {@link Sources.GetInputStatusSystemInputsByPackError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getInputStatusSystemInputsByPack(
    request: Sources.GetInputStatusSystemInputsByPackRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedInputStatus, Sources.GetInputStatusSystemInputsByPackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/p/{pack}/system/status/inputs"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "pack", value: request.pack, schema: s.string() }],
        query: [
          { name: "metrics", value: request.metrics, schema: s.optional(s.boolean()) },
          { name: "type", value: request.type, schema: s.optional(s.boolean()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedInputStatusSchema },
        errorFactory: Sources.GetInputStatusSystemInputsByPackError,
      },
      options,
    );
  }

  /**
   * Get the status of a Source within a Pack
   *
   * @remarks
   * Get the status and optional metrics for the specified Source within the specified Pack.
   *
   * @returns The requested Source status object in a single-item list.
   *
   * @throws {@link Sources.GetInputStatusSystemInputsByPackAndIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getInputStatusSystemInputsByPackAndId(
    request: Sources.GetInputStatusSystemInputsByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedInputStatus, Sources.GetInputStatusSystemInputsByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/p/{pack}/system/status/inputs/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "pack", value: request.pack, schema: s.string() },
        ],
        query: [
          { name: "metrics", value: request.metrics, schema: s.optional(s.boolean()) },
          { name: "type", value: request.type, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedInputStatusSchema },
        errorFactory: Sources.GetInputStatusSystemInputsByPackAndIdError,
      },
      options,
    );
  }

  /**
   * List all Sources within a Pack
   *
   * @remarks
   * Get a list of all Sources within the specified Pack.
   *
   * @returns List of Source objects.
   *
   * @throws {@link Sources.GetInputSystemByPackError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getInputSystemByPack(
    request: Sources.GetInputSystemByPackRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedInputResponse, Sources.GetInputSystemByPackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/p/{pack}/system/inputs"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "pack", value: request.pack, schema: s.string() }],
        query: [
          { name: "type", value: request.type, schema: s.optional(s.array(s.string())) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedInputResponseSchema },
        errorFactory: Sources.GetInputSystemByPackError,
      },
      options,
    );
  }

  /**
   * Get a Source within a Pack
   *
   * @remarks
   * Get the specified Source within the specified Pack.
   *
   * @returns The requested Source object in a single-item list.
   *
   * @throws {@link Sources.GetInputSystemByPackAndIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getInputSystemByPackAndId(
    request: Sources.GetInputSystemByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedInputResponse, Sources.GetInputSystemByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/p/{pack}/system/inputs/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "pack", value: request.pack, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedInputResponseSchema },
        errorFactory: Sources.GetInputSystemByPackAndIdError,
      },
      options,
    );
  }

  /**
   * Get information about the latest job to clear the persistent queue for a Source within a Pack
   *
   * @remarks
   * Get information about the latest job to clear the persistent queue (PQ) for the specified
   * Source within the specified Pack.
   *
   * @returns The latest clear-PQ job information for the specified Source.
   *
   * @throws {@link Sources.GetInputSystemPqByPackAndIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getInputSystemPqByPackAndId(
    request: Sources.GetInputSystemPqByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedJobInfo, Sources.GetInputSystemPqByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/p/{pack}/system/inputs/{id}/pq"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "pack", value: request.pack, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedJobInfoSchema },
        errorFactory: Sources.GetInputSystemPqByPackAndIdError,
      },
      options,
    );
  }

  /**
   * Update a Source
   *
   * @remarks
   * Update the specified Source.<br/><br/>Provide a complete representation of the Source that you
   * want to update in the request body. This endpoint does not support partial updates. Cribl
   * removes any omitted fields when updating the Source.<br/><br/>Confirm that the configuration in
   * your request body is correct before sending the request. If the configuration is incorrect, the
   * updated Source might not function as expected.<br/><br/>Cribl preserves
   * <code>criblSourceProvenance</code> when you omit it from the request body, and you cannot
   * overwrite it through this endpoint.
   *
   * @returns The updated Source object in a single-item list.
   *
   * @throws {@link Sources.UpdateInputByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateInputById(
    request: Sources.UpdateInputByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedInputResponse, Sources.UpdateInputByIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/system/inputs/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: inputSchema },
      },
      {
        success: { kind: "json", schema: countedInputResponseSchema },
        errorFactory: Sources.UpdateInputByIdError,
      },
      options,
    );
  }

  /**
   * Update metadata for an HEC token for a Splunk HEC Source
   *
   * @remarks
   * Update the metadata for the specified HEC token for the specified Splunk HEC Source.
   *
   * @returns The updated Splunk HEC Source with the modified HEC token metadata.
   *
   * @throws {@link Sources.UpdateInputHecTokenByIdAndTokenError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateInputHecTokenByIdAndToken(
    request: Sources.UpdateInputHecTokenByIdAndTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedInputSplunkHec, Sources.UpdateInputHecTokenByIdAndTokenError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/system/inputs/{id}/hectoken/{token}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "token", value: request.token, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateHecTokenRequestSchema },
      },
      {
        success: { kind: "json", schema: countedInputSplunkHecSchema },
        errorFactory: Sources.UpdateInputHecTokenByIdAndTokenError,
      },
      options,
    );
  }

  /**
   * Update a Source within a Pack
   *
   * @remarks
   * Update the specified Source.<br/><br/>Provide a complete representation of the Source that you
   * want to update in the request body. This endpoint does not support partial updates. Cribl
   * removes any omitted fields when updating the Source.<br/><br/>Confirm that the configuration in
   * your request body is correct before sending the request. If the configuration is incorrect, the
   * updated Source might not function as expected.<br/><br/>Cribl preserves
   * <code>criblSourceProvenance</code> when you omit it from the request body, and you cannot
   * overwrite it through this endpoint within the specified Pack.
   *
   * @returns The updated Source object in a single-item list.
   *
   * @throws {@link Sources.UpdateInputSystemByPackAndIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateInputSystemByPackAndId(
    request: Sources.UpdateInputSystemByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedInputResponse, Sources.UpdateInputSystemByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/p/{pack}/system/inputs/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "pack", value: request.pack, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: inputSchema },
      },
      {
        success: { kind: "json", schema: countedInputResponseSchema },
        errorFactory: Sources.UpdateInputSystemByPackAndIdError,
      },
      options,
    );
  }

  /**
   * Update metadata for an HEC token for a Splunk HEC Source within a Pack
   *
   * @remarks
   * Update the metadata for the specified HEC token for the specified Splunk HEC Source within the
   * specified Pack.
   *
   * @returns The updated Splunk HEC Source with the modified HEC token metadata.
   *
   * @throws {@link Sources.UpdateInputSystemHecTokenByPackAndIdAndTokenError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateInputSystemHecTokenByPackAndIdAndToken(
    request: Sources.UpdateInputSystemHecTokenByPackAndIdAndTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedInputSplunkHec, Sources.UpdateInputSystemHecTokenByPackAndIdAndTokenError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/p/{pack}/system/inputs/{id}/hectoken/{token}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "token", value: request.token, schema: s.string() },
          { name: "pack", value: request.pack, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateHecTokenRequestSchema },
      },
      {
        success: { kind: "json", schema: countedInputSplunkHecSchema },
        errorFactory: Sources.UpdateInputSystemHecTokenByPackAndIdAndTokenError,
      },
      options,
    );
  }
}

export namespace Sources {
  export type CreateInputRequest = {
    /** Input object. */
    body: Record<string, unknown>;
  };

  export class CreateInputError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error409", undefined>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateInputError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type CreateInputHecTokenByIdRequest = {
    /** The <code>id</code> of the Splunk HEC Source. */
    id: string;
    /** AddHecTokenRequest object. */
    body: AddHecTokenRequest;
  };

  export class CreateInputHecTokenByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateInputHecTokenByIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type CreateInputSystemByPackRequest = {
    /** The <code>id</code> of the Pack. */
    pack: string;
    /** Input object. */
    body: Record<string, unknown>;
  };

  export class CreateInputSystemByPackError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error409", undefined>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateInputSystemByPackError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type CreateInputSystemHecTokenByPackAndIdRequest = {
    /** The <code>id</code> of the Splunk HEC Source. */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
    /** AddHecTokenRequest object. */
    body: AddHecTokenRequest;
  };

  export class CreateInputSystemHecTokenByPackAndIdError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateInputSystemHecTokenByPackAndIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type DeleteInputByIdRequest = {
    /** The <code>id</code> of the Source to delete. */
    id: string;
  };

  export class DeleteInputByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteInputByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type DeleteInputPqByIdRequest = {
    /** The <code>id</code> of the Source to clear the PQ for. */
    id: string;
  };

  export class DeleteInputPqByIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteInputPqByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteInputSystemByPackAndIdRequest = {
    /** The <code>id</code> of the Source to delete. */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
  };

  export class DeleteInputSystemByPackAndIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteInputSystemByPackAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type DeleteInputSystemPqByPackAndIdRequest = {
    /** The <code>id</code> of the Source to clear the PQ for. */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
  };

  export class DeleteInputSystemPqByPackAndIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteInputSystemPqByPackAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetInputRequest = {
    /**
     * Type of Source to include in the results. Each request can include only one <code>type</code>
     * parameter; multiple parameters per request are not supported.
     */
    type?: string[];
    /** Pagination offset */
    offset?: number;
    /** Maximum number of items to return */
    limit?: number;
  };

  export class GetInputError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetInputError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetInputByIdRequest = {
    /** The <code>id</code> of the Source to get. */
    id: string;
  };

  export class GetInputByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInputByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetInputPqByIdRequest = {
    /** The <code>id</code> of the Source to get PQ job information for. */
    id: string;
  };

  export class GetInputPqByIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetInputPqByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetInputStatusRequest = {
    /**
     * Set to <code>true</code> to include metrics for each Source. Otherwise, <code>false</code>
     * (default).
     */
    metrics?: boolean;
    /**
     * Set to <code>true</code> to prefix the Source <code>id</code> with the Source type.
     * Otherwise, <code>false</code> (default).
     */
    type?: boolean;
    /**
     * Starting point from which to retrieve results for this request. Use with <code>limit</code>
     * to paginate the response into manageable batches.
     */
    offset?: number;
    /**
     * Maximum number of items to return in the response for this request. Use with
     * <code>offset</code> to paginate the response into manageable batches.
     */
    limit?: number;
  };

  export class GetInputStatusError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInputStatusError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetInputStatusByIdRequest = {
    /** The <code>id</code> of the Source to get the status for. */
    id: string;
    /**
     * Set to <code>true</code> to include metrics for each Source. Otherwise, <code>false</code>
     * (default).
     */
    metrics?: boolean;
    /**
     * Set to <code>true</code> to prefix the Source <code>id</code> with the Source type.
     * Otherwise, <code>false</code> (default).
     */
    type?: boolean;
  };

  export class GetInputStatusByIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetInputStatusByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetInputStatusSystemInputsByPackRequest = {
    /** The <code>id</code> of the Pack. */
    pack: string;
    /**
     * Set to <code>true</code> to include metrics for each Source. Otherwise, <code>false</code>
     * (default).
     */
    metrics?: boolean;
    /**
     * Set to <code>true</code> to prefix the Source <code>id</code> with the Source type.
     * Otherwise, <code>false</code> (default).
     */
    type?: boolean;
    /**
     * Starting point from which to retrieve results for this request. Use with <code>limit</code>
     * to paginate the response into manageable batches.
     */
    offset?: number;
    /**
     * Maximum number of items to return in the response for this request. Use with
     * <code>offset</code> to paginate the response into manageable batches.
     */
    limit?: number;
  };

  export class GetInputStatusSystemInputsByPackError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInputStatusSystemInputsByPackError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetInputStatusSystemInputsByPackAndIdRequest = {
    /** The <code>id</code> of the Source to get the status for. */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
    /**
     * Set to <code>true</code> to include metrics for each Source. Otherwise, <code>false</code>
     * (default).
     */
    metrics?: boolean;
    /**
     * Set to <code>true</code> to prefix the Source <code>id</code> with the Source type.
     * Otherwise, <code>false</code> (default).
     */
    type?: boolean;
  };

  export class GetInputStatusSystemInputsByPackAndIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetInputStatusSystemInputsByPackAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetInputSystemByPackRequest = {
    /** The <code>id</code> of the Pack. */
    pack: string;
    /**
     * Type of Source to include in the results. Each request can include only one <code>type</code>
     * parameter; multiple parameters per request are not supported.
     */
    type?: string[];
    /** Pagination offset */
    offset?: number;
    /** Maximum number of items to return */
    limit?: number;
  };

  export class GetInputSystemByPackError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetInputSystemByPackError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetInputSystemByPackAndIdRequest = {
    /** The <code>id</code> of the Source to get. */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
  };

  export class GetInputSystemByPackAndIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInputSystemByPackAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetInputSystemPqByPackAndIdRequest = {
    /** The <code>id</code> of the Source to get PQ job information for. */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
  };

  export class GetInputSystemPqByPackAndIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetInputSystemPqByPackAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateInputByIdRequest = {
    /** The <code>id</code> of the Source to update. */
    id: string;
    /** Input object. */
    body: Input;
  };

  export class UpdateInputByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateInputByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type UpdateInputHecTokenByIdAndTokenRequest = {
    /** The <code>id</code> of the Splunk HEC Source. */
    id: string;
    /**
     * The HEC token value whose metadata you want to update. Must match an existing token on the
     * Source.
     */
    token: string;
    /** UpdateHecTokenRequest object. */
    body: UpdateHecTokenRequest;
  };

  export class UpdateInputHecTokenByIdAndTokenError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateInputHecTokenByIdAndTokenError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type UpdateInputSystemByPackAndIdRequest = {
    /** The <code>id</code> of the Source to update. */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
    /** Input object. */
    body: Input;
  };

  export class UpdateInputSystemByPackAndIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateInputSystemByPackAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type UpdateInputSystemHecTokenByPackAndIdAndTokenRequest = {
    /** The <code>id</code> of the Splunk HEC Source. */
    id: string;
    /**
     * The HEC token value whose metadata you want to update. Must match an existing token on the
     * Source.
     */
    token: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
    /** UpdateHecTokenRequest object. */
    body: UpdateHecTokenRequest;
  };

  export class UpdateInputSystemHecTokenByPackAndIdAndTokenError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateInputSystemHecTokenByPackAndIdAndTokenError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
