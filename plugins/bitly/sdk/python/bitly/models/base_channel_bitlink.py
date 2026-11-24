from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BaseChannelBitlink(SdkBaseModel):
    campaign_guid: Optional[str] = UNSET
    bitlink_id: Optional[str] = UNSET


class BaseChannelBitlinkDict(TypedDict):
    campaign_guid: NotRequired[str]
    bitlink_id: NotRequired[str]
