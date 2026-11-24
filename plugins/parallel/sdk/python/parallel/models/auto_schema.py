from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .enums.type3_parallel_ai_tasks_api import Type3ParallelAiTasksApi, Type3ParallelAiTasksApiOrStr


class AutoSchema(SdkBaseModel):
    """Auto schema for a task input or output."""

    type_: Type3ParallelAiTasksApiOrStr = Field(default=Type3ParallelAiTasksApi.AUTO, alias="type")
    """The type of schema being defined. Always ``auto``."""


class AutoSchemaDict(TypedDict):
    type_: NotRequired[Type3ParallelAiTasksApiOrStr]
