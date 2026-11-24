from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.device_rendex_rendering_watch_api import DeviceRendexRenderingWatchApiOrStr
from .enums.format_rendex_rendering_watch_api import FormatRendexRenderingWatchApi, FormatRendexRenderingWatchApiOrStr
from .enums.ua_mode import UaMode, UaModeOrStr
from .enums.wait_until_rendex_rendering_watch_api import (
    WaitUntilRendexRenderingWatchApi,
    WaitUntilRendexRenderingWatchApiOrStr,
)
from .ignore_region import IgnoreRegion, IgnoreRegionDict


class WatchRenderParams(SdkBaseModel):
    """Render knobs applied on every check — a subset of the screenshot capture params, stored on the watch and fed to
    the renderer each run. Inline source params (``url``/``html``/``markdown``/ ``data``) and credential knobs
    (``cookies``/``headers``/``css``/``js``) are NOT accepted here; the watch's target is the top-level ``url``.
    Validated with a STRICT schema: any capture param outside the list below (e.g. ``quality``, ``css``, ``js``,
    ``resize*``, ``pdf*``, ``userAgent``, ``cookies``, ``headers``) is REJECTED with a 400 VALIDATION_ERROR — extras are
    NOT silently ignored."""

    model_config = ConfigDict(extra="forbid")

    format: FormatRendexRenderingWatchApiOrStr = FormatRendexRenderingWatchApi.PNG
    """A pdf cannot be visually diffed — pair it with diffMode ``text``."""

    width: int = 1280
    height: int = 800
    full_page: bool = Field(default=True, alias="fullPage")
    """Defaults to true for watches (overrides the screenshot default of false) so the whole page is monitored — a
    viewport-only capture would miss changes below the fold. Set false (or use a selector) to scope down on purpose."""

    device: Optional[DeviceRendexRenderingWatchApiOrStr] = UNSET
    device_scale_factor: float = Field(default=2.0, alias="deviceScaleFactor")
    dark_mode: bool = Field(default=False, alias="darkMode")
    block_ads: bool = Field(default=True, alias="blockAds")
    block_cookie_banners: bool = Field(default=False, alias="blockCookieBanners")
    hide_selectors: Optional[list[str]] = Field(default=UNSET, alias="hideSelectors")
    """Remove these elements before capture"""

    wait_until: WaitUntilRendexRenderingWatchApiOrStr = Field(
        default=WaitUntilRendexRenderingWatchApi.NETWORKIDLE2, alias="waitUntil"
    )
    delay: int = 0
    """Extra wait in milliseconds after the page is ready"""

    timeout: int = 30
    """Navigation timeout in seconds"""

    geo: Optional[str] = UNSET
    """Pro+ — 2-letter ISO 3166-1 alpha-2 country code (e.g. ``US``, ``GB``; case-insensitive, upper-cased server-side)
    to render from. Cannot be combined with a text diffMode."""

    geo_city: Optional[str] = Field(default=UNSET, alias="geoCity")
    geo_state: Optional[str] = Field(default=UNSET, alias="geoState")
    selector: Optional[str] = UNSET
    """Capture and diff ONLY this CSS element — watch just one price, banner, or section instead of the whole page.
    Visual-first (in text mode the extracted text is full-page)."""

    ignore_regions: Optional[list[IgnoreRegion]] = Field(default=UNSET, alias="ignoreRegions")
    """Pixel rectangles masked in BOTH captures before the visual diff — silence dynamic zones (an ad slot, a clock) so
    they never trip a change. Visual mode only."""

    ignore_text: Optional[list[str]] = Field(default=UNSET, alias="ignoreText")
    """Substrings or ``/regex/flags`` patterns stripped from BOTH texts before the text diff — silence boilerplate
    (timestamps, view counts, session tokens). Applies to text/both modes."""

    min_text_chars: Optional[int] = Field(default=UNSET, alias="minTextChars")
    """Minimum added + removed characters for a text change to count — ignore tiny edits below the size you care
    about."""

    suppress_while_present: Optional[list[str]] = Field(default=UNSET, alias="suppressWhilePresent")
    """While the page text contains any of these markers (e.g. "Out of stock", "Loading"), the run is treated as
    unchanged — no alert, no baseline drift — until the marker clears."""

    ua_mode: UaModeOrStr = Field(default=UaMode.AUTO, alias="uaMode")
    """How the monitor presents its User-Agent. ``auto`` (default) identifies as RendexWatch and retries once with a
    standard browser identity if the page looks blocked; ``identify`` always identifies as RendexWatch and never falls
    back; ``stealth`` always presents a standard browser identity. See https://rendex.dev/bot."""


class WatchRenderParamsDict(TypedDict):
    format: NotRequired[FormatRendexRenderingWatchApiOrStr]
    width: NotRequired[int]
    height: NotRequired[int]
    full_page: NotRequired[bool]
    device: NotRequired[DeviceRendexRenderingWatchApiOrStr]
    device_scale_factor: NotRequired[float]
    dark_mode: NotRequired[bool]
    block_ads: NotRequired[bool]
    block_cookie_banners: NotRequired[bool]
    hide_selectors: NotRequired[list[str]]
    wait_until: NotRequired[WaitUntilRendexRenderingWatchApiOrStr]
    delay: NotRequired[int]
    timeout: NotRequired[int]
    geo: NotRequired[str]
    geo_city: NotRequired[str]
    geo_state: NotRequired[str]
    selector: NotRequired[str]
    ignore_regions: NotRequired[list[IgnoreRegionDict]]
    ignore_text: NotRequired[list[str]]
    min_text_chars: NotRequired[int]
    suppress_while_present: NotRequired[list[str]]
    ua_mode: NotRequired[UaModeOrStr]
