from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .api_t_pagination_meta import ApiTPaginationMeta, ApiTPaginationMetaDict
from .task_task import TaskTask, TaskTaskDict


class TasksResponse(SdkBaseModel):
    data: Optional[list[TaskTask]] = UNSET
    meta: Optional[ApiTPaginationMeta] = UNSET


class TasksResponseDict(TypedDict):
    data: NotRequired[list[TaskTaskDict]]
    meta: NotRequired[ApiTPaginationMetaDict]
