from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..task_run_json_output import TaskRunJsonOutput, TaskRunJsonOutputDict
from ..task_run_text_output import TaskRunTextOutput, TaskRunTextOutputDict

OutputParallelAiTasksApi: TypeAlias = Annotated[
    Annotated[TaskRunTextOutput, Tag("text")] | Annotated[TaskRunJsonOutput, Tag("json")], WireDiscriminator("type")
]
"""Output from the task conforming to the output schema."""

OutputParallelAiTasksApiDict: TypeAlias = TaskRunTextOutputDict | TaskRunJsonOutputDict
