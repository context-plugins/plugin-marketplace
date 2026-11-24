from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LimitConfig2(SdkBaseModel):
    """Optional. The LimitConfig of the service."""

    max_scaling_factor: Optional[float] = Field(default=UNSET, alias="maxScalingFactor")
    """Optional. The highest scaling factor that the service should be autoscaled to."""

    min_scaling_factor: Optional[float] = Field(default=UNSET, alias="minScalingFactor")
    """Optional. The lowest scaling factor that the service should be autoscaled to."""


class LimitConfig2Dict(TypedDict):
    max_scaling_factor: NotRequired[float]
    min_scaling_factor: NotRequired[float]
