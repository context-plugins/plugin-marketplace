from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .channel_namespace import ChannelNamespace, ChannelNamespaceDict


class CreateChannelNamespaceResponse(SdkBaseModel):
    channel_namespace: Optional[ChannelNamespace] = Field(default=UNSET, alias="channelNamespace")


class CreateChannelNamespaceResponseDict(TypedDict):
    channel_namespace: NotRequired[ChannelNamespaceDict]
