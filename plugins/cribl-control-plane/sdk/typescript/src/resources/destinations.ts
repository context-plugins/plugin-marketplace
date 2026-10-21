import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { countedJobInfoSchema, type CountedJobInfo } from "../models/counted-job-info.js";
import {
  countedOutputResponseSchema,
  type CountedOutputResponse,
} from "../models/counted-output-response.js";
import {
  countedOutputSamplesResponseSchema,
  type CountedOutputSamplesResponse,
} from "../models/counted-output-samples-response.js";
import { countedOutputStatusSchema, type CountedOutputStatus } from "../models/counted-output-status.js";
import {
  countedOutputTestResponseSchema,
  type CountedOutputTestResponse,
} from "../models/counted-output-test-response.js";
import { countedStringSchema, type CountedString } from "../models/counted-string.js";
import { destinationTypeSchema, type DestinationType } from "../models/destination-type.js";
import { errorSchema, type Error } from "../models/error.js";
import { outputTestRequestSchema, type OutputTestRequest } from "../models/output-test-request.js";
import {
  paginatedOutputResponseSchema,
  type PaginatedOutputResponse,
} from "../models/paginated-output-response.js";
import {
  paginatedOutputStatusSchema,
  type PaginatedOutputStatus,
} from "../models/paginated-output-status.js";
import { outputSchema, type Output } from "../models/unions/output.js";
import type { Servers } from "../servers.js";

/**
 * Actions related to Destinations
 */
