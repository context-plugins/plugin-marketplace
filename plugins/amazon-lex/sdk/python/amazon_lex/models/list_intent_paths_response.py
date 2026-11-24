from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .analytics_intent_node_summary import AnalyticsIntentNodeSummary, AnalyticsIntentNodeSummaryDict


class ListIntentPathsResponse(SdkBaseModel):
    node_summaries: Optional[list[AnalyticsIntentNodeSummary]] = Field(default=UNSET, alias="nodeSummaries")
    """A list of objects, each of which contains information about a node in the intent path for which you requested
    metrics."""


class ListIntentPathsResponseDict(TypedDict):
    node_summaries: NotRequired[list[AnalyticsIntentNodeSummaryDict]]
