from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class TimestampRange(SdkBaseModel):
    start: Optional[RFC3339DateTime] = Field(default=UNSET, alias="Start")
    """The start of the time range. This value is inclusive."""

    end: Optional[RFC3339DateTime] = Field(default=UNSET, alias="End")
    """The end of the time range. This value is inclusive."""


class TimestampRangeDict(TypedDict):
    start: NotRequired[RFC3339DateTime]
    end: NotRequired[RFC3339DateTime]
