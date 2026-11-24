from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .autoscaling_config22 import AutoscalingConfig22, AutoscalingConfig22Dict
from .enums.instance_size import InstanceSizeOrStr


class ScalingConfig2(SdkBaseModel):
    """Optional. Scaling configuration of the metastore service."""

    instance_size: Optional[InstanceSizeOrStr] = Field(default=UNSET, alias="instanceSize")
    """An enum of readable instance sizes, with each instance size mapping to a float value (e.g.
    InstanceSize.EXTRA_SMALL = scaling_factor(0.1))"""

    autoscaling_config: Optional[AutoscalingConfig22] = Field(default=UNSET, alias="autoscalingConfig")
    """Optional. The autoscaling configuration."""

    scaling_factor: Optional[float] = Field(default=UNSET, alias="scalingFactor")
    """Scaling factor, increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0."""


class ScalingConfig2Dict(TypedDict):
    instance_size: NotRequired[InstanceSizeOrStr]
    autoscaling_config: NotRequired[AutoscalingConfig22Dict]
    scaling_factor: NotRequired[float]
