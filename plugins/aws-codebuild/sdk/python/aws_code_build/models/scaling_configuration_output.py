from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.scaling_type import ScalingTypeOrStr
from .target_tracking_scaling_configuration import (
    TargetTrackingScalingConfiguration,
    TargetTrackingScalingConfigurationDict,
)


class ScalingConfigurationOutput(SdkBaseModel):
    scaling_type: Optional[ScalingTypeOrStr] = Field(default=UNSET, alias="scalingType")
    """The scaling type for a compute fleet."""

    target_tracking_scaling_configs: Optional[list[TargetTrackingScalingConfiguration]] = Field(
        default=UNSET, alias="targetTrackingScalingConfigs"
    )
    """A list of TargetTrackingScalingConfiguration objects."""

    max_capacity: Optional[int] = Field(default=UNSET, alias="maxCapacity")
    """The maximum number of instances in the ﬂeet when auto-scaling."""

    desired_capacity: Optional[int] = Field(default=UNSET, alias="desiredCapacity")
    """The desired number of instances in the ﬂeet when auto-scaling."""


class ScalingConfigurationOutputDict(TypedDict):
    scaling_type: NotRequired[ScalingTypeOrStr]
    target_tracking_scaling_configs: NotRequired[list[TargetTrackingScalingConfigurationDict]]
    max_capacity: NotRequired[int]
    desired_capacity: NotRequired[int]
