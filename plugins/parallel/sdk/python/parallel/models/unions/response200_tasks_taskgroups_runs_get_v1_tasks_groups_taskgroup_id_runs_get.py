from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..error_event import ErrorEvent, ErrorEventDict
from ..task_run_event import TaskRunEvent, TaskRunEventDict

Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet: TypeAlias = Annotated[
    Annotated[TaskRunEvent, Tag("task_run.state")] | Annotated[ErrorEvent, Tag("error")], WireDiscriminator("type")
]

Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetDict: TypeAlias = TaskRunEventDict | ErrorEventDict
