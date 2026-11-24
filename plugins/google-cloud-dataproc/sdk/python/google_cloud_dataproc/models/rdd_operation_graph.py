from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .rdd_operation_cluster import RddOperationCluster, RddOperationClusterDict
from .rdd_operation_edge import RddOperationEdge, RddOperationEdgeDict


class RddOperationGraph(SdkBaseModel):
    """Graph representing RDD dependencies. Consists of edges and a root cluster."""

    root_cluster: Optional[RddOperationCluster] = Field(default=UNSET, alias="rootCluster")
    """A grouping of nodes representing higher level constructs (stage, job etc.)."""

    edges: Optional[list[RddOperationEdge]] = UNSET
    outgoing_edges: Optional[list[RddOperationEdge]] = Field(default=UNSET, alias="outgoingEdges")
    stage_id: Optional[str] = Field(default=UNSET, alias="stageId")
    incoming_edges: Optional[list[RddOperationEdge]] = Field(default=UNSET, alias="incomingEdges")


class RddOperationGraphDict(TypedDict):
    root_cluster: NotRequired[RddOperationClusterDict]
    edges: NotRequired[list[RddOperationEdgeDict]]
    outgoing_edges: NotRequired[list[RddOperationEdgeDict]]
    stage_id: NotRequired[str]
    incoming_edges: NotRequired[list[RddOperationEdgeDict]]
