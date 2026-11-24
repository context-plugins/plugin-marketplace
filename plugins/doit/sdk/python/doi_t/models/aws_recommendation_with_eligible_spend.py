from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .aws_recommendation import AwsRecommendation, AwsRecommendationDict
from .eligible_spend_data_point import EligibleSpendDataPoint, EligibleSpendDataPointDict


class AwsRecommendationWithEligibleSpend(SdkBaseModel):
    recommendation: Optional[AwsRecommendation] = UNSET
    """Recommended commitment metrics for the requested commitment type."""

    eligible_usage: Optional[list[EligibleSpendDataPoint]] = Field(default=UNSET, alias="eligibleUsage")
    """Eligible spend over time at the requested ``granularity``. Empty when no eligible usage exists in the trailing
    window."""


class AwsRecommendationWithEligibleSpendDict(TypedDict):
    recommendation: NotRequired[AwsRecommendationDict]
    eligible_usage: NotRequired[list[EligibleSpendDataPointDict]]
