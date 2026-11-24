from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProbabilisticRuleValue(SdkBaseModel):
    desired_sampling_percentage: float = Field(alias="DesiredSamplingPercentage")
    """Configured sampling percentage of traceIds. Note that sampling can be subject to limits to ensure completeness of
    data."""

    actual_sampling_percentage: Optional[float] = Field(default=UNSET, alias="ActualSamplingPercentage")
    """Applied sampling percentage of traceIds."""


class ProbabilisticRuleValueDict(TypedDict):
    desired_sampling_percentage: float
    actual_sampling_percentage: NotRequired[float]
