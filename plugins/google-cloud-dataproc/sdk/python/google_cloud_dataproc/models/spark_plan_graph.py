from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .spark_plan_graph_edge import SparkPlanGraphEdge, SparkPlanGraphEdgeDict
from .spark_plan_graph_node_wrapper import SparkPlanGraphNodeWrapper, SparkPlanGraphNodeWrapperDict


class SparkPlanGraph(SdkBaseModel):
    """A graph used for storing information of an executionPlan of DataFrame."""

    edges: Optional[list[SparkPlanGraphEdge]] = UNSET
    execution_id: Optional[str] = Field(default=UNSET, alias="executionId")
    nodes: Optional[list[SparkPlanGraphNodeWrapper]] = UNSET


class SparkPlanGraphDict(TypedDict):
    edges: NotRequired[list[SparkPlanGraphEdgeDict]]
    execution_id: NotRequired[str]
    nodes: NotRequired[list[SparkPlanGraphNodeWrapperDict]]
