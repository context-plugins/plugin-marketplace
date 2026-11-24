from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AnalyticsQueryRequest(SdkBaseModel):
    query: str
    """A single ClickHouse SELECT (or WITH ... SELECT) statement against the analytics views. Results are automatically
    scoped to your organization. See GET /schema for the available views and columns."""


class AnalyticsQueryRequestDict(TypedDict):
    query: str
