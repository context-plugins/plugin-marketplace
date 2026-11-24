from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .enums.type1_parallel_ai_tasks_api import Type1ParallelAiTasksApi, Type1ParallelAiTasksApiOrStr


class JsonSchemaParallelAiTasksApi(SdkBaseModel):
    """JSON schema for a task input or output."""

    json_schema: Any
    """A JSON Schema object. Only a subset of JSON Schema is supported."""

    type_: Type1ParallelAiTasksApiOrStr = Field(default=Type1ParallelAiTasksApi.JSON, alias="type")
    """The type of schema being defined. Always ``json``."""


class JsonSchemaParallelAiTasksApiDict(TypedDict):
    json_schema: Any
    type_: NotRequired[Type1ParallelAiTasksApiOrStr]
