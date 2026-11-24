from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type2_parallel_ai_tasks_api import Type2ParallelAiTasksApiOrStr


class WarningParallelAiTasksApi(SdkBaseModel):
    """Human-readable message for a task."""

    type_: Type2ParallelAiTasksApiOrStr = Field(alias="type")
    """Type of warning. Note that adding new warning types is considered a backward-compatible change."""

    message: str
    """Human-readable message."""

    detail: Optional[Any] = UNSET
    """Optional detail supporting the warning."""


class WarningParallelAiTasksApiDict(TypedDict):
    type_: Type2ParallelAiTasksApiOrStr
    message: str
    detail: NotRequired[Any]
