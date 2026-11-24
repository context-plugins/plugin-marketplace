from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..task_run_json_output import TaskRunJsonOutput, TaskRunJsonOutputDict
from ..task_run_text_output import TaskRunTextOutput, TaskRunTextOutputDict

ChangedOutput: TypeAlias = Annotated[
    Annotated[TaskRunTextOutput, Tag("text")] | Annotated[TaskRunJsonOutput, Tag("json")], WireDiscriminator("type")
]
"""Partial output containing only the fields that changed since the previous execution, each with its ``basis``
(reasoning and citations)."""

ChangedOutputDict: TypeAlias = TaskRunTextOutputDict | TaskRunJsonOutputDict
