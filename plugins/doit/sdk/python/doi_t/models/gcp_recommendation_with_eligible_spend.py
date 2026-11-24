from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .eligible_spend_data_point import EligibleSpendDataPoint, EligibleSpendDataPointDict
from .gcp_recommendation import GcpRecommendation, GcpRecommendationDict


class GcpRecommendationWithEligibleSpend(SdkBaseModel):
    """A single GCP recommendation paired with its eligible-spend usage series."""

    estimated_equivalent_recommended_commitment: Optional[float] = Field(
        default=UNSET, alias="estimatedEquivalentRecommendedCommitment"
    )
    """Shelf-price hourly equivalent ($/h) of the recommended commitment, derived from the median hourly eligible usage
    over the trailing window multiplied by ``estimatedAverageCoverage``. Use this to compare the recommendation line to
    eligible usage on charts."""

    recommendation: Optional[GcpRecommendation] = UNSET
    """Recommended commitment metrics for the requested (service, region) scope."""

    eligible_usage: Optional[list[EligibleSpendDataPoint]] = Field(default=UNSET, alias="eligibleUsage")
    """Eligible spend over time at the requested ``granularity``. Empty when no eligible usage exists in the trailing
    window."""


class GcpRecommendationWithEligibleSpendDict(TypedDict):
    estimated_equivalent_recommended_commitment: NotRequired[float]
    recommendation: NotRequired[GcpRecommendationDict]
    eligible_usage: NotRequired[list[EligibleSpendDataPointDict]]
