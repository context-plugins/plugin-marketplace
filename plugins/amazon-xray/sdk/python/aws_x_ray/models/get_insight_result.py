from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .insight import Insight, InsightDict


class GetInsightResult(SdkBaseModel):
    insight: Optional[Insight] = Field(default=UNSET, alias="Insight")


class GetInsightResultDict(TypedDict):
    insight: NotRequired[InsightDict]
