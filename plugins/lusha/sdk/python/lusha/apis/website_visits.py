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
from ..errors.get_website_visits_error import GetWebsiteVisitsErrorBody, get_website_visits_error_mapper
from ..models.website_visits_request import WebsiteVisitsRequest, WebsiteVisitsRequestDict
from ..models.website_visits_response import WebsiteVisitsResponse
from ..server.server import Server


class WebsiteVisits:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebsiteVisitsWithRawResponse(client, server, auth)

    def get_website_visits(
        self,
        body: WebsiteVisitsRequest | WebsiteVisitsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WebsiteVisitsResponse:
        """Returns companies ranked by website-visit signals for your tracked domains and date range.

        Domains must be configured for tracking in the Lusha dashboard — they are resolved to site IDs server-side. Each
        result combines a V3 company firmographic preview (same shape as Search Companies) with behavioral visit
        metrics.

        **Notes:**
        - Date range must be ≤ 3 months
        - If any requested domain is not configured for tracking, the entire request fails with ``400``
        - ``limit`` accepts 1–150

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Payment required -
                insufficient credits Forbidden - account inactive, V3 access not enabled, or plan does not include this
                feature Too many requests - rate limit exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_website_visits(body, request_options=request_options))

    @property
    def with_raw_response(self) -> WebsiteVisitsWithRawResponse:
        return self._with_raw_response


class AsyncWebsiteVisits:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebsiteVisitsWithRawResponse(client, server, auth)

    async def get_website_visits(
        self,
        body: WebsiteVisitsRequest | WebsiteVisitsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebsiteVisitsResponse:
        """Returns companies ranked by website-visit signals for your tracked domains and date range.

        Domains must be configured for tracking in the Lusha dashboard — they are resolved to site IDs server-side. Each
        result combines a V3 company firmographic preview (same shape as Search Companies) with behavioral visit
        metrics.

        **Notes:**
        - Date range must be ≤ 3 months
        - If any requested domain is not configured for tracking, the entire request fails with ``400``
        - ``limit`` accepts 1–150

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request - invalid input data Unauthorized - invalid or missing API key Payment required -
                insufficient credits Forbidden - account inactive, V3 access not enabled, or plan does not include this
                feature Too many requests - rate limit exceeded ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_website_visits(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncWebsiteVisitsWithRawResponse:
        return self._with_raw_response


class WebsiteVisitsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_website_visits(
        self,
        body: WebsiteVisitsRequest | WebsiteVisitsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WebsiteVisitsResponse, GetWebsiteVisitsErrorBody]:
        """Returns companies ranked by website-visit signals for your tracked domains and date range.

        Domains must be configured for tracking in the Lusha dashboard — they are resolved to site IDs server-side. Each
        result combines a V3 company firmographic preview (same shape as Search Companies) with behavioral visit
        metrics.

        **Notes:**
        - Date range must be ≤ 3 months
        - If any requested domain is not configured for tracking, the entire request fails with ``400``
        - ``limit`` accepts 1–150

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/website-visits"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WebsiteVisitsRequest | WebsiteVisitsRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[WebsiteVisitsResponse],
            error_mapper=get_website_visits_error_mapper,
            request_options=request_options,
        )


class AsyncWebsiteVisitsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_website_visits(
        self,
        body: WebsiteVisitsRequest | WebsiteVisitsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebsiteVisitsResponse, GetWebsiteVisitsErrorBody]:
        """Returns companies ranked by website-visit signals for your tracked domains and date range.

        Domains must be configured for tracking in the Lusha dashboard — they are resolved to site IDs server-side. Each
        result combines a V3 company firmographic preview (same shape as Search Companies) with behavioral visit
        metrics.

        **Notes:**
        - Date range must be ≤ 3 months
        - If any requested domain is not configured for tracking, the entire request fails with ``400``
        - ``limit`` accepts 1–150

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/companies/website-visits"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WebsiteVisitsRequest | WebsiteVisitsRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[WebsiteVisitsResponse],
            error_mapper=get_website_visits_error_mapper,
            request_options=request_options,
        )
