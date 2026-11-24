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
    json_decoder,
    param,
    unwrap,
)
from ..errors.campaigns_members_destroy_error import (
    CampaignsMembersDestroyErrorBody,
    campaigns_members_destroy_error_mapper,
)
from ..errors.campaigns_members_index_error import CampaignsMembersIndexErrorBody, campaigns_members_index_error_mapper
from ..errors.campaigns_members_show_error import CampaignsMembersShowErrorBody, campaigns_members_show_error_mapper
from ..models.campaign_member_resource import CampaignMemberResource
from ..models.v1_campaigns_members_response import V1CampaignsMembersResponse
from ..server.server import Server


class CampaignMembers:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CampaignMembersWithRawResponse(client, server, auth)

    def campaigns_members_destroy(
        self, campaign: int, member: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``DELETE`` request.

        Args:
            campaign: The campaign ID
            member: The member ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Any`` response.

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(
            self._with_raw_response.campaigns_members_destroy(campaign, member, request_options=request_options)
        )

    def campaigns_members_index(
        self, campaign: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CampaignsMembersResponse:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``CampaignMemberResource``

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(self._with_raw_response.campaigns_members_index(campaign, request_options=request_options))

    def campaigns_members_show(
        self, campaign: int, member: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> CampaignMemberResource:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            member: The member ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignMemberResource``

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(self._with_raw_response.campaigns_members_show(campaign, member, request_options=request_options))

    @property
    def with_raw_response(self) -> CampaignMembersWithRawResponse:
        return self._with_raw_response


class AsyncCampaignMembers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCampaignMembersWithRawResponse(client, server, auth)

    async def campaigns_members_destroy(
        self, campaign: int, member: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``DELETE`` request.

        Args:
            campaign: The campaign ID
            member: The member ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Any`` response.

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(
            await self._with_raw_response.campaigns_members_destroy(campaign, member, request_options=request_options)
        )

    async def campaigns_members_index(
        self, campaign: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CampaignsMembersResponse:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``CampaignMemberResource``

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(await self._with_raw_response.campaigns_members_index(campaign, request_options=request_options))

    async def campaigns_members_show(
        self, campaign: int, member: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CampaignMemberResource:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            member: The member ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignMemberResource``

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(
            await self._with_raw_response.campaigns_members_show(campaign, member, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCampaignMembersWithRawResponse:
        return self._with_raw_response


class CampaignMembersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def campaigns_members_destroy(
        self, campaign: int, member: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, CampaignsMembersDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            campaign: The campaign ID
            member: The member ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/campaigns/{campaign}/members/{member}"),
            path_params=[param[int]("campaign", campaign), param[int]("member", member)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=json_decoder[Any],
            error_mapper=campaigns_members_destroy_error_mapper,
            request_options=request_options,
        )

    def campaigns_members_index(
        self, campaign: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CampaignsMembersResponse, CampaignsMembersIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns/{campaign}/members"),
            path_params=[param[int]("campaign", campaign)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[V1CampaignsMembersResponse],
            error_mapper=campaigns_members_index_error_mapper,
            request_options=request_options,
        )

    def campaigns_members_show(
        self, campaign: int, member: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CampaignMemberResource, CampaignsMembersShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            member: The member ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns/{campaign}/members/{member}"),
            path_params=[param[int]("campaign", campaign), param[int]("member", member)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[CampaignMemberResource],
            error_mapper=campaigns_members_show_error_mapper,
            request_options=request_options,
        )


class AsyncCampaignMembersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def campaigns_members_destroy(
        self, campaign: int, member: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, CampaignsMembersDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            campaign: The campaign ID
            member: The member ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/campaigns/{campaign}/members/{member}"),
            path_params=[param[int]("campaign", campaign), param[int]("member", member)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[Any],
            error_mapper=campaigns_members_destroy_error_mapper,
            request_options=request_options,
        )

    async def campaigns_members_index(
        self, campaign: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CampaignsMembersResponse, CampaignsMembersIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns/{campaign}/members"),
            path_params=[param[int]("campaign", campaign)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[V1CampaignsMembersResponse],
            error_mapper=campaigns_members_index_error_mapper,
            request_options=request_options,
        )

    async def campaigns_members_show(
        self, campaign: int, member: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CampaignMemberResource, CampaignsMembersShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            member: The member ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns/{campaign}/members/{member}"),
            path_params=[param[int]("campaign", campaign), param[int]("member", member)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[CampaignMemberResource],
            error_mapper=campaigns_members_show_error_mapper,
            request_options=request_options,
        )
