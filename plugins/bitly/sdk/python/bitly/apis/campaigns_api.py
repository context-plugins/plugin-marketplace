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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_campaign_error import CreateCampaignErrorBody, create_campaign_error_mapper
from ..errors.create_channel_error import CreateChannelErrorBody, create_channel_error_mapper
from ..errors.get_campaign_error import GetCampaignErrorBody, get_campaign_error_mapper
from ..errors.get_campaigns_error import GetCampaignsErrorBody, get_campaigns_error_mapper
from ..errors.get_channel_error import GetChannelErrorBody, get_channel_error_mapper
from ..errors.get_channels_error import GetChannelsErrorBody, get_channels_error_mapper
from ..errors.update_campaign_error import UpdateCampaignErrorBody, update_campaign_error_mapper
from ..errors.update_channel_error import UpdateChannelErrorBody, update_channel_error_mapper
from ..models.campaign import Campaign
from ..models.campaign_modify import CampaignModify, CampaignModifyDict
from ..models.campaigns import Campaigns
from ..models.channel import Channel
from ..models.channel_modify import ChannelModify, ChannelModifyDict
from ..models.channels import Channels
from ..server.server import Server


class CampaignsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CampaignsApiWithRawResponse(client, server, auth)

    def create_campaign(
        self, body: CampaignModify | CampaignModifyDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Campaign:
        """Creates a new campaign.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED
                INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(self._with_raw_response.create_campaign(body, request_options=request_options))

    def create_channel(
        self, body: ChannelModify | ChannelModifyDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Channel:
        """Creates a new channel.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED
                INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(self._with_raw_response.create_channel(body, request_options=request_options))

    def get_campaign(self, campaign_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> Campaign:
        """Returns details for a campaign.

        Args:
            campaign_guid: A GUID for a Bitly campaign
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: UPGRADE_REQUIRED FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(self._with_raw_response.get_campaign(campaign_guid, request_options=request_options))

    def get_campaigns(
        self, *, group_guid: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> Campaigns:
        """Returns the campaigns for the current authenticated user.

        Args:
            group_guid: A GUID for a Bitly group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND INTERNAL_ERROR BAD_GATEWAY
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_campaigns(group_guid=group_guid, request_options=request_options))

    def get_channel(self, channel_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> Channel:
        """Returns a channel's details.

        Args:
            channel_guid: A GUID for a Bitly Channel
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: UPGRADE_REQUIRED FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(self._with_raw_response.get_channel(channel_guid, request_options=request_options))

    def get_channels(
        self,
        *,
        group_guid: str | None = None,
        campaign_guid: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Channels:
        """Returns the channels available to a user.

        Args:
            group_guid: A GUID for a Bitly group
            campaign_guid: A GUID for a Bitly campaign
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: UPGRADE_REQUIRED FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_channels(
                group_guid=group_guid, campaign_guid=campaign_guid, request_options=request_options
            ),
        )

    def update_campaign(
        self,
        campaign_guid: str,
        body: CampaignModify | CampaignModifyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Campaign:
        """Updates a campaign's details.

        Args:
            campaign_guid: A GUID for a Bitly campaign
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED
                INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(self._with_raw_response.update_campaign(campaign_guid, body, request_options=request_options))

    def update_channel(
        self,
        channel_guid: str,
        body: ChannelModify | ChannelModifyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Channel:
        """Updates an existing channel.

        Args:
            channel_guid: A GUID for a Bitly Channel
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED
                INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(self._with_raw_response.update_channel(channel_guid, body, request_options=request_options))

    @property
    def with_raw_response(self) -> CampaignsApiWithRawResponse:
        return self._with_raw_response


class AsyncCampaignsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCampaignsApiWithRawResponse(client, server, auth)

    async def create_campaign(
        self, body: CampaignModify | CampaignModifyDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Campaign:
        """Creates a new campaign.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED
                INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(await self._with_raw_response.create_campaign(body, request_options=request_options))

    async def create_channel(
        self, body: ChannelModify | ChannelModifyDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Channel:
        """Creates a new channel.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED
                INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(await self._with_raw_response.create_channel(body, request_options=request_options))

    async def get_campaign(
        self, campaign_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Campaign:
        """Returns details for a campaign.

        Args:
            campaign_guid: A GUID for a Bitly campaign
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: UPGRADE_REQUIRED FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(await self._with_raw_response.get_campaign(campaign_guid, request_options=request_options))

    async def get_campaigns(
        self, *, group_guid: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Campaigns:
        """Returns the campaigns for the current authenticated user.

        Args:
            group_guid: A GUID for a Bitly group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND INTERNAL_ERROR BAD_GATEWAY
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_campaigns(group_guid=group_guid, request_options=request_options)
        )

    async def get_channel(
        self, channel_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Channel:
        """Returns a channel's details.

        Args:
            channel_guid: A GUID for a Bitly Channel
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: UPGRADE_REQUIRED FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(await self._with_raw_response.get_channel(channel_guid, request_options=request_options))

    async def get_channels(
        self,
        *,
        group_guid: str | None = None,
        campaign_guid: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Channels:
        """Returns the channels available to a user.

        Args:
            group_guid: A GUID for a Bitly group
            campaign_guid: A GUID for a Bitly campaign
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: UPGRADE_REQUIRED FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_channels(
                group_guid=group_guid, campaign_guid=campaign_guid, request_options=request_options
            ),
        )

    async def update_campaign(
        self,
        campaign_guid: str,
        body: CampaignModify | CampaignModifyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Campaign:
        """Updates a campaign's details.

        Args:
            campaign_guid: A GUID for a Bitly campaign
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED
                INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(
            await self._with_raw_response.update_campaign(campaign_guid, body, request_options=request_options)
        )

    async def update_channel(
        self,
        channel_guid: str,
        body: ChannelModify | ChannelModifyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Channel:
        """Updates an existing channel.

        Args:
            channel_guid: A GUID for a Bitly Channel
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED
                INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(await self._with_raw_response.update_channel(channel_guid, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCampaignsApiWithRawResponse:
        return self._with_raw_response


class CampaignsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_campaign(
        self, body: CampaignModify | CampaignModifyDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Campaign, CreateCampaignErrorBody]:
        """Creates a new campaign.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/campaigns"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CampaignModify | CampaignModifyDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Campaign],
            error_mapper=create_campaign_error_mapper,
            request_options=request_options,
        )

    def create_channel(
        self, body: ChannelModify | ChannelModifyDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Channel, CreateChannelErrorBody]:
        """Creates a new channel.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/channels"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ChannelModify | ChannelModifyDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Channel],
            error_mapper=create_channel_error_mapper,
            request_options=request_options,
        )

    def get_campaign(
        self, campaign_guid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Campaign, GetCampaignErrorBody]:
        """Returns details for a campaign.

        Args:
            campaign_guid: A GUID for a Bitly campaign
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/campaigns/{campaign_guid}"),
            path_params=[param[str]("campaign_guid", campaign_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Campaign],
            error_mapper=get_campaign_error_mapper,
            request_options=request_options,
        )

    def get_campaigns(
        self, *, group_guid: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Campaigns, GetCampaignsErrorBody]:
        """Returns the campaigns for the current authenticated user.

        Args:
            group_guid: A GUID for a Bitly group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/campaigns"),
            query_params=[param[str | None]("group_guid", group_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Campaigns],
            error_mapper=get_campaigns_error_mapper,
            request_options=request_options,
        )

    def get_channel(
        self, channel_guid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Channel, GetChannelErrorBody]:
        """Returns a channel's details.

        Args:
            channel_guid: A GUID for a Bitly Channel
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/channels/{channel_guid}"),
            path_params=[param[str]("channel_guid", channel_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Channel],
            error_mapper=get_channel_error_mapper,
            request_options=request_options,
        )

    def get_channels(
        self,
        *,
        group_guid: str | None = None,
        campaign_guid: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Channels, GetChannelsErrorBody]:
        """Returns the channels available to a user.

        Args:
            group_guid: A GUID for a Bitly group
            campaign_guid: A GUID for a Bitly campaign
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/channels"),
            query_params=[
                param[str | None]("group_guid", group_guid), param[str | None]("campaign_guid", campaign_guid)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Channels],
            error_mapper=get_channels_error_mapper,
            request_options=request_options,
        )

    def update_campaign(
        self,
        campaign_guid: str,
        body: CampaignModify | CampaignModifyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Campaign, UpdateCampaignErrorBody]:
        """Updates a campaign's details.

        Args:
            campaign_guid: A GUID for a Bitly campaign
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/campaigns/{campaign_guid}"),
            path_params=[param[str]("campaign_guid", campaign_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CampaignModify | CampaignModifyDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Campaign],
            error_mapper=update_campaign_error_mapper,
            request_options=request_options,
        )

    def update_channel(
        self,
        channel_guid: str,
        body: ChannelModify | ChannelModifyDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Channel, UpdateChannelErrorBody]:
        """Updates an existing channel.

        Args:
            channel_guid: A GUID for a Bitly Channel
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/channels/{channel_guid}"),
            path_params=[param[str]("channel_guid", channel_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ChannelModify | ChannelModifyDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Channel],
            error_mapper=update_channel_error_mapper,
            request_options=request_options,
        )


class AsyncCampaignsApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_campaign(
        self, body: CampaignModify | CampaignModifyDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Campaign, CreateCampaignErrorBody]:
        """Creates a new campaign.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/campaigns"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CampaignModify | CampaignModifyDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Campaign],
            error_mapper=create_campaign_error_mapper,
            request_options=request_options,
        )

    async def create_channel(
        self, body: ChannelModify | ChannelModifyDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Channel, CreateChannelErrorBody]:
        """Creates a new channel.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/channels"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ChannelModify | ChannelModifyDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Channel],
            error_mapper=create_channel_error_mapper,
            request_options=request_options,
        )

    async def get_campaign(
        self, campaign_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Campaign, GetCampaignErrorBody]:
        """Returns details for a campaign.

        Args:
            campaign_guid: A GUID for a Bitly campaign
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/campaigns/{campaign_guid}"),
            path_params=[param[str]("campaign_guid", campaign_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Campaign],
            error_mapper=get_campaign_error_mapper,
            request_options=request_options,
        )

    async def get_campaigns(
        self, *, group_guid: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Campaigns, GetCampaignsErrorBody]:
        """Returns the campaigns for the current authenticated user.

        Args:
            group_guid: A GUID for a Bitly group
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/campaigns"),
            query_params=[param[str | None]("group_guid", group_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Campaigns],
            error_mapper=get_campaigns_error_mapper,
            request_options=request_options,
        )

    async def get_channel(
        self, channel_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Channel, GetChannelErrorBody]:
        """Returns a channel's details.

        Args:
            channel_guid: A GUID for a Bitly Channel
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/channels/{channel_guid}"),
            path_params=[param[str]("channel_guid", channel_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Channel],
            error_mapper=get_channel_error_mapper,
            request_options=request_options,
        )

    async def get_channels(
        self,
        *,
        group_guid: str | None = None,
        campaign_guid: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Channels, GetChannelsErrorBody]:
        """Returns the channels available to a user.

        Args:
            group_guid: A GUID for a Bitly group
            campaign_guid: A GUID for a Bitly campaign
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/channels"),
            query_params=[
                param[str | None]("group_guid", group_guid), param[str | None]("campaign_guid", campaign_guid)
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Channels],
            error_mapper=get_channels_error_mapper,
            request_options=request_options,
        )

    async def update_campaign(
        self,
        campaign_guid: str,
        body: CampaignModify | CampaignModifyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Campaign, UpdateCampaignErrorBody]:
        """Updates a campaign's details.

        Args:
            campaign_guid: A GUID for a Bitly campaign
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/campaigns/{campaign_guid}"),
            path_params=[param[str]("campaign_guid", campaign_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CampaignModify | CampaignModifyDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Campaign],
            error_mapper=update_campaign_error_mapper,
            request_options=request_options,
        )

    async def update_channel(
        self,
        channel_guid: str,
        body: ChannelModify | ChannelModifyDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Channel, UpdateChannelErrorBody]:
        """Updates an existing channel.

        Args:
            channel_guid: A GUID for a Bitly Channel
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/channels/{channel_guid}"),
            path_params=[param[str]("channel_guid", channel_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ChannelModify | ChannelModifyDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Channel],
            error_mapper=update_channel_error_mapper,
            request_options=request_options,
        )
