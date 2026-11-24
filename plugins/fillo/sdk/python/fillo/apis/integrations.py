from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.detach_integration_connection_error import (
    DetachIntegrationConnectionErrorBody,
    detach_integration_connection_error_mapper,
)
from ..errors.disable_form_integration_error import (
    DisableFormIntegrationErrorBody,
    disable_form_integration_error_mapper,
)
from ..errors.disconnect_discord_server_error import (
    DisconnectDiscordServerErrorBody,
    disconnect_discord_server_error_mapper,
)
from ..errors.get_form_integration_error import GetFormIntegrationErrorBody, get_form_integration_error_mapper
from ..errors.list_hubspot_pipelines_error import ListHubspotPipelinesErrorBody, list_hubspot_pipelines_error_mapper
from ..errors.list_hubspot_properties_error import ListHubspotPropertiesErrorBody, list_hubspot_properties_error_mapper
from ..errors.list_integration_connections_error import (
    ListIntegrationConnectionsErrorBody,
    list_integration_connections_error_mapper,
)
from ..errors.remove_integration_account_error import (
    RemoveIntegrationAccountErrorBody,
    remove_integration_account_error_mapper,
)
from ..errors.rename_discord_channel_error import RenameDiscordChannelErrorBody, rename_discord_channel_error_mapper
from ..errors.select_integration_connection_error import (
    SelectIntegrationConnectionErrorBody,
    select_integration_connection_error_mapper,
)
from ..errors.set_form_integration_error import SetFormIntegrationErrorBody, set_form_integration_error_mapper
from ..models.api_v1_manage_integrations_accounts_response import ApiV1ManageIntegrationsAccountsResponse
from ..models.api_v1_manage_integrations_connections_request import (
    ApiV1ManageIntegrationsConnectionsRequest,
    ApiV1ManageIntegrationsConnectionsRequestDict,
)
from ..models.api_v1_manage_integrations_connections_response import ApiV1ManageIntegrationsConnectionsResponse
from ..models.api_v1_manage_integrations_discord_accounts_request import (
    ApiV1ManageIntegrationsDiscordAccountsRequest,
    ApiV1ManageIntegrationsDiscordAccountsRequestDict,
)
from ..models.api_v1_manage_integrations_discord_accounts_response import ApiV1ManageIntegrationsDiscordAccountsResponse
from ..models.api_v1_manage_integrations_discord_servers_response import ApiV1ManageIntegrationsDiscordServersResponse
from ..models.api_v1_manage_integrations_hubspot_pipelines_response import (
    ApiV1ManageIntegrationsHubspotPipelinesResponse,
)
from ..models.api_v1_manage_integrations_hubspot_properties_response import (
    ApiV1ManageIntegrationsHubspotPropertiesResponse,
)
from ..models.confirm_target import ConfirmTarget, ConfirmTargetDict
from ..models.enums.provider import ProviderOrStr
from ..models.enums.provider1 import Provider1OrStr
from ..models.form_integration import FormIntegration
from ..models.integration_connections import IntegrationConnections
from ..server.server import Server


