from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MapRunExecutionCounts(SdkBaseModel):
    pending: int
    """The total number of child workflow executions that were started by a Map Run, but haven't started executing
    yet."""

    running: int
    """The total number of child workflow executions that were started by a Map Run and are currently in-progress."""

    succeeded: int
    """The total number of child workflow executions that were started by a Map Run and have completed successfully."""

    failed: int
    """The total number of child workflow executions that were started by a Map Run, but have failed."""

    timed_out: int = Field(alias="timedOut")
    """The total number of child workflow executions that were started by a Map Run and have timed out."""

    aborted: int
    """The total number of child workflow executions that were started by a Map Run and were running, but were either
    stopped by the user or by Step Functions because the Map Run failed."""

    total: int
    """The total number of child workflow executions that were started by a Map Run."""

    results_written: int = Field(alias="resultsWritten")
    """Returns the count of child workflow executions whose results were written by ResultWriter. For more information,
    see ResultWriter in the Step Functions Developer Guide."""

    failures_not_redrivable: Optional[int] = Field(default=UNSET, alias="failuresNotRedrivable")
    """The number of FAILED, ABORTED, or TIMED_OUT child workflow executions that cannot be redriven because their
    execution status is terminal. For example, child workflows with an execution status of FAILED, ABORTED, or TIMED_OUT
    and a redriveStatus of NOT_REDRIVABLE."""

    pending_redrive: Optional[int] = Field(default=UNSET, alias="pendingRedrive")
    """The number of unsuccessful child workflow executions currently waiting to be redriven. The status of these child
    workflow executions could be FAILED, ABORTED, or TIMED_OUT in the original execution attempt or a previous redrive
    attempt."""


class MapRunExecutionCountsDict(TypedDict):
    pending: int
    running: int
    succeeded: int
    failed: int
    timed_out: int
    aborted: int
    total: int
    results_written: int
    failures_not_redrivable: NotRequired[int]
    pending_redrive: NotRequired[int]
