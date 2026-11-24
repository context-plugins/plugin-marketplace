from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class MatchBoosterRun(SdkBaseModel):
    """A completed Match Booster enrichment run."""

    model_config = ConfigDict(extra="forbid")

    id: str
    """The id of the enrichment run."""

    status: str
    region: str
    """The Match Booster region the enrichment ran in."""

    error: str | None
    """If available, the error associated with a failed run."""

    enriched_rows: float | None = Field(alias="enrichedRows")
    """The number of rows enriched during the run."""

    is_full_enrichment: bool | None = Field(alias="isFullEnrichment")
    """Whether the run enriched all rows or only new/changed rows."""

    duration_ms: float | None = Field(alias="durationMs")
    """The duration of the enrichment in milliseconds."""

    enriched_at: RFC3339DateTime = Field(alias="enrichedAt")
    """Timestamp of the run's completion."""


class MatchBoosterRunDict(TypedDict):
    id: str
    status: str
    region: str
    error: str | None
    enriched_rows: float | None
    is_full_enrichment: bool | None
    duration_ms: float | None
    enriched_at: RFC3339DateTime
