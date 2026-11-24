from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_decoder,
    unwrap,
)
from ..errors.organization_display_rules_error import (
    OrganizationDisplayRulesErrorBody,
    organization_display_rules_error_mapper,
)
from ..errors.organization_export_error import OrganizationExportErrorBody, organization_export_error_mapper
from ..models.team_display_rules_response import TeamDisplayRulesResponse
from ..server.server import Server


class Organization:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OrganizationWithRawResponse(client, server, auth)

    def organization_display_rules(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> TeamDisplayRulesResponse:
        """Export a list of display rules.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful export todo

        Raises:
            ApiError: Invalid request ``error`` is ``TeamDisplayRules400Error1 | RawError``."""
        return unwrap(self._with_raw_response.organization_display_rules(request_options=request_options))

    def organization_export(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Export assets, spaces with documents, team and user data from Archbee given teamId. Use --output

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful export

        Raises:
            ApiError: Invalid request ``error`` is ``TeamExport400Error1 | RawError``."""
        return unwrap(self._with_raw_response.organization_export(request_options=request_options))

    @property
    def with_raw_response(self) -> OrganizationWithRawResponse:
        return self._with_raw_response


class AsyncOrganization:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOrganizationWithRawResponse(client, server, auth)

    async def organization_display_rules(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TeamDisplayRulesResponse:
        """Export a list of display rules.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful export todo

        Raises:
            ApiError: Invalid request ``error`` is ``TeamDisplayRules400Error1 | RawError``."""
        return unwrap(await self._with_raw_response.organization_display_rules(request_options=request_options))

    async def organization_export(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Export assets, spaces with documents, team and user data from Archbee given teamId. Use --output

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful export

        Raises:
            ApiError: Invalid request ``error`` is ``TeamExport400Error1 | RawError``."""
        return unwrap(await self._with_raw_response.organization_export(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncOrganizationWithRawResponse:
        return self._with_raw_response


class OrganizationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def organization_display_rules(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TeamDisplayRulesResponse, OrganizationDisplayRulesErrorBody]:
        """Export a list of display rules.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/team/display-rules"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[TeamDisplayRulesResponse],
            error_mapper=organization_display_rules_error_mapper,
            request_options=request_options,
        )

    def organization_export(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, OrganizationExportErrorBody]:
        """Export assets, spaces with documents, team and user data from Archbee given teamId. Use --output

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/team/export"),
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=organization_export_error_mapper,
            request_options=request_options,
        )


class AsyncOrganizationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def organization_display_rules(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TeamDisplayRulesResponse, OrganizationDisplayRulesErrorBody]:
        """Export a list of display rules.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/team/display-rules"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[TeamDisplayRulesResponse],
            error_mapper=organization_display_rules_error_mapper,
            request_options=request_options,
        )

    async def organization_export(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, OrganizationExportErrorBody]:
        """Export assets, spaces with documents, team and user data from Archbee given teamId. Use --output

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/team/export"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=organization_export_error_mapper,
            request_options=request_options,
        )
