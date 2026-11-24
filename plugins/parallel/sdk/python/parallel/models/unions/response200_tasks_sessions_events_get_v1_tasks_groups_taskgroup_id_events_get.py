from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..error_event import ErrorEvent, ErrorEventDict
from ..task_group_status_event import TaskGroupStatusEvent, TaskGroupStatusEventDict
from ..task_run_event import TaskRunEvent, TaskRunEventDict

Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet: TypeAlias = Annotated[
    (
        Annotated[TaskGroupStatusEvent, Tag("task_group_status")]
        | Annotated[TaskRunEvent, Tag("task_run.state")]
        | Annotated[ErrorEvent, Tag("error")]
    ),
    WireDiscriminator("type"),
]

Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetDict: TypeAlias = (
    TaskGroupStatusEventDict | TaskRunEventDict | ErrorEventDict
)
