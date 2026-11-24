import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1ManageIntegrationsAccountsResponseSchema,
  type ApiV1ManageIntegrationsAccountsResponse,
} from "../models/api-v1-manage-integrations-accounts-response.js";
import {
  apiV1ManageIntegrationsConnectionsRequestInternalSchema,
  type ApiV1ManageIntegrationsConnectionsRequest,
} from "../models/api-v1-manage-integrations-connections-request.js";
import {
  apiV1ManageIntegrationsConnectionsResponseSchema,
  type ApiV1ManageIntegrationsConnectionsResponse,
} from "../models/api-v1-manage-integrations-connections-response.js";
import {
  apiV1ManageIntegrationsDiscordAccountsRequestSchema,
  type ApiV1ManageIntegrationsDiscordAccountsRequest,
} from "../models/api-v1-manage-integrations-discord-accounts-request.js";
import {
  apiV1ManageIntegrationsDiscordAccountsResponseSchema,
  type ApiV1ManageIntegrationsDiscordAccountsResponse,
} from "../models/api-v1-manage-integrations-discord-accounts-response.js";
import {
  apiV1ManageIntegrationsDiscordServersResponseSchema,
  type ApiV1ManageIntegrationsDiscordServersResponse,
} from "../models/api-v1-manage-integrations-discord-servers-response.js";
import {
  apiV1ManageIntegrationsHubspotPipelinesResponseSchema,
  type ApiV1ManageIntegrationsHubspotPipelinesResponse,
} from "../models/api-v1-manage-integrations-hubspot-pipelines-response.js";
import {
  apiV1ManageIntegrationsHubspotPropertiesResponseSchema,
  type ApiV1ManageIntegrationsHubspotPropertiesResponse,
} from "../models/api-v1-manage-integrations-hubspot-properties-response.js";
import { confirmTargetSchema, type ConfirmTarget } from "../models/confirm-target.js";
import { errorSchema, type Error } from "../models/error.js";
import { formIntegrationSchema, type FormIntegration } from "../models/form-integration.js";
import {
  integrationConnectionsSchema,
  type IntegrationConnections,
} from "../models/integration-connections.js";
import { providerSchema, type Provider } from "../models/provider.js";
import { provider1Schema, type Provider1 } from "../models/provider1.js";
import type { Servers } from "../servers.js";

