from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncFileResponse,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileResponse,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_file_decoder,
    async_json_decoder,
    file_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_render_link_error import CreateRenderLinkErrorBody, create_render_link_error_mapper
from ..errors.extract_content_error import ExtractContentErrorBody, extract_content_error_mapper
from ..errors.get_screenshot_error import GetScreenshotErrorBody, get_screenshot_error_mapper
from ..errors.post_screenshot_error import PostScreenshotErrorBody, post_screenshot_error_mapper
from ..errors.post_screenshot_json_error import PostScreenshotJsonErrorBody, post_screenshot_json_error_mapper
from ..errors.render_artifact_error import RenderArtifactErrorBody, render_artifact_error_mapper
from ..errors.serve_render_link_error import ServeRenderLinkErrorBody, serve_render_link_error_mapper
from ..models.enums.device1 import Device1OrStr
from ..models.enums.format1 import Format1, Format1OrStr
from ..models.enums.wait_until1 import WaitUntil1, WaitUntil1OrStr
from ..models.screenshot_json_response import ScreenshotJsonResponse
from ..models.screenshot_request import ScreenshotRequest, ScreenshotRequestDict
from ..models.v1_artifact_request import V1ArtifactRequest, V1ArtifactRequestDict
from ..models.v1_artifact_response import V1ArtifactResponse
from ..models.v1_extract_request import V1ExtractRequest, V1ExtractRequestDict
from ..models.v1_extract_response import V1ExtractResponse
from ..models.v1_render_link_request import V1RenderLinkRequest, V1RenderLinkRequestDict
from ..models.v1_render_link_response import V1RenderLinkResponse
from ..server.server import Server


