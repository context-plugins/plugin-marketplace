from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LinkClicks(SdkBaseModel):
    clicks: Optional[int] = UNSET
    date: Optional[str] = UNSET


class LinkClicksDict(TypedDict):
    clicks: NotRequired[int]
    date: NotRequired[str]
