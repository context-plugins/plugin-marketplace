from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .spark_plan_graph1 import SparkPlanGraph1, SparkPlanGraph1Dict


class AccessSessionSparkApplicationSqlSparkPlanGraphResponse(SdkBaseModel):
    """SparkPlanGraph for a Spark Application execution limited to maximum 10000 clusters."""

    spark_plan_graph: Optional[SparkPlanGraph1] = Field(default=UNSET, alias="sparkPlanGraph")
    """SparkPlanGraph for a Spark Application execution."""


class AccessSessionSparkApplicationSqlSparkPlanGraphResponseDict(TypedDict):
    spark_plan_graph: NotRequired[SparkPlanGraph1Dict]
