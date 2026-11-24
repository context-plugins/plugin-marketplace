from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class NotificationOptions(SdkBaseModel):
    webhook_url: Optional[str] = Field(default=UNSET, alias="webhookUrl")


class NotificationOptionsDict(TypedDict):
    webhook_url: NotRequired[str]
