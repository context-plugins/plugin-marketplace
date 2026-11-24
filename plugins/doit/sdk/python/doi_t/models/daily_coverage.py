from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .aws_daily_coverage_entry import AwsDailyCoverageEntry, AwsDailyCoverageEntryDict


class DailyCoverage(SdkBaseModel):
    """Trailing 30 days of commitment coverage, grouped by SP type."""

    compute: Optional[list[AwsDailyCoverageEntry]] = UNSET
    database: Optional[list[AwsDailyCoverageEntry]] = UNSET


class DailyCoverageDict(TypedDict):
    compute: NotRequired[list[AwsDailyCoverageEntryDict]]
    database: NotRequired[list[AwsDailyCoverageEntryDict]]
