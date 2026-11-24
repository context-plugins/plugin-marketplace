from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EvictFilesFailingUploadOutput(SdkBaseModel):
    notification_id: Optional[str] = Field(default=UNSET, alias="NotificationId")
    """The randomly generated ID of the CloudWatch notification associated with the cache clean operation. This ID is in
    UUID format."""


class EvictFilesFailingUploadOutputDict(TypedDict):
    notification_id: NotRequired[str]
