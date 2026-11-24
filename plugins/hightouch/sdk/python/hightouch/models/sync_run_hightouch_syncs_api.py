from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.sync_run_status1 import SyncRunStatus1OrStr
from .failed_rows import FailedRows, FailedRowsDict
from .planned_rows import PlannedRows, PlannedRowsDict
from .successful_rows import SuccessfulRows, SuccessfulRowsDict


class SyncRunHightouchSyncsApi(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: float
    """The sync run's id"""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """The timestamp when sync run was created. In most cases this will be equivalent to ``startedAt``, but it may be
    earlier if the sync was triggered while a run was already in progress, and the new run didn't start for a while."""

    started_at: RFC3339DateTime = Field(alias="startedAt")
    """The timestamp when the sync run started"""

    finished_at: RFC3339DateTime = Field(alias="finishedAt")
    """The timestamp when the sync run finished"""

    query_size: float = Field(alias="querySize")
    """The number of rows in the query."""

    status: SyncRunStatus1OrStr
    """The status of sync run"""

    completion_ratio: float = Field(alias="completionRatio")
    """The completion ratio of sync run, showing the progress of a sync run"""

    planned_rows: PlannedRows = Field(alias="plannedRows")
    """The number of planned rows that this sync run was supposed to execute.

    Note that the counts for ``successfulRows`` and ``failedRows`` may not add up to ``plannedRows`` if the sync was
    cancelled."""

    successful_rows: SuccessfulRows = Field(alias="successfulRows")
    """The number of rows that were successfully processed by the destination."""

    failed_rows: FailedRows = Field(alias="failedRows")
    """The number of rows that we attempted to sync, but were rejected by the destination.

    This does not include rows that weren't attempted due to the sync being cancelled."""

    error: Optional[str] = UNSET
    """Error message if the sync run didn't finish successfully"""


class SyncRunHightouchSyncsApiDict(TypedDict):
    id: float
    created_at: RFC3339DateTime
    started_at: RFC3339DateTime
    finished_at: RFC3339DateTime
    query_size: float
    status: SyncRunStatus1OrStr
    completion_ratio: float
    planned_rows: PlannedRowsDict
    successful_rows: SuccessfulRowsDict
    failed_rows: FailedRowsDict
    error: NotRequired[str]
