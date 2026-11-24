from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict


class CreateMonitorRequest(SdkBaseModel):
    monitor_name: str = Field(alias="MonitorName")
    """The name of the monitor resource."""

    resource_arn: str = Field(alias="ResourceArn")
    """The Amazon Resource Name (ARN) of the predictor to monitor."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A list of tags to apply to the monitor resource."""


class CreateMonitorRequestDict(TypedDict):
    monitor_name: str
    resource_arn: str
    tags: NotRequired[list[TagModelDict]]
