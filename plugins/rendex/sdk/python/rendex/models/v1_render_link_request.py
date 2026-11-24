from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cookie import Cookie, CookieDict
from .enums.block_resource_type import BlockResourceTypeOrStr
from .enums.device import DeviceOrStr
from .enums.extract_format import ExtractFormat, ExtractFormatOrStr
from .enums.format import Format, FormatOrStr
from .enums.pdf_format import PdfFormatOrStr
from .enums.wait_until import WaitUntil, WaitUntilOrStr
from .pdf_margin import PdfMargin, PdfMarginDict


class V1RenderLinkRequest(SdkBaseModel):
    url: Optional[str] = UNSET
    """Webpage URL to capture (mutually exclusive with ``html`` and ``markdown``)"""

    html: Optional[str] = UNSET
    """Raw HTML to render (up to 5 MB, mutually exclusive with ``url`` and ``markdown``)"""

    markdown: Optional[str] = UNSET
    """Markdown to render as styled HTML, then capture (up to 5 MB, mutually exclusive with ``url`` and ``html``)"""

    data: Optional[Any] = UNSET
    """Mustache template data object. When present, the ``html`` or ``markdown`` string is treated as a logic-less
    Mustache template and rendered against ``data`` before capture. Valid only with ``html`` or ``markdown`` — returns
    400 if combined with ``url``. Serialized size must not exceed 256 KB. Syntax: ``{{var}}`` (HTML-escaped),
    ``{{{var}}}`` (raw), ``{{#items}}…{{/items}}`` (loop), ``{{^x}}…{{/x}}`` (inverted section), ``{{a.b}}`` (nested
    access)."""

    format: FormatOrStr = Format.PNG
    """Output format"""

    width: int = 1280
    """Viewport width in pixels"""

    height: int = 800
    """Viewport height in pixels"""

    full_page: bool = Field(default=False, alias="fullPage")
    """Capture full scrollable page (capped at 16384px height)"""

    quality: Optional[int] = UNSET
    """Image quality (JPEG and WebP only)"""

    delay: int = 0
    """Wait milliseconds after page load before capture"""

    dark_mode: bool = Field(default=False, alias="darkMode")
    """Emulate dark color scheme"""

    device_scale_factor: float = Field(default=2.0, alias="deviceScaleFactor")
    """Device pixel ratio (2 for Retina)"""

    block_ads: bool = Field(default=True, alias="blockAds")
    """Block ads, trackers, and chat widgets"""

    block_resource_types: Optional[list[BlockResourceTypeOrStr]] = Field(default=UNSET, alias="blockResourceTypes")
    """Resource types to block during page load"""

    css: Optional[str] = UNSET
    """CSS to inject into the page before capture"""

    js: Optional[str] = UNSET
    """JavaScript to execute on the page before capture"""

    cookies: Optional[list[Cookie]] = UNSET
    """Cookies to set before navigating to the page"""

    headers: Optional[dict[str, str]] = UNSET
    """Custom HTTP headers to send with the page request"""

    user_agent: Optional[str] = Field(default=UNSET, alias="userAgent")
    """Custom User-Agent string"""

    timeout: int = 30
    """Navigation timeout in seconds"""

    wait_until: WaitUntilOrStr = Field(default=WaitUntil.NETWORKIDLE2, alias="waitUntil")
    """Page readiness condition before capture"""

    wait_for_selector: Optional[str] = Field(default=UNSET, alias="waitForSelector")
    """CSS selector to wait for before capture"""

    best_attempt: bool = Field(default=True, alias="bestAttempt")
    """Return partial screenshot on timeout instead of failing"""

    selector: Optional[str] = UNSET
    """CSS selector of element to capture instead of full page"""

    pdf_format: Optional[PdfFormatOrStr] = Field(default=UNSET, alias="pdfFormat")
    """Paper size for PDF output (only applies when ``format`` is ``pdf``)"""

    pdf_landscape: Optional[bool] = Field(default=UNSET, alias="pdfLandscape")
    """Use landscape orientation for PDF output"""

    pdf_print_background: Optional[bool] = Field(default=UNSET, alias="pdfPrintBackground")
    """Include background colors and images in PDF output"""

    pdf_scale: Optional[float] = Field(default=UNSET, alias="pdfScale")
    """Scale factor for PDF rendering (0.1 to 2)"""

    pdf_margin: Optional[PdfMargin] = Field(default=UNSET, alias="pdfMargin")
    """Page margins for PDF output (CSS units, e.g. "1cm", "0.5in")"""

    geo: Optional[str] = UNSET
    """ISO 3166-1 alpha-2 country code for geo-targeted rendering (Pro/Enterprise)"""

    geo_city: Optional[str] = Field(default=UNSET, alias="geoCity")
    """City for geo-targeted rendering (Pro/Enterprise)"""

    geo_state: Optional[str] = Field(default=UNSET, alias="geoState")
    """State or region for geo-targeted rendering (Pro/Enterprise)"""

    async_: Optional[bool] = Field(default=UNSET, alias="async")
    """Process the capture asynchronously (returns a ``jobId`` to poll)"""

    webhook_url: Optional[str] = Field(default=UNSET, alias="webhookUrl")
    """URL to receive a webhook notification when the capture completes (Starter+ channel; Free/Basic poll GET
    /v1/jobs/{jobId} instead)."""

    cache_ttl: Optional[int] = Field(default=UNSET, alias="cacheTtl")
    """Cache time-to-live in seconds (1 hour to 30 days)"""

    device: Optional[DeviceOrStr] = UNSET
    """Device preset — sets viewport, device scale, and user agent in one parameter. Explicit width/height/userAgent
    still win."""

    hide_selectors: Optional[list[str]] = Field(default=UNSET, alias="hideSelectors")
    """CSS selectors to hide before capture (popups, sticky nav, chat bubbles). Never errors on a miss."""

    block_cookie_banners: bool = Field(default=False, alias="blockCookieBanners")
    """Hide common cookie/consent walls (OneTrust, Cookiebot, Quantcast, …) via a curated CSS list."""

    hosted: bool = False
    """Store the result in R2 and return ``{url, expiresAt}`` (a signed CDN-backed URL) instead of the image bytes. Drop
    the URL into an ``<img>``/``og:image``."""

    extract: bool = False
    """Also return clean reader-mode content from the same render pass (use on ``/v1/screenshot/json``; the binary
    endpoint rejects it). Shape set by ``extractFormat``."""

    extract_format: ExtractFormatOrStr = Field(default=ExtractFormat.MARKDOWN, alias="extractFormat")
    """Shape of the extracted content when ``extract`` is true."""

    resize_width: Optional[int] = Field(default=UNSET, alias="resizeWidth")
    """Downscale the output to this width (image formats only). Aspect ratio preserved when only one dimension is set.
    Never upscales."""

    resize_height: Optional[int] = Field(default=UNSET, alias="resizeHeight")
    """Downscale the output to this height (image formats only)."""

    expires_in: Optional[int] = Field(default=UNSET, alias="expiresIn")
    """Link validity in seconds (3600–2592000). Defaults to cacheTtl or 30 days."""


