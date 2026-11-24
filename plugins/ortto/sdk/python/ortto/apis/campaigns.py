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
    empty_response,
    json_body,
    param,
    unwrap,
)
from ..errors.get_campaign_calendar_error import GetCampaignCalendarErrorBody, get_campaign_calendar_error_mapper
from ..errors.get_campaign_report_error import GetCampaignReportErrorBody, get_campaign_report_error_mapper
from ..models.campaign_calendar_request import CampaignCalendarRequest, CampaignCalendarRequestDict
from ..models.campaign_reports_get_request import CampaignReportsGetRequest, CampaignReportsGetRequestDict
from ..server.server import Server


class Campaigns:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CampaignsWithRawResponse(client, server, auth)

    def get_campaign_calendar(
        self,
        body: CampaignCalendarRequest | CampaignCalendarRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching campaigns.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_campaign_calendar(body, request_options=request_options))

    def get_campaign_report(
        self,
        body: CampaignReportsGetRequest | CampaignReportsGetRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Campaign or asset report.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_campaign_report(body, request_options=request_options))

    @property
    def with_raw_response(self) -> CampaignsWithRawResponse:
        return self._with_raw_response


class AsyncCampaigns:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCampaignsWithRawResponse(client, server, auth)

    async def get_campaign_calendar(
        self,
        body: CampaignCalendarRequest | CampaignCalendarRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Matching campaigns.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_campaign_calendar(body, request_options=request_options))

    async def get_campaign_report(
        self,
        body: CampaignReportsGetRequest | CampaignReportsGetRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Campaign or asset report.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_campaign_report(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCampaignsWithRawResponse:
        return self._with_raw_response


class CampaignsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_campaign_calendar(
        self,
        body: CampaignCalendarRequest | CampaignCalendarRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetCampaignCalendarErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/campaign/calendar"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CampaignCalendarRequest | CampaignCalendarRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=empty_response,
            error_mapper=get_campaign_calendar_error_mapper,
            request_options=request_options,
        )

    def get_campaign_report(
        self,
        body: CampaignReportsGetRequest | CampaignReportsGetRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetCampaignReportErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/campaign/reports/get"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CampaignReportsGetRequest | CampaignReportsGetRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=empty_response,
            error_mapper=get_campaign_report_error_mapper,
            request_options=request_options,
        )


class AsyncCampaignsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_campaign_calendar(
        self,
        body: CampaignCalendarRequest | CampaignCalendarRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetCampaignCalendarErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/campaign/calendar"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CampaignCalendarRequest | CampaignCalendarRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_empty_response,
            error_mapper=get_campaign_calendar_error_mapper,
            request_options=request_options,
        )

    async def get_campaign_report(
        self,
        body: CampaignReportsGetRequest | CampaignReportsGetRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, GetCampaignReportErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/campaign/reports/get"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CampaignReportsGetRequest | CampaignReportsGetRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_empty_response,
            error_mapper=get_campaign_report_error_mapper,
            request_options=request_options,
        )
