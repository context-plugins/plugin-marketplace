from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InsightHealth(SdkBaseModel):
    open_proactive_insights: Optional[int] = Field(default=UNSET, alias="OpenProactiveInsights")
    """The number of open proactive insights."""

    open_reactive_insights: Optional[int] = Field(default=UNSET, alias="OpenReactiveInsights")
    """The number of open reactive insights."""

    mean_time_to_recover_in_milliseconds: Optional[int] = Field(default=UNSET, alias="MeanTimeToRecoverInMilliseconds")
    """The Meant Time to Recover (MTTR) for the insight."""


class InsightHealthDict(TypedDict):
    open_proactive_insights: NotRequired[int]
    open_reactive_insights: NotRequired[int]
    mean_time_to_recover_in_milliseconds: NotRequired[int]
