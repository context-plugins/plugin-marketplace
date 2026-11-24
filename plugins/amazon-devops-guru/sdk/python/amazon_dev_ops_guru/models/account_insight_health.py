from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AccountInsightHealth(SdkBaseModel):
    open_proactive_insights: Optional[int] = Field(default=UNSET, alias="OpenProactiveInsights")
    """An integer that specifies the number of open proactive insights in your Amazon Web Services account."""

    open_reactive_insights: Optional[int] = Field(default=UNSET, alias="OpenReactiveInsights")
    """An integer that specifies the number of open reactive insights in your Amazon Web Services account."""


class AccountInsightHealthDict(TypedDict):
    open_proactive_insights: NotRequired[int]
    open_reactive_insights: NotRequired[int]
