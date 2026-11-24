from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SparkStandaloneAutoscalingConfig2(SdkBaseModel):
    """Optional. Spark Standalone autoscaling configuration"""

    scale_down_min_worker_fraction: Optional[float] = Field(default=UNSET, alias="scaleDownMinWorkerFraction")
    """Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. For example, in
    a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the
    cluster to scale. A threshold of 0 means the autoscaler will scale down on any recommended change.Bounds: 0.0, 1.0.
    Default: 0.0."""

    scale_up_factor: Optional[float] = Field(default=UNSET, alias="scaleUpFactor")
    """Required. Fraction of required workers to add to Spark Standalone clusters. A scale-up factor of 1.0 will result
    in scaling up so that there are no more required workers for the Spark Job (more aggressive scaling). A scale-up
    factor closer to 0 will result in a smaller magnitude of scaling up (less aggressive scaling).Bounds: 0.0, 1.0."""

    graceful_decommission_timeout: Optional[str] = Field(default=UNSET, alias="gracefulDecommissionTimeout")
    """Required. Timeout for Spark graceful decommissioning of spark workers. Specifies the duration to wait for spark
    worker to complete spark decommissioning tasks before forcefully removing workers. Only applicable to downscaling
    operations.Bounds: 0s, 1d."""

    scale_down_factor: Optional[float] = Field(default=UNSET, alias="scaleDownFactor")
    """Required. Fraction of required executors to remove from Spark Serverless clusters. A scale-down factor of 1.0
    will result in scaling down so that there are no more executors for the Spark Job.(more aggressive scaling). A
    scale-down factor closer to 0 will result in a smaller magnitude of scaling donw (less aggressive scaling).Bounds:
    0.0, 1.0."""

    scale_up_min_worker_fraction: Optional[float] = Field(default=UNSET, alias="scaleUpMinWorkerFraction")
    """Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. For example, in a
    20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the
    cluster to scale. A threshold of 0 means the autoscaler will scale up on any recommended change.Bounds: 0.0, 1.0.
    Default: 0.0."""

    remove_only_idle_workers: Optional[bool] = Field(default=UNSET, alias="removeOnlyIdleWorkers")
    """Optional. Remove only idle workers when scaling down cluster"""


class SparkStandaloneAutoscalingConfig2Dict(TypedDict):
    scale_down_min_worker_fraction: NotRequired[float]
    scale_up_factor: NotRequired[float]
    graceful_decommission_timeout: NotRequired[str]
    scale_down_factor: NotRequired[float]
    scale_up_min_worker_fraction: NotRequired[float]
    remove_only_idle_workers: NotRequired[bool]
