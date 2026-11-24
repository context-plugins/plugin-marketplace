from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Browser(SdkBaseModel):
    os: Optional[str] = UNSET
    os_version: Optional[str] = UNSET
    browser: Optional[str] = UNSET
    device: OptionalNullable[str] = UNSET
    browser_version: OptionalNullable[str] = UNSET
    real_mobile: Optional[bool] = UNSET


class BrowserDict(TypedDict):
    os: NotRequired[str]
    os_version: NotRequired[str]
    browser: NotRequired[str]
    device: NotRequired[str | None]
    browser_version: NotRequired[str | None]
    real_mobile: NotRequired[bool]
