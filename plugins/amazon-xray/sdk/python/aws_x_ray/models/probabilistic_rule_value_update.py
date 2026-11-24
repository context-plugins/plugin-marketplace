from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ProbabilisticRuleValueUpdate(SdkBaseModel):
    desired_sampling_percentage: float = Field(alias="DesiredSamplingPercentage")
    """Configured sampling percentage of traceIds. Note that sampling can be subject to limits to ensure completeness of
    data."""


class ProbabilisticRuleValueUpdateDict(TypedDict):
    desired_sampling_percentage: float
