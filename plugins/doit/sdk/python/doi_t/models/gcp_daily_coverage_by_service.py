from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.service7 import Service7OrStr
from .gcp_daily_coverage_entry import GcpDailyCoverageEntry, GcpDailyCoverageEntryDict


class GcpDailyCoverageByService(SdkBaseModel):
    """Trailing 30 days of CUD coverage for one product line. ``compute`` entries carry every cost property except
    ``cloudSql``; ``cloud_sql`` entries carry only ``cloudSql`` and ``onDemand``, so each coverage sub-type appears
    exactly once across the array."""

    service: Service7OrStr
    """Product line this coverage series belongs to."""

    days: list[GcpDailyCoverageEntry]
    """Daily coverage rows, sorted ascending by ``date``."""


class GcpDailyCoverageByServiceDict(TypedDict):
    service: Service7OrStr
    days: list[GcpDailyCoverageEntryDict]
