from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1EnvironmentGroupAttachment(SdkBaseModel):
    """EnvironmentGroupAttachment is a resource which defines an attachment of an environment to an environment
    group."""

    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    """Output only. The time at which the environment group attachment was created as milliseconds since epoch."""

    name: Optional[str] = UNSET
    """ID of the environment group attachment."""

    environment_group_id: Optional[str] = Field(default=UNSET, alias="environmentGroupId")
    """Output only. ID of the environment group."""

    environment: Optional[str] = UNSET
    """Required. ID of the attached environment."""


class GoogleCloudApigeeV1EnvironmentGroupAttachmentDict(TypedDict):
    created_at: NotRequired[str]
    name: NotRequired[str]
    environment_group_id: NotRequired[str]
    environment: NotRequired[str]
