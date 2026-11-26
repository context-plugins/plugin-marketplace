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
from ..errors.post_management_v1_campaign_error import (
    PostManagementV1CampaignErrorBody,
    post_management_v1_campaign_error_mapper,
)
from ..errors.post_management_v1_campaigns_error import (
    PostManagementV1CampaignsErrorBody,
    post_management_v1_campaigns_error_mapper,
)
from ..models.campaign_output import CampaignOutput
from ..models.create_campaign_request import CreateCampaignRequest, CreateCampaignRequestDict
from ..models.list_campaigns_request import ListCampaignsRequest, ListCampaignsRequestDict
from ..server.server import Server


class Campaigns:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CampaignsWithRawResponse(client, server, auth)

    def post_management_v1_campaign(
        self,
        *,
        body: CreateCampaignRequest | CreateCampaignRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CampaignOutput:
        """Typically, we automatically track campaigns in justtrack when we receive the first click or impression.
        However, you can also use this API to create a campaign manually.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Internal server error. Please try again, or contact us at support@justtrack.io if the error
                persists. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_management_v1_campaign(body=body, request_options=request_options))

    def post_management_v1_campaigns(
        self,
        *,
        body: ListCampaignsRequest | ListCampaignsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CampaignOutput:
        """Get a paginated list of campaigns for your organization.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Internal server error. Please try again, or contact us at support@justtrack.io if the error
                persists. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_management_v1_campaigns(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> CampaignsWithRawResponse:
        return self._with_raw_response


class AsyncCampaigns:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCampaignsWithRawResponse(client, server, auth)

    async def post_management_v1_campaign(
        self,
        *,
        body: CreateCampaignRequest | CreateCampaignRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CampaignOutput:
        """Typically, we automatically track campaigns in justtrack when we receive the first click or impression.
        However, you can also use this API to create a campaign manually.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Internal server error. Please try again, or contact us at support@justtrack.io if the error
                persists. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_management_v1_campaign(body=body, request_options=request_options)
        )

    async def post_management_v1_campaigns(
        self,
        *,
        body: ListCampaignsRequest | ListCampaignsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CampaignOutput:
        """Get a paginated list of campaigns for your organization.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Internal server error. Please try again, or contact us at support@justtrack.io if the error
                persists. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_management_v1_campaigns(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCampaignsWithRawResponse:
        return self._with_raw_response


class CampaignsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def post_management_v1_campaign(
        self,
        *,
        body: CreateCampaignRequest | CreateCampaignRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CampaignOutput, PostManagementV1CampaignErrorBody]:
        """Typically, we automatically track campaigns in justtrack when we receive the first click or impression.
        However, you can also use this API to create a campaign manually.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_management_app_partner_connection_api("/management/v1/campaign"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCampaignRequest | CreateCampaignRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[CampaignOutput],
            error_mapper=post_management_v1_campaign_error_mapper,
            request_options=request_options,
        )

    def post_management_v1_campaigns(
        self,
        *,
        body: ListCampaignsRequest | ListCampaignsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CampaignOutput, PostManagementV1CampaignsErrorBody]:
        """Get a paginated list of campaigns for your organization.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_management_app_partner_connection_api("/management/v1/campaigns"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListCampaignsRequest | ListCampaignsRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[CampaignOutput],
            error_mapper=post_management_v1_campaigns_error_mapper,
            request_options=request_options,
        )


class AsyncCampaignsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def post_management_v1_campaign(
        self,
        *,
        body: CreateCampaignRequest | CreateCampaignRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CampaignOutput, PostManagementV1CampaignErrorBody]:
        """Typically, we automatically track campaigns in justtrack when we receive the first click or impression.
        However, you can also use this API to create a campaign manually.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_management_app_partner_connection_api("/management/v1/campaign"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCampaignRequest | CreateCampaignRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[CampaignOutput],
            error_mapper=post_management_v1_campaign_error_mapper,
            request_options=request_options,
        )

    async def post_management_v1_campaigns(
        self,
        *,
        body: ListCampaignsRequest | ListCampaignsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CampaignOutput, PostManagementV1CampaignsErrorBody]:
        """Get a paginated list of campaigns for your organization.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_management_app_partner_connection_api("/management/v1/campaigns"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListCampaignsRequest | ListCampaignsRequestDict | None](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[CampaignOutput],
            error_mapper=post_management_v1_campaigns_error_mapper,
            request_options=request_options,
        )
