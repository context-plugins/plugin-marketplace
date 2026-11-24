from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .anomaly_item import AnomalyItem, AnomalyItemDict
from .anomaly_summary import AnomalySummary, AnomalySummaryDict


class AnomaliesResponse(SdkBaseModel):
    """List of detected cloud cost anomalies."""

    anomalies: list[AnomalyItem]
    """Anomalies in this page. Always an array; empty (``[]``) when there are no matching anomalies."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Opaque token for the next page. Omitted when there is no next page."""

    row_count: int = Field(alias="rowCount")
    """Number of items in this page (``anomalies.length``). This is not the total count across all pages; the total
    across the full filtered result set is ``totalCount``."""

    truncated: bool
    """``true`` when filtered anomalies remain beyond this page. Derived from the same "rows remain after the last
    returned row" check as ``pageToken``, so the two are never contradictory: ``pageToken`` is present if and only if
    ``truncated`` is ``true``."""

    total_count: int = Field(alias="totalCount")
    """Total number of anomalies matching the filters and time window, across all pages. This is a per-request snapshot:
    under concurrent writes, the value can differ between pages fetched during the same pagination sequence."""

    total_count_exact: bool = Field(alias="totalCountExact")
    """Whether ``totalCount`` is exact. Always ``true`` for this operation, because ``totalCount`` is computed over the
    fully materialised filtered result set."""

    anomaly_summary: AnomalySummary = Field(alias="anomalySummary")
    """Anomaly-specific summary. ``countBySeverity`` and ``totalCostOfAnomaly`` cover the complete filtered result set
    across all pages, not the returned page. Anomalies whose severity cannot be determined (legacy documents) are
    counted in ``totalCount`` and ``totalCostOfAnomaly`` but in none of the three severity buckets in
    ``countBySeverity``, so the three values can sum to less than ``totalCount``. Computed as of this request; under
    concurrent writes, values may differ between pages fetched during the same pagination sequence."""


class AnomaliesResponseDict(TypedDict):
    anomalies: list[AnomalyItemDict]
    page_token: NotRequired[str]
    row_count: int
    truncated: bool
    total_count: int
    total_count_exact: bool
    anomaly_summary: AnomalySummaryDict
