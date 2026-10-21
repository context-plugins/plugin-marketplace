import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { addSamplesResponseSchema, type AddSamplesResponse } from "../models/add-samples-response.js";
import { createDatasetRequestSchema, type CreateDatasetRequest } from "../models/create-dataset-request.js";
import { datasetInfoSchema, type DatasetInfo } from "../models/dataset-info.js";
import {
  deleteSamplesResponseSchema,
  type DeleteSamplesResponse,
} from "../models/delete-samples-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { listDatasetsResponseSchema, type ListDatasetsResponse } from "../models/list-datasets-response.js";
import { listSamplesResponseSchema, type ListSamplesResponse } from "../models/list-samples-response.js";
import { listSplitsResponseSchema, type ListSplitsResponse } from "../models/list-splits-response.js";
import { listVersionsResponseSchema, type ListVersionsResponse } from "../models/list-versions-response.js";
import { splitInfoSchema, type SplitInfo } from "../models/split-info.js";
import { cursor2Schema, type Cursor2 } from "../models/unions/cursor2.js";
import { direction1Schema, type Direction1 } from "../models/unions/direction1.js";
import { limit3Schema, type Limit3 } from "../models/unions/limit3.js";
import { namesearchSchema, type Namesearch } from "../models/unions/namesearch.js";
import { sampleidSchema, type Sampleid } from "../models/unions/sampleid.js";
import { versionidSchema, type Versionid } from "../models/unions/versionid.js";
import { xFriendliTeamSchema, type XFriendliTeam } from "../models/unions/xfriendli-team.js";
import { versionInfoSchema, type VersionInfo } from "../models/version-info.js";
import type { Servers } from "../servers.js";