export class Destinations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Destination
   *
   * @remarks
   * Create a new Destination.
   *
   * @returns The created Destination object in a single-item list.
   *
   * @throws {@link Destinations.CreateOutputError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createOutput(
    request: Destinations.CreateOutputRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedOutputResponse, Destinations.CreateOutputError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/system/outputs"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: countedOutputResponseSchema },
        errorFactory: Destinations.CreateOutputError,
      },
      options,
    );
  }

  /**
   * Create a Destination within a Pack
   *
   * @remarks
   * Create a new Destination within the specified Pack.
   *
   * @returns The created Destination object in a single-item list.
   *
   * @throws {@link Destinations.CreateOutputSystemByPackError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createOutputSystemByPack(
    request: Destinations.CreateOutputSystemByPackRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedOutputResponse, Destinations.CreateOutputSystemByPackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/p/{pack}/system/outputs"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "pack", value: request.pack, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: countedOutputResponseSchema },
        errorFactory: Destinations.CreateOutputSystemByPackError,
      },
      options,
    );
  }

  /**
   * Send sample event data to a Destination within a Pack
   *
   * @remarks
   * Send sample event data to the specified Destination to validate the configuration or test
   * connectivity within the specified Pack.
   *
   * @returns Destination test result.
   *
   * @throws {@link Destinations.CreateOutputSystemTestByPackAndIdError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createOutputSystemTestByPackAndId(
    request: Destinations.CreateOutputSystemTestByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedOutputTestResponse, Destinations.CreateOutputSystemTestByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/p/{pack}/system/outputs/{id}/test"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "pack", value: request.pack, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: outputTestRequestSchema },
      },
      {
        success: { kind: "json", schema: countedOutputTestResponseSchema },
        errorFactory: Destinations.CreateOutputSystemTestByPackAndIdError,
      },
      options,
    );
  }

  /**
   * Send sample event data to a Destination
   *
   * @remarks
   * Send sample event data to the specified Destination to validate the configuration or test
   * connectivity.
   *
   * @returns Destination test result.
   *
   * @throws {@link Destinations.CreateOutputTestByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createOutputTestById(
    request: Destinations.CreateOutputTestByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedOutputTestResponse, Destinations.CreateOutputTestByIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/system/outputs/{id}/test"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: outputTestRequestSchema },
      },
      {
        success: { kind: "json", schema: countedOutputTestResponseSchema },
        errorFactory: Destinations.CreateOutputTestByIdError,
      },
      options,
    );
  }

  /**
   * Delete a Destination
   *
   * @remarks
   * Delete the specified Destination.
   *
   * @returns The deleted Destination object in a single-item list.
   *
   * @throws {@link Destinations.DeleteOutputByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteOutputById(
    request: Destinations.DeleteOutputByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedOutputResponse, Destinations.DeleteOutputByIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/system/outputs/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedOutputResponseSchema },
        errorFactory: Destinations.DeleteOutputByIdError,
      },
      options,
    );
  }

  /**
   * Clear the persistent queue for a Destination
   *
   * @remarks
   * Clear the persistent queue (PQ) for the specified Destination.
   *
   * @returns The job ID for the background job that clears the persistent queue.
   *
   * @throws {@link Destinations.DeleteOutputPqByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteOutputPqById(
    request: Destinations.DeleteOutputPqByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedString, Destinations.DeleteOutputPqByIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/system/outputs/{id}/pq"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedStringSchema },
        errorFactory: Destinations.DeleteOutputPqByIdError,
      },
      options,
    );
  }

  /**
   * Delete a Destination within a Pack
   *
   * @remarks
   * Delete the specified Destination within the specified Pack.
   *
   * @returns The deleted Destination object in a single-item list.
   *
   * @throws {@link Destinations.DeleteOutputSystemByPackAndIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteOutputSystemByPackAndId(
    request: Destinations.DeleteOutputSystemByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedOutputResponse, Destinations.DeleteOutputSystemByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/p/{pack}/system/outputs/{id}"),
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
        success: { kind: "json", schema: countedOutputResponseSchema },
        errorFactory: Destinations.DeleteOutputSystemByPackAndIdError,
      },
      options,
    );
  }

  /**
   * Clear the persistent queue for a Destination within a Pack
   *
   * @remarks
   * Clear the persistent queue (PQ) for the specified Destination within the specified Pack.
   *
   * @returns The job ID for the background job that clears the persistent queue.
   *
   * @throws {@link Destinations.DeleteOutputSystemPqByPackAndIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteOutputSystemPqByPackAndId(
    request: Destinations.DeleteOutputSystemPqByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedString, Destinations.DeleteOutputSystemPqByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/p/{pack}/system/outputs/{id}/pq"),
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
        errorFactory: Destinations.DeleteOutputSystemPqByPackAndIdError,
      },
      options,
    );
  }

  /**
   * List all Destinations
   *
   * @remarks
   * Get a list of all Destinations.
   *
   * @returns List of Destination objects.
   *
   * @throws {@link Destinations.GetOutputError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getOutput(
    request: Destinations.GetOutputRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedOutputResponse, Destinations.GetOutputError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/system/outputs"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => destinationTypeSchema)) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedOutputResponseSchema },
        errorFactory: Destinations.GetOutputError,
      },
      options,
    );
  }

  /**
   * Get a Destination
   *
   * @remarks
   * Get the specified Destination.
   *
   * @returns The requested Destination object in a single-item list.
   *
   * @throws {@link Destinations.GetOutputByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getOutputById(
    request: Destinations.GetOutputByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedOutputResponse, Destinations.GetOutputByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/system/outputs/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedOutputResponseSchema },
        errorFactory: Destinations.GetOutputByIdError,
      },
      options,
    );
  }

  /**
   * Get information about the latest job to clear the persistent queue for a Destination
   *
   * @remarks
   * Get information about the latest job to clear the persistent queue (PQ) for the specified
   * Destination.
   *
   * @returns Information about the latest job to clear the PQ for the Destination.
   *
   * @throws {@link Destinations.GetOutputPqByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getOutputPqById(
    request: Destinations.GetOutputPqByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedJobInfo, Destinations.GetOutputPqByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/system/outputs/{id}/pq"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedJobInfoSchema },
        errorFactory: Destinations.GetOutputPqByIdError,
      },
      options,
    );
  }

  /**
   * Get sample event data for a Destination
   *
   * @remarks
   * Get sample event data for the specified Destination to validate the configuration or test
   * connectivity.
   *
   * @returns Sample event data for the Destination.
   *
   * @throws {@link Destinations.GetOutputSamplesByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getOutputSamplesById(
    request: Destinations.GetOutputSamplesByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedOutputSamplesResponse, Destinations.GetOutputSamplesByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/system/outputs/{id}/samples"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedOutputSamplesResponseSchema },
        errorFactory: Destinations.GetOutputSamplesByIdError,
      },
      options,
    );
  }

  /**
   * List the status of all Destinations
   *
   * @remarks
   * List status information and optional metrics for all configured Destinations in the Worker
   * Group or Edge Fleet.
   *
   * @returns List of Destination status objects.
   *
   * @throws {@link Destinations.GetOutputStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getOutputStatus(
    request: Destinations.GetOutputStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedOutputStatus, Destinations.GetOutputStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/system/status/outputs"),
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
        success: { kind: "json", schema: paginatedOutputStatusSchema },
        errorFactory: Destinations.GetOutputStatusError,
      },
      options,
    );
  }

  /**
   * Get the status of a Destination
   *
   * @remarks
   * Get the status and optional metrics for the specified Destination.
   *
   * @returns The requested Destination status object in a single-item list.
   *
   * @throws {@link Destinations.GetOutputStatusByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getOutputStatusById(
    request: Destinations.GetOutputStatusByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedOutputStatus, Destinations.GetOutputStatusByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/system/status/outputs/{id}"),
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
        success: { kind: "json", schema: countedOutputStatusSchema },
        errorFactory: Destinations.GetOutputStatusByIdError,
      },
      options,
    );
  }

  /**
   * List the status of all Destinations within a Pack
   *
   * @remarks
   * List status information and optional metrics for all configured Destinations in the Worker
   * Group or Edge Fleet within the specified Pack.
   *
   * @returns List of Destination status objects.
   *
   * @throws {@link Destinations.GetOutputStatusSystemOutputsByPackError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getOutputStatusSystemOutputsByPack(
    request: Destinations.GetOutputStatusSystemOutputsByPackRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedOutputStatus, Destinations.GetOutputStatusSystemOutputsByPackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/p/{pack}/system/status/outputs"),
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
        success: { kind: "json", schema: paginatedOutputStatusSchema },
        errorFactory: Destinations.GetOutputStatusSystemOutputsByPackError,
      },
      options,
    );
  }

  /**
   * Get the status of a Destination within a Pack
   *
   * @remarks
   * Get the status and optional metrics for the specified Destination within the specified Pack.
   *
   * @returns The requested Destination status object in a single-item list.
   *
   * @throws {@link Destinations.GetOutputStatusSystemOutputsByPackAndIdError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getOutputStatusSystemOutputsByPackAndId(
    request: Destinations.GetOutputStatusSystemOutputsByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedOutputStatus, Destinations.GetOutputStatusSystemOutputsByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/p/{pack}/system/status/outputs/{id}"),
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
        success: { kind: "json", schema: countedOutputStatusSchema },
        errorFactory: Destinations.GetOutputStatusSystemOutputsByPackAndIdError,
      },
      options,
    );
  }

  /**
   * List all Destinations within a Pack
   *
   * @remarks
   * Get a list of all Destinations within the specified Pack.
   *
   * @returns List of Destination objects.
   *
   * @throws {@link Destinations.GetOutputSystemByPackError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getOutputSystemByPack(
    request: Destinations.GetOutputSystemByPackRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedOutputResponse, Destinations.GetOutputSystemByPackError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/p/{pack}/system/outputs"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "pack", value: request.pack, schema: s.string() }],
        query: [
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => destinationTypeSchema)) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedOutputResponseSchema },
        errorFactory: Destinations.GetOutputSystemByPackError,
      },
      options,
    );
  }

  /**
   * Get a Destination within a Pack
   *
   * @remarks
   * Get the specified Destination within the specified Pack.
   *
   * @returns The requested Destination object in a single-item list.
   *
   * @throws {@link Destinations.GetOutputSystemByPackAndIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getOutputSystemByPackAndId(
    request: Destinations.GetOutputSystemByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedOutputResponse, Destinations.GetOutputSystemByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/p/{pack}/system/outputs/{id}"),
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
        success: { kind: "json", schema: countedOutputResponseSchema },
        errorFactory: Destinations.GetOutputSystemByPackAndIdError,
      },
      options,
    );
  }

  /**
   * Get information about the latest job to clear the persistent queue for a Destination within a
   * Pack
   *
   * @remarks
   * Get information about the latest job to clear the persistent queue (PQ) for the specified
   * Destination within the specified Pack.
   *
   * @returns Information about the latest job to clear the PQ for the Destination.
   *
   * @throws {@link Destinations.GetOutputSystemPqByPackAndIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getOutputSystemPqByPackAndId(
    request: Destinations.GetOutputSystemPqByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedJobInfo, Destinations.GetOutputSystemPqByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/p/{pack}/system/outputs/{id}/pq"),
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
        errorFactory: Destinations.GetOutputSystemPqByPackAndIdError,
      },
      options,
    );
  }

  /**
   * Get sample event data for a Destination within a Pack
   *
   * @remarks
   * Get sample event data for the specified Destination to validate the configuration or test
   * connectivity within the specified Pack.
   *
   * @returns Sample event data for the Destination.
   *
   * @throws {@link Destinations.GetOutputSystemSamplesByPackAndIdError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getOutputSystemSamplesByPackAndId(
    request: Destinations.GetOutputSystemSamplesByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedOutputSamplesResponse, Destinations.GetOutputSystemSamplesByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/p/{pack}/system/outputs/{id}/samples"),
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
        success: { kind: "json", schema: countedOutputSamplesResponseSchema },
        errorFactory: Destinations.GetOutputSystemSamplesByPackAndIdError,
      },
      options,
    );
  }

  /**
   * Update a Destination
   *
   * @remarks
   * Update the specified Destination.<br/><br/>Provide a complete representation of the Destination
   * that you want to update in the request body. This endpoint does not support partial updates.
   * Cribl removes any omitted fields when updating the Destination.<br/><br/>Confirm that the
   * configuration in your request body is correct before sending the request. If the configuration
   * is incorrect, the updated Destination might not function as expected.
   *
   * @returns The updated Destination object in a single-item list.
   *
   * @throws {@link Destinations.UpdateOutputByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateOutputById(
    request: Destinations.UpdateOutputByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedOutputResponse, Destinations.UpdateOutputByIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/system/outputs/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: outputSchema },
      },
      {
        success: { kind: "json", schema: countedOutputResponseSchema },
        errorFactory: Destinations.UpdateOutputByIdError,
      },
      options,
    );
  }

  /**
   * Update a Destination within a Pack
   *
   * @remarks
   * Update the specified Destination.<br/><br/>Provide a complete representation of the Destination
   * that you want to update in the request body. This endpoint does not support partial updates.
   * Cribl removes any omitted fields when updating the Destination.<br/><br/>Confirm that the
   * configuration in your request body is correct before sending the request. If the configuration
   * is incorrect, the updated Destination might not function as expected within the specified Pack.
   *
   * @returns The updated Destination object in a single-item list.
   *
   * @throws {@link Destinations.UpdateOutputSystemByPackAndIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateOutputSystemByPackAndId(
    request: Destinations.UpdateOutputSystemByPackAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedOutputResponse, Destinations.UpdateOutputSystemByPackAndIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/p/{pack}/system/outputs/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "pack", value: request.pack, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: outputSchema },
      },
      {
        success: { kind: "json", schema: countedOutputResponseSchema },
        errorFactory: Destinations.UpdateOutputSystemByPackAndIdError,
      },
      options,
    );
  }
}

export namespace Destinations {
  export type CreateOutputRequest = {
    /** Output object. */
    body: Record<string, unknown>;
  };

  export class CreateOutputError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error409", undefined>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateOutputError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type CreateOutputSystemByPackRequest = {
    /** The <code>id</code> of the Pack. */
    pack: string;
    /** Output object. */
    body: Record<string, unknown>;
  };

  export class CreateOutputSystemByPackError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error409", undefined>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateOutputSystemByPackError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type CreateOutputSystemTestByPackAndIdRequest = {
    /** The <code>id</code> of the Destination to send sample event data to. */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
    /** OutputTestRequest object. */
    body: OutputTestRequest;
  };

  export class CreateOutputSystemTestByPackAndIdError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateOutputSystemTestByPackAndIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateOutputTestByIdRequest = {
    /** The <code>id</code> of the Destination to send sample event data to. */
    id: string;
    /** OutputTestRequest object. */
    body: OutputTestRequest;
  };

  export class CreateOutputTestByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateOutputTestByIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteOutputByIdRequest = {
    /** The <code>id</code> of the Destination to delete. */
    id: string;
  };

  export class DeleteOutputByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error409", undefined>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteOutputByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type DeleteOutputPqByIdRequest = {
    /** The <code>id</code> of the Destination to clear the PQ for. */
    id: string;
  };

  export class DeleteOutputPqByIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteOutputPqByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteOutputSystemByPackAndIdRequest = {
    /** The <code>id</code> of the Destination to delete. */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
  };

  export class DeleteOutputSystemByPackAndIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error409", undefined>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteOutputSystemByPackAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type DeleteOutputSystemPqByPackAndIdRequest = {
    /** The <code>id</code> of the Destination to clear the PQ for. */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
  };

  export class DeleteOutputSystemPqByPackAndIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteOutputSystemPqByPackAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOutputRequest = {
    /**
     * Type of Destination to include in the results. Each request can include only one
     * <code>type</code> parameter; multiple parameters per request are not supported.
     */
    type?: DestinationType;
    /** Pagination offset */
    offset?: number;
    /** Maximum number of items to return */
    limit?: number;
  };

  export class GetOutputError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetOutputError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOutputByIdRequest = {
    /** The <code>id</code> of the Destination to get. */
    id: string;
  };

  export class GetOutputByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOutputByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOutputPqByIdRequest = {
    /** The <code>id</code> of the Destination to get PQ job information for. */
    id: string;
  };

  export class GetOutputPqByIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetOutputPqByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOutputSamplesByIdRequest = {
    /** The <code>id</code> of the Destination to get sample event data for. */
    id: string;
  };

  export class GetOutputSamplesByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOutputSamplesByIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOutputStatusRequest = {
    /**
     * Set to <code>true</code> to include metrics for each Destination. Otherwise,
     * <code>false</code> (default).
     */
    metrics?: boolean;
    /**
     * Set to <code>true</code> to prefix the Destination <code>id</code> with the Destination type.
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

  export class GetOutputStatusError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOutputStatusError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOutputStatusByIdRequest = {
    /** The <code>id</code> of the Destination to get the status for. */
    id: string;
    /**
     * Set to <code>true</code> to include metrics for each Destination. Otherwise,
     * <code>false</code> (default).
     */
    metrics?: boolean;
    /**
     * Set to <code>true</code> to prefix the Destination <code>id</code> with the Destination type.
     * Otherwise, <code>false</code> (default).
     */
    type?: boolean;
  };

  export class GetOutputStatusByIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetOutputStatusByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOutputStatusSystemOutputsByPackRequest = {
    /** The <code>id</code> of the Pack. */
    pack: string;
    /**
     * Set to <code>true</code> to include metrics for each Destination. Otherwise,
     * <code>false</code> (default).
     */
    metrics?: boolean;
    /**
     * Set to <code>true</code> to prefix the Destination <code>id</code> with the Destination type.
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

  export class GetOutputStatusSystemOutputsByPackError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOutputStatusSystemOutputsByPackError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOutputStatusSystemOutputsByPackAndIdRequest = {
    /** The <code>id</code> of the Destination to get the status for. */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
    /**
     * Set to <code>true</code> to include metrics for each Destination. Otherwise,
     * <code>false</code> (default).
     */
    metrics?: boolean;
    /**
     * Set to <code>true</code> to prefix the Destination <code>id</code> with the Destination type.
     * Otherwise, <code>false</code> (default).
     */
    type?: boolean;
  };

  export class GetOutputStatusSystemOutputsByPackAndIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetOutputStatusSystemOutputsByPackAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOutputSystemByPackRequest = {
    /** The <code>id</code> of the Pack. */
    pack: string;
    /**
     * Type of Destination to include in the results. Each request can include only one
     * <code>type</code> parameter; multiple parameters per request are not supported.
     */
    type?: DestinationType;
    /** Pagination offset */
    offset?: number;
    /** Maximum number of items to return */
    limit?: number;
  };

  export class GetOutputSystemByPackError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetOutputSystemByPackError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOutputSystemByPackAndIdRequest = {
    /** The <code>id</code> of the Destination to get. */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
  };

  export class GetOutputSystemByPackAndIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOutputSystemByPackAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOutputSystemPqByPackAndIdRequest = {
    /** The <code>id</code> of the Destination to get PQ job information for. */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
  };

  export class GetOutputSystemPqByPackAndIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetOutputSystemPqByPackAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetOutputSystemSamplesByPackAndIdRequest = {
    /** The <code>id</code> of the Destination to get sample event data for. */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
  };

  export class GetOutputSystemSamplesByPackAndIdError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOutputSystemSamplesByPackAndIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateOutputByIdRequest = {
    /** The <code>id</code> of the Destination to update. */
    id: string;
    /** Output object. */
    body: Output;
  };

  export class UpdateOutputByIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateOutputByIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type UpdateOutputSystemByPackAndIdRequest = {
    /** The <code>id</code> of the Destination to update. */
    id: string;
    /** The <code>id</code> of the Pack. */
    pack: string;
    /** Output object. */
    body: Output;
  };

  export class UpdateOutputSystemByPackAndIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error423", undefined>
      | Declared<"error2", Error>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateOutputSystemByPackAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 423, kind: "error423", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
