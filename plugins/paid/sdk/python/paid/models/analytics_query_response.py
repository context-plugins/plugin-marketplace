from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .analytics_column import AnalyticsColumn, AnalyticsColumnDict
from .analytics_query_response_meta import AnalyticsQueryResponseMeta, AnalyticsQueryResponseMetaDict


class AnalyticsQueryResponse(SdkBaseModel):
    columns: list[AnalyticsColumn]
    rows: list[list[Any]]
    """Result rows; values are ordered to match ``columns``. 64-bit integers (UInt64/Int64 — counts, sums, amounts in
    cents, ids) are returned as JSON strings to preserve precision; parse them client-side as needed."""

    meta: AnalyticsQueryResponseMeta


class AnalyticsQueryResponseDict(TypedDict):
    columns: list[AnalyticsColumnDict]
    rows: list[list[Any]]
    meta: AnalyticsQueryResponseMetaDict
