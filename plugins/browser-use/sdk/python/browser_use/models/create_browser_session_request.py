from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_proxy_model import CustomProxyModel, CustomProxyModelDict
from .enums.proxy_country_code import ProxyCountryCodeOrStr


class CreateBrowserSessionRequest(SdkBaseModel):
    """Request model for creating a browser session."""

    profile_id: Optional[UUID] = Field(default=UNSET, alias="profileId")
    """The ID of the profile to use for the session"""

    proxy_country_code: Optional[ProxyCountryCodeOrStr] = Field(default=UNSET, alias="proxyCountryCode")
    """Country code for proxy location. Defaults to US. Set to null to disable proxy."""

    metadata: Optional[dict[str, str]] = UNSET
    """Labels for this browser. Up to 10 key-value pairs. Filterable on the browsers list and in the dashboard
    history."""

    timeout: int = 60
    """The timeout for the session in minutes. All users can use up to 240 minutes (4 hours). Browser sessions are
    charged $0.02/hour."""

    browser_screen_width: Optional[int] = Field(default=UNSET, alias="browserScreenWidth")
    """Custom screen width in pixels for the browser."""

    browser_screen_height: Optional[int] = Field(default=UNSET, alias="browserScreenHeight")
    """Custom screen height in pixels for the browser."""

    allow_resizing: bool = Field(default=False, alias="allowResizing")
    """Whether to allow the browser to be resized during the session (not recommended since it reduces stealthiness)."""

    pdf_renderer_enabled: bool = Field(default=True, alias="pdfRendererEnabled")
    """Whether Chrome renders PDFs in a tab. Set to false to stop the in-tab render; the file is saved to the session's
    download directory either way."""

    solve_captchas: bool = Field(default=True, alias="solveCaptchas")
    """Whether the browser detects and solves CAPTCHAs on its own. Set to false to handle CAPTCHAs yourself. Defaults to
    true."""

    custom_proxy: Optional[CustomProxyModel] = Field(default=UNSET, alias="customProxy")
    """Custom proxy settings to use for the session. If not provided, our proxies will be used."""

    enable_recording: bool = Field(default=False, alias="enableRecording")
    """If True, enables session recording. Defaults to False."""

    extension_ids: Optional[list[UUID]] = Field(default=UNSET, alias="extensionIds")
    """Up to 3 ready extensions from POST /api/v4/extensions to install before the browser starts."""


class CreateBrowserSessionRequestDict(TypedDict):
    profile_id: NotRequired[UUID]
    proxy_country_code: NotRequired[ProxyCountryCodeOrStr]
    metadata: NotRequired[dict[str, str]]
    timeout: NotRequired[int]
    browser_screen_width: NotRequired[int]
    browser_screen_height: NotRequired[int]
    allow_resizing: NotRequired[bool]
    pdf_renderer_enabled: NotRequired[bool]
    solve_captchas: NotRequired[bool]
    custom_proxy: NotRequired[CustomProxyModelDict]
    enable_recording: NotRequired[bool]
    extension_ids: NotRequired[list[UUID]]
