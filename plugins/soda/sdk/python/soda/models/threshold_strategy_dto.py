from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ThresholdStrategyDto(SdkBaseModel):
    is_lower_bound_enabled: bool = Field(alias="isLowerBoundEnabled")
    is_upper_bound_enabled: bool = Field(alias="isUpperBoundEnabled")


class ThresholdStrategyDtoDict(TypedDict):
    is_lower_bound_enabled: bool
    is_upper_bound_enabled: bool
