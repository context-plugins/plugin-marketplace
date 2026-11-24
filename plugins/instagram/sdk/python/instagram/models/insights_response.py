from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .datum_instagram_graph_insights_api import DatumInstagramGraphInsightsApi, DatumInstagramGraphInsightsApiDict


class InsightsResponse(SdkBaseModel):
    data: Optional[list[DatumInstagramGraphInsightsApi]] = UNSET


class InsightsResponseDict(TypedDict):
    data: NotRequired[list[DatumInstagramGraphInsightsApiDict]]
