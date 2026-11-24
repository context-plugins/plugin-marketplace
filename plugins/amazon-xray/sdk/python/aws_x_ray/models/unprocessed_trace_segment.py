from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UnprocessedTraceSegment(SdkBaseModel):
    id: Optional[str] = Field(default=UNSET, alias="Id")
    """The segment's ID."""

    error_code: Optional[str] = Field(default=UNSET, alias="ErrorCode")
    """The error that caused processing to fail."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """The error message."""


class UnprocessedTraceSegmentDict(TypedDict):
    id: NotRequired[str]
    error_code: NotRequired[str]
    message: NotRequired[str]
