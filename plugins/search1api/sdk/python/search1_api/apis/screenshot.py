from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileResponse,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileResponse,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_file_decoder,
    file_decoder,
    json_body,
    param,
    unwrap,
)
from ..errors.screenshot_error import ScreenshotErrorBody, screenshot_error_mapper
from ..models.screenshot_request import ScreenshotRequest, ScreenshotRequestDict
from ..server.server import Server


class Screenshot:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ScreenshotWithRawResponse(client, server, auth)

    def screenshot(
        self, body: ScreenshotRequest | ScreenshotRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Render a public webpage as a PNG, JPEG, or WebP image. Use it when appearance is the point — layout checks,
        visual previews, or content that does not survive text extraction — and control the viewport, when the page
        counts as ready, and whether to capture the full document or a single element by CSS selector. When you want the
        page's text instead, call POST /crawl. Costs 2 credits per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Payment Required Forbidden Validation Error Too Many Requests Internal
                Server Error Bad Gateway Service Unavailable Gateway Timeout ``error`` is ``ApiErrorModel |
                RawError``."""
        return unwrap(self._with_raw_response.screenshot(body, request_options=request_options))

    @property
    def with_raw_response(self) -> ScreenshotWithRawResponse:
        return self._with_raw_response


class AsyncScreenshot:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncScreenshotWithRawResponse(client, server, auth)

    async def screenshot(
        self,
        body: ScreenshotRequest | ScreenshotRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Render a public webpage as a PNG, JPEG, or WebP image. Use it when appearance is the point — layout checks,
        visual previews, or content that does not survive text extraction — and control the viewport, when the page
        counts as ready, and whether to capture the full document or a single element by CSS selector. When you want the
        page's text instead, call POST /crawl. Costs 2 credits per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Payment Required Forbidden Validation Error Too Many Requests Internal
                Server Error Bad Gateway Service Unavailable Gateway Timeout ``error`` is ``ApiErrorModel |
                RawError``."""
        return unwrap(await self._with_raw_response.screenshot(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncScreenshotWithRawResponse:
        return self._with_raw_response


class ScreenshotWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def screenshot(
        self, body: ScreenshotRequest | ScreenshotRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, ScreenshotErrorBody]:
        """Render a public webpage as a PNG, JPEG, or WebP image. Use it when appearance is the point — layout checks,
        visual previews, or content that does not survive text extraction — and control the viewport, when the page
        counts as ready, and whether to capture the full document or a single element by CSS selector. When you want the
        page's text instead, call POST /crawl. Costs 2 credits per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/screenshot"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScreenshotRequest | ScreenshotRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=file_decoder,
            error_mapper=screenshot_error_mapper,
            request_options=request_options,
        )


class AsyncScreenshotWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def screenshot(
        self,
        body: ScreenshotRequest | ScreenshotRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, ScreenshotErrorBody]:
        """Render a public webpage as a PNG, JPEG, or WebP image. Use it when appearance is the point — layout checks,
        visual previews, or content that does not survive text extraction — and control the viewport, when the page
        counts as ready, and whether to capture the full document or a single element by CSS selector. When you want the
        page's text instead, call POST /crawl. Costs 2 credits per request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/screenshot"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScreenshotRequest | ScreenshotRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_file_decoder,
            error_mapper=screenshot_error_mapper,
            request_options=request_options,
        )
