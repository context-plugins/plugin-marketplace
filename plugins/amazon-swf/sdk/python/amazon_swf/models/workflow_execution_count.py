from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WorkflowExecutionCount(SdkBaseModel):
    count: int
    """The number of workflow executions."""

    truncated: Optional[bool] = UNSET
    """If set to true, indicates that the actual count was more than the maximum supported by this API and the count
    returned is the truncated value."""


class WorkflowExecutionCountDict(TypedDict):
    count: int
    truncated: NotRequired[bool]
