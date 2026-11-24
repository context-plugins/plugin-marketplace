from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AwsRecommendation(SdkBaseModel):
    """Recommended commitment levels and savings estimates for one PerfectScale for Commitments commitment type on an
    AWS organization."""

    policy: Optional[str] = UNSET
    """Coverage target policy this recommendation was generated for (built-in or customer-defined)."""

    current_commitment: Optional[float] = Field(default=UNSET, alias="currentCommitment")
    """Active hourly commitment ($/h) currently applied to this AWS organization and commitment type, including
    commitments already purchased."""

    recommended_commitment: Optional[float] = Field(default=UNSET, alias="recommendedCommitment")
    """Recommended total hourly commitment ($/h) based on usage patterns and your commitment policy. Designed to
    increase savings while managing underutilization risk."""

    potential_additional_savings: Optional[float] = Field(default=UNSET, alias="potentialAdditionalSavings")
    """Estimated additional monthly savings ($/month) from applying the recommended commitment relative to
    ``currentCommitment``."""

    estimated_average_coverage: Optional[float] = Field(default=UNSET, alias="estimatedAverageCoverage")
    """Estimated average coverage of eligible spend if the recommended commitment were in place, as a fraction from 0 to
    1 (for example, ``0.5517`` is 55.17%). Same scale as ``esr`` and the inventory utilization and coverage fields."""

    estimated_equivalent_recommended_commitment: Optional[float] = Field(
        default=UNSET, alias="estimatedEquivalentRecommendedCommitment"
    )
    """Shelf-price hourly equivalent ($/h) of the recommended commitment, derived from the median hourly eligible usage
    over the last 60 days multiplied by ``estimatedAverageCoverage``. Use this to compare the recommendation line to
    eligible usage on charts."""


class AwsRecommendationDict(TypedDict):
    policy: NotRequired[str]
    current_commitment: NotRequired[float]
    recommended_commitment: NotRequired[float]
    potential_additional_savings: NotRequired[float]
    estimated_average_coverage: NotRequired[float]
    estimated_equivalent_recommended_commitment: NotRequired[float]