class V1RenderLinkRequestDict(TypedDict):
    url: NotRequired[str]
    html: NotRequired[str]
    markdown: NotRequired[str]
    data: NotRequired[Any]
    format: NotRequired[FormatOrStr]
    width: NotRequired[int]
    height: NotRequired[int]
    full_page: NotRequired[bool]
    quality: NotRequired[int]
    delay: NotRequired[int]
    dark_mode: NotRequired[bool]
    device_scale_factor: NotRequired[float]
    block_ads: NotRequired[bool]
    block_resource_types: NotRequired[list[BlockResourceTypeOrStr]]
    css: NotRequired[str]
    js: NotRequired[str]
    cookies: NotRequired[list[CookieDict]]
    headers: NotRequired[dict[str, str]]
    user_agent: NotRequired[str]
    timeout: NotRequired[int]
    wait_until: NotRequired[WaitUntilOrStr]
    wait_for_selector: NotRequired[str]
    best_attempt: NotRequired[bool]
    selector: NotRequired[str]
    pdf_format: NotRequired[PdfFormatOrStr]
    pdf_landscape: NotRequired[bool]
    pdf_print_background: NotRequired[bool]
    pdf_scale: NotRequired[float]
    pdf_margin: NotRequired[PdfMarginDict]
    geo: NotRequired[str]
    geo_city: NotRequired[str]
    geo_state: NotRequired[str]
    async_: NotRequired[bool]
    webhook_url: NotRequired[str]
    cache_ttl: NotRequired[int]
    device: NotRequired[DeviceOrStr]
    hide_selectors: NotRequired[list[str]]
    block_cookie_banners: NotRequired[bool]
    hosted: NotRequired[bool]
    extract: NotRequired[bool]
    extract_format: NotRequired[ExtractFormatOrStr]
    resize_width: NotRequired[int]
    resize_height: NotRequired[int]
    expires_in: NotRequired[int]
