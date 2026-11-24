from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SparkPlanGraphEdge(SdkBaseModel):
    """Represents a directed edge in the spark plan tree from child to parent."""

    to_id: Optional[str] = Field(default=UNSET, alias="toId")
    from_id: Optional[str] = Field(default=UNSET, alias="fromId")


class SparkPlanGraphEdgeDict(TypedDict):
    to_id: NotRequired[str]
    from_id: NotRequired[str]
