from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..error_event import ErrorEvent, ErrorEventDict
from ..task_run_event import TaskRunEvent, TaskRunEventDict
from ..task_run_progress_message_event import TaskRunProgressMessageEvent, TaskRunProgressMessageEventDict
from ..task_run_progress_stats_event import TaskRunProgressStatsEvent, TaskRunProgressStatsEventDict

Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet: TypeAlias = Annotated[
    (
        Annotated[TaskRunProgressStatsEvent, Tag("task_run.progress_stats")]
        | Annotated[TaskRunProgressMessageEvent, Tag("task_run.progress_msg.plan")]
        | Annotated[TaskRunProgressMessageEvent, Tag("task_run.progress_msg.search")]
        | Annotated[TaskRunProgressMessageEvent, Tag("task_run.progress_msg.result")]
        | Annotated[TaskRunProgressMessageEvent, Tag("task_run.progress_msg.tool_call")]
        | Annotated[TaskRunProgressMessageEvent, Tag("task_run.progress_msg.exec_status")]
        | Annotated[TaskRunEvent, Tag("task_run.state")]
        | Annotated[ErrorEvent, Tag("error")]
    ),
    WireDiscriminator("type"),
]

Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetDict: TypeAlias = (
    TaskRunProgressStatsEventDict | TaskRunProgressMessageEventDict | TaskRunEventDict | ErrorEventDict
)
