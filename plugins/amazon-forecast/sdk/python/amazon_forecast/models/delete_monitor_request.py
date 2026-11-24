from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteMonitorRequest(SdkBaseModel):
    monitor_arn: str = Field(alias="MonitorArn")
    """The Amazon Resource Name (ARN) of the monitor resource to delete."""


class DeleteMonitorRequestDict(TypedDict):
    monitor_arn: str
