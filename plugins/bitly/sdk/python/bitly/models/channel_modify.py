from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .base_channel_bitlink import BaseChannelBitlink, BaseChannelBitlinkDict


class ChannelModify(SdkBaseModel):
    name: Optional[str] = UNSET
    guid: Optional[str] = UNSET
    created: Optional[str] = UNSET
    """ISO TIMESTAMP"""

    modified: Optional[str] = UNSET
    """ISO_TIMESTAMP"""

    group_guid: Optional[str] = UNSET
    bitlinks: Optional[list[BaseChannelBitlink]] = UNSET


class ChannelModifyDict(TypedDict):
    name: NotRequired[str]
    guid: NotRequired[str]
    created: NotRequired[str]
    modified: NotRequired[str]
    group_guid: NotRequired[str]
    bitlinks: NotRequired[list[BaseChannelBitlinkDict]]
