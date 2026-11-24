from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_parallel_ai_tasks_api import TypeParallelAiTasksApi, TypeParallelAiTasksApiOrStr


class TextSchema(SdkBaseModel):
    """Text description for a task input or output."""

    description: Optional[str] = UNSET
    """A text description of the desired output from the task."""

    type_: TypeParallelAiTasksApiOrStr = Field(default=TypeParallelAiTasksApi.TEXT, alias="type")
    """The type of schema being defined. Always ``text``."""


class TextSchemaDict(TypedDict):
    description: NotRequired[str]
    type_: NotRequired[TypeParallelAiTasksApiOrStr]
