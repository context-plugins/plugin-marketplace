from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .analytics_schema_column import AnalyticsSchemaColumn, AnalyticsSchemaColumnDict


class AnalyticsSchemaView(SdkBaseModel):
    name: str
    comment: str
    columns: list[AnalyticsSchemaColumn]


class AnalyticsSchemaViewDict(TypedDict):
    name: str
    comment: str
    columns: list[AnalyticsSchemaColumnDict]
