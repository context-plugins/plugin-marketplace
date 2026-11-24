from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Webp(SdkBaseModel):
    url: Optional[str] = UNSET
    width: Optional[int] = UNSET


class WebpDict(TypedDict):
    url: NotRequired[str]
    width: NotRequired[int]
