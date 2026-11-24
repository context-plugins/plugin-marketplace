from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .channel import Channel, ChannelDict


class Channels(SdkBaseModel):
    channels: Optional[list[Channel]] = UNSET


class ChannelsDict(TypedDict):
    channels: NotRequired[list[ChannelDict]]
