from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.state15 import State15OrStr
from .migration_summary1 import MigrationSummary1, MigrationSummary1Dict


class BackfillStatus(SdkBaseModel):
    """Backfill status for the migration execution."""

    report_path: Optional[str] = Field(default=UNSET, alias="reportPath")
    """Output only. The Cloud Storage path where the backfill or dry run report is written. Format:
    "gs://path-to-report"."""

    migration_summary: Optional[MigrationSummary1] = Field(default=UNSET, alias="migrationSummary")
    """Output only. Summary of the migration results. This is populated after the backfill or dry run is finished."""

    state: Optional[State15OrStr] = UNSET
    """Output only. The current state of the backfill (or dry run)."""


class BackfillStatusDict(TypedDict):
    report_path: NotRequired[str]
    migration_summary: NotRequired[MigrationSummary1Dict]
    state: NotRequired[State15OrStr]
