from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .enums.kind4 import Kind4, Kind4OrStr


class FindAllMemoryResult(SdkBaseModel):
    kind: Kind4OrStr = Kind4.FINDALL
    id: str
    """ID of the FindAll run."""

    updated_at: RFC3339DateTime
    """When the FindAll result was last updated, as an RFC 3339 timestamp."""

    input_excerpt: str
    """Preview of the run's objective. May be truncated."""

    matched_count: int
    """Current number of matched entities."""


class FindAllMemoryResultDict(TypedDict):
    kind: NotRequired[Kind4OrStr]
    id: str
    updated_at: RFC3339DateTime
    input_excerpt: str
    matched_count: int
