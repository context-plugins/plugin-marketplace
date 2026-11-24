from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ByDay(SdkBaseModel):
    day: str
    views: float
    unique_viewers: float = Field(alias="uniqueViewers")


class ByDayDict(TypedDict):
    day: str
    views: float
    unique_viewers: float