class Integrations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IntegrationsWithRawResponse(client, server, auth)

    def detach_integration_connection(
        self, provider: Provider1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageIntegrationsConnectionsResponse:
        """Detach the key's project from its selected account for one provider: every form in the project that sends to
        it stops delivering immediately. The workspace-level account survives for sibling projects — only the
        destinations pinned to that exact account in this project are removed. Outward-facing (Tier B): the key holder
        chose integrations:manage at mint. Scope: integrations:manage.

        Args:
            provider: notion, slack, hubspot, or discord.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The accounts, with the count of form destinations removed from this project.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry
                after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.detach_integration_connection(provider, request_options=request_options))

    def disable_form_integration(
        self, form: str, provider: ProviderOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> FormIntegration:
        """Stop sending this form's responses to the provider. Records already created stay where they are, and the
        workspace connection is untouched, which keeps this routine (Tier A). Scope: integrations:manage.

        Args:
            form: A form id or slug.
            provider: google_sheets, notion, slack, or hubspot. Discord destinations are managed with ``fillo discord``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The destination, now disabled.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry
                after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.disable_form_integration(form, provider, request_options=request_options))

    def disconnect_discord_server(
        self,
        guild_id: str,
        body: ConfirmTarget | ConfirmTargetDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ManageIntegrationsDiscordServersResponse:
        """Disconnect one Discord server. Its guild connection and every channel webhook Fillo holds there go together,
        and their pinned form destinations cascade away across every project, so this is destructive (Tier C):
        ``confirm`` must equal the server id. Scopes: integrations:manage AND workspace:manage; the key acts as the
        human who minted it and is refused (403) once that person is no longer an owner or admin.

        Args:
            guild_id: A connected Discord server (guild) id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The server was disconnected.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.disconnect_discord_server(guild_id, body, request_options=request_options)
        )

    def get_form_integration(
        self, form: str, provider: ProviderOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> FormIntegration:
        """Whether this form sends responses to the provider, and with what configuration. Scope: integrations:manage.

        Args:
            form: A form id or slug.
            provider: google_sheets, notion, slack, or hubspot. Discord destinations are managed with ``fillo discord``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form's destination for this provider.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_form_integration(form, provider, request_options=request_options))

    def list_hubspot_pipelines(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageIntegrationsHubspotPipelinesResponse:
        """Live Deal pipelines and their stages — the two ids a HubSpot Deal workflow needs. Archived pipelines and
        stages are omitted. Scope: integrations:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deal pipelines and their stages.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry
                after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_hubspot_pipelines(request_options=request_options))

    def list_hubspot_properties(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageIntegrationsHubspotPropertiesResponse:
        """The connected account's writable Contact properties, so a mapping can be built without guessing internal
        names. ``email`` is handled separately and is not listed. Scope: integrations:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Writable Contact properties.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry
                after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_hubspot_properties(request_options=request_options))

    def list_integration_connections(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> IntegrationConnections:
        """The workspace's connected provider accounts, which one the key's project uses for each provider, and the
        connected Discord servers. ``label`` is also the exact string an account removal must confirm with. Scope:
        integrations:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The workspace's integration accounts.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_integration_connections(request_options=request_options))

    def remove_integration_account(
        self, id_: str, body: ConfirmTarget | ConfirmTargetDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1ManageIntegrationsAccountsResponse:
        """Permanently remove one reusable provider account from the key's workspace. Its stored credential is revoked
        and every project selection and form destination pinned to it cascades away — across every project — so this is
        destructive (Tier C): ``confirm`` must equal the account's exact ``label`` from the connections listing. Scopes:
        integrations:manage AND workspace:manage; the key acts as the human who minted it and is refused (403) once that
        person is no longer an owner or admin.

        Args:
            id_: An integration account id from the connections listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The account was removed.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.remove_integration_account(id_, body, request_options=request_options))

    def rename_discord_channel(
        self,
        id_: str,
        body: ApiV1ManageIntegrationsDiscordAccountsRequest | ApiV1ManageIntegrationsDiscordAccountsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1ManageIntegrationsDiscordAccountsResponse:
        """Name, or with an empty value un-name, one connected Discord channel. Member-visible copy only — nothing
        re-delivers, so this is routine (Tier A). Scope: integrations:manage.

        Args:
            id_: A Discord account id from the connections listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The channel's new label.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.rename_discord_channel(id_, body, request_options=request_options))

    def select_integration_connection(
        self,
        provider: Provider1OrStr,
        body: ApiV1ManageIntegrationsConnectionsRequest | ApiV1ManageIntegrationsConnectionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IntegrationConnections:
        """Point the key's project at one of the workspace's provider accounts. Accounts belong to the workspace and are
        selected per project, so one install can serve several projects. Scope: integrations:manage.

        Args:
            provider: notion, slack, hubspot, or discord.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The accounts, with the new selection applied.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.select_integration_connection(provider, body, request_options=request_options)
        )

    def set_form_integration(
        self,
        form: str,
        provider: ProviderOrStr,
        *,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FormIntegration:
        """Start sending this form's responses to the provider, or change how. Respondent answers leave Fillo and land
        in that account, so this is outward-facing (Tier B). Writable keys per provider: google_sheets ``spreadsheetId``
        and ``sheetTabId`` (omit both to create a new spreadsheet); notion ``titleFieldId``; slack ``slackChannelId``
        and ``slackIncludeFieldIds``; hubspot ``hubspotEmailFieldId`` (required), ``hubspotMappings``,
        ``hubspotCreateMarketableContact``, ``hubspotCompany``, and ``hubspotDeal`` — HubSpot is saved whole, so a
        workflow you stop naming is dropped. An unknown key is a 400. Scope: integrations:manage.

        Args:
            form: A form id or slug.
            provider: google_sheets, notion, slack, or hubspot. Discord destinations are managed with ``fillo discord``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form's destination after the change.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.set_form_integration(form, provider, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> IntegrationsWithRawResponse:
        return self._with_raw_response


class AsyncIntegrations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIntegrationsWithRawResponse(client, server, auth)

    async def detach_integration_connection(
        self, provider: Provider1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ManageIntegrationsConnectionsResponse:
        """Detach the key's project from its selected account for one provider: every form in the project that sends to
        it stops delivering immediately. The workspace-level account survives for sibling projects — only the
        destinations pinned to that exact account in this project are removed. Outward-facing (Tier B): the key holder
        chose integrations:manage at mint. Scope: integrations:manage.

        Args:
            provider: notion, slack, hubspot, or discord.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The accounts, with the count of form destinations removed from this project.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry
                after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.detach_integration_connection(provider, request_options=request_options)
        )

    async def disable_form_integration(
        self, form: str, provider: ProviderOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FormIntegration:
        """Stop sending this form's responses to the provider. Records already created stay where they are, and the
        workspace connection is untouched, which keeps this routine (Tier A). Scope: integrations:manage.

        Args:
            form: A form id or slug.
            provider: google_sheets, notion, slack, or hubspot. Discord destinations are managed with ``fillo discord``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The destination, now disabled.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry
                after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.disable_form_integration(form, provider, request_options=request_options)
        )

    async def disconnect_discord_server(
        self,
        guild_id: str,
        body: ConfirmTarget | ConfirmTargetDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageIntegrationsDiscordServersResponse:
        """Disconnect one Discord server. Its guild connection and every channel webhook Fillo holds there go together,
        and their pinned form destinations cascade away across every project, so this is destructive (Tier C):
        ``confirm`` must equal the server id. Scopes: integrations:manage AND workspace:manage; the key acts as the
        human who minted it and is refused (403) once that person is no longer an owner or admin.

        Args:
            guild_id: A connected Discord server (guild) id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The server was disconnected.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.disconnect_discord_server(guild_id, body, request_options=request_options)
        )

    async def get_form_integration(
        self, form: str, provider: ProviderOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FormIntegration:
        """Whether this form sends responses to the provider, and with what configuration. Scope: integrations:manage.

        Args:
            form: A form id or slug.
            provider: google_sheets, notion, slack, or hubspot. Discord destinations are managed with ``fillo discord``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form's destination for this provider.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_form_integration(form, provider, request_options=request_options)
        )

    async def list_hubspot_pipelines(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ManageIntegrationsHubspotPipelinesResponse:
        """Live Deal pipelines and their stages — the two ids a HubSpot Deal workflow needs. Archived pipelines and
        stages are omitted. Scope: integrations:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deal pipelines and their stages.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry
                after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_hubspot_pipelines(request_options=request_options))

    async def list_hubspot_properties(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1ManageIntegrationsHubspotPropertiesResponse:
        """The connected account's writable Contact properties, so a mapping can be built without guessing internal
        names. ``email`` is handled separately and is not listed. Scope: integrations:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Writable Contact properties.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. Per-key (120/min), per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry
                after the Retry-After header. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_hubspot_properties(request_options=request_options))

    async def list_integration_connections(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> IntegrationConnections:
        """The workspace's connected provider accounts, which one the key's project uses for each provider, and the
        connected Discord servers. ``label`` is also the exact string an account removal must confirm with. Scope:
        integrations:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The workspace's integration accounts.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). Per-key (120/min),
                per-workspace (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_integration_connections(request_options=request_options))

    async def remove_integration_account(
        self,
        id_: str,
        body: ConfirmTarget | ConfirmTargetDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageIntegrationsAccountsResponse:
        """Permanently remove one reusable provider account from the key's workspace. Its stored credential is revoked
        and every project selection and form destination pinned to it cascades away — across every project — so this is
        destructive (Tier C): ``confirm`` must equal the account's exact ``label`` from the connections listing. Scopes:
        integrations:manage AND workspace:manage; the key acts as the human who minted it and is refused (403) once that
        person is no longer an owner or admin.

        Args:
            id_: An integration account id from the connections listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The account was removed.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.remove_integration_account(id_, body, request_options=request_options)
        )

    async def rename_discord_channel(
        self,
        id_: str,
        body: ApiV1ManageIntegrationsDiscordAccountsRequest | ApiV1ManageIntegrationsDiscordAccountsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1ManageIntegrationsDiscordAccountsResponse:
        """Name, or with an empty value un-name, one connected Discord channel. Member-visible copy only — nothing
        re-delivers, so this is routine (Tier A). Scope: integrations:manage.

        Args:
            id_: A Discord account id from the connections listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The channel's new label.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.rename_discord_channel(id_, body, request_options=request_options))

    async def select_integration_connection(
        self,
        provider: Provider1OrStr,
        body: ApiV1ManageIntegrationsConnectionsRequest | ApiV1ManageIntegrationsConnectionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IntegrationConnections:
        """Point the key's project at one of the workspace's provider accounts. Accounts belong to the workspace and are
        selected per project, so one install can serve several projects. Scope: integrations:manage.

        Args:
            provider: notion, slack, hubspot, or discord.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The accounts, with the new selection applied.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.select_integration_connection(provider, body, request_options=request_options)
        )

    async def set_form_integration(
        self,
        form: str,
        provider: ProviderOrStr,
        *,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FormIntegration:
        """Start sending this form's responses to the provider, or change how. Respondent answers leave Fillo and land
        in that account, so this is outward-facing (Tier B). Writable keys per provider: google_sheets ``spreadsheetId``
        and ``sheetTabId`` (omit both to create a new spreadsheet); notion ``titleFieldId``; slack ``slackChannelId``
        and ``slackIncludeFieldIds``; hubspot ``hubspotEmailFieldId`` (required), ``hubspotMappings``,
        ``hubspotCreateMarketableContact``, ``hubspotCompany``, and ``hubspotDeal`` — HubSpot is saved whole, so a
        workflow you stop naming is dropped. An unknown key is a 400. Scope: integrations:manage.

        Args:
            form: A form id or slug.
            provider: google_sheets, notion, slack, or hubspot. Discord destinations are managed with ``fillo discord``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The form's destination after the change.

        Raises:
            ApiError: Invalid request (e.g. a body on a GET/DELETE, or a missing required query parameter). Missing,
                malformed, unknown, revoked, or expired key. The key is valid but lacks the required scope. No such
                resource in this project (returned instead of 403 for ids in other projects). The request was understood
                but refused in this state — an unmet precondition, or a confirm value that did not match. Nothing was
                changed. The request body exceeded the 16 KiB management cap. Per-key (120/min), per-workspace
                (240/min), or per-IP (300/min) rate limit exceeded. Retry after the Retry-After header. ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.set_form_integration(
                form, provider, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncIntegrationsWithRawResponse:
        return self._with_raw_response


class IntegrationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def detach_integration_connection(
        self, provider: Provider1OrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageIntegrationsConnectionsResponse, DetachIntegrationConnectionErrorBody]:
        """Detach the key's project from its selected account for one provider: every form in the project that sends to
        it stops delivering immediately. The workspace-level account survives for sibling projects — only the
        destinations pinned to that exact account in this project are removed. Outward-facing (Tier B): the key holder
        chose integrations:manage at mint. Scope: integrations:manage.

        Args:
            provider: notion, slack, hubspot, or discord.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/integrations/connections/{provider}"),
            path_params=[param[Provider1OrStr]("provider", provider)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageIntegrationsConnectionsResponse],
            error_mapper=detach_integration_connection_error_mapper,
            request_options=request_options,
        )

    def disable_form_integration(
        self, form: str, provider: ProviderOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FormIntegration, DisableFormIntegrationErrorBody]:
        """Stop sending this form's responses to the provider. Records already created stay where they are, and the
        workspace connection is untouched, which keeps this routine (Tier A). Scope: integrations:manage.

        Args:
            form: A form id or slug.
            provider: google_sheets, notion, slack, or hubspot. Discord destinations are managed with ``fillo discord``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/forms/{form}/integrations/{provider}"),
            path_params=[param[str]("form", form), param[ProviderOrStr]("provider", provider)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[FormIntegration],
            error_mapper=disable_form_integration_error_mapper,
            request_options=request_options,
        )

    def disconnect_discord_server(
        self,
        guild_id: str,
        body: ConfirmTarget | ConfirmTargetDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageIntegrationsDiscordServersResponse, DisconnectDiscordServerErrorBody]:
        """Disconnect one Discord server. Its guild connection and every channel webhook Fillo holds there go together,
        and their pinned form destinations cascade away across every project, so this is destructive (Tier C):
        ``confirm`` must equal the server id. Scopes: integrations:manage AND workspace:manage; the key acts as the
        human who minted it and is refused (403) once that person is no longer an owner or admin.

        Args:
            guild_id: A connected Discord server (guild) id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/integrations/discord/servers/{guildId}"),
            path_params=[param[str]("guildId", guild_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConfirmTarget | ConfirmTargetDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageIntegrationsDiscordServersResponse],
            error_mapper=disconnect_discord_server_error_mapper,
            request_options=request_options,
        )

    def get_form_integration(
        self, form: str, provider: ProviderOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FormIntegration, GetFormIntegrationErrorBody]:
        """Whether this form sends responses to the provider, and with what configuration. Scope: integrations:manage.

        Args:
            form: A form id or slug.
            provider: google_sheets, notion, slack, or hubspot. Discord destinations are managed with ``fillo discord``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms/{form}/integrations/{provider}"),
            path_params=[param[str]("form", form), param[ProviderOrStr]("provider", provider)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[FormIntegration],
            error_mapper=get_form_integration_error_mapper,
            request_options=request_options,
        )

    def list_hubspot_pipelines(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageIntegrationsHubspotPipelinesResponse, ListHubspotPipelinesErrorBody]:
        """Live Deal pipelines and their stages — the two ids a HubSpot Deal workflow needs. Archived pipelines and
        stages are omitted. Scope: integrations:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/integrations/hubspot/pipelines"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageIntegrationsHubspotPipelinesResponse],
            error_mapper=list_hubspot_pipelines_error_mapper,
            request_options=request_options,
        )

    def list_hubspot_properties(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageIntegrationsHubspotPropertiesResponse, ListHubspotPropertiesErrorBody]:
        """The connected account's writable Contact properties, so a mapping can be built without guessing internal
        names. ``email`` is handled separately and is not listed. Scope: integrations:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/integrations/hubspot/properties"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageIntegrationsHubspotPropertiesResponse],
            error_mapper=list_hubspot_properties_error_mapper,
            request_options=request_options,
        )

    def list_integration_connections(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[IntegrationConnections, ListIntegrationConnectionsErrorBody]:
        """The workspace's connected provider accounts, which one the key's project uses for each provider, and the
        connected Discord servers. ``label`` is also the exact string an account removal must confirm with. Scope:
        integrations:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/integrations/connections"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[IntegrationConnections],
            error_mapper=list_integration_connections_error_mapper,
            request_options=request_options,
        )

    def remove_integration_account(
        self, id_: str, body: ConfirmTarget | ConfirmTargetDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageIntegrationsAccountsResponse, RemoveIntegrationAccountErrorBody]:
        """Permanently remove one reusable provider account from the key's workspace. Its stored credential is revoked
        and every project selection and form destination pinned to it cascades away — across every project — so this is
        destructive (Tier C): ``confirm`` must equal the account's exact ``label`` from the connections listing. Scopes:
        integrations:manage AND workspace:manage; the key acts as the human who minted it and is refused (403) once that
        person is no longer an owner or admin.

        Args:
            id_: An integration account id from the connections listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/integrations/accounts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConfirmTarget | ConfirmTargetDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageIntegrationsAccountsResponse],
            error_mapper=remove_integration_account_error_mapper,
            request_options=request_options,
        )

    def rename_discord_channel(
        self,
        id_: str,
        body: ApiV1ManageIntegrationsDiscordAccountsRequest | ApiV1ManageIntegrationsDiscordAccountsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageIntegrationsDiscordAccountsResponse, RenameDiscordChannelErrorBody]:
        """Name, or with an empty value un-name, one connected Discord channel. Member-visible copy only — nothing
        re-delivers, so this is routine (Tier A). Scope: integrations:manage.

        Args:
            id_: A Discord account id from the connections listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/manage/integrations/discord/accounts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1ManageIntegrationsDiscordAccountsRequest | ApiV1ManageIntegrationsDiscordAccountsRequestDict
            ](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1ManageIntegrationsDiscordAccountsResponse],
            error_mapper=rename_discord_channel_error_mapper,
            request_options=request_options,
        )

    def select_integration_connection(
        self,
        provider: Provider1OrStr,
        body: ApiV1ManageIntegrationsConnectionsRequest | ApiV1ManageIntegrationsConnectionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IntegrationConnections, SelectIntegrationConnectionErrorBody]:
        """Point the key's project at one of the workspace's provider accounts. Accounts belong to the workspace and are
        selected per project, so one install can serve several projects. Scope: integrations:manage.

        Args:
            provider: notion, slack, hubspot, or discord.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/manage/integrations/connections/{provider}"),
            path_params=[param[Provider1OrStr]("provider", provider)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageIntegrationsConnectionsRequest | ApiV1ManageIntegrationsConnectionsRequestDict](
                body
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[IntegrationConnections],
            error_mapper=select_integration_connection_error_mapper,
            request_options=request_options,
        )

    def set_form_integration(
        self,
        form: str,
        provider: ProviderOrStr,
        *,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FormIntegration, SetFormIntegrationErrorBody]:
        """Start sending this form's responses to the provider, or change how. Respondent answers leave Fillo and land
        in that account, so this is outward-facing (Tier B). Writable keys per provider: google_sheets ``spreadsheetId``
        and ``sheetTabId`` (omit both to create a new spreadsheet); notion ``titleFieldId``; slack ``slackChannelId``
        and ``slackIncludeFieldIds``; hubspot ``hubspotEmailFieldId`` (required), ``hubspotMappings``,
        ``hubspotCreateMarketableContact``, ``hubspotCompany``, and ``hubspotDeal`` — HubSpot is saved whole, so a
        workflow you stop naming is dropped. An unknown key is a 400. Scope: integrations:manage.

        Args:
            form: A form id or slug.
            provider: google_sheets, notion, slack, or hubspot. Discord destinations are managed with ``fillo discord``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/manage/forms/{form}/integrations/{provider}"),
            path_params=[param[str]("form", form), param[ProviderOrStr]("provider", provider)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[FormIntegration],
            error_mapper=set_form_integration_error_mapper,
            request_options=request_options,
        )


class AsyncIntegrationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def detach_integration_connection(
        self, provider: Provider1OrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageIntegrationsConnectionsResponse, DetachIntegrationConnectionErrorBody]:
        """Detach the key's project from its selected account for one provider: every form in the project that sends to
        it stops delivering immediately. The workspace-level account survives for sibling projects — only the
        destinations pinned to that exact account in this project are removed. Outward-facing (Tier B): the key holder
        chose integrations:manage at mint. Scope: integrations:manage.

        Args:
            provider: notion, slack, hubspot, or discord.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/integrations/connections/{provider}"),
            path_params=[param[Provider1OrStr]("provider", provider)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageIntegrationsConnectionsResponse],
            error_mapper=detach_integration_connection_error_mapper,
            request_options=request_options,
        )

    async def disable_form_integration(
        self, form: str, provider: ProviderOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FormIntegration, DisableFormIntegrationErrorBody]:
        """Stop sending this form's responses to the provider. Records already created stay where they are, and the
        workspace connection is untouched, which keeps this routine (Tier A). Scope: integrations:manage.

        Args:
            form: A form id or slug.
            provider: google_sheets, notion, slack, or hubspot. Discord destinations are managed with ``fillo discord``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/forms/{form}/integrations/{provider}"),
            path_params=[param[str]("form", form), param[ProviderOrStr]("provider", provider)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[FormIntegration],
            error_mapper=disable_form_integration_error_mapper,
            request_options=request_options,
        )

    async def disconnect_discord_server(
        self,
        guild_id: str,
        body: ConfirmTarget | ConfirmTargetDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageIntegrationsDiscordServersResponse, DisconnectDiscordServerErrorBody]:
        """Disconnect one Discord server. Its guild connection and every channel webhook Fillo holds there go together,
        and their pinned form destinations cascade away across every project, so this is destructive (Tier C):
        ``confirm`` must equal the server id. Scopes: integrations:manage AND workspace:manage; the key acts as the
        human who minted it and is refused (403) once that person is no longer an owner or admin.

        Args:
            guild_id: A connected Discord server (guild) id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/integrations/discord/servers/{guildId}"),
            path_params=[param[str]("guildId", guild_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConfirmTarget | ConfirmTargetDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageIntegrationsDiscordServersResponse],
            error_mapper=disconnect_discord_server_error_mapper,
            request_options=request_options,
        )

    async def get_form_integration(
        self, form: str, provider: ProviderOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FormIntegration, GetFormIntegrationErrorBody]:
        """Whether this form sends responses to the provider, and with what configuration. Scope: integrations:manage.

        Args:
            form: A form id or slug.
            provider: google_sheets, notion, slack, or hubspot. Discord destinations are managed with ``fillo discord``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/forms/{form}/integrations/{provider}"),
            path_params=[param[str]("form", form), param[ProviderOrStr]("provider", provider)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[FormIntegration],
            error_mapper=get_form_integration_error_mapper,
            request_options=request_options,
        )

    async def list_hubspot_pipelines(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageIntegrationsHubspotPipelinesResponse, ListHubspotPipelinesErrorBody]:
        """Live Deal pipelines and their stages — the two ids a HubSpot Deal workflow needs. Archived pipelines and
        stages are omitted. Scope: integrations:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/integrations/hubspot/pipelines"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageIntegrationsHubspotPipelinesResponse],
            error_mapper=list_hubspot_pipelines_error_mapper,
            request_options=request_options,
        )

    async def list_hubspot_properties(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1ManageIntegrationsHubspotPropertiesResponse, ListHubspotPropertiesErrorBody]:
        """The connected account's writable Contact properties, so a mapping can be built without guessing internal
        names. ``email`` is handled separately and is not listed. Scope: integrations:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/integrations/hubspot/properties"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageIntegrationsHubspotPropertiesResponse],
            error_mapper=list_hubspot_properties_error_mapper,
            request_options=request_options,
        )

    async def list_integration_connections(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[IntegrationConnections, ListIntegrationConnectionsErrorBody]:
        """The workspace's connected provider accounts, which one the key's project uses for each provider, and the
        connected Discord servers. ``label`` is also the exact string an account removal must confirm with. Scope:
        integrations:manage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/manage/integrations/connections"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[IntegrationConnections],
            error_mapper=list_integration_connections_error_mapper,
            request_options=request_options,
        )

    async def remove_integration_account(
        self,
        id_: str,
        body: ConfirmTarget | ConfirmTargetDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageIntegrationsAccountsResponse, RemoveIntegrationAccountErrorBody]:
        """Permanently remove one reusable provider account from the key's workspace. Its stored credential is revoked
        and every project selection and form destination pinned to it cascades away — across every project — so this is
        destructive (Tier C): ``confirm`` must equal the account's exact ``label`` from the connections listing. Scopes:
        integrations:manage AND workspace:manage; the key acts as the human who minted it and is refused (403) once that
        person is no longer an owner or admin.

        Args:
            id_: An integration account id from the connections listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/manage/integrations/accounts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ConfirmTarget | ConfirmTargetDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageIntegrationsAccountsResponse],
            error_mapper=remove_integration_account_error_mapper,
            request_options=request_options,
        )

    async def rename_discord_channel(
        self,
        id_: str,
        body: ApiV1ManageIntegrationsDiscordAccountsRequest | ApiV1ManageIntegrationsDiscordAccountsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1ManageIntegrationsDiscordAccountsResponse, RenameDiscordChannelErrorBody]:
        """Name, or with an empty value un-name, one connected Discord channel. Member-visible copy only — nothing
        re-delivers, so this is routine (Tier A). Scope: integrations:manage.

        Args:
            id_: A Discord account id from the connections listing.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/manage/integrations/discord/accounts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                ApiV1ManageIntegrationsDiscordAccountsRequest | ApiV1ManageIntegrationsDiscordAccountsRequestDict
            ](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1ManageIntegrationsDiscordAccountsResponse],
            error_mapper=rename_discord_channel_error_mapper,
            request_options=request_options,
        )

    async def select_integration_connection(
        self,
        provider: Provider1OrStr,
        body: ApiV1ManageIntegrationsConnectionsRequest | ApiV1ManageIntegrationsConnectionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IntegrationConnections, SelectIntegrationConnectionErrorBody]:
        """Point the key's project at one of the workspace's provider accounts. Accounts belong to the workspace and are
        selected per project, so one install can serve several projects. Scope: integrations:manage.

        Args:
            provider: notion, slack, hubspot, or discord.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/manage/integrations/connections/{provider}"),
            path_params=[param[Provider1OrStr]("provider", provider)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1ManageIntegrationsConnectionsRequest | ApiV1ManageIntegrationsConnectionsRequestDict](
                body
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[IntegrationConnections],
            error_mapper=select_integration_connection_error_mapper,
            request_options=request_options,
        )

    async def set_form_integration(
        self,
        form: str,
        provider: ProviderOrStr,
        *,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FormIntegration, SetFormIntegrationErrorBody]:
        """Start sending this form's responses to the provider, or change how. Respondent answers leave Fillo and land
        in that account, so this is outward-facing (Tier B). Writable keys per provider: google_sheets ``spreadsheetId``
        and ``sheetTabId`` (omit both to create a new spreadsheet); notion ``titleFieldId``; slack ``slackChannelId``
        and ``slackIncludeFieldIds``; hubspot ``hubspotEmailFieldId`` (required), ``hubspotMappings``,
        ``hubspotCreateMarketableContact``, ``hubspotCompany``, and ``hubspotDeal`` — HubSpot is saved whole, so a
        workflow you stop naming is dropped. An unknown key is a 400. Scope: integrations:manage.

        Args:
            form: A form id or slug.
            provider: google_sheets, notion, slack, or hubspot. Discord destinations are managed with ``fillo discord``.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/manage/forms/{form}/integrations/{provider}"),
            path_params=[param[str]("form", form), param[ProviderOrStr]("provider", provider)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[FormIntegration],
            error_mapper=set_form_integration_error_mapper,
            request_options=request_options,
        )
