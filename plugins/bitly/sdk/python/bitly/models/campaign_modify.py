from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CampaignModify(SdkBaseModel):
    group_guid: Optional[str] = UNSET
    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    channel_guids: Optional[list[str]] = UNSET


class CampaignModifyDict(TypedDict):
    group_guid: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    channel_guids: NotRequired[list[str]]
