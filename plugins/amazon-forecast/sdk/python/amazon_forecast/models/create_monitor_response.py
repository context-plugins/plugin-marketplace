from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateMonitorResponse(SdkBaseModel):
    monitor_arn: Optional[str] = Field(default=UNSET, alias="MonitorArn")
    """The Amazon Resource Name (ARN) of the monitor resource."""


class CreateMonitorResponseDict(TypedDict):
    monitor_arn: NotRequired[str]
