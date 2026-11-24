from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_contentstack_automate_management_execution_logs_api import (
    StatusContentstackAutomateManagementExecutionLogsApiOrStr,
)


class ExecutionLog(SdkBaseModel):
    """A record of a single automation execution run."""

    uid: Optional[str] = UNSET
    """Unique identifier of the execution log entry."""

    automation_uid: Optional[str] = UNSET
    """UID of the automation that was executed."""

    status: Optional[StatusContentstackAutomateManagementExecutionLogsApiOrStr] = UNSET
    """Outcome status of the execution."""

    started_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the execution started."""

    completed_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the execution completed."""

    steps: Optional[list[Any]] = UNSET
    """Step-by-step execution results."""


class ExecutionLogDict(TypedDict):
    uid: NotRequired[str]
    automation_uid: NotRequired[str]
    status: NotRequired[StatusContentstackAutomateManagementExecutionLogsApiOrStr]
    started_at: NotRequired[RFC3339DateTime]
    completed_at: NotRequired[RFC3339DateTime]
    steps: NotRequired[list[Any]]
