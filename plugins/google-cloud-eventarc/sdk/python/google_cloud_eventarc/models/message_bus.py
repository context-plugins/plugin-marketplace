from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .logging_config3 import LoggingConfig3, LoggingConfig3Dict


class MessageBus(SdkBaseModel):
    """MessageBus for the messages flowing through the system. The admin has visibility and control over the messages
    being published and consumed and can restrict publishers and subscribers to only a subset of data available in the
    system by defining authorization policies."""

    labels: Optional[dict[str, str]] = UNSET
    """Optional. Resource labels."""

    name: Optional[str] = UNSET
    """Identifier. Resource name of the form projects/{project}/locations/{location}/messageBuses/{message_bus}"""

    etag: Optional[str] = UNSET
    """Output only. This checksum is computed by the server based on the value of other fields, and might be sent only
    on update and delete requests to ensure that the client has an up-to-date value before proceeding."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The last-modified time."""

    crypto_key_name: Optional[str] = Field(default=UNSET, alias="cryptoKeyName")
    """Optional. Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. It
    must match the pattern ``projects/*/locations/*/keyRings/*/cryptoKeys/*``."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Optional. Resource display name."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The creation time."""

    logging_config: Optional[LoggingConfig3] = Field(default=UNSET, alias="loggingConfig")
    """Optional. Config to control Platform logging for the Message Bus. This log configuration is applied to the
    Message Bus itself, and all the Enrollments attached to it."""

    annotations: Optional[dict[str, str]] = UNSET
    """Optional. Resource annotations."""

    uid: Optional[str] = UNSET
    """Output only. Server assigned unique identifier for the channel. The value is a UUID4 string and guaranteed to
    remain unchanged until the resource is deleted."""


class MessageBusDict(TypedDict):
    labels: NotRequired[dict[str, str]]
    name: NotRequired[str]
    etag: NotRequired[str]
    update_time: NotRequired[str]
    crypto_key_name: NotRequired[str]
    display_name: NotRequired[str]
    create_time: NotRequired[str]
    logging_config: NotRequired[LoggingConfig3Dict]
    annotations: NotRequired[dict[str, str]]
    uid: NotRequired[str]
