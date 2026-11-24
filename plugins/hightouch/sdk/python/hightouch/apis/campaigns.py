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
from ..errors.get_send_statuses_error import GetSendStatusesErrorBody, get_send_statuses_error_mapper
from ..errors.trigger_campaign_error import TriggerCampaignErrorBody, trigger_campaign_error_mapper
from ..models.batch_send_status_request import BatchSendStatusRequest, BatchSendStatusRequestDict
from ..models.batch_send_status_response import BatchSendStatusResponse
from ..models.start_campaign_request import StartCampaignRequest, StartCampaignRequestDict
from ..models.unions.campaigns_trigger_response import CampaignsTriggerResponse
from ..server.server import Server


class Campaigns:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CampaignsWithRawResponse(client, server, auth)

    def get_send_statuses(
        self,
        campaign_id: str,
        body: BatchSendStatusRequest | BatchSendStatusRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BatchSendStatusResponse:
        """Get the delivery status of up to 100 sends in a single request, using the ``sendId`` values returned from the
        start endpoint. Prefer this over polling the single-send endpoint once per ``sendId``.

        Args:
            campaign_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.get_send_statuses(campaign_id, body, request_options=request_options))

    def trigger_campaign(
        self,
        campaign_id: str,
        body: StartCampaignRequest | StartCampaignRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CampaignsTriggerResponse:
        """Start an API-triggered campaign: send to the given recipients.

        Args:
            campaign_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad Request Unauthorized Campaign not found Validation Failed Rate limited Something went wrong
                ``error`` is ``TriggerErrorResponse | ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.trigger_campaign(campaign_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> CampaignsWithRawResponse:
        return self._with_raw_response


class AsyncCampaigns:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCampaignsWithRawResponse(client, server, auth)

    async def get_send_statuses(
        self,
        campaign_id: str,
        body: BatchSendStatusRequest | BatchSendStatusRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BatchSendStatusResponse:
        """Get the delivery status of up to 100 sends in a single request, using the ``sendId`` values returned from the
        start endpoint. Prefer this over polling the single-send endpoint once per ``sendId``.

        Args:
            campaign_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(
            await self._with_raw_response.get_send_statuses(campaign_id, body, request_options=request_options)
        )

    async def trigger_campaign(
        self,
        campaign_id: str,
        body: StartCampaignRequest | StartCampaignRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CampaignsTriggerResponse:
        """Start an API-triggered campaign: send to the given recipients.

        Args:
            campaign_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad Request Unauthorized Campaign not found Validation Failed Rate limited Something went wrong
                ``error`` is ``TriggerErrorResponse | ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(
            await self._with_raw_response.trigger_campaign(campaign_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCampaignsWithRawResponse:
        return self._with_raw_response


class CampaignsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_send_statuses(
        self,
        campaign_id: str,
        body: BatchSendStatusRequest | BatchSendStatusRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchSendStatusResponse, GetSendStatusesErrorBody]:
        """Get the delivery status of up to 100 sends in a single request, using the ``sendId`` values returned from the
        start endpoint. Prefer this over polling the single-send endpoint once per ``sendId``.

        Args:
            campaign_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/campaigns/{campaignId}/sends/batch-get"),
            path_params=[param[str]("campaignId", campaign_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchSendStatusRequest | BatchSendStatusRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BatchSendStatusResponse],
            error_mapper=get_send_statuses_error_mapper,
            request_options=request_options,
        )

    def trigger_campaign(
        self,
        campaign_id: str,
        body: StartCampaignRequest | StartCampaignRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CampaignsTriggerResponse, TriggerCampaignErrorBody]:
        """Start an API-triggered campaign: send to the given recipients.

        Args:
            campaign_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/campaigns/{campaignId}/trigger"),
            path_params=[param[str]("campaignId", campaign_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartCampaignRequest | StartCampaignRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CampaignsTriggerResponse],
            error_mapper=trigger_campaign_error_mapper,
            request_options=request_options,
        )


class AsyncCampaignsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_send_statuses(
        self,
        campaign_id: str,
        body: BatchSendStatusRequest | BatchSendStatusRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchSendStatusResponse, GetSendStatusesErrorBody]:
        """Get the delivery status of up to 100 sends in a single request, using the ``sendId`` values returned from the
        start endpoint. Prefer this over polling the single-send endpoint once per ``sendId``.

        Args:
            campaign_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/campaigns/{campaignId}/sends/batch-get"),
            path_params=[param[str]("campaignId", campaign_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchSendStatusRequest | BatchSendStatusRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BatchSendStatusResponse],
            error_mapper=get_send_statuses_error_mapper,
            request_options=request_options,
        )

    async def trigger_campaign(
        self,
        campaign_id: str,
        body: StartCampaignRequest | StartCampaignRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CampaignsTriggerResponse, TriggerCampaignErrorBody]:
        """Start an API-triggered campaign: send to the given recipients.

        Args:
            campaign_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/campaigns/{campaignId}/trigger"),
            path_params=[param[str]("campaignId", campaign_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartCampaignRequest | StartCampaignRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CampaignsTriggerResponse],
            error_mapper=trigger_campaign_error_mapper,
            request_options=request_options,
        )
