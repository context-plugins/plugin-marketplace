from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .basic_yarn_autoscaling_config2 import BasicYarnAutoscalingConfig2, BasicYarnAutoscalingConfig2Dict
from .spark_standalone_autoscaling_config2 import (
    SparkStandaloneAutoscalingConfig2,
    SparkStandaloneAutoscalingConfig2Dict,
)


class BasicAutoscalingAlgorithm(SdkBaseModel):
    """Basic algorithm for autoscaling."""

    yarn_config: Optional[BasicYarnAutoscalingConfig2] = Field(default=UNSET, alias="yarnConfig")
    """Optional. YARN autoscaling configuration."""

    cooldown_period: Optional[str] = Field(default=UNSET, alias="cooldownPeriod")
    """Optional. Duration between scaling events. A scaling period starts after the update operation from the previous
    event has completed.Bounds: 2m, 1d. Default: 2m."""

    spark_standalone_config: Optional[SparkStandaloneAutoscalingConfig2] = Field(
        default=UNSET, alias="sparkStandaloneConfig"
    )
    """Optional. Spark Standalone autoscaling configuration"""


class BasicAutoscalingAlgorithmDict(TypedDict):
    yarn_config: NotRequired[BasicYarnAutoscalingConfig2Dict]
    cooldown_period: NotRequired[str]
    spark_standalone_config: NotRequired[SparkStandaloneAutoscalingConfig2Dict]
