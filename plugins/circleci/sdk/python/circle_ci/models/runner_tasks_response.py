from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RunnerTasksResponse(SdkBaseModel):
    unclaimed_task_count: Optional[int] = UNSET
    """Number of unclaimed tasks for the resource class"""


class RunnerTasksResponseDict(TypedDict):
    unclaimed_task_count: NotRequired[int]
