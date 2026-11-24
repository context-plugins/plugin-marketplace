import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { countryListRequestSchema, type CountryListRequest } from "../models/country-list-request.js";
import { countryListSchema, type CountryList } from "../models/country-list.js";
import { createSiteRequestSchema, type CreateSiteRequest } from "../models/create-site-request.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import { funnelDefinitionSchema, type FunnelDefinition } from "../models/funnel-definition.js";
import { funnelRequestInternalSchema, type FunnelRequest } from "../models/funnel-request.js";
import { goalRequestSchema, type GoalRequest } from "../models/goal-request.js";
import { goalSchema, type Goal } from "../models/goal.js";
import { hostnameListRequestSchema, type HostnameListRequest } from "../models/hostname-list-request.js";
import { hostnameListSchema, type HostnameList } from "../models/hostname-list.js";
import { publicDashboardSchema, type PublicDashboard } from "../models/public-dashboard.js";
import { settingsCountSchema, type SettingsCount } from "../models/settings-count.js";
import { siteDetailSchema, type SiteDetail } from "../models/site-detail.js";
import { siteSnippetSchema, type SiteSnippet } from "../models/site-snippet.js";
import { sitesGoalsResponseSchema, type SitesGoalsResponse } from "../models/sites-goals-response.js";
import {
  sitesSettingsBlockedIpsResponseSchema,
  type SitesSettingsBlockedIpsResponse,
} from "../models/sites-settings-blocked-ips-response.js";
import {
  trackingSettingsRequestSchema,
  type TrackingSettingsRequest,
} from "../models/tracking-settings-request.js";
import { trackingSettingsSchema, type TrackingSettings } from "../models/tracking-settings.js";
import { typeSchema, type Type } from "../models/type.js";
import { updateSiteRequestInternalSchema, type UpdateSiteRequest } from "../models/update-site-request.js";
import type { Servers } from "../servers.js";

/**
 * Create, change and delete sites (write surface). Requires the `sites:write` scope and the
 * server-side `API_WRITE_ENABLED` flag; the snippet route needs only `read`. See
 * docs/api-v1-write-surface.md §5.
 */
