from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .proactive_insight import ProactiveInsight, ProactiveInsightDict
from .reactive_insight import ReactiveInsight, ReactiveInsightDict


class DescribeInsightResponse(SdkBaseModel):
    proactive_insight: Optional[ProactiveInsight] = Field(default=UNSET, alias="ProactiveInsight")
    reactive_insight: Optional[ReactiveInsight] = Field(default=UNSET, alias="ReactiveInsight")


class DescribeInsightResponseDict(TypedDict):
    proactive_insight: NotRequired[ProactiveInsightDict]
    reactive_insight: NotRequired[ReactiveInsightDict]
