from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class InsightRequest(SdkBaseModel):
    insight_id: str = Field(alias="InsightId")
    """The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId."""


class InsightRequestDict(TypedDict):
    insight_id: str
