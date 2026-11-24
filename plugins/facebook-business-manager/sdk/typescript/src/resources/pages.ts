import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { pageInternalSchema, type Page } from "../models/page.js";
import {
  subscribedAppsRequestSchema,
  type SubscribedAppsRequest,
} from "../models/subscribed-apps-request.js";
import {
  successResponseFacebookBusinessManagerFacebookPagesCommentsApiSchema,
  type SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi,
} from "../models/success-response-facebook-business-manager-facebook-pages-comments-api.js";
import type { Servers } from "../servers.js";

/**
 * Retrieve and manage Facebook Page settings, information, and metadata.
 */
export class Pages {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Facebook Business Manager Get page details
   *
   * @remarks
   * Retrieves information about a Facebook Page including name, category, description, fan count,
   * and other metadata.
   *
   * @returns Successfully retrieved page details
   *
   * @throws {@link Pages.GetPageError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getPage(request: Pages.GetPageRequest, options?: RequestOptions): ApiPromise<Page, Pages.GetPageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/{page_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "page_id", value: request.pageId, schema: s.string() }],
        query: [{ name: "fields", value: request.fields, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: pageInternalSchema },
        errorFactory: Pages.GetPageError,
      },
      options,
    );
  }

  /**
   * Facebook Business Manager Subscribe app to page
   *
   * @remarks
   * Installs a Webhooks-configured app on the Page so the app can receive real-time updates about
   * changes to the Page.
   *
   * @returns App subscribed to page successfully
   *
   * @throws {@link Pages.SubscribePageAppError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link FacebookBusinessManagerError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  subscribePageApp(
    request: Pages.SubscribePageAppRequest,
    options?: RequestOptions,
  ): ApiPromise<SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi, Pages.SubscribePageAppError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/{page_id}/subscribed_apps"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "page_id", value: request.pageId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: subscribedAppsRequestSchema },
      },
      {
        success: {
          kind: "json",
          schema: successResponseFacebookBusinessManagerFacebookPagesCommentsApiSchema,
        },
        errorFactory: Pages.SubscribePageAppError,
      },
      options,
    );
  }
}

export namespace Pages {
  export type GetPageRequest = {
    /** The ID of the Facebook Page */
    pageId: string;
    /** Comma-separated list of fields to include in the response */
    fields?: string;
  };

  export class GetPageError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetPageError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SubscribePageAppRequest = {
    /** The ID of the Facebook Page */
    pageId: string;
    body: SubscribedAppsRequest;
  };

  export class SubscribePageAppError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<SubscribePageAppError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
