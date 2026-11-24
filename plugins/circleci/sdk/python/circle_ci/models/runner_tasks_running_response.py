from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RunnerTasksRunningResponse(SdkBaseModel):
    running_runner_tasks: Optional[int] = UNSET
    """Number of running tasks for the resource class"""


class RunnerTasksRunningResponseDict(TypedDict):
    running_runner_tasks: NotRequired[int]
