from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .rdd_operation_node import RddOperationNode, RddOperationNodeDict


class RddOperationCluster(SdkBaseModel):
    """A grouping of nodes representing higher level constructs (stage, job etc.)."""

    rdd_cluster_id: Optional[str] = Field(default=UNSET, alias="rddClusterId")
    name: Optional[str] = UNSET
    child_clusters: Optional[list[RddOperationCluster]] = Field(default=UNSET, alias="childClusters")
    child_nodes: Optional[list[RddOperationNode]] = Field(default=UNSET, alias="childNodes")


class RddOperationClusterDict(TypedDict):
    rdd_cluster_id: NotRequired[str]
    name: NotRequired[str]
    child_clusters: NotRequired[list[RddOperationClusterDict]]
    child_nodes: NotRequired[list[RddOperationNodeDict]]