export class Integrations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Detach a project's selected account
   *
   * @remarks
   * Detach the key's project from its selected account for one provider: every form in the project
   * that sends to it stops delivering immediately. The workspace-level account survives for sibling
   * projects — only the destinations pinned to that exact account in this project are removed.
   * Outward-facing (Tier B): the key holder chose integrations:manage at mint. Scope:
   * integrations:manage.
   *
   * @returns The accounts, with the count of form destinations removed from this project.
   *
   * @throws {@link Integrations.DetachIntegrationConnectionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  detachIntegrationConnection(
    request: Integrations.DetachIntegrationConnectionRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageIntegrationsConnectionsResponse, Integrations.DetachIntegrationConnectionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/manage/integrations/connections/{provider}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "provider", value: request.provider, schema: provider1Schema }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ManageIntegrationsConnectionsResponseSchema },
        errorFactory: Integrations.DetachIntegrationConnectionError,
      },
      options,
    );
  }

  /**
   * Stop a form's destination
   *
   * @remarks
   * Stop sending this form's responses to the provider. Records already created stay where they
   * are, and the workspace connection is untouched, which keeps this routine (Tier A). Scope:
   * integrations:manage.
   *
   * @returns The destination, now disabled.
   *
   * @throws {@link Integrations.DisableFormIntegrationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disableFormIntegration(
    request: Integrations.DisableFormIntegrationRequest,
    options?: RequestOptions,
  ): ApiPromise<FormIntegration, Integrations.DisableFormIntegrationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/integrations/{provider}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "form", value: request.form, schema: s.string() },
          { name: "provider", value: request.provider, schema: providerSchema },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: formIntegrationSchema },
        errorFactory: Integrations.DisableFormIntegrationError,
      },
      options,
    );
  }

  /**
   * Disconnect a Discord server
   *
   * @remarks
   * Disconnect one Discord server. Its guild connection and every channel webhook Fillo holds there
   * go together, and their pinned form destinations cascade away across every project, so this is
   * destructive (Tier C): `confirm` must equal the server id. Scopes: integrations:manage AND
   * workspace:manage; the key acts as the human who minted it and is refused (403) once that person
   * is no longer an owner or admin.
   *
   * @returns The server was disconnected.
   *
   * @throws {@link Integrations.DisconnectDiscordServerError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disconnectDiscordServer(
    request: Integrations.DisconnectDiscordServerRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageIntegrationsDiscordServersResponse, Integrations.DisconnectDiscordServerError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/manage/integrations/discord/servers/{guildId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "guildId", value: request.guildId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: confirmTargetSchema },
      },
      {
        success: { kind: "json", schema: apiV1ManageIntegrationsDiscordServersResponseSchema },
        errorFactory: Integrations.DisconnectDiscordServerError,
      },
      options,
    );
  }

  /**
   * Get a form's destination
   *
   * @remarks
   * Whether this form sends responses to the provider, and with what configuration. Scope:
   * integrations:manage.
   *
   * @returns The form's destination for this provider.
   *
   * @throws {@link Integrations.GetFormIntegrationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFormIntegration(
    request: Integrations.GetFormIntegrationRequest,
    options?: RequestOptions,
  ): ApiPromise<FormIntegration, Integrations.GetFormIntegrationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/integrations/{provider}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "form", value: request.form, schema: s.string() },
          { name: "provider", value: request.provider, schema: providerSchema },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: formIntegrationSchema },
        errorFactory: Integrations.GetFormIntegrationError,
      },
      options,
    );
  }

  /**
   * List HubSpot Deal pipelines
   *
   * @remarks
   * Live Deal pipelines and their stages — the two ids a HubSpot Deal workflow needs. Archived
   * pipelines and stages are omitted. Scope: integrations:manage.
   *
   * @returns Deal pipelines and their stages.
   *
   * @throws {@link Integrations.ListHubspotPipelinesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listHubspotPipelines(
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageIntegrationsHubspotPipelinesResponse, Integrations.ListHubspotPipelinesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/integrations/hubspot/pipelines"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ManageIntegrationsHubspotPipelinesResponseSchema },
        errorFactory: Integrations.ListHubspotPipelinesError,
      },
      options,
    );
  }

  /**
   * List HubSpot Contact properties
   *
   * @remarks
   * The connected account's writable Contact properties, so a mapping can be built without guessing
   * internal names. `email` is handled separately and is not listed. Scope: integrations:manage.
   *
   * @returns Writable Contact properties.
   *
   * @throws {@link Integrations.ListHubspotPropertiesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listHubspotProperties(
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageIntegrationsHubspotPropertiesResponse, Integrations.ListHubspotPropertiesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/integrations/hubspot/properties"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ManageIntegrationsHubspotPropertiesResponseSchema },
        errorFactory: Integrations.ListHubspotPropertiesError,
      },
      options,
    );
  }

  /**
   * List integration accounts
   *
   * @remarks
   * The workspace's connected provider accounts, which one the key's project uses for each
   * provider, and the connected Discord servers. `label` is also the exact string an account
   * removal must confirm with. Scope: integrations:manage.
   *
   * @returns The workspace's integration accounts.
   *
   * @throws {@link Integrations.ListIntegrationConnectionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listIntegrationConnections(
    options?: RequestOptions,
  ): ApiPromise<IntegrationConnections, Integrations.ListIntegrationConnectionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/integrations/connections"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: integrationConnectionsSchema },
        errorFactory: Integrations.ListIntegrationConnectionsError,
      },
      options,
    );
  }

  /**
   * Remove a connected account
   *
   * @remarks
   * Permanently remove one reusable provider account from the key's workspace. Its stored
   * credential is revoked and every project selection and form destination pinned to it cascades
   * away — across every project — so this is destructive (Tier C): `confirm` must equal the
   * account's exact `label` from the connections listing. Scopes: integrations:manage AND
   * workspace:manage; the key acts as the human who minted it and is refused (403) once that person
   * is no longer an owner or admin.
   *
   * @returns The account was removed.
   *
   * @throws {@link Integrations.RemoveIntegrationAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeIntegrationAccount(
    request: Integrations.RemoveIntegrationAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageIntegrationsAccountsResponse, Integrations.RemoveIntegrationAccountError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/manage/integrations/accounts/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: confirmTargetSchema },
      },
      {
        success: { kind: "json", schema: apiV1ManageIntegrationsAccountsResponseSchema },
        errorFactory: Integrations.RemoveIntegrationAccountError,
      },
      options,
    );
  }

  /**
   * Rename a connected Discord channel
   *
   * @remarks
   * Name, or with an empty value un-name, one connected Discord channel. Member-visible copy only —
   * nothing re-delivers, so this is routine (Tier A). Scope: integrations:manage.
   *
   * @returns The channel's new label.
   *
   * @throws {@link Integrations.RenameDiscordChannelError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  renameDiscordChannel(
    request: Integrations.RenameDiscordChannelRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageIntegrationsDiscordAccountsResponse, Integrations.RenameDiscordChannelError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/manage/integrations/discord/accounts/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: apiV1ManageIntegrationsDiscordAccountsRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: apiV1ManageIntegrationsDiscordAccountsResponseSchema },
        errorFactory: Integrations.RenameDiscordChannelError,
      },
      options,
    );
  }

  /**
   * Select the account a project uses
   *
   * @remarks
   * Point the key's project at one of the workspace's provider accounts. Accounts belong to the
   * workspace and are selected per project, so one install can serve several projects. Scope:
   * integrations:manage.
   *
   * @returns The accounts, with the new selection applied.
   *
   * @throws {@link Integrations.SelectIntegrationConnectionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  selectIntegrationConnection(
    request: Integrations.SelectIntegrationConnectionRequest,
    options?: RequestOptions,
  ): ApiPromise<IntegrationConnections, Integrations.SelectIntegrationConnectionError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/manage/integrations/connections/{provider}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "provider", value: request.provider, schema: provider1Schema }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: apiV1ManageIntegrationsConnectionsRequestInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: integrationConnectionsSchema },
        errorFactory: Integrations.SelectIntegrationConnectionError,
      },
      options,
    );
  }

  /**
   * Enable or reconfigure a form's destination
   *
   * @remarks
   * Start sending this form's responses to the provider, or change how. Respondent answers leave
   * Fillo and land in that account, so this is outward-facing (Tier B). Writable keys per provider:
   * google_sheets `spreadsheetId` and `sheetTabId` (omit both to create a new spreadsheet); notion
   * `titleFieldId`; slack `slackChannelId` and `slackIncludeFieldIds`; hubspot
   * `hubspotEmailFieldId` (required), `hubspotMappings`, `hubspotCreateMarketableContact`,
   * `hubspotCompany`, and `hubspotDeal` — HubSpot is saved whole, so a workflow you stop naming is
   * dropped. An unknown key is a 400. Scope: integrations:manage.
   *
   * @returns The form's destination after the change.
   *
   * @throws {@link Integrations.SetFormIntegrationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setFormIntegration(
    request: Integrations.SetFormIntegrationRequest,
    options?: RequestOptions,
  ): ApiPromise<FormIntegration, Integrations.SetFormIntegrationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/manage/forms/{form}/integrations/{provider}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "form", value: request.form, schema: s.string() },
          { name: "provider", value: request.provider, schema: providerSchema },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: formIntegrationSchema },
        errorFactory: Integrations.SetFormIntegrationError,
      },
      options,
    );
  }
}

export namespace Integrations {
  export type DetachIntegrationConnectionRequest = {
    /** notion, slack, hubspot, or discord. */
    provider: Provider1;
  };

  export class DetachIntegrationConnectionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DetachIntegrationConnectionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DisableFormIntegrationRequest = {
    /** A form id or slug. */
    form: string;
    /**
     * google_sheets, notion, slack, or hubspot. Discord destinations are managed with `fillo
     * discord`.
     */
    provider: Provider;
  };

  export class DisableFormIntegrationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DisableFormIntegrationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DisconnectDiscordServerRequest = {
    /** A connected Discord server (guild) id. */
    guildId: string;
    body: ConfirmTarget;
  };

  export class DisconnectDiscordServerError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DisconnectDiscordServerError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetFormIntegrationRequest = {
    /** A form id or slug. */
    form: string;
    /**
     * google_sheets, notion, slack, or hubspot. Discord destinations are managed with `fillo
     * discord`.
     */
    provider: Provider;
  };

  export class GetFormIntegrationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFormIntegrationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class ListHubspotPipelinesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListHubspotPipelinesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class ListHubspotPropertiesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListHubspotPropertiesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class ListIntegrationConnectionsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListIntegrationConnectionsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RemoveIntegrationAccountRequest = {
    /** An integration account id from the connections listing. */
    id: string;
    body: ConfirmTarget;
  };

  export class RemoveIntegrationAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveIntegrationAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RenameDiscordChannelRequest = {
    /** A Discord account id from the connections listing. */
    id: string;
    body: ApiV1ManageIntegrationsDiscordAccountsRequest;
  };

  export class RenameDiscordChannelError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RenameDiscordChannelError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SelectIntegrationConnectionRequest = {
    /** notion, slack, hubspot, or discord. */
    provider: Provider1;
    body: ApiV1ManageIntegrationsConnectionsRequest;
  };

  export class SelectIntegrationConnectionError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SelectIntegrationConnectionError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SetFormIntegrationRequest = {
    /** A form id or slug. */
    form: string;
    /**
     * google_sheets, notion, slack, or hubspot. Discord destinations are managed with `fillo
     * discord`.
     */
    provider: Provider;
    body?: Record<string, unknown>;
  };

  export class SetFormIntegrationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SetFormIntegrationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
