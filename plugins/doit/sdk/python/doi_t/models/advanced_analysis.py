from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AdvancedAnalysis(SdkBaseModel):
    """Advanced analysis options. Each can be set independently."""

    forecast: Optional[bool] = UNSET
    not_trending: Optional[bool] = Field(default=UNSET, alias="notTrending")
    trending_down: Optional[bool] = Field(default=UNSET, alias="trendingDown")
    trending_up: Optional[bool] = Field(default=UNSET, alias="trendingUp")


class AdvancedAnalysisDict(TypedDict):
    forecast: NotRequired[bool]
    not_trending: NotRequired[bool]
    trending_down: NotRequired[bool]
    trending_up: NotRequired[bool]
