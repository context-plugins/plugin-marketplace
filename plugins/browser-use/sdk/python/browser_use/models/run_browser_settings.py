from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_proxy_model import CustomProxyModel, CustomProxyModelDict
from .enums.proxy_country_code import ProxyCountryCodeOrStr


class RunBrowserSettings(SdkBaseModel):
    """Browser config, owned by the browser row (never the run). Follow-ups: omitted fields inherit the session's prior
    browser; explicit values apply only to newly provisioned browsers (a live browser is reused as-is). Profile is the
    exception: a different profile → 400; an explicit value mismatching the live browser's profile (incl. null vs a
    profiled browser) declines reuse and provisions fresh. A live browser already matching the requested profile is
    reused. Extensions are session-wide: follow-ups inherit them, and a different set → 400 (see extensionIds)."""

    profile_id: Optional[UUID] = Field(default=UNSET, alias="profileId")
    """ID of a browser profile to load into the session. Profiles persist cookies, local storage, and other browser
    state across sessions."""

    proxy_country_code: Optional[ProxyCountryCodeOrStr] = Field(default=UNSET, alias="proxyCountryCode")
    """ISO country code to proxy the browser through. Defaults to US. Pass null to run without a proxy."""

    custom_proxy: Optional[CustomProxyModel] = Field(default=UNSET, alias="customProxy")
    """Custom proxy for the browser. Overrides proxyCountryCode. Never stored or inherited by follow-up runs; pass it on
    each run that should use it."""

    screen_width: Optional[int] = Field(default=UNSET, alias="screenWidth")
    """Custom screen width in pixels for the browser."""

    screen_height: Optional[int] = Field(default=UNSET, alias="screenHeight")
    """Custom screen height in pixels for the browser."""

    allow_resizing: Optional[bool] = Field(default=UNSET, alias="allowResizing")
    """Let you or the agent resize the browser window over CDP. Resizing makes the browser easier to detect. API runs
    default to off. Follow-up runs inherit the value of the previous browser. The value applies only when the run starts
    a new browser."""

    record: Optional[bool] = UNSET
    """Record the browser session to an mp4, retrievable via GET /browsers/{id} once the browser stops. API runs default
    to off; pass true to enable. Like other browser settings, this only applies when a new browser is provisioned: a
    follow-up that reuses the session's live browser keeps that browser's recording state. Ignored (always off) for Zero
    Data Retention projects."""

    extension_ids: Optional[list[UUID]] = Field(default=UNSET, alias="extensionIds")
    """Up to 3 ready extensions from POST /api/v4/extensions to install in every browser of the session. Follow-up runs
    inherit the session's extensions; passing a different set returns 400. After you delete an extension, omit
    extensionIds or pass the reduced set; later browsers skip deleted extensions. The agent is not told about installed
    extensions, so name any extension pages in the task."""


class RunBrowserSettingsDict(TypedDict):
    profile_id: NotRequired[UUID]
    proxy_country_code: NotRequired[ProxyCountryCodeOrStr]
    custom_proxy: NotRequired[CustomProxyModelDict]
    screen_width: NotRequired[int]
    screen_height: NotRequired[int]
    allow_resizing: NotRequired[bool]
    record: NotRequired[bool]
    extension_ids: NotRequired[list[UUID]]
