from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state import StateOrStr


class GoogleCloudApigeeV1EnvironmentGroup(SdkBaseModel):
    """EnvironmentGroup configuration. An environment group is used to group one or more Apigee environments under a
    single host name."""

    state: Optional[StateOrStr] = UNSET
    """Output only. State of the environment group. Values other than ACTIVE means the resource is not ready to use."""

    hostnames: Optional[list[str]] = UNSET
    """Required. Host names for this environment group."""

    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    """Output only. The time at which the environment group was created as milliseconds since epoch."""

    last_modified_at: Optional[str] = Field(default=UNSET, alias="lastModifiedAt")
    """Output only. The time at which the environment group was last updated as milliseconds since epoch."""

    name: Optional[str] = UNSET
    """ID of the environment group."""


class GoogleCloudApigeeV1EnvironmentGroupDict(TypedDict):
    state: NotRequired[StateOrStr]
    hostnames: NotRequired[list[str]]
    created_at: NotRequired[str]
    last_modified_at: NotRequired[str]
    name: NotRequired[str]
