from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_boomi_platform_rest_execution_api import StatusBoomiPlatformRestExecutionApiOrStr


class ExecutionRecord(SdkBaseModel):
    """A record of an integration process execution (job run)."""

    execution_id: Optional[str] = Field(default=UNSET, alias="executionId")
    """Unique identifier of the execution."""

    process_id: Optional[str] = Field(default=UNSET, alias="processId")
    """ID of the process that was executed."""

    atom_id: Optional[str] = Field(default=UNSET, alias="atomId")
    """ID of the Atom that ran the process."""

    status: Optional[StatusBoomiPlatformRestExecutionApiOrStr] = UNSET
    """Final status of the execution."""

    execution_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="executionTime")
    """Timestamp when the execution started."""

    duration: Optional[int] = UNSET
    """Execution duration in milliseconds."""

    message: Optional[str] = UNSET
    """Status message or error details."""


class ExecutionRecordDict(TypedDict):
    execution_id: NotRequired[str]
    process_id: NotRequired[str]
    atom_id: NotRequired[str]
    status: NotRequired[StatusBoomiPlatformRestExecutionApiOrStr]
    execution_time: NotRequired[RFC3339DateTime]
    duration: NotRequired[int]
    message: NotRequired[str]
