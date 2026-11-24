from __future__ import annotations

from uuid import UUID, uuid4

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
    param,
    unwrap,
)
from ..errors.campaigns_teams_destroy_error import CampaignsTeamsDestroyErrorBody, campaigns_teams_destroy_error_mapper
from ..errors.campaigns_teams_index_error import CampaignsTeamsIndexErrorBody, campaigns_teams_index_error_mapper
from ..errors.campaigns_teams_show_error import CampaignsTeamsShowErrorBody, campaigns_teams_show_error_mapper
from ..models.campaign_team_resource import CampaignTeamResource
from ..models.v1_campaigns_teams_response import V1CampaignsTeamsResponse
from ..server.server import Server


class CampaignTeams:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CampaignTeamsWithRawResponse(client, server, auth)

    def campaigns_teams_destroy(
        self, campaign: int, team: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            campaign: The campaign ID
            team: The team ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(self._with_raw_response.campaigns_teams_destroy(campaign, team, request_options=request_options))

    def campaigns_teams_index(
        self, campaign: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CampaignsTeamsResponse:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``CampaignTeamResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(self._with_raw_response.campaigns_teams_index(campaign, request_options=request_options))

    def campaigns_teams_show(
        self, campaign: int, team: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> CampaignTeamResource:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            team: The team ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignTeamResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(self._with_raw_response.campaigns_teams_show(campaign, team, request_options=request_options))

    @property
    def with_raw_response(self) -> CampaignTeamsWithRawResponse:
        return self._with_raw_response


class AsyncCampaignTeams:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCampaignTeamsWithRawResponse(client, server, auth)

    async def campaigns_teams_destroy(
        self, campaign: int, team: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            campaign: The campaign ID
            team: The team ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.campaigns_teams_destroy(campaign, team, request_options=request_options)
        )

    async def campaigns_teams_index(
        self, campaign: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CampaignsTeamsResponse:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``CampaignTeamResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(await self._with_raw_response.campaigns_teams_index(campaign, request_options=request_options))

    async def campaigns_teams_show(
        self, campaign: int, team: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CampaignTeamResource:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            team: The team ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignTeamResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.campaigns_teams_show(campaign, team, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCampaignTeamsWithRawResponse:
        return self._with_raw_response


class CampaignTeamsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def campaigns_teams_destroy(
        self, campaign: int, team: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CampaignsTeamsDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            campaign: The campaign ID
            team: The team ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/campaigns/{campaign}/teams/{team}"),
            path_params=[param[int]("campaign", campaign), param[int]("team", team)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=empty_response,
            error_mapper=campaigns_teams_destroy_error_mapper,
            request_options=request_options,
        )

    def campaigns_teams_index(
        self, campaign: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CampaignsTeamsResponse, CampaignsTeamsIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns/{campaign}/teams"),
            path_params=[param[int]("campaign", campaign)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[V1CampaignsTeamsResponse],
            error_mapper=campaigns_teams_index_error_mapper,
            request_options=request_options,
        )

    def campaigns_teams_show(
        self, campaign: int, team: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CampaignTeamResource, CampaignsTeamsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            team: The team ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns/{campaign}/teams/{team}"),
            path_params=[param[int]("campaign", campaign), param[int]("team", team)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[CampaignTeamResource],
            error_mapper=campaigns_teams_show_error_mapper,
            request_options=request_options,
        )


class AsyncCampaignTeamsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def campaigns_teams_destroy(
        self, campaign: int, team: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CampaignsTeamsDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            campaign: The campaign ID
            team: The team ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/campaigns/{campaign}/teams/{team}"),
            path_params=[param[int]("campaign", campaign), param[int]("team", team)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=async_empty_response,
            error_mapper=campaigns_teams_destroy_error_mapper,
            request_options=request_options,
        )

    async def campaigns_teams_index(
        self, campaign: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CampaignsTeamsResponse, CampaignsTeamsIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns/{campaign}/teams"),
            path_params=[param[int]("campaign", campaign)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[V1CampaignsTeamsResponse],
            error_mapper=campaigns_teams_index_error_mapper,
            request_options=request_options,
        )

    async def campaigns_teams_show(
        self, campaign: int, team: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CampaignTeamResource, CampaignsTeamsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            team: The team ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns/{campaign}/teams/{team}"),
            path_params=[param[int]("campaign", campaign), param[int]("team", team)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[CampaignTeamResource],
            error_mapper=campaigns_teams_show_error_mapper,
            request_options=request_options,
        )
