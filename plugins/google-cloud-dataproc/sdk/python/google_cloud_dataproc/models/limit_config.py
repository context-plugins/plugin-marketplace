from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LimitConfig(SdkBaseModel):
    """Represents the autoscaling limit configuration of a metastore service."""

    max_scaling_factor: Optional[float] = Field(default=UNSET, alias="maxScalingFactor")
    """Optional. The highest scaling factor that the service should be autoscaled to."""

    min_scaling_factor: Optional[float] = Field(default=UNSET, alias="minScalingFactor")
    """Optional. The lowest scaling factor that the service should be autoscaled to."""


class LimitConfigDict(TypedDict):
    max_scaling_factor: NotRequired[float]
    min_scaling_factor: NotRequired[float]
