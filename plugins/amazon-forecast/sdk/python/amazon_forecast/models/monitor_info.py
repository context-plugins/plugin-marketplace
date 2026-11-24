from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MonitorInfo(SdkBaseModel):
    monitor_arn: Optional[str] = Field(default=UNSET, alias="MonitorArn")
    """The Amazon Resource Name (ARN) of the monitor resource."""

    status: Optional[str] = Field(default=UNSET, alias="Status")
    """The status of the monitor. States include: ACTIVE ACTIVE_STOPPING, ACTIVE_STOPPED UPDATE_IN_PROGRESS
    CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED"""


class MonitorInfoDict(TypedDict):
    monitor_arn: NotRequired[str]
    status: NotRequired[str]
