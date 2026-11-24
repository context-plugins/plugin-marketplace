from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Shorten(SdkBaseModel):
    long_url: str
    domain: str = "bit.ly"
    group_guid: Optional[str] = UNSET
    force_new_link: Optional[bool] = UNSET


class ShortenDict(TypedDict):
    long_url: str
    domain: NotRequired[str]
    group_guid: NotRequired[str]
    force_new_link: NotRequired[bool]
