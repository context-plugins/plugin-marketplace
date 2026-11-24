import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1PostCsvImportResponseSchema,
  type ApiV1PostCsvImportResponse,
} from "../models/api-v1-post-csv-import-response.js";
import {
  apiV1PostCsvImportResponse1Schema,
  type ApiV1PostCsvImportResponse1,
} from "../models/api-v1-post-csv-import-response1.js";
import {
  apiV1PostCsvImportRowsResponseSchema,
  type ApiV1PostCsvImportRowsResponse,
} from "../models/api-v1-post-csv-import-rows-response.js";
import {
  apiV1PostCsvImportRows400Error1Schema,
  type ApiV1PostCsvImportRows400Error1,
} from "../models/api-v1-post-csv-import-rows400-error1.js";
import {
  apiV1PostCsvImportRows401Error1Schema,
  type ApiV1PostCsvImportRows401Error1,
} from "../models/api-v1-post-csv-import-rows401-error1.js";
import {
  apiV1PostCsvImportRows403Error1Schema,
  type ApiV1PostCsvImportRows403Error1,
} from "../models/api-v1-post-csv-import-rows403-error1.js";
import {
  apiV1PostCsvImportRows404Error1Schema,
  type ApiV1PostCsvImportRows404Error1,
} from "../models/api-v1-post-csv-import-rows404-error1.js";
import {
  apiV1PostCsvImportRows429Error1Schema,
  type ApiV1PostCsvImportRows429Error1,
} from "../models/api-v1-post-csv-import-rows429-error1.js";
import {
  apiV1PostCsvImportRows500Error1Schema,
  type ApiV1PostCsvImportRows500Error1,
} from "../models/api-v1-post-csv-import-rows500-error1.js";
import {
  apiV1PostCsvImportRows502Error1Schema,
  type ApiV1PostCsvImportRows502Error1,
} from "../models/api-v1-post-csv-import-rows502-error1.js";
import {
  apiV1PostCsvImportRows503Error1Schema,
  type ApiV1PostCsvImportRows503Error1,
} from "../models/api-v1-post-csv-import-rows503-error1.js";
import {
  apiV1PostCsvImportRows504Error1Schema,
  type ApiV1PostCsvImportRows504Error1,
} from "../models/api-v1-post-csv-import-rows504-error1.js";
import {
  apiV1PostCsvImportStatusResponseSchema,
  type ApiV1PostCsvImportStatusResponse,
} from "../models/api-v1-post-csv-import-status-response.js";
import {
  apiV1PostCsvImportStatus400Error1Schema,
  type ApiV1PostCsvImportStatus400Error1,
} from "../models/api-v1-post-csv-import-status400-error1.js";
import {
  apiV1PostCsvImportStatus401Error1Schema,
  type ApiV1PostCsvImportStatus401Error1,
} from "../models/api-v1-post-csv-import-status401-error1.js";
import {
  apiV1PostCsvImportStatus403Error1Schema,
  type ApiV1PostCsvImportStatus403Error1,
} from "../models/api-v1-post-csv-import-status403-error1.js";
import {
  apiV1PostCsvImportStatus404Error1Schema,
  type ApiV1PostCsvImportStatus404Error1,
} from "../models/api-v1-post-csv-import-status404-error1.js";
import {
  apiV1PostCsvImportStatus429Error1Schema,
  type ApiV1PostCsvImportStatus429Error1,
} from "../models/api-v1-post-csv-import-status429-error1.js";
import {
  apiV1PostCsvImportStatus500Error1Schema,
  type ApiV1PostCsvImportStatus500Error1,
} from "../models/api-v1-post-csv-import-status500-error1.js";
import {
  apiV1PostCsvImportStatus502Error1Schema,
  type ApiV1PostCsvImportStatus502Error1,
} from "../models/api-v1-post-csv-import-status502-error1.js";
import {
  apiV1PostCsvImportStatus503Error1Schema,
  type ApiV1PostCsvImportStatus503Error1,
} from "../models/api-v1-post-csv-import-status503-error1.js";
import {
  apiV1PostCsvImportStatus504Error1Schema,
  type ApiV1PostCsvImportStatus504Error1,
} from "../models/api-v1-post-csv-import-status504-error1.js";
import {
  apiV1PostCsvImport400Error1Schema,
  type ApiV1PostCsvImport400Error1,
} from "../models/api-v1-post-csv-import400-error1.js";
import {
  apiV1PostCsvImport401Error1Schema,
  type ApiV1PostCsvImport401Error1,
} from "../models/api-v1-post-csv-import401-error1.js";
import {
  apiV1PostCsvImport403Error1Schema,
  type ApiV1PostCsvImport403Error1,
} from "../models/api-v1-post-csv-import403-error1.js";
import {
  apiV1PostCsvImport404Error1Schema,
  type ApiV1PostCsvImport404Error1,
} from "../models/api-v1-post-csv-import404-error1.js";
import {
  apiV1PostCsvImport429Error1Schema,
  type ApiV1PostCsvImport429Error1,
} from "../models/api-v1-post-csv-import429-error1.js";
import {
  apiV1PostCsvImport500Error1Schema,
  type ApiV1PostCsvImport500Error1,
} from "../models/api-v1-post-csv-import500-error1.js";
import {
  apiV1PostCsvImport502Error1Schema,
  type ApiV1PostCsvImport502Error1,
} from "../models/api-v1-post-csv-import502-error1.js";
import {
  apiV1PostCsvImport503Error1Schema,
  type ApiV1PostCsvImport503Error1,
} from "../models/api-v1-post-csv-import503-error1.js";
import {
  apiV1PostCsvImport504Error1Schema,
  type ApiV1PostCsvImport504Error1,
} from "../models/api-v1-post-csv-import504-error1.js";
import {
  status4BundleSocialPostCsvApiSchema,
  type Status4BundleSocialPostCsvApi,
} from "../models/status4-bundle-social-post-csv-api.js";
import type { Servers } from "../servers.js";

