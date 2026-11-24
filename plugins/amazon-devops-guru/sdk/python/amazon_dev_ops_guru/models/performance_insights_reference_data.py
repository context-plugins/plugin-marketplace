from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .performance_insights_reference_comparison_values import (
    PerformanceInsightsReferenceComparisonValues,
    PerformanceInsightsReferenceComparisonValuesDict,
)


class PerformanceInsightsReferenceData(SdkBaseModel):
    name: Optional[str] = Field(default=UNSET, alias="Name")
    """The name of the reference data."""

    comparison_values: Optional[PerformanceInsightsReferenceComparisonValues] = Field(
        default=UNSET, alias="ComparisonValues"
    )


class PerformanceInsightsReferenceDataDict(TypedDict):
    name: NotRequired[str]
    comparison_values: NotRequired[PerformanceInsightsReferenceComparisonValuesDict]
