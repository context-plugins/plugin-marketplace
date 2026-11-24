from __future__ import annotations

from typing import Annotated, TypeAlias

from pydantic import Tag

from ...core import WireDiscriminator
from ..find_all_memory_result import FindAllMemoryResult, FindAllMemoryResultDict
from ..monitor_memory_result import MonitorMemoryResult, MonitorMemoryResultDict
from ..task_memory_result import TaskMemoryResult, TaskMemoryResultDict

Result: TypeAlias = Annotated[
    (
        Annotated[TaskMemoryResult, Tag("task")]
        | Annotated[MonitorMemoryResult, Tag("monitor")]
        | Annotated[FindAllMemoryResult, Tag("findall")]
    ),
    WireDiscriminator("kind"),
]

ResultDict: TypeAlias = TaskMemoryResultDict | MonitorMemoryResultDict | FindAllMemoryResultDict
