from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProcessSummary(SdkBaseModel):
    """Process Summary"""

    total_cores: Optional[int] = Field(default=UNSET, alias="totalCores")
    host_port: Optional[str] = Field(default=UNSET, alias="hostPort")
    process_id: Optional[str] = Field(default=UNSET, alias="processId")
    is_active: Optional[bool] = Field(default=UNSET, alias="isActive")
    remove_time: Optional[str] = Field(default=UNSET, alias="removeTime")
    add_time: Optional[str] = Field(default=UNSET, alias="addTime")
    process_logs: Optional[dict[str, str]] = Field(default=UNSET, alias="processLogs")


class ProcessSummaryDict(TypedDict):
    total_cores: NotRequired[int]
    host_port: NotRequired[str]
    process_id: NotRequired[str]
    is_active: NotRequired[bool]
    remove_time: NotRequired[str]
    add_time: NotRequired[str]
    process_logs: NotRequired[dict[str, str]]
