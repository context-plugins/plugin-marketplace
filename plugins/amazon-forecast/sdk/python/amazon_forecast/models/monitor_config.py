from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MonitorConfig(SdkBaseModel):
    monitor_name: str = Field(alias="MonitorName")
    """The name of the monitor resource."""


class MonitorConfigDict(TypedDict):
    monitor_name: str
