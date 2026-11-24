from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .deeplink_rule import DeeplinkRule, DeeplinkRuleDict


class ShortenBitlinkBody(SdkBaseModel):
    references: Optional[dict[str, str]] = UNSET
    link: Optional[str] = UNSET
    id: Optional[str] = UNSET
    long_url: Optional[str] = UNSET
    archived: Optional[bool] = UNSET
    created_at: Optional[str] = UNSET
    custom_bitlinks: Optional[list[str]] = UNSET
    """list of previously edited backhalfs for the bitlink - these are in reverse chronological order, with the most
    recently edited backhalf first"""

    tags: Optional[list[str]] = UNSET
    deeplinks: Optional[list[DeeplinkRule]] = UNSET


class ShortenBitlinkBodyDict(TypedDict):
    references: NotRequired[dict[str, str]]
    link: NotRequired[str]
    id: NotRequired[str]
    long_url: NotRequired[str]
    archived: NotRequired[bool]
    created_at: NotRequired[str]
    custom_bitlinks: NotRequired[list[str]]
    tags: NotRequired[list[str]]
    deeplinks: NotRequired[list[DeeplinkRuleDict]]
