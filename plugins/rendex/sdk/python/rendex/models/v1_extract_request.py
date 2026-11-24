from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.device1 import Device1OrStr
from .enums.extract_format1 import ExtractFormat1, ExtractFormat1OrStr
from .enums.wait_until1 import WaitUntil1OrStr


class V1ExtractRequest(SdkBaseModel):
    url: str
    extract_format: ExtractFormat1OrStr = Field(default=ExtractFormat1.MARKDOWN, alias="extractFormat")
    wait_until: Optional[WaitUntil1OrStr] = Field(default=UNSET, alias="waitUntil")
    timeout: Optional[int] = UNSET
    device: Optional[Device1OrStr] = UNSET
    block_cookie_banners: Optional[bool] = Field(default=UNSET, alias="blockCookieBanners")
    hide_selectors: Optional[list[str]] = Field(default=UNSET, alias="hideSelectors")


class V1ExtractRequestDict(TypedDict):
    url: str
    extract_format: NotRequired[ExtractFormat1OrStr]
    wait_until: NotRequired[WaitUntil1OrStr]
    timeout: NotRequired[int]
    device: NotRequired[Device1OrStr]
    block_cookie_banners: NotRequired[bool]
    hide_selectors: NotRequired[list[str]]
