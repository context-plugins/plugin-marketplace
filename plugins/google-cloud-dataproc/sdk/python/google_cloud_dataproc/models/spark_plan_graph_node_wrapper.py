from __future__ import annotations

from typing import TYPE_CHECKING

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .spark_plan_graph_node import SparkPlanGraphNode, SparkPlanGraphNodeDict

if TYPE_CHECKING:
    from .spark_plan_graph_cluster import SparkPlanGraphCluster, SparkPlanGraphClusterDict


class SparkPlanGraphNodeWrapper(SdkBaseModel):
    """Wrapper user to represent either a node or a cluster."""

    node: Optional[SparkPlanGraphNode] = UNSET
    """Represents a node in the spark plan tree."""

    cluster: Optional[SparkPlanGraphCluster] = UNSET
    """Represents a tree of spark plan."""


class SparkPlanGraphNodeWrapperDict(TypedDict):
    node: NotRequired[SparkPlanGraphNodeDict]
    cluster: NotRequired[SparkPlanGraphClusterDict]
