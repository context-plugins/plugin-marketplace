from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ExecutionTimeFilter(SdkBaseModel):
    oldest_date: RFC3339DateTime = Field(alias="oldestDate")
    """Specifies the oldest start or close date and time to return."""

    latest_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="latestDate")
    """Specifies the latest start or close date and time to return."""


class ExecutionTimeFilterDict(TypedDict):
    oldest_date: RFC3339DateTime
    latest_date: NotRequired[RFC3339DateTime]
