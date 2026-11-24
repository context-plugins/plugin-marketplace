from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DescribeAccountHealthResponse(SdkBaseModel):
    open_reactive_insights: int = Field(alias="OpenReactiveInsights")
    """An integer that specifies the number of open reactive insights in your Amazon Web Services account."""

    open_proactive_insights: int = Field(alias="OpenProactiveInsights")
    """An integer that specifies the number of open proactive insights in your Amazon Web Services account."""

    metrics_analyzed: int = Field(alias="MetricsAnalyzed")
    """An integer that specifies the number of metrics that have been analyzed in your Amazon Web Services account."""

    resource_hours: int = Field(alias="ResourceHours")
    """The number of Amazon DevOps Guru resource analysis hours billed to the current Amazon Web Services account in the
    last hour."""

    analyzed_resource_count: Optional[int] = Field(default=UNSET, alias="AnalyzedResourceCount")
    """Number of resources that DevOps Guru is monitoring in your Amazon Web Services account."""


class DescribeAccountHealthResponseDict(TypedDict):
    open_reactive_insights: int
    open_proactive_insights: int
    metrics_analyzed: int
    resource_hours: int
    analyzed_resource_count: NotRequired[int]
