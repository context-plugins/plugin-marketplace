from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .performance_insights_reference_metric import (
    PerformanceInsightsReferenceMetric,
    PerformanceInsightsReferenceMetricDict,
)
from .performance_insights_reference_scalar import (
    PerformanceInsightsReferenceScalar,
    PerformanceInsightsReferenceScalarDict,
)


class PerformanceInsightsReferenceComparisonValues(SdkBaseModel):
    reference_scalar: Optional[PerformanceInsightsReferenceScalar] = Field(default=UNSET, alias="ReferenceScalar")
    reference_metric: Optional[PerformanceInsightsReferenceMetric] = Field(default=UNSET, alias="ReferenceMetric")


class PerformanceInsightsReferenceComparisonValuesDict(TypedDict):
    reference_scalar: NotRequired[PerformanceInsightsReferenceScalarDict]
    reference_metric: NotRequired[PerformanceInsightsReferenceMetricDict]
