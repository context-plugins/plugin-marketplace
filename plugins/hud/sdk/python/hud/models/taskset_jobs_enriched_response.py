from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enriched_job_thumbnail import EnrichedJobThumbnail, EnrichedJobThumbnailDict
from .taskset_task_ref import TasksetTaskRef, TasksetTaskRefDict


class TasksetJobsEnrichedResponse(SdkBaseModel):
    jobs: list[EnrichedJobThumbnail]
    total_count: int
    taskset_tasks: Optional[list[TasksetTaskRef]] = UNSET


class TasksetJobsEnrichedResponseDict(TypedDict):
    jobs: list[EnrichedJobThumbnailDict]
    total_count: int
    taskset_tasks: NotRequired[list[TasksetTaskRefDict]]
