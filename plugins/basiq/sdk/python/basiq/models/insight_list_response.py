from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .insight import Insight, InsightDict
from .links4_insights_api import Links4InsightsApi, Links4InsightsApiDict


class InsightListResponse(SdkBaseModel):
    type_: Literal["list"] = Field(default="list", alias="type")
    """Response type indicator"""

    count: int
    """Total number of insights available"""

    data: list[Insight]
    """Array of insight objects"""

    links: Links4InsightsApi


class InsightListResponseDict(TypedDict):
    type_: Literal["list"]
    count: int
    data: list[InsightDict]
    links: Links4InsightsApiDict
