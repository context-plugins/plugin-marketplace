from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ChannelConnection(SdkBaseModel):
    """A representation of the ChannelConnection resource. A ChannelConnection is a resource which event providers
    create during the activation process to establish a connection between the provider and the subscriber channel."""

    uid: Optional[str] = UNSET
    """Output only. Server assigned ID of the resource. The server guarantees uniqueness and immutability until
    deleted."""

    channel: Optional[str] = UNSET
    """Required. The name of the connected subscriber Channel. This is a weak reference to avoid cross project and cross
    accounts references. This must be in ``projects/{project}/location/{location}/channels/{channel_id}`` format."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The creation time."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The last-modified time."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. Resource labels."""

    activation_token: Optional[str] = Field(default=UNSET, alias="activationToken")
    """Input only. Activation token for the channel. The token will be used during the creation of ChannelConnection to
    bind the channel with the provider project. This field will not be stored in the provider resource."""

    name: Optional[str] = UNSET
    """Required. The name of the connection."""


class ChannelConnectionDict(TypedDict):
    uid: NotRequired[str]
    channel: NotRequired[str]
    create_time: NotRequired[str]
    update_time: NotRequired[str]
    labels: NotRequired[dict[str, str]]
    activation_token: NotRequired[str]
    name: NotRequired[str]
