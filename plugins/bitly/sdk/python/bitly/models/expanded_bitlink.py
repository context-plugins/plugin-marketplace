from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ExpandedBitlink(SdkBaseModel):
    link: Optional[str] = UNSET
    id: Optional[str] = UNSET
    long_url: Optional[str] = UNSET
    long_urls: Optional[list[str]] = UNSET
    """The list of destination URLs for this bitlink, including the default long URL and any dynamically routed
    destination URLs."""

    created_at: Optional[str] = UNSET


class ExpandedBitlinkDict(TypedDict):
    link: NotRequired[str]
    id: NotRequired[str]
    long_url: NotRequired[str]
    long_urls: NotRequired[list[str]]
    created_at: NotRequired[str]
