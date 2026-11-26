import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseInternalSchema, type ErrorResponse } from "../models/error-response.js";
import {
  listPartnersRequestInternalSchema,
  type ListPartnersRequest,
} from "../models/list-partners-request.js";
import {
  listPartnersResponseInternalSchema,
  type ListPartnersResponse,
} from "../models/list-partners-response.js";
import type { Servers } from "../servers.js";

export class Partners {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List partners
   *
   * @remarks
   * Get a paginated list of partners available to your organization.
   *
   * @returns OK
   *
   * @throws {@link Partners.PostManagementV1PartnersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link JusttrackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postManagementV1Partners(
    request: Partners.PostManagementV1PartnersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListPartnersResponse, Partners.PostManagementV1PartnersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultManagementAppPartnerConnectionApi("/management/v1/partners"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listPartnersRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: listPartnersResponseInternalSchema },
        errorFactory: Partners.PostManagementV1PartnersError,
      },
      options,
    );
  }
}

export namespace Partners {
  export type PostManagementV1PartnersRequest = {
    body?: ListPartnersRequest;
  };

  export class PostManagementV1PartnersError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostManagementV1PartnersError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseInternalSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseInternalSchema } },
    ];
  }
}
