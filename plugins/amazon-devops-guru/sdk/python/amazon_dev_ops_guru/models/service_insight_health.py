from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ServiceInsightHealth(SdkBaseModel):
    open_proactive_insights: Optional[int] = Field(default=UNSET, alias="OpenProactiveInsights")
    """The number of open proactive insights in the Amazon Web Services service"""

    open_reactive_insights: Optional[int] = Field(default=UNSET, alias="OpenReactiveInsights")
    """The number of open reactive insights in the Amazon Web Services service"""


class ServiceInsightHealthDict(TypedDict):
    open_proactive_insights: NotRequired[int]
    open_reactive_insights: NotRequired[int]
