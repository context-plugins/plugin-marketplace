from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SparkHistoryServerConfig1(SdkBaseModel):
    """Optional. The Spark History Server configuration for the workload."""

    dataproc_cluster: Optional[str] = Field(default=UNSET, alias="dataprocCluster")
    """Optional. Resource name of an existing Dataproc Cluster to act as a Spark History Server for the
    workload.Example: projects/[project_id]/regions/[region]/clusters/[cluster_name]"""


class SparkHistoryServerConfig1Dict(TypedDict):
    dataproc_cluster: NotRequired[str]
