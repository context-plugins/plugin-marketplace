from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.same_site import SameSiteOrStr


class Cookie(SdkBaseModel):
    name: str
    value: str
    domain: Optional[str] = UNSET
    path: Optional[str] = UNSET
    http_only: Optional[bool] = Field(default=UNSET, alias="httpOnly")
    secure: Optional[bool] = UNSET
    same_site: Optional[SameSiteOrStr] = Field(default=UNSET, alias="sameSite")
    expires: Optional[float] = UNSET
    """Unix timestamp (seconds) for cookie expiration"""


class CookieDict(TypedDict):
    name: str
    value: str
    domain: NotRequired[str]
    path: NotRequired[str]
    http_only: NotRequired[bool]
    secure: NotRequired[bool]
    same_site: NotRequired[SameSiteOrStr]
    expires: NotRequired[float]
