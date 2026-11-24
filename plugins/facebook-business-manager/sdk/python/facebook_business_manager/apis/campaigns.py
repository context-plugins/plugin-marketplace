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
from ..errors.delete_campaign_error import DeleteCampaignErrorBody, delete_campaign_error_mapper
from ..errors.get_campaign_error import GetCampaignErrorBody, get_campaign_error_mapper
from ..errors.list_campaigns_error import ListCampaignsErrorBody, list_campaigns_error_mapper
from ..errors.update_campaign_error import UpdateCampaignErrorBody, update_campaign_error_mapper
from ..models.campaign import Campaign
from ..models.campaign_create import CampaignCreate, CampaignCreateDict
from ..models.campaign_list import CampaignList
from ..models.campaign_update import CampaignUpdate, CampaignUpdateDict
from ..models.create_response import CreateResponse
from ..models.success_response import SuccessResponse
from ..server.server import Server


class Campaigns:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CampaignsWithRawResponse(client, server, auth)

    def create_campaign(
        self,
        ad_account_id: str,
        body: CampaignCreate | CampaignCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateResponse:
        """Creates a new advertising campaign in the specified ad account. Requires at minimum a name, objective, and
        status.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Campaign created successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_campaign(ad_account_id, body, request_options=request_options))

    def delete_campaign(
        self, campaign_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SuccessResponse:
        """Deletes an advertising campaign. This sets the campaign status to DELETED and it will no longer serve ads.

        Args:
            campaign_id: The ID of the campaign
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Campaign deleted successfully

        Raises:
            ApiError: Invalid or expired access token The requested resource was not found ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.delete_campaign(campaign_id, request_options=request_options))

    def get_campaign(
        self, campaign_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> Campaign:
        """Retrieves the details of a specific campaign by its ID, including configuration, status, and objective.

        Args:
            campaign_id: The ID of the campaign
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved campaign details

        Raises:
            ApiError: Invalid or expired access token The requested resource was not found ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.get_campaign(campaign_id, fields=fields, request_options=request_options))

    def list_campaigns(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        filtering: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CampaignList:
        """Retrieves all campaigns for the specified ad account. Returns a paginated list of campaign objects with their
        configurations and status information.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            limit: Maximum number of objects to return per page. Default is 25.
            after: Cursor for pagination to retrieve the next page of results
            filtering: Filters to apply to the campaign list. Accepts JSON array of filter objects with field, operator,
                and value.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved list of campaigns

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_campaigns(
                ad_account_id,
                fields=fields,
                limit=limit,
                after=after,
                filtering=filtering,
                request_options=request_options,
            ),
        )

    def update_campaign(
        self,
        campaign_id: str,
        body: CampaignUpdate | CampaignUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessResponse:
        """Updates an existing campaign. Supports modifying name, status, budget, and other campaign-level settings.

        Args:
            campaign_id: The ID of the campaign
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Campaign updated successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_campaign(campaign_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> CampaignsWithRawResponse:
        return self._with_raw_response


class AsyncCampaigns:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCampaignsWithRawResponse(client, server, auth)

    async def create_campaign(
        self,
        ad_account_id: str,
        body: CampaignCreate | CampaignCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateResponse:
        """Creates a new advertising campaign in the specified ad account. Requires at minimum a name, objective, and
        status.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Campaign created successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_campaign(ad_account_id, body, request_options=request_options)
        )

    async def delete_campaign(
        self, campaign_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SuccessResponse:
        """Deletes an advertising campaign. This sets the campaign status to DELETED and it will no longer serve ads.

        Args:
            campaign_id: The ID of the campaign
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Campaign deleted successfully

        Raises:
            ApiError: Invalid or expired access token The requested resource was not found ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.delete_campaign(campaign_id, request_options=request_options))

    async def get_campaign(
        self, campaign_id: str, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Campaign:
        """Retrieves the details of a specific campaign by its ID, including configuration, status, and objective.

        Args:
            campaign_id: The ID of the campaign
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved campaign details

        Raises:
            ApiError: Invalid or expired access token The requested resource was not found ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_campaign(campaign_id, fields=fields, request_options=request_options)
        )

    async def list_campaigns(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        filtering: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CampaignList:
        """Retrieves all campaigns for the specified ad account. Returns a paginated list of campaign objects with their
        configurations and status information.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            limit: Maximum number of objects to return per page. Default is 25.
            after: Cursor for pagination to retrieve the next page of results
            filtering: Filters to apply to the campaign list. Accepts JSON array of filter objects with field, operator,
                and value.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved list of campaigns

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_campaigns(
                ad_account_id,
                fields=fields,
                limit=limit,
                after=after,
                filtering=filtering,
                request_options=request_options,
            ),
        )

    async def update_campaign(
        self,
        campaign_id: str,
        body: CampaignUpdate | CampaignUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessResponse:
        """Updates an existing campaign. Supports modifying name, status, budget, and other campaign-level settings.

        Args:
            campaign_id: The ID of the campaign
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Campaign updated successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_campaign(campaign_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCampaignsWithRawResponse:
        return self._with_raw_response


class CampaignsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_campaign(
        self,
        ad_account_id: str,
        body: CampaignCreate | CampaignCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResponse, CreateCampaignErrorBody]:
        """Creates a new advertising campaign in the specified ad account. Requires at minimum a name, objective, and
        status.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/act_{ad_account_id}/campaigns"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CampaignCreate | CampaignCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CreateResponse],
            error_mapper=create_campaign_error_mapper,
            request_options=request_options,
        )

    def delete_campaign(
        self, campaign_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessResponse, DeleteCampaignErrorBody]:
        """Deletes an advertising campaign. This sets the campaign status to DELETED and it will no longer serve ads.

        Args:
            campaign_id: The ID of the campaign
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{campaign_id}"),
            path_params=[param[str]("campaign_id", campaign_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessResponse],
            error_mapper=delete_campaign_error_mapper,
            request_options=request_options,
        )

    def get_campaign(
        self, campaign_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Campaign, GetCampaignErrorBody]:
        """Retrieves the details of a specific campaign by its ID, including configuration, status, and objective.

        Args:
            campaign_id: The ID of the campaign
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{campaign_id}"),
            path_params=[param[str]("campaign_id", campaign_id)],
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Campaign],
            error_mapper=get_campaign_error_mapper,
            request_options=request_options,
        )

    def list_campaigns(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        filtering: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CampaignList, ListCampaignsErrorBody]:
        """Retrieves all campaigns for the specified ad account. Returns a paginated list of campaign objects with their
        configurations and status information.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            limit: Maximum number of objects to return per page. Default is 25.
            after: Cursor for pagination to retrieve the next page of results
            filtering: Filters to apply to the campaign list. Accepts JSON array of filter objects with field, operator,
                and value.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/act_{ad_account_id}/campaigns"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            query_params=[
                param[str | None]("fields", fields),
                param[int | None]("limit", limit),
                param[str | None]("after", after),
                param[str | None]("filtering", filtering),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CampaignList],
            error_mapper=list_campaigns_error_mapper,
            request_options=request_options,
        )

    def update_campaign(
        self,
        campaign_id: str,
        body: CampaignUpdate | CampaignUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessResponse, UpdateCampaignErrorBody]:
        """Updates an existing campaign. Supports modifying name, status, budget, and other campaign-level settings.

        Args:
            campaign_id: The ID of the campaign
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{campaign_id}"),
            path_params=[param[str]("campaign_id", campaign_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CampaignUpdate | CampaignUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessResponse],
            error_mapper=update_campaign_error_mapper,
            request_options=request_options,
        )


class AsyncCampaignsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_campaign(
        self,
        ad_account_id: str,
        body: CampaignCreate | CampaignCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResponse, CreateCampaignErrorBody]:
        """Creates a new advertising campaign in the specified ad account. Requires at minimum a name, objective, and
        status.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/act_{ad_account_id}/campaigns"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CampaignCreate | CampaignCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CreateResponse],
            error_mapper=create_campaign_error_mapper,
            request_options=request_options,
        )

    async def delete_campaign(
        self, campaign_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessResponse, DeleteCampaignErrorBody]:
        """Deletes an advertising campaign. This sets the campaign status to DELETED and it will no longer serve ads.

        Args:
            campaign_id: The ID of the campaign
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{campaign_id}"),
            path_params=[param[str]("campaign_id", campaign_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessResponse],
            error_mapper=delete_campaign_error_mapper,
            request_options=request_options,
        )

    async def get_campaign(
        self, campaign_id: str, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Campaign, GetCampaignErrorBody]:
        """Retrieves the details of a specific campaign by its ID, including configuration, status, and objective.

        Args:
            campaign_id: The ID of the campaign
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{campaign_id}"),
            path_params=[param[str]("campaign_id", campaign_id)],
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Campaign],
            error_mapper=get_campaign_error_mapper,
            request_options=request_options,
        )

    async def list_campaigns(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        filtering: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CampaignList, ListCampaignsErrorBody]:
        """Retrieves all campaigns for the specified ad account. Returns a paginated list of campaign objects with their
        configurations and status information.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            limit: Maximum number of objects to return per page. Default is 25.
            after: Cursor for pagination to retrieve the next page of results
            filtering: Filters to apply to the campaign list. Accepts JSON array of filter objects with field, operator,
                and value.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/act_{ad_account_id}/campaigns"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            query_params=[
                param[str | None]("fields", fields),
                param[int | None]("limit", limit),
                param[str | None]("after", after),
                param[str | None]("filtering", filtering),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CampaignList],
            error_mapper=list_campaigns_error_mapper,
            request_options=request_options,
        )

    async def update_campaign(
        self,
        campaign_id: str,
        body: CampaignUpdate | CampaignUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessResponse, UpdateCampaignErrorBody]:
        """Updates an existing campaign. Supports modifying name, status, budget, and other campaign-level settings.

        Args:
            campaign_id: The ID of the campaign
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{campaign_id}"),
            path_params=[param[str]("campaign_id", campaign_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CampaignUpdate | CampaignUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessResponse],
            error_mapper=update_campaign_error_mapper,
            request_options=request_options,
        )
