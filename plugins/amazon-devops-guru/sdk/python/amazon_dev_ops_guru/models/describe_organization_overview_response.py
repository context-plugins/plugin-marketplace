from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeOrganizationOverviewResponse(SdkBaseModel):
    reactive_insights: int = Field(alias="ReactiveInsights")
    """An integer that specifies the number of open reactive insights in your Amazon Web Services account."""

    proactive_insights: int = Field(alias="ProactiveInsights")
    """An integer that specifies the number of open proactive insights in your Amazon Web Services account."""


class DescribeOrganizationOverviewResponseDict(TypedDict):
    reactive_insights: int
    proactive_insights: int
