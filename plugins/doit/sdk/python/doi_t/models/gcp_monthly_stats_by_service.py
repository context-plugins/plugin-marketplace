from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.service4 import Service4OrStr
from .gcp_monthly_stats_entry import GcpMonthlyStatsEntry, GcpMonthlyStatsEntryDict


class GcpMonthlyStatsByService(SdkBaseModel):
    """Trailing 6 calendar months of billing account stats for one product line."""

    service: Service4OrStr
    """Product line these monthly stats belong to."""

    months: list[GcpMonthlyStatsEntry]
    """Monthly aggregates, sorted ascending by ``month``."""


class GcpMonthlyStatsByServiceDict(TypedDict):
    service: Service4OrStr
    months: list[GcpMonthlyStatsEntryDict]
