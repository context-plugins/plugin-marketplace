from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .analytics_schema_view import AnalyticsSchemaView, AnalyticsSchemaViewDict


class AnalyticsSchemaResponse(SdkBaseModel):
    views: list[AnalyticsSchemaView]


class AnalyticsSchemaResponseDict(TypedDict):
    views: list[AnalyticsSchemaViewDict]
