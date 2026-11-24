from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1_parallel_ai_monitor_api import Type1ParallelAiMonitorApiOrStr


class WarningParallelAiMonitorApi(SdkBaseModel):
    """Human-readable message for a task."""

    type_: Type1ParallelAiMonitorApiOrStr = Field(alias="type")
    """Type of warning. Note that adding new warning types is considered a backward-compatible change."""

    message: str
    """Human-readable message."""

    detail: Optional[Any] = UNSET
    """Optional detail supporting the warning."""


class WarningParallelAiMonitorApiDict(TypedDict):
    type_: Type1ParallelAiMonitorApiOrStr
    message: str
    detail: NotRequired[Any]
