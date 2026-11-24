from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TableSummary(SdkBaseModel):
    """Aggregated summary of results for all tables in a database."""

    plan_counts: Optional[dict[str, str]] = Field(default=UNSET, alias="planCounts")
    """Output only. Number of tables with a specific migration plan action. The key is the action name (e.g. CREATE,
    UPDATE, SKIP, etc.)."""

    partition_failed_count: Optional[str] = Field(default=UNSET, alias="partitionFailedCount")
    """Output only. The total number of partitions that failed to migrate at the target."""

    partition_discovered_count: Optional[str] = Field(default=UNSET, alias="partitionDiscoveredCount")
    """Output only. Partition migration summary across all Hive tables in the database.The total number of partitions
    discovered at the source."""

    partition_success_count: Optional[str] = Field(default=UNSET, alias="partitionSuccessCount")
    """Output only. The total number of partitions successfully migrated at the target."""

    result_counts: Optional[dict[str, str]] = Field(default=UNSET, alias="resultCounts")
    """Output only. Number of tables with a specific migration result status. The key is the status name (e.g.
    SUCCEEDED, FAILED, SKIPPED, etc.). This is only set if the migration is not a dry run."""


class TableSummaryDict(TypedDict):
    plan_counts: NotRequired[dict[str, str]]
    partition_failed_count: NotRequired[str]
    partition_discovered_count: NotRequired[str]
    partition_success_count: NotRequired[str]
    result_counts: NotRequired[dict[str, str]]
