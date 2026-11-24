from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .count_by_severity import CountBySeverity, CountBySeverityDict


class AnomalySummary(SdkBaseModel):
    """Anomaly-specific summary. ``countBySeverity`` and ``totalCostOfAnomaly`` cover the complete filtered result set
    across all pages, not the returned page. Anomalies whose severity cannot be determined (legacy documents) are
    counted in ``totalCount`` and ``totalCostOfAnomaly`` but in none of the three severity buckets in
    ``countBySeverity``, so the three values can sum to less than ``totalCount``. Computed as of this request; under
    concurrent writes, values may differ between pages fetched during the same pagination sequence."""

    count_by_severity: CountBySeverity = Field(alias="countBySeverity")
    """Count of matching anomalies per severity level. All three keys are always present, with zero counts included."""

    total_cost_of_anomaly: float = Field(alias="totalCostOfAnomaly")
    """Sum of ``costOfAnomaly`` across all matching anomalies, in USD, rounded to cents. Every matching anomaly
    contributes, linked ones included, so a single cost spike described at more than one level of detail contributes
    once per anomaly describing it."""


class AnomalySummaryDict(TypedDict):
    count_by_severity: CountBySeverityDict
    total_cost_of_anomaly: float
