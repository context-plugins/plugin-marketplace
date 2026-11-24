from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.kind1 import Kind1, Kind1OrStr


class TaskMemoryResult(SdkBaseModel):
    kind: Kind1OrStr = Kind1.TASK
    id: str
    """ID of the task run."""

    updated_at: RFC3339DateTime
    """When the run completed, as an RFC 3339 timestamp."""

    input_excerpt: str
    """Preview of the run's input. May be truncated."""

    output_excerpt: str
    """Preview of the run's output. May be truncated."""


class TaskMemoryResultDict(TypedDict):
    kind: NotRequired[Kind1OrStr]
    id: str
    updated_at: RFC3339DateTime
    input_excerpt: str
    output_excerpt: str
