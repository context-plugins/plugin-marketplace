from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .catalog_summary import CatalogSummary, CatalogSummaryDict


class MigrationSummary(SdkBaseModel):
    """Summary of the migration results."""

    service: Optional[str] = UNSET
    """Output only. The Dataproc Metastore service name (format: projects/*/locations/*/services/*) on which the
    migration was executed."""

    catalog_summaries: Optional[list[CatalogSummary]] = Field(default=UNSET, alias="catalogSummaries")
    """Output only. Summary of results for each catalog involved in the migration."""

    end_time: Optional[str] = Field(default=UNSET, alias="endTime")
    """Output only. The UTC time when the report was written."""

    dry_run: Optional[bool] = Field(default=UNSET, alias="dryRun")
    """Output only. Whether the migration was a dry run."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The UTC time when the source metadata read was initiated."""


class MigrationSummaryDict(TypedDict):
    service: NotRequired[str]
    catalog_summaries: NotRequired[list[CatalogSummaryDict]]
    end_time: NotRequired[str]
    dry_run: NotRequired[bool]
    create_time: NotRequired[str]
