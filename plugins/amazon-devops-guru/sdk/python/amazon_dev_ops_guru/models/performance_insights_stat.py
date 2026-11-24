from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PerformanceInsightsStat(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="Type")
    """The statistic type."""

    value: Optional[float] = Field(default=UNSET, alias="Value")
    """The value of the statistic."""


class PerformanceInsightsStatDict(TypedDict):
    type_: NotRequired[str]
    value: NotRequired[float]
