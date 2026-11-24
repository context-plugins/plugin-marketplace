from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state import StateOrStr


class Channel(SdkBaseModel):
    """Represents a subscriber's intent to receive events from an event provider. Published events are delivered using
    the transport associated with the Channel resource. A channel is associated with exactly one event provider."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The last-modified time."""

    name: Optional[str] = UNSET
    """Required. The resource name of the channel. Must be unique within the location on the project and must be in
    ``projects/{project}/locations/{location}/channels/{channel_id}`` format."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. Resource labels."""

    crypto_key_name: Optional[str] = Field(default=UNSET, alias="cryptoKeyName")
    """Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It
    must match the pattern ``projects/*/locations/*/keyRings/*/cryptoKeys/*``."""

    uid: Optional[str] = UNSET
    """Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and guaranteed to
    remain unchanged until the resource is deleted."""

    pubsub_topic: Optional[str] = Field(default=UNSET, alias="pubsubTopic")
    """Output only. The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event
    delivery. Format: ``projects/{project}/topics/{topic_id}``."""

    satisfies_pzs: Optional[bool] = Field(default=UNSET, alias="satisfiesPzs")
    """Output only. Whether or not this Channel satisfies the requirements of physical zone separation"""

    state: Optional[StateOrStr] = UNSET
    """Output only. The state of a Channel."""

    activation_token: Optional[str] = Field(default=UNSET, alias="activationToken")
    """Output only. The activation token for the channel. The token must be used by the provider to register the channel
    for publishing."""

    provider: Optional[str] = UNSET
    """The name of the event provider (e.g. Eventarc SaaS partner) associated with the channel. This provider will be
    granted permissions to publish events to the channel. Format:
    ``projects/{project}/locations/{location}/providers/{provider_id}``."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The creation time."""


class ChannelDict(TypedDict):
    update_time: NotRequired[str]
    name: NotRequired[str]
    labels: NotRequired[dict[str, str]]
    crypto_key_name: NotRequired[str]
    uid: NotRequired[str]
    pubsub_topic: NotRequired[str]
    satisfies_pzs: NotRequired[bool]
    state: NotRequired[StateOrStr]
    activation_token: NotRequired[str]
    provider: NotRequired[str]
    create_time: NotRequired[str]
