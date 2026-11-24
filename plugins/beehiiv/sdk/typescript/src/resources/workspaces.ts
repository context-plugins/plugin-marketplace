import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  publicationsBySubscriptionEmailRequestExpandItemSchema,
  type PublicationsBySubscriptionEmailRequestExpandItem,
} from "../models/publications-by-subscription-email-request-expand-item.js";
import {
  publicationsBySubscriptionEmailResponseItemInternalSchema,
  type PublicationsBySubscriptionEmailResponseItem,
} from "../models/publications-by-subscription-email-response-item.js";
import {
  workspaceIdentifyResponseSchema,
  type WorkspaceIdentifyResponse,
} from "../models/workspace-identify-response.js";
import {
  workspacePermissionsResponseSchema,
  type WorkspacePermissionsResponse,
} from "../models/workspace-permissions-response.js";
import type { Servers } from "../servers.js";

export class Workspaces {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Identify workspace OAuth Scope: identify:read
   *
   * @remarks
   * Retrieve information about the workspace the OAuth or API token is associated with.
   *
   * @returns OK
   *
   * @throws {@link Workspaces.Identify2Error} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  identify2(
    request: Workspaces.Identify2Request,
    options?: RequestOptions,
  ): ApiPromise<WorkspaceIdentifyResponse, Workspaces.Identify2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/workspaces/identify"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspaceIdentifyResponseSchema },
        errorFactory: Workspaces.Identify2Error,
      },
      options,
    );
  }

  /**
   * Get workspace permissions OAuth Scope: identify:read
   *
   * @remarks
   * Retrieve the permissions granted to the OAuth or API token for this workspace. API keys return
   * all granular OAuth scopes. OAuth tokens return only the scopes they were authorized for.
   *
   * `posts` write access is only included when the Send API feature is enabled; tokens with
   * `posts:write` but without Send API receive `posts` as `["read"]`.
   *
   * @returns OK
   *
   * @throws {@link Workspaces.PermissionsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  permissions(
    request: Workspaces.PermissionsRequest,
    options?: RequestOptions,
  ): ApiPromise<WorkspacePermissionsResponse, Workspaces.PermissionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/workspaces/permissions"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: workspacePermissionsResponseSchema },
        errorFactory: Workspaces.PermissionsError,
      },
      options,
    );
  }

  /**
   * Get publications by subscription email OAuth Scope: publications:read
   *
   * @remarks
   * Retrieve all publications in the workspace that have a subscription for the specified email
   * address. The workspace is determined by the provided API key.
   *
   * @returns OK
   *
   * @throws {@link Workspaces.PublicationsBySubscriptionEmailError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  publicationsBySubscriptionEmail(
    request: Workspaces.PublicationsBySubscriptionEmailRequest,
    options?: RequestOptions,
  ): ApiPromise<
    PublicationsBySubscriptionEmailResponseItem[],
    Workspaces.PublicationsBySubscriptionEmailError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/workspaces/publications/by_subscription_email/{email}"),
        auth: noneAuth,
        pathParams: [{ name: "email", value: request.email, schema: s.string() }],
        query: [
          {
            name: "expand",
            value: request.expand,
            schema: s.optional(s.array(s.lazy(() => publicationsBySubscriptionEmailRequestExpandItemSchema))),
          },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: s.array(s.lazy(() => publicationsBySubscriptionEmailResponseItemInternalSchema)),
        },
        errorFactory: Workspaces.PublicationsBySubscriptionEmailError,
      },
      options,
    );
  }
}

export namespace Workspaces {
  export type Identify2Request = {
    /** Bearer authentication */
    authorization: string;
  };

  export class Identify2Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Identify2Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PermissionsRequest = {
    /** Bearer authentication */
    authorization: string;
  };

  export class PermissionsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PermissionsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PublicationsBySubscriptionEmailRequest = {
    /** The email address to search for subscriptions */
    email: string;
    /**
     * Optionally expand the results by adding additional information. <br>`subscription` - Returns
     * the full Subscription object for the email address in each publication. <br>`publication` -
     * Returns the full Publication object instead of just ID and name.
     * <br>`subscription_custom_fields` - Returns custom field values nested within the subscription
     * object. (Returns the subscription object regardless of whether `subscription` is requested.)
     */
    expand?: PublicationsBySubscriptionEmailRequestExpandItem[];
    /** Bearer authentication */
    authorization: string;
  };

  export class PublicationsBySubscriptionEmailError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PublicationsBySubscriptionEmailError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
