from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sql_plan_metric import SqlPlanMetric, SqlPlanMetricDict


class SparkPlanGraphNode(SdkBaseModel):
    """Represents a node in the spark plan tree."""

    name: Optional[str] = UNSET
    spark_plan_graph_node_id: Optional[str] = Field(default=UNSET, alias="sparkPlanGraphNodeId")
    metadata: Optional[dict[str, str]] = UNSET
    """Optional. Additional metadata for the spark plan graph cluster."""

    desc: Optional[str] = UNSET
    metrics: Optional[list[SqlPlanMetric]] = UNSET


class SparkPlanGraphNodeDict(TypedDict):
    name: NotRequired[str]
    spark_plan_graph_node_id: NotRequired[str]
    metadata: NotRequired[dict[str, str]]
    desc: NotRequired[str]
    metrics: NotRequired[list[SqlPlanMetricDict]]
