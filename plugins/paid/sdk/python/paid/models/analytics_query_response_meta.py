from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AnalyticsQueryResponseMeta(SdkBaseModel):
    row_count: int = Field(alias="rowCount")
    elapsed_ms: float = Field(alias="elapsedMs")
    truncated: bool
    """True when the result hit the row cap and was truncated. Narrow the query (shorter date range, LIMIT, coarser
    grouping) to see the rest."""


class AnalyticsQueryResponseMetaDict(TypedDict):
    row_count: int
    elapsed_ms: float
    truncated: bool
