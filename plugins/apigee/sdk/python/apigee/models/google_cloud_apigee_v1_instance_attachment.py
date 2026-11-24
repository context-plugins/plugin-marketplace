from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1InstanceAttachment(SdkBaseModel):
    """InstanceAttachment represents the installation of an environment onto an instance."""

    name: Optional[str] = UNSET
    """Output only. ID of the attachment."""

    created_at: Optional[str] = Field(default=UNSET, alias="createdAt")
    """Output only. Time the attachment was created in milliseconds since epoch."""

    environment: Optional[str] = UNSET
    """ID of the attached environment."""


class GoogleCloudApigeeV1InstanceAttachmentDict(TypedDict):
    name: NotRequired[str]
    created_at: NotRequired[str]
    environment: NotRequired[str]