class Screenshot:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ScreenshotWithRawResponse(client, server, auth)

    def create_render_link(
        self,
        body: V1RenderLinkRequest | V1RenderLinkRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V1RenderLinkResponse:
        """Returns a self-contained, signed URL you can paste straight into `` (or an ``). No backend or storage on your
        side: ``GET /v1/render`` renders it on the first request, caches the result in R2 under a deterministic key, and
        serves the cached copy on every repeat — so a widely-shared link costs one render, not one per crawl. The link
        encodes the (signed, tamper-proof) render params, the owning account, and an expiry. Credits are charged to the
        link owner on each cache-miss render only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Signed render link

        Raises:
            ApiError: Invalid parameters (async/webhook/extract/geo are not valid on a render link) Minted render-link
                URL exceeds the size cap (PAYLOAD_TOO_LARGE). ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_render_link(body, request_options=request_options))

    def extract_content(
        self, body: V1ExtractRequest | V1ExtractRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1ExtractResponse:
        """Turns a single URL into clean reader-mode content — Markdown, JSON, or article HTML — pulled from the
        fully-rendered page (so it works on JavaScript-heavy sites). Text only; for image + text in one call use ``POST
        /v1/screenshot/json`` with ``extract: true``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extracted content

        Raises:
            ApiError: Invalid request parameters Extracted content exceeds the size cap No article-like content found to
                extract ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.extract_content(body, request_options=request_options))

    def get_screenshot(
        self,
        url: str,
        *,
        format_: Format1OrStr | None = Format1.PNG,
        width: int | None = 1280,
        height: int | None = 800,
        full_page: bool | None = False,
        quality: int | None = None,
        delay: int | None = 0,
        dark_mode: bool | None = False,
        device_scale_factor: float | None = 2.0,
        block_ads: bool | None = True,
        timeout: int | None = 30,
        wait_until: WaitUntil1OrStr | None = WaitUntil1.NETWORKIDLE2,
        wait_for_selector: str | None = None,
        best_attempt: bool | None = True,
        selector: str | None = None,
        device: Device1OrStr | None = None,
        block_cookie_banners: bool | None = False,
        resize_width: int | None = None,
        resize_height: int | None = None,
        key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FileResponse:
        """Returns the screenshot as a binary image. Supports `` embedding and browser-based access. All POST parameters
        are accepted as query params. Accepts API key via ``Authorization: Bearer``, ``x-api-key`` header, or ``?key=``
        query param.

        Args:
            url: Webpage URL to capture (must be a valid URL)
            format_: Output format
            width: Viewport width in pixels
            height: Viewport height in pixels
            full_page: Capture full scrollable page (capped at 16384px height)
            quality: Image quality (JPEG and WebP only)
            delay: Wait milliseconds after page load before capture
            dark_mode: Emulate dark color scheme (prefers-color-scheme: dark)
            device_scale_factor: Device pixel ratio (2 for Retina, 3 for high-DPI)
            block_ads: Block ads, trackers, and chat widgets
            timeout: Navigation timeout in seconds
            wait_until: Page readiness condition before capture
            wait_for_selector: CSS selector to wait for before capture
            best_attempt: Return partial screenshot on timeout instead of failing
            selector: CSS selector of element to capture instead of full page
            device: Device preset that sets viewport, scale, and user agent in one parameter
            block_cookie_banners: Hide common cookie and consent walls before capture
            resize_width: Downscale the output to this width (image formats only). Aspect ratio preserved when only one
                dimension is set. Never upscales.
            resize_height: Downscale the output to this height (image formats only).
            key: API key (alternative to Authorization header)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Screenshot captured successfully

        Raises:
            ApiError: Invalid request parameters Missing or invalid API key Page navigation timed out Rate limit
                exceeded Screenshot capture failed ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_screenshot(
                url,
                format_=format_,
                width=width,
                height=height,
                full_page=full_page,
                quality=quality,
                delay=delay,
                dark_mode=dark_mode,
                device_scale_factor=device_scale_factor,
                block_ads=block_ads,
                timeout=timeout,
                wait_until=wait_until,
                wait_for_selector=wait_for_selector,
                best_attempt=best_attempt,
                selector=selector,
                device=device,
                block_cookie_banners=block_cookie_banners,
                resize_width=resize_width,
                resize_height=resize_height,
                key=key,
                request_options=request_options,
            ),
        )

    def post_screenshot(
        self, body: ScreenshotRequest | ScreenshotRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Accepts a JSON body with capture parameters. Returns the screenshot as a binary image with metadata in
        response headers (``x-screenshot-*``, ``x-rendex-*``).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Screenshot captured successfully

        Raises:
            ApiError: Invalid request parameters Missing or invalid API key Page navigation timed out Rate limit
                exceeded Screenshot capture failed ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_screenshot(body, request_options=request_options))

    def post_screenshot_json(
        self, body: ScreenshotRequest | ScreenshotRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ScreenshotJsonResponse:
        """Same capture parameters as ``POST /v1/screenshot``, but returns the image as a base64-encoded string inside a
        JSON envelope with full metadata.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Screenshot captured successfully

        Raises:
            ApiError: Invalid request parameters Missing or invalid API key Page navigation timed out Rate limit
                exceeded Screenshot capture failed ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_screenshot_json(body, request_options=request_options))

    def render_artifact(
        self, body: V1ArtifactRequest | V1ArtifactRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1ArtifactResponse:
        """One call that turns Markdown or HTML plus a small branding theme into a branded PDF, a PNG, and a hosted
        share page — built for AI agents and ChatGPT apps that produce a finished document and need a downloadable,
        shareable result. Pass the document body in ``content`` (Markdown by default, or set ``inputFormat: html``), an
        optional ``branding`` theme (logo, accent color, font, header, footer), and an optional ``pageSetup`` (paper
        size, orientation, margins, scale, viewport). Choose the output ``formats`` — ``pdf``, ``png``, or both. Each
        requested format charges 1 credit from the same shared pool as the rendering endpoints, drawn with the same
        ``rdx_`` key; the full charge is refunded on a render failure. The response returns short-lived signed URLs for
        each rendered format plus a ``shareUrl`` to a hosted preview page; all expire after ``expiresIn`` seconds
        (default 24h).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Rendered artifact URLs

        Raises:
            ApiError: Invalid request parameters ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.render_artifact(body, request_options=request_options))

    def serve_render_link(
        self, p: str, uid: str, exp: int, sig: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Public endpoint — the HMAC signature in the URL is the auth boundary (no API key). Renders on the first hit
        and returns the image/PDF bytes; subsequent hits serve the cached copy. Normally you don't call this directly —
        embed the URL returned by ``POST /v1/render/link``. The ``x-rendex-cache`` response header is ``hit`` or
        ``miss``.

        Args:
            p: Signed params token
            uid: Owning account id
            exp: Expiry (unix seconds)
            sig: HMAC signature
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Rendered image or PDF

        Raises:
            ApiError: Expired or invalid signature ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.serve_render_link(p, uid, exp, sig, request_options=request_options))

    @property
    def with_raw_response(self) -> ScreenshotWithRawResponse:
        return self._with_raw_response


class AsyncScreenshot:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncScreenshotWithRawResponse(client, server, auth)

    async def create_render_link(
        self,
        body: V1RenderLinkRequest | V1RenderLinkRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1RenderLinkResponse:
        """Returns a self-contained, signed URL you can paste straight into `` (or an ``). No backend or storage on your
        side: ``GET /v1/render`` renders it on the first request, caches the result in R2 under a deterministic key, and
        serves the cached copy on every repeat — so a widely-shared link costs one render, not one per crawl. The link
        encodes the (signed, tamper-proof) render params, the owning account, and an expiry. Credits are charged to the
        link owner on each cache-miss render only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Signed render link

        Raises:
            ApiError: Invalid parameters (async/webhook/extract/geo are not valid on a render link) Minted render-link
                URL exceeds the size cap (PAYLOAD_TOO_LARGE). ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.create_render_link(body, request_options=request_options))

    async def extract_content(
        self, body: V1ExtractRequest | V1ExtractRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1ExtractResponse:
        """Turns a single URL into clean reader-mode content — Markdown, JSON, or article HTML — pulled from the
        fully-rendered page (so it works on JavaScript-heavy sites). Text only; for image + text in one call use ``POST
        /v1/screenshot/json`` with ``extract: true``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extracted content

        Raises:
            ApiError: Invalid request parameters Extracted content exceeds the size cap No article-like content found to
                extract ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.extract_content(body, request_options=request_options))

    async def get_screenshot(
        self,
        url: str,
        *,
        format_: Format1OrStr | None = Format1.PNG,
        width: int | None = 1280,
        height: int | None = 800,
        full_page: bool | None = False,
        quality: int | None = None,
        delay: int | None = 0,
        dark_mode: bool | None = False,
        device_scale_factor: float | None = 2.0,
        block_ads: bool | None = True,
        timeout: int | None = 30,
        wait_until: WaitUntil1OrStr | None = WaitUntil1.NETWORKIDLE2,
        wait_for_selector: str | None = None,
        best_attempt: bool | None = True,
        selector: str | None = None,
        device: Device1OrStr | None = None,
        block_cookie_banners: bool | None = False,
        resize_width: int | None = None,
        resize_height: int | None = None,
        key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Returns the screenshot as a binary image. Supports `` embedding and browser-based access. All POST parameters
        are accepted as query params. Accepts API key via ``Authorization: Bearer``, ``x-api-key`` header, or ``?key=``
        query param.

        Args:
            url: Webpage URL to capture (must be a valid URL)
            format_: Output format
            width: Viewport width in pixels
            height: Viewport height in pixels
            full_page: Capture full scrollable page (capped at 16384px height)
            quality: Image quality (JPEG and WebP only)
            delay: Wait milliseconds after page load before capture
            dark_mode: Emulate dark color scheme (prefers-color-scheme: dark)
            device_scale_factor: Device pixel ratio (2 for Retina, 3 for high-DPI)
            block_ads: Block ads, trackers, and chat widgets
            timeout: Navigation timeout in seconds
            wait_until: Page readiness condition before capture
            wait_for_selector: CSS selector to wait for before capture
            best_attempt: Return partial screenshot on timeout instead of failing
            selector: CSS selector of element to capture instead of full page
            device: Device preset that sets viewport, scale, and user agent in one parameter
            block_cookie_banners: Hide common cookie and consent walls before capture
            resize_width: Downscale the output to this width (image formats only). Aspect ratio preserved when only one
                dimension is set. Never upscales.
            resize_height: Downscale the output to this height (image formats only).
            key: API key (alternative to Authorization header)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Screenshot captured successfully

        Raises:
            ApiError: Invalid request parameters Missing or invalid API key Page navigation timed out Rate limit
                exceeded Screenshot capture failed ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_screenshot(
                url,
                format_=format_,
                width=width,
                height=height,
                full_page=full_page,
                quality=quality,
                delay=delay,
                dark_mode=dark_mode,
                device_scale_factor=device_scale_factor,
                block_ads=block_ads,
                timeout=timeout,
                wait_until=wait_until,
                wait_for_selector=wait_for_selector,
                best_attempt=best_attempt,
                selector=selector,
                device=device,
                block_cookie_banners=block_cookie_banners,
                resize_width=resize_width,
                resize_height=resize_height,
                key=key,
                request_options=request_options,
            ),
        )

    async def post_screenshot(
        self,
        body: ScreenshotRequest | ScreenshotRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Accepts a JSON body with capture parameters. Returns the screenshot as a binary image with metadata in
        response headers (``x-screenshot-*``, ``x-rendex-*``).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Screenshot captured successfully

        Raises:
            ApiError: Invalid request parameters Missing or invalid API key Page navigation timed out Rate limit
                exceeded Screenshot capture failed ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.post_screenshot(body, request_options=request_options))

    async def post_screenshot_json(
        self,
        body: ScreenshotRequest | ScreenshotRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScreenshotJsonResponse:
        """Same capture parameters as ``POST /v1/screenshot``, but returns the image as a base64-encoded string inside a
        JSON envelope with full metadata.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Screenshot captured successfully

        Raises:
            ApiError: Invalid request parameters Missing or invalid API key Page navigation timed out Rate limit
                exceeded Screenshot capture failed ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.post_screenshot_json(body, request_options=request_options))

    async def render_artifact(
        self,
        body: V1ArtifactRequest | V1ArtifactRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V1ArtifactResponse:
        """One call that turns Markdown or HTML plus a small branding theme into a branded PDF, a PNG, and a hosted
        share page — built for AI agents and ChatGPT apps that produce a finished document and need a downloadable,
        shareable result. Pass the document body in ``content`` (Markdown by default, or set ``inputFormat: html``), an
        optional ``branding`` theme (logo, accent color, font, header, footer), and an optional ``pageSetup`` (paper
        size, orientation, margins, scale, viewport). Choose the output ``formats`` — ``pdf``, ``png``, or both. Each
        requested format charges 1 credit from the same shared pool as the rendering endpoints, drawn with the same
        ``rdx_`` key; the full charge is refunded on a render failure. The response returns short-lived signed URLs for
        each rendered format plus a ``shareUrl`` to a hosted preview page; all expire after ``expiresIn`` seconds
        (default 24h).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Rendered artifact URLs

        Raises:
            ApiError: Invalid request parameters ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.render_artifact(body, request_options=request_options))

    async def serve_render_link(
        self, p: str, uid: str, exp: int, sig: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Public endpoint — the HMAC signature in the URL is the auth boundary (no API key). Renders on the first hit
        and returns the image/PDF bytes; subsequent hits serve the cached copy. Normally you don't call this directly —
        embed the URL returned by ``POST /v1/render/link``. The ``x-rendex-cache`` response header is ``hit`` or
        ``miss``.

        Args:
            p: Signed params token
            uid: Owning account id
            exp: Expiry (unix seconds)
            sig: HMAC signature
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Rendered image or PDF

        Raises:
            ApiError: Expired or invalid signature ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.serve_render_link(p, uid, exp, sig, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncScreenshotWithRawResponse:
        return self._with_raw_response


class ScreenshotWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_render_link(
        self,
        body: V1RenderLinkRequest | V1RenderLinkRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RenderLinkResponse, CreateRenderLinkErrorBody]:
        """Returns a self-contained, signed URL you can paste straight into `` (or an ``). No backend or storage on your
        side: ``GET /v1/render`` renders it on the first request, caches the result in R2 under a deterministic key, and
        serves the cached copy on every repeat — so a widely-shared link costs one render, not one per crawl. The link
        encodes the (signed, tamper-proof) render params, the owning account, and an expiry. Credits are charged to the
        link owner on each cache-miss render only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/render/link"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1RenderLinkRequest | V1RenderLinkRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1RenderLinkResponse],
            error_mapper=create_render_link_error_mapper,
            request_options=request_options,
        )

    def extract_content(
        self, body: V1ExtractRequest | V1ExtractRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ExtractResponse, ExtractContentErrorBody]:
        """Turns a single URL into clean reader-mode content — Markdown, JSON, or article HTML — pulled from the
        fully-rendered page (so it works on JavaScript-heavy sites). Text only; for image + text in one call use ``POST
        /v1/screenshot/json`` with ``extract: true``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/extract"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ExtractRequest | V1ExtractRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1ExtractResponse],
            error_mapper=extract_content_error_mapper,
            request_options=request_options,
        )

    def get_screenshot(
        self,
        url: str,
        *,
        format_: Format1OrStr | None = Format1.PNG,
        width: int | None = 1280,
        height: int | None = 800,
        full_page: bool | None = False,
        quality: int | None = None,
        delay: int | None = 0,
        dark_mode: bool | None = False,
        device_scale_factor: float | None = 2.0,
        block_ads: bool | None = True,
        timeout: int | None = 30,
        wait_until: WaitUntil1OrStr | None = WaitUntil1.NETWORKIDLE2,
        wait_for_selector: str | None = None,
        best_attempt: bool | None = True,
        selector: str | None = None,
        device: Device1OrStr | None = None,
        block_cookie_banners: bool | None = False,
        resize_width: int | None = None,
        resize_height: int | None = None,
        key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FileResponse, GetScreenshotErrorBody]:
        """Returns the screenshot as a binary image. Supports `` embedding and browser-based access. All POST parameters
        are accepted as query params. Accepts API key via ``Authorization: Bearer``, ``x-api-key`` header, or ``?key=``
        query param.

        Args:
            url: Webpage URL to capture (must be a valid URL)
            format_: Output format
            width: Viewport width in pixels
            height: Viewport height in pixels
            full_page: Capture full scrollable page (capped at 16384px height)
            quality: Image quality (JPEG and WebP only)
            delay: Wait milliseconds after page load before capture
            dark_mode: Emulate dark color scheme (prefers-color-scheme: dark)
            device_scale_factor: Device pixel ratio (2 for Retina, 3 for high-DPI)
            block_ads: Block ads, trackers, and chat widgets
            timeout: Navigation timeout in seconds
            wait_until: Page readiness condition before capture
            wait_for_selector: CSS selector to wait for before capture
            best_attempt: Return partial screenshot on timeout instead of failing
            selector: CSS selector of element to capture instead of full page
            device: Device preset that sets viewport, scale, and user agent in one parameter
            block_cookie_banners: Hide common cookie and consent walls before capture
            resize_width: Downscale the output to this width (image formats only). Aspect ratio preserved when only one
                dimension is set. Never upscales.
            resize_height: Downscale the output to this height (image formats only).
            key: API key (alternative to Authorization header)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/screenshot"),
            query_params=[
                param[str]("url", url),
                param[Format1OrStr | None]("format", format_),
                param[int | None]("width", width),
                param[int | None]("height", height),
                param[bool | None]("fullPage", full_page),
                param[int | None]("quality", quality),
                param[int | None]("delay", delay),
                param[bool | None]("darkMode", dark_mode),
                param[float | None]("deviceScaleFactor", device_scale_factor),
                param[bool | None]("blockAds", block_ads),
                param[int | None]("timeout", timeout),
                param[WaitUntil1OrStr | None]("waitUntil", wait_until),
                param[str | None]("waitForSelector", wait_for_selector),
                param[bool | None]("bestAttempt", best_attempt),
                param[str | None]("selector", selector),
                param[Device1OrStr | None]("device", device),
                param[bool | None]("blockCookieBanners", block_cookie_banners),
                param[int | None]("resizeWidth", resize_width),
                param[int | None]("resizeHeight", resize_height),
                param[str | None]("key", key),
            ],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_header, self._auth.api_key_query),
            decoder=file_decoder,
            error_mapper=get_screenshot_error_mapper,
            request_options=request_options,
        )

    def post_screenshot(
        self, body: ScreenshotRequest | ScreenshotRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, PostScreenshotErrorBody]:
        """Accepts a JSON body with capture parameters. Returns the screenshot as a binary image with metadata in
        response headers (``x-screenshot-*``, ``x-rendex-*``).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/screenshot"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScreenshotRequest | ScreenshotRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=file_decoder,
            error_mapper=post_screenshot_error_mapper,
            request_options=request_options,
        )

    def post_screenshot_json(
        self, body: ScreenshotRequest | ScreenshotRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ScreenshotJsonResponse, PostScreenshotJsonErrorBody]:
        """Same capture parameters as ``POST /v1/screenshot``, but returns the image as a base64-encoded string inside a
        JSON envelope with full metadata.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/screenshot/json"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScreenshotRequest | ScreenshotRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ScreenshotJsonResponse],
            error_mapper=post_screenshot_json_error_mapper,
            request_options=request_options,
        )

    def render_artifact(
        self, body: V1ArtifactRequest | V1ArtifactRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1ArtifactResponse, RenderArtifactErrorBody]:
        """One call that turns Markdown or HTML plus a small branding theme into a branded PDF, a PNG, and a hosted
        share page — built for AI agents and ChatGPT apps that produce a finished document and need a downloadable,
        shareable result. Pass the document body in ``content`` (Markdown by default, or set ``inputFormat: html``), an
        optional ``branding`` theme (logo, accent color, font, header, footer), and an optional ``pageSetup`` (paper
        size, orientation, margins, scale, viewport). Choose the output ``formats`` — ``pdf``, ``png``, or both. Each
        requested format charges 1 credit from the same shared pool as the rendering endpoints, drawn with the same
        ``rdx_`` key; the full charge is refunded on a render failure. The response returns short-lived signed URLs for
        each rendered format plus a ``shareUrl`` to a hosted preview page; all expire after ``expiresIn`` seconds
        (default 24h).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/artifact"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ArtifactRequest | V1ArtifactRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1ArtifactResponse],
            error_mapper=render_artifact_error_mapper,
            request_options=request_options,
        )

    def serve_render_link(
        self, p: str, uid: str, exp: int, sig: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, ServeRenderLinkErrorBody]:
        """Public endpoint — the HMAC signature in the URL is the auth boundary (no API key). Renders on the first hit
        and returns the image/PDF bytes; subsequent hits serve the cached copy. Normally you don't call this directly —
        embed the URL returned by ``POST /v1/render/link``. The ``x-rendex-cache`` response header is ``hit`` or
        ``miss``.

        Args:
            p: Signed params token
            uid: Owning account id
            exp: Expiry (unix seconds)
            sig: HMAC signature
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/render"),
            query_params=[param[str]("p", p), param[str]("uid", uid), param[int]("exp", exp), param[str]("sig", sig)],
            decoder=file_decoder,
            error_mapper=serve_render_link_error_mapper,
            request_options=request_options,
        )


class AsyncScreenshotWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_render_link(
        self,
        body: V1RenderLinkRequest | V1RenderLinkRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1RenderLinkResponse, CreateRenderLinkErrorBody]:
        """Returns a self-contained, signed URL you can paste straight into `` (or an ``). No backend or storage on your
        side: ``GET /v1/render`` renders it on the first request, caches the result in R2 under a deterministic key, and
        serves the cached copy on every repeat — so a widely-shared link costs one render, not one per crawl. The link
        encodes the (signed, tamper-proof) render params, the owning account, and an expiry. Credits are charged to the
        link owner on each cache-miss render only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/render/link"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1RenderLinkRequest | V1RenderLinkRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1RenderLinkResponse],
            error_mapper=create_render_link_error_mapper,
            request_options=request_options,
        )

    async def extract_content(
        self, body: V1ExtractRequest | V1ExtractRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1ExtractResponse, ExtractContentErrorBody]:
        """Turns a single URL into clean reader-mode content — Markdown, JSON, or article HTML — pulled from the
        fully-rendered page (so it works on JavaScript-heavy sites). Text only; for image + text in one call use ``POST
        /v1/screenshot/json`` with ``extract: true``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/extract"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ExtractRequest | V1ExtractRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1ExtractResponse],
            error_mapper=extract_content_error_mapper,
            request_options=request_options,
        )

    async def get_screenshot(
        self,
        url: str,
        *,
        format_: Format1OrStr | None = Format1.PNG,
        width: int | None = 1280,
        height: int | None = 800,
        full_page: bool | None = False,
        quality: int | None = None,
        delay: int | None = 0,
        dark_mode: bool | None = False,
        device_scale_factor: float | None = 2.0,
        block_ads: bool | None = True,
        timeout: int | None = 30,
        wait_until: WaitUntil1OrStr | None = WaitUntil1.NETWORKIDLE2,
        wait_for_selector: str | None = None,
        best_attempt: bool | None = True,
        selector: str | None = None,
        device: Device1OrStr | None = None,
        block_cookie_banners: bool | None = False,
        resize_width: int | None = None,
        resize_height: int | None = None,
        key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, GetScreenshotErrorBody]:
        """Returns the screenshot as a binary image. Supports `` embedding and browser-based access. All POST parameters
        are accepted as query params. Accepts API key via ``Authorization: Bearer``, ``x-api-key`` header, or ``?key=``
        query param.

        Args:
            url: Webpage URL to capture (must be a valid URL)
            format_: Output format
            width: Viewport width in pixels
            height: Viewport height in pixels
            full_page: Capture full scrollable page (capped at 16384px height)
            quality: Image quality (JPEG and WebP only)
            delay: Wait milliseconds after page load before capture
            dark_mode: Emulate dark color scheme (prefers-color-scheme: dark)
            device_scale_factor: Device pixel ratio (2 for Retina, 3 for high-DPI)
            block_ads: Block ads, trackers, and chat widgets
            timeout: Navigation timeout in seconds
            wait_until: Page readiness condition before capture
            wait_for_selector: CSS selector to wait for before capture
            best_attempt: Return partial screenshot on timeout instead of failing
            selector: CSS selector of element to capture instead of full page
            device: Device preset that sets viewport, scale, and user agent in one parameter
            block_cookie_banners: Hide common cookie and consent walls before capture
            resize_width: Downscale the output to this width (image formats only). Aspect ratio preserved when only one
                dimension is set. Never upscales.
            resize_height: Downscale the output to this height (image formats only).
            key: API key (alternative to Authorization header)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/screenshot"),
            query_params=[
                param[str]("url", url),
                param[Format1OrStr | None]("format", format_),
                param[int | None]("width", width),
                param[int | None]("height", height),
                param[bool | None]("fullPage", full_page),
                param[int | None]("quality", quality),
                param[int | None]("delay", delay),
                param[bool | None]("darkMode", dark_mode),
                param[float | None]("deviceScaleFactor", device_scale_factor),
                param[bool | None]("blockAds", block_ads),
                param[int | None]("timeout", timeout),
                param[WaitUntil1OrStr | None]("waitUntil", wait_until),
                param[str | None]("waitForSelector", wait_for_selector),
                param[bool | None]("bestAttempt", best_attempt),
                param[str | None]("selector", selector),
                param[Device1OrStr | None]("device", device),
                param[bool | None]("blockCookieBanners", block_cookie_banners),
                param[int | None]("resizeWidth", resize_width),
                param[int | None]("resizeHeight", resize_height),
                param[str | None]("key", key),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_header, self._auth.api_key_query),
            decoder=async_file_decoder,
            error_mapper=get_screenshot_error_mapper,
            request_options=request_options,
        )

    async def post_screenshot(
        self,
        body: ScreenshotRequest | ScreenshotRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, PostScreenshotErrorBody]:
        """Accepts a JSON body with capture parameters. Returns the screenshot as a binary image with metadata in
        response headers (``x-screenshot-*``, ``x-rendex-*``).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/screenshot"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScreenshotRequest | ScreenshotRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_file_decoder,
            error_mapper=post_screenshot_error_mapper,
            request_options=request_options,
        )

    async def post_screenshot_json(
        self,
        body: ScreenshotRequest | ScreenshotRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScreenshotJsonResponse, PostScreenshotJsonErrorBody]:
        """Same capture parameters as ``POST /v1/screenshot``, but returns the image as a base64-encoded string inside a
        JSON envelope with full metadata.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/screenshot/json"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ScreenshotRequest | ScreenshotRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ScreenshotJsonResponse],
            error_mapper=post_screenshot_json_error_mapper,
            request_options=request_options,
        )

    async def render_artifact(
        self,
        body: V1ArtifactRequest | V1ArtifactRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V1ArtifactResponse, RenderArtifactErrorBody]:
        """One call that turns Markdown or HTML plus a small branding theme into a branded PDF, a PNG, and a hosted
        share page — built for AI agents and ChatGPT apps that produce a finished document and need a downloadable,
        shareable result. Pass the document body in ``content`` (Markdown by default, or set ``inputFormat: html``), an
        optional ``branding`` theme (logo, accent color, font, header, footer), and an optional ``pageSetup`` (paper
        size, orientation, margins, scale, viewport). Choose the output ``formats`` — ``pdf``, ``png``, or both. Each
        requested format charges 1 credit from the same shared pool as the rendering endpoints, drawn with the same
        ``rdx_`` key; the full charge is refunded on a render failure. The response returns short-lived signed URLs for
        each rendered format plus a ``shareUrl`` to a hosted preview page; all expire after ``expiresIn`` seconds
        (default 24h).

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/artifact"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ArtifactRequest | V1ArtifactRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1ArtifactResponse],
            error_mapper=render_artifact_error_mapper,
            request_options=request_options,
        )

    async def serve_render_link(
        self, p: str, uid: str, exp: int, sig: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, ServeRenderLinkErrorBody]:
        """Public endpoint — the HMAC signature in the URL is the auth boundary (no API key). Renders on the first hit
        and returns the image/PDF bytes; subsequent hits serve the cached copy. Normally you don't call this directly —
        embed the URL returned by ``POST /v1/render/link``. The ``x-rendex-cache`` response header is ``hit`` or
        ``miss``.

        Args:
            p: Signed params token
            uid: Owning account id
            exp: Expiry (unix seconds)
            sig: HMAC signature
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/render"),
            query_params=[param[str]("p", p), param[str]("uid", uid), param[int]("exp", exp), param[str]("sig", sig)],
            decoder=async_file_decoder,
            error_mapper=serve_render_link_error_mapper,
            request_options=request_options,
        )
