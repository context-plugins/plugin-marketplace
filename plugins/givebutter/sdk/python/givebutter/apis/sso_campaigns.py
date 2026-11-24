from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.sso_campaigns_show_error import SsoCampaignsShowErrorBody, sso_campaigns_show_error_mapper
from ..models.campaign_resource import CampaignResource
from ..server.server import Server


class SsoCampaigns:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SsoCampaignsWithRawResponse(client, server, auth)

    def sso_campaigns_show(
        self, campaign: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> CampaignResource:
        """Send a ``GET`` request.

        Args:
            campaign: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignResource``

        Raises:
            ApiError: Unauthenticated ``error`` is ``AuthenticationException1 | RawError``."""
        return unwrap(self._with_raw_response.sso_campaigns_show(campaign, request_options=request_options))

    @property
    def with_raw_response(self) -> SsoCampaignsWithRawResponse:
        return self._with_raw_response


class AsyncSsoCampaigns:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSsoCampaignsWithRawResponse(client, server, auth)

    async def sso_campaigns_show(
        self, campaign: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CampaignResource:
        """Send a ``GET`` request.

        Args:
            campaign: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignResource``

        Raises:
            ApiError: Unauthenticated ``error`` is ``AuthenticationException1 | RawError``."""
        return unwrap(await self._with_raw_response.sso_campaigns_show(campaign, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSsoCampaignsWithRawResponse:
        return self._with_raw_response


class SsoCampaignsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def sso_campaigns_show(
        self, campaign: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CampaignResource, SsoCampaignsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sso/v1/campaigns/{campaign}"),
            path_params=[param[int]("campaign", campaign)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[CampaignResource],
            error_mapper=sso_campaigns_show_error_mapper,
            request_options=request_options,
        )


class AsyncSsoCampaignsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def sso_campaigns_show(
        self, campaign: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CampaignResource, SsoCampaignsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sso/v1/campaigns/{campaign}"),
            path_params=[param[int]("campaign", campaign)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[CampaignResource],
            error_mapper=sso_campaigns_show_error_mapper,
            request_options=request_options,
        )