export class PostCsv {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create post CSV import
   *
   * @remarks
   * Upload CSV for async bulk post import.
   *
   * @returns 201
   *
   * @throws {@link PostCsv.PostCsvCreateError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCsvCreate(
    request: PostCsv.PostCsvCreateRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1PostCsvImportResponse, PostCsv.PostCsvCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/post-csv-import/"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "file", value: request.file }] },
      },
      {
        success: { kind: "json", schema: apiV1PostCsvImportResponseSchema },
        errorFactory: PostCsv.PostCsvCreateError,
      },
      options,
    );
  }

  /**
   * Get post CSV import details
   *
   * @remarks
   * Retrieve a single CSV import with its summary counts and configuration.
   *
   * @returns 200
   *
   * @throws {@link PostCsv.PostCsvGetByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCsvGetById(
    request: PostCsv.PostCsvGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PostCsvImportResponse, PostCsv.PostCsvGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/post-csv-import/{importId}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "importId", value: request.importId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1PostCsvImportResponseSchema },
        errorFactory: PostCsv.PostCsvGetByIdError,
      },
      options,
    );
  }

  /**
   * Get post CSV import history
   *
   * @remarks
   * List your team's bulk CSV post imports with pagination, so you can see what was uploaded and
   * when.
   *
   * @returns 200
   *
   * @throws {@link PostCsv.PostCsvGetListError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCsvGetList(
    request: PostCsv.PostCsvGetListRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1PostCsvImportResponse1, PostCsv.PostCsvGetListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/post-csv-import/"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "offset", value: request.offset, schema: s.defaulted(s.nullable(s.float64()), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.nullable(s.float64()), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1PostCsvImportResponse1Schema },
        errorFactory: PostCsv.PostCsvGetListError,
      },
      options,
    );
  }

  /**
   * Get post CSV import row results
   *
   * @remarks
   * List the per-row outcome of a CSV import with pagination, showing which rows created posts and
   * which failed validation and why. Use it to report errors back to the person who uploaded the
   * file.
   *
   * @returns 200
   *
   * @throws {@link PostCsv.PostCsvGetRowsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCsvGetRows(
    request: PostCsv.PostCsvGetRowsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PostCsvImportRowsResponse, PostCsv.PostCsvGetRowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/post-csv-import/{importId}/rows"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "importId", value: request.importId, schema: s.string() }],
        query: [
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => status4BundleSocialPostCsvApiSchema)),
          },
          { name: "offset", value: request.offset, schema: s.defaulted(s.nullable(s.float64()), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.nullable(s.float64()), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1PostCsvImportRowsResponseSchema },
        errorFactory: PostCsv.PostCsvGetRowsError,
      },
      options,
    );
  }

  /**
   * Get post CSV import processing status
   *
   * @remarks
   * Poll the progress of a bulk CSV post import, including how many rows are processed, succeeded,
   * and failed.
   *
   * @returns 200
   *
   * @throws {@link PostCsv.PostCsvGetStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postCsvGetStatus(
    request: PostCsv.PostCsvGetStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PostCsvImportStatusResponse, PostCsv.PostCsvGetStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/post-csv-import/{importId}/status"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "importId", value: request.importId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1PostCsvImportStatusResponseSchema },
        errorFactory: PostCsv.PostCsvGetStatusError,
      },
      options,
    );
  }
}

export namespace PostCsv {
  export type PostCsvCreateRequest = {
    file?: FileInput;
  };

  export class PostCsvCreateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PostCsvImport400Error1", ApiV1PostCsvImport400Error1>
      | Declared<"apiV1PostCsvImport401Error1", ApiV1PostCsvImport401Error1>
      | Declared<"apiV1PostCsvImport403Error1", ApiV1PostCsvImport403Error1>
      | Declared<"apiV1PostCsvImport404Error1", ApiV1PostCsvImport404Error1>
      | Declared<"apiV1PostCsvImport429Error1", ApiV1PostCsvImport429Error1>
      | Declared<"apiV1PostCsvImport500Error1", ApiV1PostCsvImport500Error1>
      | Declared<"apiV1PostCsvImport502Error1", ApiV1PostCsvImport502Error1>
      | Declared<"apiV1PostCsvImport503Error1", ApiV1PostCsvImport503Error1>
      | Declared<"apiV1PostCsvImport504Error1", ApiV1PostCsvImport504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostCsvCreateError> = [
      {
        on: 400,
        kind: "apiV1PostCsvImport400Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1PostCsvImport401Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1PostCsvImport403Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1PostCsvImport404Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1PostCsvImport429Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1PostCsvImport500Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1PostCsvImport502Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1PostCsvImport503Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1PostCsvImport504Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport504Error1Schema },
      },
    ];
  }

  export type PostCsvGetByIdRequest = {
    importId: string;
  };

  export class PostCsvGetByIdError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PostCsvImport400Error1", ApiV1PostCsvImport400Error1>
      | Declared<"apiV1PostCsvImport401Error1", ApiV1PostCsvImport401Error1>
      | Declared<"apiV1PostCsvImport403Error1", ApiV1PostCsvImport403Error1>
      | Declared<"apiV1PostCsvImport404Error1", ApiV1PostCsvImport404Error1>
      | Declared<"apiV1PostCsvImport429Error1", ApiV1PostCsvImport429Error1>
      | Declared<"apiV1PostCsvImport500Error1", ApiV1PostCsvImport500Error1>
      | Declared<"apiV1PostCsvImport502Error1", ApiV1PostCsvImport502Error1>
      | Declared<"apiV1PostCsvImport503Error1", ApiV1PostCsvImport503Error1>
      | Declared<"apiV1PostCsvImport504Error1", ApiV1PostCsvImport504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostCsvGetByIdError> = [
      {
        on: 400,
        kind: "apiV1PostCsvImport400Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1PostCsvImport401Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1PostCsvImport403Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1PostCsvImport404Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1PostCsvImport429Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1PostCsvImport500Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1PostCsvImport502Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1PostCsvImport503Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1PostCsvImport504Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport504Error1Schema },
      },
    ];
  }

  export type PostCsvGetListRequest = {
    /** @default 0 */
    offset?: number | null;
    /** @default 10 */
    limit?: number | null;
  };

  export class PostCsvGetListError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PostCsvImport400Error1", ApiV1PostCsvImport400Error1>
      | Declared<"apiV1PostCsvImport401Error1", ApiV1PostCsvImport401Error1>
      | Declared<"apiV1PostCsvImport403Error1", ApiV1PostCsvImport403Error1>
      | Declared<"apiV1PostCsvImport404Error1", ApiV1PostCsvImport404Error1>
      | Declared<"apiV1PostCsvImport429Error1", ApiV1PostCsvImport429Error1>
      | Declared<"apiV1PostCsvImport500Error1", ApiV1PostCsvImport500Error1>
      | Declared<"apiV1PostCsvImport502Error1", ApiV1PostCsvImport502Error1>
      | Declared<"apiV1PostCsvImport503Error1", ApiV1PostCsvImport503Error1>
      | Declared<"apiV1PostCsvImport504Error1", ApiV1PostCsvImport504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostCsvGetListError> = [
      {
        on: 400,
        kind: "apiV1PostCsvImport400Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1PostCsvImport401Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1PostCsvImport403Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1PostCsvImport404Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1PostCsvImport429Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1PostCsvImport500Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1PostCsvImport502Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1PostCsvImport503Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1PostCsvImport504Error1",
        decode: { kind: "json", schema: apiV1PostCsvImport504Error1Schema },
      },
    ];
  }

  export type PostCsvGetRowsRequest = {
    importId: string;
    status?: Status4BundleSocialPostCsvApi;
    /** @default 0 */
    offset?: number | null;
    /** @default 10 */
    limit?: number | null;
  };

  export class PostCsvGetRowsError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PostCsvImportRows400Error1", ApiV1PostCsvImportRows400Error1>
      | Declared<"apiV1PostCsvImportRows401Error1", ApiV1PostCsvImportRows401Error1>
      | Declared<"apiV1PostCsvImportRows403Error1", ApiV1PostCsvImportRows403Error1>
      | Declared<"apiV1PostCsvImportRows404Error1", ApiV1PostCsvImportRows404Error1>
      | Declared<"apiV1PostCsvImportRows429Error1", ApiV1PostCsvImportRows429Error1>
      | Declared<"apiV1PostCsvImportRows500Error1", ApiV1PostCsvImportRows500Error1>
      | Declared<"apiV1PostCsvImportRows502Error1", ApiV1PostCsvImportRows502Error1>
      | Declared<"apiV1PostCsvImportRows503Error1", ApiV1PostCsvImportRows503Error1>
      | Declared<"apiV1PostCsvImportRows504Error1", ApiV1PostCsvImportRows504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostCsvGetRowsError> = [
      {
        on: 400,
        kind: "apiV1PostCsvImportRows400Error1",
        decode: { kind: "json", schema: apiV1PostCsvImportRows400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1PostCsvImportRows401Error1",
        decode: { kind: "json", schema: apiV1PostCsvImportRows401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1PostCsvImportRows403Error1",
        decode: { kind: "json", schema: apiV1PostCsvImportRows403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1PostCsvImportRows404Error1",
        decode: { kind: "json", schema: apiV1PostCsvImportRows404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1PostCsvImportRows429Error1",
        decode: { kind: "json", schema: apiV1PostCsvImportRows429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1PostCsvImportRows500Error1",
        decode: { kind: "json", schema: apiV1PostCsvImportRows500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1PostCsvImportRows502Error1",
        decode: { kind: "json", schema: apiV1PostCsvImportRows502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1PostCsvImportRows503Error1",
        decode: { kind: "json", schema: apiV1PostCsvImportRows503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1PostCsvImportRows504Error1",
        decode: { kind: "json", schema: apiV1PostCsvImportRows504Error1Schema },
      },
    ];
  }

  export type PostCsvGetStatusRequest = {
    importId: string;
  };

  export class PostCsvGetStatusError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PostCsvImportStatus400Error1", ApiV1PostCsvImportStatus400Error1>
      | Declared<"apiV1PostCsvImportStatus401Error1", ApiV1PostCsvImportStatus401Error1>
      | Declared<"apiV1PostCsvImportStatus403Error1", ApiV1PostCsvImportStatus403Error1>
      | Declared<"apiV1PostCsvImportStatus404Error1", ApiV1PostCsvImportStatus404Error1>
      | Declared<"apiV1PostCsvImportStatus429Error1", ApiV1PostCsvImportStatus429Error1>
      | Declared<"apiV1PostCsvImportStatus500Error1", ApiV1PostCsvImportStatus500Error1>
      | Declared<"apiV1PostCsvImportStatus502Error1", ApiV1PostCsvImportStatus502Error1>
      | Declared<"apiV1PostCsvImportStatus503Error1", ApiV1PostCsvImportStatus503Error1>
      | Declared<"apiV1PostCsvImportStatus504Error1", ApiV1PostCsvImportStatus504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostCsvGetStatusError> = [
      {
        on: 400,
        kind: "apiV1PostCsvImportStatus400Error1",
        decode: { kind: "json", schema: apiV1PostCsvImportStatus400Error1Schema },
      },
      {
        on: 401,
        kind: "apiV1PostCsvImportStatus401Error1",
        decode: { kind: "json", schema: apiV1PostCsvImportStatus401Error1Schema },
      },
      {
        on: 403,
        kind: "apiV1PostCsvImportStatus403Error1",
        decode: { kind: "json", schema: apiV1PostCsvImportStatus403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1PostCsvImportStatus404Error1",
        decode: { kind: "json", schema: apiV1PostCsvImportStatus404Error1Schema },
      },
      {
        on: 429,
        kind: "apiV1PostCsvImportStatus429Error1",
        decode: { kind: "json", schema: apiV1PostCsvImportStatus429Error1Schema },
      },
      {
        on: 500,
        kind: "apiV1PostCsvImportStatus500Error1",
        decode: { kind: "json", schema: apiV1PostCsvImportStatus500Error1Schema },
      },
      {
        on: 502,
        kind: "apiV1PostCsvImportStatus502Error1",
        decode: { kind: "json", schema: apiV1PostCsvImportStatus502Error1Schema },
      },
      {
        on: 503,
        kind: "apiV1PostCsvImportStatus503Error1",
        decode: { kind: "json", schema: apiV1PostCsvImportStatus503Error1Schema },
      },
      {
        on: 504,
        kind: "apiV1PostCsvImportStatus504Error1",
        decode: { kind: "json", schema: apiV1PostCsvImportStatus504Error1Schema },
      },
    ];
  }
}
