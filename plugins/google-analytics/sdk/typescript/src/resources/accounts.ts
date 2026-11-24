import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  googleAnalyticsAdminV1BetaAccountSchema,
  type GoogleAnalyticsAdminV1BetaAccount,
} from "../models/google-analytics-admin-v1-beta-account.js";
import {
  googleAnalyticsAdminV1BetaDataSharingSettingsSchema,
  type GoogleAnalyticsAdminV1BetaDataSharingSettings,
} from "../models/google-analytics-admin-v1-beta-data-sharing-settings.js";
import {
  googleAnalyticsAdminV1BetaListAccountsResponseSchema,
  type GoogleAnalyticsAdminV1BetaListAccountsResponse,
} from "../models/google-analytics-admin-v1-beta-list-accounts-response.js";
import {
  googleAnalyticsAdminV1BetaProvisionAccountTicketRequestSchema,
  type GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest,
} from "../models/google-analytics-admin-v1-beta-provision-account-ticket-request.js";
import {
  googleAnalyticsAdminV1BetaProvisionAccountTicketResponseSchema,
  type GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse,
} from "../models/google-analytics-admin-v1-beta-provision-account-ticket-response.js";
import {
  googleAnalyticsAdminV1BetaRunAccessReportRequestSchema,
  type GoogleAnalyticsAdminV1BetaRunAccessReportRequest,
} from "../models/google-analytics-admin-v1-beta-run-access-report-request.js";
import {
  googleAnalyticsAdminV1BetaRunAccessReportResponseSchema,
  type GoogleAnalyticsAdminV1BetaRunAccessReportResponse,
} from "../models/google-analytics-admin-v1-beta-run-access-report-response.js";
import {
  googleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequestSchema,
  type GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest,
} from "../models/google-analytics-admin-v1-beta-search-change-history-events-request.js";
import {
  googleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponseSchema,
  type GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse,
} from "../models/google-analytics-admin-v1-beta-search-change-history-events-response.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "../models/google-rpc-error.js";
import type { Servers } from "../servers.js";

