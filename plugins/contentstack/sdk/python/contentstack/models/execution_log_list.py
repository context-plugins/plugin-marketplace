from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .execution_log import ExecutionLog, ExecutionLogDict


class ExecutionLogList(SdkBaseModel):
    """A list of automation execution log entries."""

    data: Optional[list[ExecutionLog]] = UNSET
    """Array of execution log objects."""


class ExecutionLogListDict(TypedDict):
    data: NotRequired[list[ExecutionLogDict]]
