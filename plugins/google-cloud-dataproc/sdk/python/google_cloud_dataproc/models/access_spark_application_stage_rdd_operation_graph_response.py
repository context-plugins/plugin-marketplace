from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .rdd_operation_graph1 import RddOperationGraph1, RddOperationGraph1Dict


class AccessSparkApplicationStageRddOperationGraphResponse(SdkBaseModel):
    """RDD operation graph for a Spark Application Stage limited to maximum 10000 clusters."""

    rdd_operation_graph: Optional[RddOperationGraph1] = Field(default=UNSET, alias="rddOperationGraph")
    """RDD operation graph for a Spark Application Stage."""


class AccessSparkApplicationStageRddOperationGraphResponseDict(TypedDict):
    rdd_operation_graph: NotRequired[RddOperationGraph1Dict]