export class Accounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete accounts
   *
   * @remarks
   * Marks target Account as soft-deleted (ie: "trashed") and returns it. This API does not have a
   * method to restore soft-deleted accounts. However, they can be restored using the Trash Can UI.
   * If the accounts are not restored before the expiration time, the account and all child
   * resources (eg: Properties, GoogleAdsLinks, Streams, AccessBindings) will be permanently purged.
   * https://support.google.com/analytics/answer/6154772 Returns an error if the target is not
   * found.
   *
   * @returns Successful response
   *
   * @throws {@link Accounts.AnalyticsadminAccountsDeleteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminAccountsDelete(
    request: Accounts.AnalyticsadminAccountsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Accounts.AnalyticsadminAccountsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1beta/accounts/{accountsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "accountsId", value: request.accountsId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Accounts.AnalyticsadminAccountsDeleteError,
      },
      options,
    );
  }

  /**
   * Get accounts
   *
   * @remarks
   * Lookup for a single Account.
   *
   * @returns Successful response
   *
   * @throws {@link Accounts.AnalyticsadminAccountsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminAccountsGet(
    request: Accounts.AnalyticsadminAccountsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleAnalyticsAdminV1BetaAccount, Accounts.AnalyticsadminAccountsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/accounts/{accountsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "accountsId", value: request.accountsId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaAccountSchema },
        errorFactory: Accounts.AnalyticsadminAccountsGetError,
      },
      options,
    );
  }

  /**
   * Get data sharing settings accounts
   *
   * @remarks
   * Get data sharing settings on an account. Data sharing settings are singletons.
   *
   * @returns Successful response
   *
   * @throws {@link Accounts.AnalyticsadminAccountsGetDataSharingSettingsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminAccountsGetDataSharingSettings(
    request: Accounts.AnalyticsadminAccountsGetDataSharingSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaDataSharingSettings,
    Accounts.AnalyticsadminAccountsGetDataSharingSettingsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/accounts/{accountsId}/dataSharingSettings"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "accountsId", value: request.accountsId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaDataSharingSettingsSchema },
        errorFactory: Accounts.AnalyticsadminAccountsGetDataSharingSettingsError,
      },
      options,
    );
  }

  /**
   * List accounts
   *
   * @remarks
   * Returns all accounts accessible by the caller. Note that these accounts might not currently
   * have GA properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an
   * empty list if no relevant accounts are found. Note: The easiest way to retrieve a list of all
   * properties you have access to is by using `ListAccountSummaries`.
   *
   * @returns Successful response
   *
   * @throws {@link Accounts.AnalyticsadminAccountsListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminAccountsList(
    request: Accounts.AnalyticsadminAccountsListRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GoogleAnalyticsAdminV1BetaListAccountsResponse, Accounts.AnalyticsadminAccountsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1beta/accounts"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "showDeleted", value: request.showDeleted, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaListAccountsResponseSchema },
        errorFactory: Accounts.AnalyticsadminAccountsListError,
      },
      options,
    );
  }

  /**
   * Patch accounts
   *
   * @remarks
   * Updates an account.
   *
   * @returns Successful response
   *
   * @throws {@link Accounts.AnalyticsadminAccountsPatchError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminAccountsPatch(
    request: Accounts.AnalyticsadminAccountsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<GoogleAnalyticsAdminV1BetaAccount, Accounts.AnalyticsadminAccountsPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1beta/accounts/{accountsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "accountsId", value: request.accountsId, schema: s.string() }],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: googleAnalyticsAdminV1BetaAccountSchema },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaAccountSchema },
        errorFactory: Accounts.AnalyticsadminAccountsPatchError,
      },
      options,
    );
  }

  /**
   * Provision account ticket accounts
   *
   * @remarks
   * Requests a ticket for creating an account.
   *
   * @returns Successful response
   *
   * @throws {@link Accounts.AnalyticsadminAccountsProvisionAccountTicketError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminAccountsProvisionAccountTicket(
    request: Accounts.AnalyticsadminAccountsProvisionAccountTicketRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse,
    Accounts.AnalyticsadminAccountsProvisionAccountTicketError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/accounts:provisionAccountTicket"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: googleAnalyticsAdminV1BetaProvisionAccountTicketRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaProvisionAccountTicketResponseSchema },
        errorFactory: Accounts.AnalyticsadminAccountsProvisionAccountTicketError,
      },
      options,
    );
  }

  /**
   * Run access report accounts
   *
   * @remarks
   * Returns a customized report of data access records. The report provides records of each time a
   * user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data
   * Access Reports can be requested for a property. Reports may be requested for any property, but
   * dimensions that aren't related to quota can only be requested on Google Analytics 360
   * properties. This method is only available to Administrators. These data access records include
   * GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase & Admob that
   * can retrieve data from Google Analytics through a linkage. These records don't include property
   * configuration changes like adding a stream or changing a property's time zone. For
   * configuration change history, see searchChangeHistoryEvents. To give your feedback on this API,
   * complete the Google Analytics Access Reports feedback form.
   *
   * @returns Successful response
   *
   * @throws {@link Accounts.AnalyticsadminAccountsRunAccessReportError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminAccountsRunAccessReport(
    request: Accounts.AnalyticsadminAccountsRunAccessReportRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaRunAccessReportResponse,
    Accounts.AnalyticsadminAccountsRunAccessReportError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/accounts/{accountsId}:runAccessReport"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "accountsId", value: request.accountsId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: googleAnalyticsAdminV1BetaRunAccessReportRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaRunAccessReportResponseSchema },
        errorFactory: Accounts.AnalyticsadminAccountsRunAccessReportError,
      },
      options,
    );
  }

  /**
   * Search change history events accounts
   *
   * @remarks
   * Searches through all changes to an account or its children given the specified set of filters.
   * Only returns the subset of changes supported by the API. The UI may return additional changes.
   *
   * @returns Successful response
   *
   * @throws {@link Accounts.AnalyticsadminAccountsSearchChangeHistoryEventsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleAnalyticsError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  analyticsadminAccountsSearchChangeHistoryEvents(
    request: Accounts.AnalyticsadminAccountsSearchChangeHistoryEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse,
    Accounts.AnalyticsadminAccountsSearchChangeHistoryEventsError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1beta/accounts/{accountsId}:searchChangeHistoryEvents"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "accountsId", value: request.accountsId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: googleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: googleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponseSchema },
        errorFactory: Accounts.AnalyticsadminAccountsSearchChangeHistoryEventsError,
      },
      options,
    );
  }
}

export namespace Accounts {
  export type AnalyticsadminAccountsDeleteRequest = {
    /** Resource name segment (accountsId). */
    accountsId: string;
  };

  export class AnalyticsadminAccountsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminAccountsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminAccountsGetRequest = {
    /** Resource name segment (accountsId). */
    accountsId: string;
  };

  export class AnalyticsadminAccountsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminAccountsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminAccountsGetDataSharingSettingsRequest = {
    /** Resource name segment (accountsId). */
    accountsId: string;
  };

  export class AnalyticsadminAccountsGetDataSharingSettingsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminAccountsGetDataSharingSettingsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminAccountsListRequest = {
    /**
     * Optional. The maximum number of resources to return. The service may return fewer than this
     * value, even if there are additional pages. If unspecified, at most 50 resources will be
     * returned. The maximum value is 200; (higher values will be coerced to the maximum)
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListAccounts` call. Provide this to
     * retrieve the subsequent page. When paginating, all other parameters provided to
     * `ListAccounts` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be
     * inspected to determine whether they are deleted or not.
     */
    showDeleted?: boolean;
  };

  export class AnalyticsadminAccountsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminAccountsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminAccountsPatchRequest = {
    /** Resource name segment (accountsId). */
    accountsId: string;
    /**
     * Required. The list of fields to be updated. Field names must be in snake case (for example,
     * "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one
     * path with the string "*" to match all fields.
     */
    updateMask?: string;
    body: GoogleAnalyticsAdminV1BetaAccount;
  };

  export class AnalyticsadminAccountsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminAccountsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminAccountsProvisionAccountTicketRequest = {
    body: GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest;
  };

  export class AnalyticsadminAccountsProvisionAccountTicketError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminAccountsProvisionAccountTicketError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminAccountsRunAccessReportRequest = {
    /** Resource name segment (accountsId). */
    accountsId: string;
    body: GoogleAnalyticsAdminV1BetaRunAccessReportRequest;
  };

  export class AnalyticsadminAccountsRunAccessReportError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminAccountsRunAccessReportError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type AnalyticsadminAccountsSearchChangeHistoryEventsRequest = {
    /** Resource name segment (accountsId). */
    accountsId: string;
    body: GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsRequest;
  };

  export class AnalyticsadminAccountsSearchChangeHistoryEventsError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<AnalyticsadminAccountsSearchChangeHistoryEventsError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