export class Dataset {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add samples
   *
   * @remarks
   * Add samples to the split.
   *
   * @returns OK
   *
   * @throws {@link Dataset.AddSamplesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  addSamples(
    request: Dataset.AddSamplesRequest,
    options?: RequestOptions,
  ): ApiPromise<AddSamplesResponse, Dataset.AddSamplesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beta/dataset/{dataset_id}/split/{split_id}/sample"),
        auth: this.#auth.token,
        pathParams: [
          { name: "dataset_id", value: request.datasetId, schema: s.string() },
          { name: "split_id", value: request.splitId, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.array(s.string()) },
      },
      {
        success: { kind: "json", schema: addSamplesResponseSchema },
        errorFactory: Dataset.AddSamplesError,
      },
      options,
    );
  }

  /**
   * Create a new dataset
   *
   * @remarks
   * Create a new dataset.
   *
   * @returns OK
   *
   * @throws {@link Dataset.CreateDatasetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  createDataset(
    request: Dataset.CreateDatasetRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DatasetInfo, Dataset.CreateDatasetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beta/dataset"),
        auth: this.#auth.token,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createDatasetRequestSchema },
      },
      {
        success: { kind: "json", schema: datasetInfoSchema },
        errorFactory: Dataset.CreateDatasetError,
      },
      options,
    );
  }

  /**
   * Create a split
   *
   * @remarks
   * Create a new split in the dataset.
   *
   * @returns OK
   *
   * @throws {@link Dataset.CreateSplitError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  createSplit(
    request: Dataset.CreateSplitRequest,
    options?: RequestOptions,
  ): ApiPromise<SplitInfo, Dataset.CreateSplitError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beta/dataset/{dataset_id}/split"),
        auth: this.#auth.token,
        pathParams: [{ name: "dataset_id", value: request.datasetId, schema: s.string() }],
        query: [{ name: "name", value: request.name, schema: s.string() }],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: splitInfoSchema },
        errorFactory: Dataset.CreateSplitError,
      },
      options,
    );
  }

  /**
   * Create a version
   *
   * @remarks
   * Create a version for the current state of the split.
   *
   * @returns OK
   *
   * @throws {@link Dataset.CreateVersionError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  createVersion(
    request: Dataset.CreateVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<VersionInfo, Dataset.CreateVersionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beta/dataset/{dataset_id}/version"),
        auth: this.#auth.token,
        pathParams: [{ name: "dataset_id", value: request.datasetId, schema: s.string() }],
        query: [{ name: "comment", value: request.comment, schema: s.string() }],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: versionInfoSchema },
        errorFactory: Dataset.CreateVersionError,
      },
      options,
    );
  }

  /**
   * Delete dataset
   *
   * @remarks
   * Delete a specific dataset.
   *
   * @returns Successful Response
   *
   * @throws {@link Dataset.DeleteDatasetError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  deleteDataset(
    request: Dataset.DeleteDatasetRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Dataset.DeleteDatasetError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/beta/dataset/{dataset_id}"),
        auth: this.#auth.token,
        pathParams: [{ name: "dataset_id", value: request.datasetId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Dataset.DeleteDatasetError,
      },
      options,
    );
  }

  /**
   * Delete samples
   *
   * @remarks
   * Delete samples from the split.
   *
   * @returns Successful Response
   *
   * @throws {@link Dataset.DeleteSamplesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  deleteSamples(
    request: Dataset.DeleteSamplesRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteSamplesResponse, Dataset.DeleteSamplesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/beta/dataset/{dataset_id}/split/{split_id}/sample/delete"),
        auth: this.#auth.token,
        pathParams: [
          { name: "dataset_id", value: request.datasetId, schema: s.string() },
          { name: "split_id", value: request.splitId, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.array(s.lazy(() => sampleidSchema)) },
      },
      {
        success: { kind: "json", schema: deleteSamplesResponseSchema },
        errorFactory: Dataset.DeleteSamplesError,
      },
      options,
    );
  }

  /**
   * Delete split
   *
   * @remarks
   * Delete a specific split.
   *
   * @returns Successful Response
   *
   * @throws {@link Dataset.DeleteSplitError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  deleteSplit(
    request: Dataset.DeleteSplitRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Dataset.DeleteSplitError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/beta/dataset/{dataset_id}/split/{split_id}"),
        auth: this.#auth.token,
        pathParams: [
          { name: "dataset_id", value: request.datasetId, schema: s.string() },
          { name: "split_id", value: request.splitId, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Dataset.DeleteSplitError,
      },
      options,
    );
  }

  /**
   * Delete a version
   *
   * @remarks
   * Delete a version from the dataset.
   *
   * @returns Successful Response
   *
   * @throws {@link Dataset.DeleteVersionError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  deleteVersion(
    request: Dataset.DeleteVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Dataset.DeleteVersionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/beta/dataset/{dataset_id}/version/{version_id}"),
        auth: this.#auth.token,
        pathParams: [
          { name: "dataset_id", value: request.datasetId, schema: s.string() },
          { name: "version_id", value: request.versionId, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Dataset.DeleteVersionError,
      },
      options,
    );
  }

  /**
   * Get dataset info
   *
   * @remarks
   * Get information about a specific dataset.
   *
   * @returns OK
   *
   * @throws {@link Dataset.GetDatasetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getDataset(
    request: Dataset.GetDatasetRequest,
    options?: RequestOptions,
  ): ApiPromise<DatasetInfo, Dataset.GetDatasetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/beta/dataset/{dataset_id}"),
        auth: this.#auth.token,
        pathParams: [{ name: "dataset_id", value: request.datasetId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: datasetInfoSchema },
        errorFactory: Dataset.GetDatasetError,
      },
      options,
    );
  }

  /**
   * Get split info
   *
   * @remarks
   * Get information about a specific split.
   *
   * @returns OK
   *
   * @throws {@link Dataset.GetSplitError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getSplit(
    request: Dataset.GetSplitRequest,
    options?: RequestOptions,
  ): ApiPromise<SplitInfo, Dataset.GetSplitError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/beta/dataset/{dataset_id}/split/{split_id}"),
        auth: this.#auth.token,
        pathParams: [
          { name: "dataset_id", value: request.datasetId, schema: s.string() },
          { name: "split_id", value: request.splitId, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: splitInfoSchema },
        errorFactory: Dataset.GetSplitError,
      },
      options,
    );
  }

  /**
   * Get version info
   *
   * @remarks
   * Get a dataset version.
   *
   * @returns OK
   *
   * @throws {@link Dataset.GetVersionError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getVersion(
    request: Dataset.GetVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<VersionInfo, Dataset.GetVersionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/beta/dataset/{dataset_id}/version/{version_id}"),
        auth: this.#auth.token,
        pathParams: [
          { name: "dataset_id", value: request.datasetId, schema: s.string() },
          { name: "version_id", value: request.versionId, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: versionInfoSchema },
        errorFactory: Dataset.GetVersionError,
      },
      options,
    );
  }

  /**
   * List datasets
   *
   * @remarks
   * List datasets accessible to the user.
   *
   * @returns OK
   *
   * @throws {@link Dataset.ListDatasetsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listDatasets(
    request: Dataset.ListDatasetsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListDatasetsResponse, Dataset.ListDatasetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/beta/dataset"),
        auth: this.#auth.token,
        pathParams: [],
        query: [
          { name: "projectId", value: request.projectId, schema: s.string() },
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursor2Schema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.lazy(() => limit3Schema)) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => direction1Schema)) },
          {
            name: "nameSearch",
            value: request.nameSearch,
            schema: s.optional(s.lazy(() => namesearchSchema)),
          },
        ],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listDatasetsResponseSchema },
        errorFactory: Dataset.ListDatasetsError,
      },
      options,
    );
  }

  /**
   * List samples
   *
   * @remarks
   * List samples from the split.
   *
   * @returns OK
   *
   * @throws {@link Dataset.ListSamplesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listSamples(
    request: Dataset.ListSamplesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSamplesResponse, Dataset.ListSamplesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/beta/dataset/{dataset_id}/split/{split_id}/sample"),
        auth: this.#auth.token,
        pathParams: [
          { name: "dataset_id", value: request.datasetId, schema: s.string() },
          { name: "split_id", value: request.splitId, schema: s.string() },
        ],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursor2Schema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.lazy(() => limit3Schema)) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => direction1Schema)) },
          { name: "versionId", value: request.versionId, schema: s.optional(s.lazy(() => versionidSchema)) },
        ],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSamplesResponseSchema },
        errorFactory: Dataset.ListSamplesError,
      },
      options,
    );
  }

  /**
   * List splits
   *
   * @remarks
   * List splits in the dataset.
   *
   * @returns OK
   *
   * @throws {@link Dataset.ListSplitsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listSplits(
    request: Dataset.ListSplitsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSplitsResponse, Dataset.ListSplitsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/beta/dataset/{dataset_id}/split"),
        auth: this.#auth.token,
        pathParams: [{ name: "dataset_id", value: request.datasetId, schema: s.string() }],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.lazy(() => cursor2Schema)) },
          { name: "limit", value: request.limit, schema: s.optional(s.lazy(() => limit3Schema)) },
          { name: "direction", value: request.direction, schema: s.optional(s.lazy(() => direction1Schema)) },
          { name: "versionId", value: request.versionId, schema: s.optional(s.lazy(() => versionidSchema)) },
        ],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSplitsResponseSchema },
        errorFactory: Dataset.ListSplitsError,
      },
      options,
    );
  }

  /**
   * List versions
   *
   * @remarks
   * List versions for a dataset.
   *
   * @returns OK
   *
   * @throws {@link Dataset.ListVersionsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listVersions(
    request: Dataset.ListVersionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListVersionsResponse, Dataset.ListVersionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/beta/dataset/{dataset_id}/version"),
        auth: this.#auth.token,
        pathParams: [{ name: "dataset_id", value: request.datasetId, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listVersionsResponseSchema },
        errorFactory: Dataset.ListVersionsError,
      },
      options,
    );
  }

  /**
   * Update samples
   *
   * @remarks
   * Update samples as raw file.
   *
   * @returns Successful Response
   *
   * @throws {@link Dataset.UploadRawSamplesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FriendliSuiteApiReferenceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  uploadRawSamples(
    request: Dataset.UploadRawSamplesRequest,
    options?: RequestOptions,
  ): ApiPromise<AddSamplesResponse, Dataset.UploadRawSamplesError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/beta/dataset/{dataset_id}/split/{split_id}/sample"),
        auth: this.#auth.token,
        pathParams: [
          { name: "dataset_id", value: request.datasetId, schema: s.string() },
          { name: "split_id", value: request.splitId, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "X-Friendli-Team",
            value: request.xFriendliTeam,
            schema: s.optional(s.lazy(() => xFriendliTeamSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "multipart", value: [{ kind: "file", name: "file", value: request.file }] },
      },
      {
        success: { kind: "json", schema: addSamplesResponseSchema },
        errorFactory: Dataset.UploadRawSamplesError,
      },
      options,
    );
  }
}

export namespace Dataset {
  export type AddSamplesRequest = {
    /** ID of the dataset. */
    datasetId: string;
    /** ID of the split. */
    splitId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: string[];
  };

  export class AddSamplesError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<AddSamplesError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type CreateDatasetRequestParams = {
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: CreateDatasetRequest;
  };

  export class CreateDatasetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<CreateDatasetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type CreateSplitRequest = {
    /** ID of the dataset. */
    datasetId: string;
    name: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class CreateSplitError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<CreateSplitError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type CreateVersionRequest = {
    /** ID of the dataset. */
    datasetId: string;
    comment: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class CreateVersionError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<CreateVersionError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DeleteDatasetRequest = {
    /** ID of the dataset to delete. */
    datasetId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class DeleteDatasetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDatasetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DeleteSamplesRequest = {
    /** ID of the dataset. */
    datasetId: string;
    /** ID of the split. */
    splitId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    body: Sampleid[];
  };

  export class DeleteSamplesError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSamplesError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DeleteSplitRequest = {
    /** ID of the dataset. */
    datasetId: string;
    /** ID of the split. */
    splitId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class DeleteSplitError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSplitError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DeleteVersionRequest = {
    /** ID of the dataset. */
    datasetId: string;
    /** ID of the version to delete. */
    versionId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class DeleteVersionError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteVersionError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetDatasetRequest = {
    /** ID of the dataset to retrieve. */
    datasetId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class GetDatasetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GetDatasetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetSplitRequest = {
    /** ID of the dataset. */
    datasetId: string;
    /** ID of the split. */
    splitId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class GetSplitError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GetSplitError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetVersionRequest = {
    /** ID of the dataset. */
    datasetId: string;
    /** ID of the version to get. */
    versionId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class GetVersionError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GetVersionError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListDatasetsRequest = {
    projectId: string;
    cursor?: Cursor2;
    limit?: Limit3;
    direction?: Direction1;
    nameSearch?: Namesearch;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class ListDatasetsError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ListDatasetsError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListSamplesRequest = {
    /** ID of the dataset. */
    datasetId: string;
    /** ID of the split. */
    splitId: string;
    cursor?: Cursor2;
    limit?: Limit3;
    direction?: Direction1;
    versionId?: Versionid;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class ListSamplesError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSamplesError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListSplitsRequest = {
    /** ID of the dataset. */
    datasetId: string;
    cursor?: Cursor2;
    limit?: Limit3;
    direction?: Direction1;
    versionId?: Versionid;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class ListSplitsError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ListSplitsError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListVersionsRequest = {
    /** ID of the dataset. */
    datasetId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
  };

  export class ListVersionsError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ListVersionsError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type UploadRawSamplesRequest = {
    /** ID of the dataset. */
    datasetId: string;
    /** ID of the split. */
    splitId: string;
    /** ID of team to run requests as (optional parameter). */
    xFriendliTeam?: XFriendliTeam;
    /** File to update samples. */
    file: FileInput;
  };

  export class UploadRawSamplesError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<UploadRawSamplesError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
