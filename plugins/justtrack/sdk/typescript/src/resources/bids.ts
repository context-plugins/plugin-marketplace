import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseInternalSchema, type ErrorResponse } from "../models/error-response.js";
import { listBidsRequestInternalSchema, type ListBidsRequest } from "../models/list-bids-request.js";
import { listBidsResponseInternalSchema, type ListBidsResponse } from "../models/list-bids-response.js";
import {
  uploadBidInputInternalSchema,
  uploadBidInputSchema,
  type UploadBidInput,
} from "../models/upload-bid-input.js";
import {
  uploadBidsInvalidBidResponseInternalSchema,
  type UploadBidsInvalidBidResponse,
} from "../models/upload-bids-invalid-bid-response.js";
import type { Servers } from "../servers.js";

/**
 * Bidding operates as a distributed transaction.
 */
export class Bids {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch current bids with status
   *
   * @remarks
   * This API provides with the bids within justtrack. In addition, it exposes the status of the
   * latest operation associated with the bid. The following filter combinations are eligible:
   * - networkId + campaignId
   * - networkId + campaignId + countryCode
   * - networkId + campaignId + countryCode + sourceId
   * - networkId + adSetId
   * - networkId + adSetId + countryCode
   * - networkId + adSetId + countryCode + sourceId
   *
   * @returns OK
   *
   * @throws {@link Bids.PostManagementV1BidsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JusttrackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postManagementV1Bids(
    request: Bids.PostManagementV1BidsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListBidsResponse, Bids.PostManagementV1BidsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultManagementAppPartnerConnectionApi("/management/v1/bids"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listBidsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: listBidsResponseInternalSchema },
        errorFactory: Bids.PostManagementV1BidsError,
      },
      options,
    );
  }

  /**
   * Upload bids
   *
   * @remarks
   * With this API you can upload a batch of bids, similar to the CSV upload. The same hierarchy,
   * rules, and limitations apply.
   *
   * @returns Bids are accepted and will be processed asynchronously
   *
   * @throws {@link Bids.PostManagementV1BidsUploadError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link JusttrackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postManagementV1BidsUpload(
    request: Bids.PostManagementV1BidsUploadRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Bids.PostManagementV1BidsUploadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultManagementAppPartnerConnectionApi("/management/v1/bids/upload"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.array(s.lazy(() => uploadBidInputInternalSchema))),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Bids.PostManagementV1BidsUploadError,
      },
      options,
    );
  }
}

export namespace Bids {
  export type PostManagementV1BidsRequest = {
    body?: ListBidsRequest;
  };

  export class PostManagementV1BidsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostManagementV1BidsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseInternalSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseInternalSchema } },
    ];
  }

  export type PostManagementV1BidsUploadRequest = {
    body?: UploadBidInput[];
  };

  export const postManagementV1BidsUploadRequestSchema: Schema<PostManagementV1BidsUploadRequest> =
    s.lazySchema(() =>
      s.object<PostManagementV1BidsUploadRequest>({
        body: s.optional(s.array(s.lazy(() => uploadBidInputSchema)).check(s.minLength(1))),
      }),
    );

  export class PostManagementV1BidsUploadError extends ApiError {
    declare readonly payload:
      | Declared<"uploadBidsInvalidBidResponse", UploadBidsInvalidBidResponse>
      | Declared<"errorResponse", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostManagementV1BidsUploadError> = [
      {
        on: 400,
        kind: "uploadBidsInvalidBidResponse",
        decode: { kind: "json", schema: uploadBidsInvalidBidResponseInternalSchema },
      },
      { on: 500, kind: "errorResponse", decode: { kind: "json", schema: errorResponseInternalSchema } },
    ];
  }
}
