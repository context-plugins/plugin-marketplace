from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .spark_plan_graph_node_wrapper import SparkPlanGraphNodeWrapper, SparkPlanGraphNodeWrapperDict
from .sql_plan_metric import SqlPlanMetric, SqlPlanMetricDict


class SparkPlanGraphCluster(SdkBaseModel):
    """Represents a tree of spark plan."""

    nodes: Optional[list[SparkPlanGraphNodeWrapper]] = UNSET
    name: Optional[str] = UNSET
    spark_plan_graph_cluster_id: Optional[str] = Field(default=UNSET, alias="sparkPlanGraphClusterId")
    desc: Optional[str] = UNSET
    metadata: Optional[dict[str, str]] = UNSET
    """Optional. Additional metadata for the spark plan graph cluster."""

    metrics: Optional[list[SqlPlanMetric]] = UNSET


class SparkPlanGraphClusterDict(TypedDict):
    nodes: NotRequired[list[SparkPlanGraphNodeWrapperDict]]
    name: NotRequired[str]
    spark_plan_graph_cluster_id: NotRequired[str]
    desc: NotRequired[str]
    metadata: NotRequired[dict[str, str]]
    metrics: NotRequired[list[SqlPlanMetricDict]]