export class Sites {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a funnel
   *
   * @remarks
   * Owner or admin only. A step pointing at a goal this site does not have is 400, naming the step.
   * A duplicate name is 409 `funnel_exists`. Listing and running funnels lives on the read surface
   * (GET /funnels, POST /funnels/{id}/report).
   *
   * @returns The created funnel.
   *
   * @throws {@link Sites.CreateFunnelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createFunnel(
    request: Sites.CreateFunnelRequest,
    options?: RequestOptions,
  ): ApiPromise<FunnelDefinition, Sites.CreateFunnelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sites/{id}/funnels"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: funnelRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: funnelDefinitionSchema },
        errorFactory: Sites.CreateFunnelError,
      },
      options,
    );
  }

  /**
   * Create a goal
   *
   * @remarks
   * Owner or admin only. A duplicate name is 409 `goal_exists`.
   *
   * @returns The created goal.
   *
   * @throws {@link Sites.CreateGoalError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createGoal(
    request: Sites.CreateGoalRequest,
    options?: RequestOptions,
  ): ApiPromise<Goal, Sites.CreateGoalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sites/{id}/goals"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: goalRequestSchema },
      },
      {
        success: { kind: "json", schema: goalSchema },
        errorFactory: Sites.CreateGoalError,
      },
      options,
    );
  }

  /**
   * Create a site and get its install snippet
   *
   * @remarks
   * Creates a site and returns everything needed to install tracking, so provisioning is one
   * round-trip. Requires an ALL-SITES key: a single-site key gets 403 `key_not_scoped`, since the
   * new site would be outside its own scope. A duplicate url is 409 `site_exists` — unlike the
   * dashboard, which permits it: for an agent a duplicate is nearly always a retry that lost its
   * response. The first non-hobby site starts the trial subscription exactly as the dashboard does.
   * Send an `Idempotency-Key` to make retries safe.
   *
   * @returns The created site, with its script URL and snippet.
   *
   * @throws {@link Sites.CreateSiteError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSite(
    request: Sites.CreateSiteRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SiteDetail, Sites.CreateSiteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/sites"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: createSiteRequestSchema },
      },
      {
        success: { kind: "json", schema: siteDetailSchema },
        errorFactory: Sites.CreateSiteError,
      },
      options,
    );
  }

  /**
   * Delete a funnel
   *
   * @returns Deleted.
   *
   * @throws {@link Sites.DeleteFunnelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteFunnel(
    request: Sites.DeleteFunnelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Sites.DeleteFunnelError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/sites/{id}/funnels/{funnelId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.int() },
          { name: "funnelId", value: request.funnelId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Sites.DeleteFunnelError,
      },
      options,
    );
  }

  /**
   * Delete a goal
   *
   * @returns Deleted.
   *
   * @throws {@link Sites.DeleteGoalError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteGoal(
    request: Sites.DeleteGoalRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Sites.DeleteGoalError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/sites/{id}/goals/{goalId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.int() },
          { name: "goalId", value: request.goalId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Sites.DeleteGoalError,
      },
      options,
    );
  }

  /**
   * Delete a site
   *
   * @remarks
   * Owner only — an admin may edit the site but not delete it — and it really deletes: the site
   * plus its goals, hostnames, blocklists and import jobs, with its ClickHouse data removed
   * asynchronously. An admin or a member gets 403 `not_site_owner` — there is no API equivalent of
   * the dashboard's "remove my access".
   *
   * @returns Deleted.
   *
   * @throws {@link Sites.DeleteSiteError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSite(
    request: Sites.DeleteSiteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Sites.DeleteSiteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/sites/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Sites.DeleteSiteError,
      },
      options,
    );
  }

  /**
   * IP blocklist
   *
   * @returns The current setting.
   *
   * @throws {@link Sites.GetBlockedIPsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBlockedIPs(
    request: Sites.GetBlockedIPsRequest,
    options?: RequestOptions,
  ): ApiPromise<SitesSettingsBlockedIpsResponse, Sites.GetBlockedIPsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sites/{id}/settings/blocked-ips"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sitesSettingsBlockedIpsResponseSchema },
        errorFactory: Sites.GetBlockedIPsError,
      },
      options,
    );
  }

  /**
   * Country allow/block list
   *
   * @returns The current setting.
   *
   * @throws {@link Sites.GetCountrySettingsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCountrySettings(
    request: Sites.GetCountrySettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<CountryList, Sites.GetCountrySettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sites/{id}/settings/countries"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countryListSchema },
        errorFactory: Sites.GetCountrySettingsError,
      },
      options,
    );
  }

  /**
   * Hostname allow/block list
   *
   * @returns The current setting.
   *
   * @throws {@link Sites.GetHostnameSettingsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getHostnameSettings(
    request: Sites.GetHostnameSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<HostnameList, Sites.GetHostnameSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sites/{id}/settings/hostnames"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: hostnameListSchema },
        errorFactory: Sites.GetHostnameSettingsError,
      },
      options,
    );
  }

  /**
   * Whether the site's stats are world-readable
   *
   * @returns The current setting.
   *
   * @throws {@link Sites.GetPublicDashboardError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPublicDashboard(
    request: Sites.GetPublicDashboardRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicDashboard, Sites.GetPublicDashboardError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sites/{id}/settings/public-dashboard"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicDashboardSchema },
        errorFactory: Sites.GetPublicDashboardError,
      },
      options,
    );
  }

  /**
   * The install tag for a site
   *
   * @remarks
   * Returns the script URL and the ready-to-paste tag. Scope `read`, not `sites:write`: the snippet
   * is public information (it ends up in the page source), and shared users may install tracking
   * too. `type` selects a widget instead of the tracker: a hobby site gets the bundled `/t/` build,
   * which counts as well as draws, a paid site the widget-only build — its counting is the tracker
   * tag it installs separately.
   *
   * @returns The install URL and snippet.
   *
   * @throws {@link Sites.GetSiteSnippetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSiteSnippet(
    request: Sites.GetSiteSnippetRequest,
    options?: RequestOptions,
  ): ApiPromise<SiteSnippet, Sites.GetSiteSnippetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sites/{id}/snippet"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "type", value: request.type, schema: s.optional(s.lazy(() => typeSchema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: siteSnippetSchema },
        errorFactory: Sites.GetSiteSnippetError,
      },
      options,
    );
  }

  /**
   * What the installed script collects
   *
   * @remarks
   * Returns the site's effective feature selection plus the full catalogue — each entry's state,
   * its dependencies and its marginal brotli cost — so a caller can trade capability against script
   * weight without a second call. Owner or admin only.
   *
   * @returns The site's tracking settings.
   *
   * @throws {@link Sites.GetTrackingSettingsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTrackingSettings(
    request: Sites.GetTrackingSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<TrackingSettings, Sites.GetTrackingSettingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sites/{id}/settings/tracking"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trackingSettingsSchema },
        errorFactory: Sites.GetTrackingSettingsError,
      },
      options,
    );
  }

  /**
   * The site's goals
   *
   * @remarks
   * Goal definitions with their ids, for the write calls below.
   *
   * @returns The site's goals.
   *
   * @throws {@link Sites.ListSiteGoalsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSiteGoals(
    request: Sites.ListSiteGoalsRequest,
    options?: RequestOptions,
  ): ApiPromise<SitesGoalsResponse, Sites.ListSiteGoalsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sites/{id}/goals"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sitesGoalsResponseSchema },
        errorFactory: Sites.ListSiteGoalsError,
      },
      options,
    );
  }

  /**
   * Replace the IP blocklist
   *
   * @remarks
   * Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers
   * 400/500 on a bad body or a failed write instead of 200 with success:false — a status-checking
   * client must not read a failure as done.
   *
   * @returns Applied.
   *
   * @throws {@link Sites.SetBlockedIPsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setBlockedIPs(
    request: Sites.SetBlockedIPsRequest,
    options?: RequestOptions,
  ): ApiPromise<SettingsCount, Sites.SetBlockedIPsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/sites/{id}/settings/blocked-ips"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.string()) },
      },
      {
        success: { kind: "json", schema: settingsCountSchema },
        errorFactory: Sites.SetBlockedIPsError,
      },
      options,
    );
  }

  /**
   * Replace the country lists
   *
   * @remarks
   * Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers
   * 400/500 on a bad body or a failed write instead of 200 with success:false — a status-checking
   * client must not read a failure as done.
   *
   * @returns Applied.
   *
   * @throws {@link Sites.SetCountrySettingsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setCountrySettings(
    request: Sites.SetCountrySettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<SettingsCount, Sites.SetCountrySettingsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/sites/{id}/settings/countries"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: countryListRequestSchema },
      },
      {
        success: { kind: "json", schema: settingsCountSchema },
        errorFactory: Sites.SetCountrySettingsError,
      },
      options,
    );
  }

  /**
   * Replace the hostname lists
   *
   * @remarks
   * Owner or admin only; replaces the whole list. Unlike the dashboard equivalent this answers
   * 400/500 on a bad body or a failed write instead of 200 with success:false — a status-checking
   * client must not read a failure as done.
   *
   * @returns Applied.
   *
   * @throws {@link Sites.SetHostnameSettingsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setHostnameSettings(
    request: Sites.SetHostnameSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<SettingsCount, Sites.SetHostnameSettingsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/sites/{id}/settings/hostnames"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: hostnameListRequestSchema },
      },
      {
        success: { kind: "json", schema: settingsCountSchema },
        errorFactory: Sites.SetHostnameSettingsError,
      },
      options,
    );
  }

  /**
   * Publish or unpublish the site's stats
   *
   * @remarks
   * Owner or admin only. `enabled` must be sent explicitly — this is the one setting that changes
   * who can SEE the data, so an absent field must not read as "turn it off".
   *
   * A hobby site on a free account is always public and answers `409 hobby_always_public` to
   * `enabled: false`. Its stats are the widget it ships, and the hash that addresses them is
   * already in the page's markup; `enabled: true` on one succeeds as a no-op. An owner with a paid
   * subscription (`active`, or `past_due` during a retried renewal) may turn it off.
   *
   * @returns Applied.
   *
   * @throws {@link Sites.SetPublicDashboardError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setPublicDashboard(
    request: Sites.SetPublicDashboardRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicDashboard, Sites.SetPublicDashboardError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/sites/{id}/settings/public-dashboard"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicDashboardSchema },
      },
      {
        success: { kind: "json", schema: publicDashboardSchema },
        errorFactory: Sites.SetPublicDashboardError,
      },
      options,
    );
  }

  /**
   * Set the tracking feature list
   *
   * @remarks
   * Replaces the selection wholesale. `features` is REQUIRED — an omitted key would be
   * indistinguishable from `[]`, which disables everything optional. Locked features stay enabled
   * whether or not they are sent, and a feature whose `requires` are unmet is rejected. Applying
   * repoints the served bundle, then stores the selection, then purges the CDN — the same order the
   * dashboard uses. Owner or admin only.
   *
   * @returns The settings after the change.
   *
   * @throws {@link Sites.SetTrackingSettingsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setTrackingSettings(
    request: Sites.SetTrackingSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<TrackingSettings, Sites.SetTrackingSettingsError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/sites/{id}/settings/tracking"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: trackingSettingsRequestSchema },
      },
      {
        success: { kind: "json", schema: trackingSettingsSchema },
        errorFactory: Sites.SetTrackingSettingsError,
      },
      options,
    );
  }

  /**
   * Replace a funnel
   *
   * @returns The updated funnel.
   *
   * @throws {@link Sites.UpdateFunnelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFunnel(
    request: Sites.UpdateFunnelRequest,
    options?: RequestOptions,
  ): ApiPromise<FunnelDefinition, Sites.UpdateFunnelError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/sites/{id}/funnels/{funnelId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.int() },
          { name: "funnelId", value: request.funnelId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: funnelRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: funnelDefinitionSchema },
        errorFactory: Sites.UpdateFunnelError,
      },
      options,
    );
  }

  /**
   * Replace a goal
   *
   * @returns The updated goal.
   *
   * @throws {@link Sites.UpdateGoalError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateGoal(
    request: Sites.UpdateGoalRequest,
    options?: RequestOptions,
  ): ApiPromise<Goal, Sites.UpdateGoalError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/sites/{id}/goals/{goalId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.int() },
          { name: "goalId", value: request.goalId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: goalRequestSchema },
      },
      {
        success: { kind: "json", schema: goalSchema },
        errorFactory: Sites.UpdateGoalError,
      },
      options,
    );
  }

  /**
   * Change a site's url, timezone or week start
   *
   * @remarks
   * Owner or admin only — a member gets 403 `not_site_owner`. Omitted fields are left alone. Unlike
   * the read surface there is no tracking-active gate: a lapsed account must still be able to fix
   * and clean up its sites. Another account's id answers 404 `unknown_site`, exactly as a
   * nonexistent one.
   *
   * @returns The updated site.
   *
   * @throws {@link Sites.UpdateSiteError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSite(
    request: Sites.UpdateSiteRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SiteDetail, Sites.UpdateSiteError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/sites/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateSiteRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: siteDetailSchema },
        errorFactory: Sites.UpdateSiteError,
      },
      options,
    );
  }
}

export namespace Sites {
  export type CreateFunnelRequest = {
    /** Numeric site id. */
    id: number;
    body: FunnelRequest;
  };

  export class CreateFunnelError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateFunnelError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type CreateGoalRequest = {
    /** Numeric site id. */
    id: number;
    body: GoalRequest;
  };

  export class CreateGoalError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateGoalError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type CreateSiteRequestParams = {
    /**
     * Replays the stored response for 24 hours instead of creating a second site. Reuse with a
     * different body is 409 `idempotency_conflict`.
     */
    idempotencyKey?: string;
    body: CreateSiteRequest;
  };

  export class CreateSiteError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSiteError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type DeleteFunnelRequest = {
    id: number;
    funnelId: number;
  };

  export class DeleteFunnelError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteFunnelError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type DeleteGoalRequest = {
    id: number;
    goalId: number;
  };

  export class DeleteGoalError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteGoalError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type DeleteSiteRequest = {
    /** Numeric site id. */
    id: number;
  };

  export class DeleteSiteError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSiteError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type GetBlockedIPsRequest = {
    id: number;
  };

  export class GetBlockedIPsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBlockedIPsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type GetCountrySettingsRequest = {
    id: number;
  };

  export class GetCountrySettingsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCountrySettingsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type GetHostnameSettingsRequest = {
    id: number;
  };

  export class GetHostnameSettingsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetHostnameSettingsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type GetPublicDashboardRequest = {
    id: number;
  };

  export class GetPublicDashboardError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPublicDashboardError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type GetSiteSnippetRequest = {
    id: string;
    /** Omit for the tracking script. */
    type?: Type;
  };

  export class GetSiteSnippetError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSiteSnippetError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type GetTrackingSettingsRequest = {
    /** Numeric site id. */
    id: number;
  };

  export class GetTrackingSettingsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTrackingSettingsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ListSiteGoalsRequest = {
    /** Numeric site id. */
    id: number;
  };

  export class ListSiteGoalsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSiteGoalsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type SetBlockedIPsRequest = {
    id: number;
    body: string[];
  };

  export class SetBlockedIPsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SetBlockedIPsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type SetCountrySettingsRequest = {
    id: number;
    body: CountryListRequest;
  };

  export class SetCountrySettingsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SetCountrySettingsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type SetHostnameSettingsRequest = {
    id: number;
    body: HostnameListRequest;
  };

  export class SetHostnameSettingsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SetHostnameSettingsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type SetPublicDashboardRequest = {
    id: number;
    body: PublicDashboard;
  };

  export class SetPublicDashboardError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SetPublicDashboardError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type SetTrackingSettingsRequest = {
    /** Numeric site id. */
    id: number;
    body: TrackingSettingsRequest;
  };

  export class SetTrackingSettingsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SetTrackingSettingsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type UpdateFunnelRequest = {
    id: number;
    funnelId: number;
    body: FunnelRequest;
  };

  export class UpdateFunnelError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateFunnelError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type UpdateGoalRequest = {
    id: number;
    goalId: number;
    body: GoalRequest;
  };

  export class UpdateGoalError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateGoalError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type UpdateSiteRequestParams = {
    /** Numeric site id. */
    id: number;
    body: UpdateSiteRequest;
  };

  export class UpdateSiteError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSiteError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error7", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
