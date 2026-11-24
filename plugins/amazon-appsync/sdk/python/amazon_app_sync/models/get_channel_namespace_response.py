from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .channel_namespace import ChannelNamespace, ChannelNamespaceDict


class GetChannelNamespaceResponse(SdkBaseModel):
    channel_namespace: Optional[ChannelNamespace] = Field(default=UNSET, alias="channelNamespace")


class GetChannelNamespaceResponseDict(TypedDict):
    channel_namespace: NotRequired[ChannelNamespaceDict]
