from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CustomBitlinkHistory(SdkBaseModel):
    group_guid: Optional[str] = UNSET
    keyword: Optional[str] = UNSET
    bsd: Optional[str] = UNSET
    hash: Optional[str] = UNSET
    login: Optional[str] = UNSET
    long_url: Optional[str] = UNSET
    created: Optional[str] = UNSET
    first_created: Optional[str] = UNSET
    deactivated: Optional[str] = UNSET
    is_active: Optional[bool] = UNSET


class CustomBitlinkHistoryDict(TypedDict):
    group_guid: NotRequired[str]
    keyword: NotRequired[str]
    bsd: NotRequired[str]
    hash: NotRequired[str]
    login: NotRequired[str]
    long_url: NotRequired[str]
    created: NotRequired[str]
    first_created: NotRequired[str]
    deactivated: NotRequired[str]
    is_active: NotRequired[bool]
