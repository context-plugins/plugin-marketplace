from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RefreshCacheOutput(SdkBaseModel):
    file_share_arn: Optional[str] = Field(default=UNSET, alias="FileShareARN")
    notification_id: Optional[str] = Field(default=UNSET, alias="NotificationId")


class RefreshCacheOutputDict(TypedDict):
    file_share_arn: NotRequired[str]
    notification_id: NotRequired[str]
