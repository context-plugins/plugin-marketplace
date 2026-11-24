from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .channel_namespace import ChannelNamespace, ChannelNamespaceDict


class ListChannelNamespacesResponse(SdkBaseModel):
    channel_namespaces: Optional[list[ChannelNamespace]] = Field(default=UNSET, alias="channelNamespaces")
    """The ChannelNamespace objects."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """An identifier that was returned from the previous call to this operation, which you can use to return the next
    set of items in the list."""


class ListChannelNamespacesResponseDict(TypedDict):
    channel_namespaces: NotRequired[list[ChannelNamespaceDict]]
    next_token: NotRequired[str]
