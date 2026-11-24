import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { viewerStatusRequestSchema, type ViewerStatusRequest } from "../models/viewer-status-request.js";
import {
  viewerStatusResponseInternalSchema,
  type ViewerStatusResponse,
} from "../models/viewer-status-response.js";
import type { Servers } from "../servers.js";

export class PartnerService {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Semrush User status
   *
   * @remarks
   * Retrieves user status, related to the app (purchases, subscriptions) Documentation
   *
   * @returns OK
   *
   * @throws {@link PartnerService.PostApisV4AppCenterV2PartnerViewerStatusError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SemrushError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApisV4AppCenterV2PartnerViewerStatus(
    request: PartnerService.PostApisV4AppCenterV2PartnerViewerStatusRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ViewerStatusResponse, PartnerService.PostApisV4AppCenterV2PartnerViewerStatusError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/apis/v4/app-center/v2/partner/viewer-status"),
        auth: this.#auth.jwtIssuerToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => viewerStatusRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: viewerStatusResponseInternalSchema },
        errorFactory: PartnerService.PostApisV4AppCenterV2PartnerViewerStatusError,
      },
      options,
    );
  }
}

export namespace PartnerService {
  export type PostApisV4AppCenterV2PartnerViewerStatusRequest = {
    body?: ViewerStatusRequest;
  };

  export class PostApisV4AppCenterV2PartnerViewerStatusError extends ApiError {
    declare readonly payload: Declared<"error400", string> | Declared<"error401", string> | Undeclared;

    static readonly errors: ErrorDecoders<PostApisV4AppCenterV2PartnerViewerStatusError> = [
      { on: 400, kind: "error400", decode: { kind: "json", schema: s.string() } },
      { on: 401, kind: "error401", decode: { kind: "json", schema: s.string() } },
    ];
  }
}
