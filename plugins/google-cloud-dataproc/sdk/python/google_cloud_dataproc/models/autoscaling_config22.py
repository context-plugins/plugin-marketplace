from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .limit_config2 import LimitConfig2, LimitConfig2Dict


class AutoscalingConfig22(SdkBaseModel):
    """Optional. The autoscaling configuration."""

    autoscaling_factor: Optional[float] = Field(default=UNSET, alias="autoscalingFactor")
    """Output only. The scaling factor of a service with autoscaling enabled."""

    autoscaling_enabled: Optional[bool] = Field(default=UNSET, alias="autoscalingEnabled")
    """Optional. Whether or not autoscaling is enabled for this service."""

    limit_config: Optional[LimitConfig2] = Field(default=UNSET, alias="limitConfig")
    """Optional. The LimitConfig of the service."""


class AutoscalingConfig22Dict(TypedDict):
    autoscaling_factor: NotRequired[float]
    autoscaling_enabled: NotRequired[bool]
    limit_config: NotRequired[LimitConfig2Dict]
