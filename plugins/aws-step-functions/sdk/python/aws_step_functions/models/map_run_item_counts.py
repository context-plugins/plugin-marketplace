from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MapRunItemCounts(SdkBaseModel):
    pending: int
    """The total number of items to process in child workflow executions that haven't started running yet."""

    running: int
    """The total number of items being processed in child workflow executions that are currently in-progress."""

    succeeded: int
    """The total number of items processed in child workflow executions that have completed successfully."""

    failed: int
    """The total number of items processed in child workflow executions that have failed."""

    timed_out: int = Field(alias="timedOut")
    """The total number of items processed in child workflow executions that have timed out."""

    aborted: int
    """The total number of items processed in child workflow executions that were either stopped by the user or by Step
    Functions, because the Map Run failed."""

    total: int
    """The total number of items processed in all the child workflow executions started by a Map Run."""

    results_written: int = Field(alias="resultsWritten")
    """Returns the count of items whose results were written by ResultWriter. For more information, see ResultWriter in
    the Step Functions Developer Guide."""

    failures_not_redrivable: Optional[int] = Field(default=UNSET, alias="failuresNotRedrivable")
    """The number of FAILED, ABORTED, or TIMED_OUT items in child workflow executions that cannot be redriven because
    the execution status of those child workflows is terminal. For example, child workflows with an execution status of
    FAILED, ABORTED, or TIMED_OUT and a redriveStatus of NOT_REDRIVABLE."""

    pending_redrive: Optional[int] = Field(default=UNSET, alias="pendingRedrive")
    """The number of unsuccessful items in child workflow executions currently waiting to be redriven."""


class MapRunItemCountsDict(TypedDict):
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
